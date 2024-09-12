import { InputSearch } from '../../features/components/searchInput'
import styles from './Search.module.scss'

export const Search = () => {
    return (
        <div className={`${styles['wrapper-input']}`}>
            <InputSearch />
        </div>
    )
}