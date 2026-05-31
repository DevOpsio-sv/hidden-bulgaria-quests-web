/**
 * Maps real-world lat/lng (WGS84) to normalized 0..1 coordinates
 * over the Bulgaria SVG viewBox (0 0 800 500).
 *
 * Bulgaria bounding box:
 *   lat  41.2 – 44.2  (south → north)
 *   lng  22.4 – 28.6  (west  → east)
 *
 * To convert to SVG px:  x_px = x * 800,  y_px = y * 500
 */
export const BULGARIA_BOUNDS = {
  latMin: 41.2,
  latMax: 44.2,
  lngMin: 22.4,
  lngMax: 28.6,
} as const;

export function geoToMap(lat: number, lng: number): { x: number; y: number } {
  const { latMin, latMax, lngMin, lngMax } = BULGARIA_BOUNDS;
  const x = Math.max(0, Math.min(1, (lng - lngMin) / (lngMax - lngMin)));
  // SVG y increases downward; lat increases northward → invert
  const y = Math.max(0, Math.min(1, (latMax - lat) / (latMax - latMin)));
  return {
    x: Math.round(x * 1000) / 1000,
    y: Math.round(y * 1000) / 1000,
  };
}
