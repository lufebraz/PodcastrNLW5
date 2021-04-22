import styles from './styles.module.scss';

import format from 'date-fns/format';

export function Header() {
const currentDate = format(new Date(), 'EEEE, MMMM d');

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="logo"/>

      <p>The best to listen, always!</p>

      <span>{currentDate}</span>
    </header>
  );
}