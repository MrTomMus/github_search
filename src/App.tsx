import styles from './App.module.scss';
import { InputSearch } from './components/searchInput/InputSearch';

function App() {

    // TODO сознать роутинг 

    return (
        <>
            <header className={styles.header}>
                <div className={`${styles.container} ${styles['header-block']}`}>
                    {<div className={styles.logo}><p>Github Search</p></div> /* TODO заменить на ссылку перенаправляющую на главную страницу */}
                    <nav className={styles.nav}>
                        <ul className={styles['nav-list']}> {/* TODO реализовать роутинг */}
                            <li>Поиск</li>
                            <li>Избранные</li>
                        </ul>
                    </nav>
                </div>
                <InputSearch />
            </header>
        </>
    )
}

export default App
