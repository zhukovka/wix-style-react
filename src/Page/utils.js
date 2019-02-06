import classNames from 'classnames';

export function mergeClassAndStyleProps(...styles) {
  return styles.reduce((acc, props) => {
    const className = acc.className
      ? classNames(acc.className, props.className)
      : props.className;
    const style = { ...acc.style, ...props.style };

    const result = {};
    if (className) {
      result.className = className;
    }

    if (!!Object.keys(style).length) {
      result.style = style;
    }
    return result;
  });
}
