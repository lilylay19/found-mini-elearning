const COS30 = Math.cos(Math.PI / 6);
const SIN30 = Math.sin(Math.PI / 6);
const axisX = { x: COS30, y: SIN30 };
const axisY = { x: -COS30, y: SIN30 };
const axisZ = { x: 0, y: -1 };
 
function addv(p, v, s) { return { x: p.x + v.x * s, y: p.y + v.y * s }; }
 
function isoBoxEdges(origin, w, d, h) {
  const c000 = origin;
  const c100 = addv(c000, axisX, w);
  const c010 = addv(c000, axisY, d);
  const c110 = addv(c100, axisY, d);
  const c001 = addv(c000, axisZ, h);
  const c101 = addv(c100, axisZ, h);
  const c011 = addv(c010, axisZ, h);
  const c111 = addv(c110, axisZ, h);
  return [
    [c000, c100], [c100, c110], [c110, c010], [c010, c000],
    [c001, c101], [c101, c111], [c111, c011], [c011, c001],
    [c000, c001], [c100, c101], [c110, c111], [c010, c011],
  ];
}
 
// spacing < 2 pulls boxes closer together so they overlap like the reference
function renderCluster(svgEl, boxSpecs, origin, scale, spacing, color) {
  let parts = [];
  boxSpecs.forEach(spec => {
    const base = addv(addv(origin, axisX, spec.gx * scale * spacing), axisY, spec.gy * scale * spacing);
    const edges = isoBoxEdges(base, spec.w * scale, spec.d * scale, spec.h * scale);
    edges.forEach(([p1, p2]) => {
      parts.push(`<line x1="${p1.x.toFixed(2)}" y1="${p1.y.toFixed(2)}" x2="${p2.x.toFixed(2)}" y2="${p2.y.toFixed(2)}" stroke="${color}" stroke-width="1.5" stroke-dasharray="4 4" stroke-linecap="round"/>`);
    });
  });
  svgEl.innerHTML = parts.join("");
}
 
const GREEN = "#8aa858";
const SCALE = 45;
const SPACING = 2;
 
// a small floating box set apart, then a denser overlapping diagonal chain —
// mirrors the two-part composition (isolated box + cluster) in the reference
const leftSpecs = [
  { gx: 1.55, gy: -1.85, w: 0.8, d: 0.8, h: 2.4 },  // floating box
  { gx: -0.55, gy: -0.15, w: 1, d: 1, h: 1.9 },
  { gx: 0.35,  gy: 0.55,  w: 1, d: 1, h: 2.1 },
  { gx: -0.85, gy: 1.35,  w: 1, d: 1, h: 1.7 },
  { gx: 0.05,  gy: 2.05,  w: 1, d: 1, h: 2.2 },
  { gx: -1.35, gy: 2.95,  w: 1, d: 1, h: 1.9 },
];
 
const rightSpecs = [
  { gx: -0.35, gy: -2.15, w: 0.85, d: 0.85, h: 2.0 }, // floating box
  { gx: 0.65,  gy: -1.35, w: 1, d: 1, h: 1.8 },
  { gx: -0.75, gy: -0.55, w: 1, d: 1, h: 1.6 },
  { gx: 0.25,  gy: 0.25,  w: 1, d: 1, h: 2.0 },
  { gx: -1.05, gy: 1.15,  w: 1, d: 1, h: 1.7 },
  { gx: -0.05, gy: 1.95,  w: 1, d: 1, h: 1.9 },
  { gx: 0.95,  gy: 2.55,  w: 1, d: 1, h: 1.6 },
];
 
document.addEventListener('DOMContentLoaded', () => {
  renderCluster(document.getElementById('isoLeft'),  leftSpecs,  { x: 145, y: 75 }, SCALE, SPACING, GREEN);
  renderCluster(document.getElementById('isoRight'), rightSpecs, { x: 135, y: 75 }, SCALE, SPACING, GREEN);
});
 