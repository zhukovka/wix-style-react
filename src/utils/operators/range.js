export default function range(start, end) {
  const itemsAmount = Math.abs(start - end);
  const _range = [...Array(itemsAmount).keys()];

  if (start < end) {
    return _range.map(item => item + start);
  }

  return _range.map((_, index) => start - index);
}
