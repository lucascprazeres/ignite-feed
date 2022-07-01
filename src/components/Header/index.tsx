import styles from './styles.module.css'

import igniteLogo from '../../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src={igniteLogo}
        alt="Dois triângulos verdes sobrepostos apontando para o canto superior direito"
      />
      <strong>Ignite Feed</strong>
    </header>
  )
}