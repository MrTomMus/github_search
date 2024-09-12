import styles from './inputSearch.module.scss'
import { ChangeEvent, useState } from "react"

enum PlaceholderText {
  SEATCH = 'Search'
}

export const InputSearch = () => {
  const [title, setTitle] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)

  }

  return (
    <input  /* TODO Тут вызывать компонент input обычный */
    className={styles.input}
    value={title.trim()}
    onChange={onChange}
    placeholder={PlaceholderText.SEATCH}
    />
  )
}