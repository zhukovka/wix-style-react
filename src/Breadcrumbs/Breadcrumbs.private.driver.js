import styles from './Breadcrumbs.scss';

export default driverInterface => ({
  isItemFullWidthAt: position =>
    driverInterface.element
      .querySelectorAll(`.${styles.item}`)
      [position].classList.contains(styles.itemFullWidth),
});
