import { Link, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import { Button } from './components/button/Button';
import { InputSearch } from './components/searchInput';


function App() {

    return (
        <>
            <header className={styles.header}>
                <div className={`${styles.container} ${styles['header-block']}`}>
                    {<div className={styles.logo}><p>Github Search</p></div> /* TODO заменить на ссылку перенаправляющую на главную страницу */}
                    <nav className={styles.nav}>
                        <ul className={styles['nav-list']}>
                            <li><Link to={'/'}>Поиск</Link></li>
                            <li><Link to={'/favorites'}>Избранные</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className={styles.main}>
                <div className={`${styles.container}`}>
                    <Routes>
                        <Route path='/' element={<InputSearch />} />
                        <Route path='favorites' element={<Button />} />
                    </Routes>
                </div>
            </main>
        </>
    )
}

export default App
