import styles from './inputSearch.module.scss'
import { ChangeEvent, useState } from "react"


export const InputSearch = () => {
  const [title, setTitle] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)

  }

  return (
    <input
      className={styles.input}
      value={title.trim()}
      onChange={onChange}
      placeholder='Search'

    />
  )
}