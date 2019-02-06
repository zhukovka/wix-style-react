import { mergeClassAndStyleProps } from './utils';

describe('mergeStyleProps', () => {
  it('should join classes', () => {
    expect(
      mergeClassAndStyleProps({ className: 'A' }, { className: 'B' }),
    ).toEqual({
      className: 'A B',
    });
  });

  it('should join styles', () => {
    expect(
      mergeClassAndStyleProps({ style: { a: 'A' } }, { style: { b: 'B' } }),
    ).toEqual({
      style: { a: 'A', b: 'B' },
    });
  });
});
