import { useApp } from '../../../../stores/useApp';
import Button from '../../../ui/button/Button';
import sun from './../../../../assets/images/icon-sun.svg';
import moon from './../../../../assets/images/icon-moon.svg';
import { Theme } from '../../../../utils/constants';
import styles from './theme-toggle.module.css';

export default function ThemeToggle() {
  const theme = useApp(state => state.theme);
  const toggleTheme = useApp(state => state.actions.toggleTheme);

  return (
    <Button
      variant="transparent"
      className={styles.toggle}
      aria-label={theme}
      onClick={toggleTheme}
      title="Toggles light & dark mode"
      aria-live="polite"
    >
      <img
        src={theme === Theme.LIGHT ? sun : moon}
        alt={theme === Theme.LIGHT ? 'sun' : 'moon'}
        width={25}
        height={25}
        aria-hidden
      />
    </Button>
  );
}
