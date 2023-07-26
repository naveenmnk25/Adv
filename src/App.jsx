import { useEffect, useState } from 'react'
import { NewUserList } from './UserList';
import { UserItems } from './userItem';

function App() {
  const [userList, setuserList] = useState(() => {
    const LocalVal = localStorage.getItem("items");
    if (LocalVal == null) return []

    return JSON.parse(LocalVal);
  });
  function Addlist(name, password) {
    setuserList(currentUsers => {
      return [
        ...currentUsers,
        { id: crypto.randomUUID(), userName: name, password: password, completed: false }
      ]
    })
  }
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(userList));
  }, [userList])

  function toggleTodo(id, completed) {
    setuserList(currentUsers => {
      return currentUsers.map(list => {
        if (list.id === id) {
          return { ...list, completed }
        }
        return list;
      })
    })
  }
  function handleDelete(id) {
    setuserList(currentUsers => {
      return currentUsers.filter(x => x.id != id);
    })
  }
  return (
    <>
      <div className="container mt-5">
        <NewUserList Addlist={Addlist} />
        <UserItems userList={userList} handleDelete={handleDelete} toggleTodo={toggleTodo} />
      </div>
    </>
  )
}

export default App
