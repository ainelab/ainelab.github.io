import * as THREE from 'three';
import { NODES } from '../data/atlas.js';

// Build a circular sprite for round node points.
function discTexture() {
  const s = 64;
  const c = document.createElement('canvas');
  c.width = c.height = s;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.35, 'rgba(180,230,255,0.95)');
  grd.addColorStop(1, 'rgba(180,230,255,0)');
  g.fillStyle = grd;
  g.beginPath();
  g.arc(s / 2, s / 2, s / 2, 0, Math.PI * 2);
  g.fill();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function initConnectome(canvas) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05070d, 0.0016);

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 2000);
  camera.position.set(0, 6, 230);

  const group = new THREE.Group();
  scene.add(group);

  // --- Positions from MNI coords (centre + scale) ---
  const pts = NODES.map(([, x, y, z]) => new THREE.Vector3(x, y + 18, z));
  // recentre
  const centre = pts.reduce((a, p) => a.add(p), new THREE.Vector3()).multiplyScalar(1 / pts.length);
  pts.forEach((p) => p.sub(centre).multiplyScalar(1.35));

  // --- Nodes ---
  const nodeGeo = new THREE.BufferGeometry();
  const nodePos = new Float32Array(pts.length * 3);
  const nodeCol = new Float32Array(pts.length * 3);
  const nodeSize = new Float32Array(pts.length);
  const cBrand = new THREE.Color(0x38bdf8);
  const cTeal = new THREE.Color(0x2dd4bf);
  pts.forEach((p, i) => {
    nodePos.set([p.x, p.y, p.z], i * 3);
    const c = i % 2 === 0 ? cBrand : cTeal;
    nodeCol.set([c.r, c.g, c.b], i * 3);
    nodeSize[i] = 6 + Math.random() * 4;
  });
  nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePos, 3));
  nodeGeo.setAttribute('color', new THREE.BufferAttribute(nodeCol, 3));
  const nodeMat = new THREE.PointsMaterial({
    size: 12, map: discTexture(), vertexColors: true,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true,
  });
  const nodePoints = new THREE.Points(nodeGeo, nodeMat);
  group.add(nodePoints);

  // --- Edges: k-nearest neighbours + homotopic links ---
  const K = 3;
  const edgeSet = new Set();
  const edges = [];
  const addEdge = (a, b) => {
    const key = a < b ? `${a}-${b}` : `${b}-${a}`;
    if (edgeSet.has(key)) return;
    edgeSet.add(key);
    edges.push([a, b]);
  };
  for (let i = 0; i < pts.length; i++) {
    const d = [];
    for (let j = 0; j < pts.length; j++) if (i !== j) d.push([j, pts[i].distanceToSquared(pts[j])]);
    d.sort((a, b) => a[1] - b[1]);
    for (let n = 0; n < K; n++) addEdge(i, d[n][0]);
    // homotopic partner (same region name, opposite hemisphere) sits adjacent in NODES
    const partner = i % 2 === 0 ? i + 1 : i - 1;
    if (partner >= 0 && partner < pts.length) addEdge(i, partner);
  }

  const linePos = new Float32Array(edges.length * 6);
  edges.forEach(([a, b], i) => {
    linePos.set([pts[a].x, pts[a].y, pts[a].z, pts[b].x, pts[b].y, pts[b].z], i * 6);
  });
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
  const lineMat = new THREE.LineBasicMaterial({ color: 0x58a6e6, transparent: true, opacity: 0.42 });
  const lines = new THREE.LineSegments(lineGeo, lineMat);
  group.add(lines);

  // --- Travelling signals along a subset of edges ---
  const N_SIG = Math.min(48, edges.length);
  const sigEdges = [];
  const used = new Set();
  while (sigEdges.length < N_SIG) {
    const e = (Math.random() * edges.length) | 0;
    if (used.has(e)) continue;
    used.add(e);
    sigEdges.push({ a: edges[e][0], b: edges[e][1], t: Math.random(), speed: 0.15 + Math.random() * 0.4 });
  }
  const sigGeo = new THREE.BufferGeometry();
  const sigPos = new Float32Array(N_SIG * 3);
  sigGeo.setAttribute('position', new THREE.BufferAttribute(sigPos, 3));
  const sigMat = new THREE.PointsMaterial({
    size: 7, map: discTexture(), color: 0xbdf0ff,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true,
  });
  const signals = new THREE.Points(sigGeo, sigMat);
  group.add(signals);

  // pointer parallax
  let px = 0, py = 0, tx = 0, ty = 0;
  const onPointer = (e) => {
    const nx = (e.clientX / window.innerWidth) * 2 - 1;
    const ny = (e.clientY / window.innerHeight) * 2 - 1;
    tx = ny * 0.18; ty = nx * 0.35;
  };
  window.addEventListener('pointermove', onPointer, { passive: true });

  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // pull back on narrow screens so the graph fits; on wide screens push the
    // graph right so it sits beside the headline rather than behind it
    camera.position.z = w < 640 ? 300 : 240;
    group.position.x = w < 900 ? 0 : 62;
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  const clock = new THREE.Clock();
  let running = true;
  document.addEventListener('visibilitychange', () => { running = !document.hidden; });

  function frame() {
    if (!running) { requestAnimationFrame(frame); return; }
    const t = clock.getElapsedTime();

    if (!reduced) {
      group.rotation.y = t * 0.08;
      px += (tx - px) * 0.05; py += (ty - py) * 0.05;
      group.rotation.x = -0.05 + px;
      group.rotation.y += py * 0.0; // yaw handled by auto-rotate

      // pulse node sizes subtly
      nodeMat.size = 12 + Math.sin(t * 1.5) * 1.1;

      // move signals
      for (let i = 0; i < N_SIG; i++) {
        const s = sigEdges[i];
        s.t += s.speed * 0.01;
        if (s.t > 1) { s.t = 0; }
        const a = pts[s.a], b = pts[s.b];
        sigPos[i * 3] = a.x + (b.x - a.x) * s.t;
        sigPos[i * 3 + 1] = a.y + (b.y - a.y) * s.t;
        sigPos[i * 3 + 2] = a.z + (b.z - a.z) * s.t;
      }
      sigGeo.attributes.position.needsUpdate = true;
    }

    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }
  frame();

  return () => {
    ro.disconnect();
    window.removeEventListener('pointermove', onPointer);
    renderer.dispose();
  };
}
