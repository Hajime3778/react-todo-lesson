import { sum } from '../src/lib/sample';

describe('sample test', () => {
  test('sum test ok', () => {
    expect(sum(1, 3)).toBe(4);
    expect(sum(3, 8)).toBe(11);
  });
  test('sum test ng', () => {
    expect(sum(1, 3)).not.toBe(5);
    expect(sum(3, 8)).not.toBe(10);
  });
});
