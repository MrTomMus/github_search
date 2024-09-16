import { SelectList } from '../../select/SelectList'
import styles from './inputSearch.module.scss'
import { ChangeEvent, useState } from "react"

enum PlaceholderText {
  SEATCH = 'Search'
}

export type UsersType = {
  id: number
  name: string
}
const usersMock = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Michael Johnson' },
  { id: 4, name: 'Emily Davis' },
];

// TODO Реализовать запрос на получение пользователей

export const InputSearch = () => {
  const [title, setTitle] = useState('')
  const [filteredUsers, setFilteredUsers] = useState<Array<UsersType>>([])
  const [isOpen, setIsOpen] = useState(false)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (title.length > 0) {
      const filtered = usersMock.filter((user) =>
        user.name.toLowerCase().includes(title.toLowerCase())
      )
      setFilteredUsers(filtered);
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    setTitle(e.currentTarget.value)
  }

  const handleSetUsers = (user: UsersType) => {
    setTitle(user.name)
    setIsOpen(false);
  }
  return (
    <div className={styles.container}>
      <input  /* TODO Тут вызывать компонент input обычный */
        className={styles.input}
        value={title.trim()}
        onChange={onChange}
        placeholder={PlaceholderText.SEATCH}
      />
      {
        isOpen && <SelectList
          filteredUsers={filteredUsers}
          onClick={(user) => handleSetUsers(user)}

        />}
    </div>



  )
}