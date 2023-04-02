const hsl = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [255 * f(0), 255 * f(8), 255 * f(4)];
};

export function color_sequence(members) {
  const multi = Math.trunc(360 / members);
  const sequence = new Array();

  for (let i = 0; i < members; i++) {
    sequence.push(hsl(i * multi, 100, 50));
  }

  return sequence;
}
