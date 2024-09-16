
import styles from './SelectList.module.scss'
import { UsersType } from '../searchInput/ui/InputSearch';

type SelectType = {
  filteredUsers: UsersType[]
  onClick: (user: UsersType) => void
}

export const SelectList = ({ onClick, filteredUsers }: SelectType) => {


  return (
    <div className={styles.container}>
      <ul className={styles.userList}>
        {
          filteredUsers.length > 0
            ? (
              filteredUsers.map((user) => (
                <li
                  key={user.id}
                  onClick={() => onClick(user)}
                  className={styles.userItem}
                >
                  {user.name}
                </li>
              ))
            )
            : (
              <li className={styles.userItem}>No users found</li>
            )
        }
      </ul>
    </div>

  )
}