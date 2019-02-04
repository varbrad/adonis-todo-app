import React, { useEffect, useState } from 'react'
import Scene from '../components/Scene'
import { getLists } from '../requests/listRequests'

const Home = () => {
  const [lists, setLists] = useState([])

  useEffect(() => {
    getLists().then(({ data }) => setLists(data.data))
  }, [])
  return (
    <Scene>
      <ul>
        {lists.map(list => (
          <li key={list.id}>
            {list.name}
            <ul>
              {list.tasks.map(task => (
                <li key={task.id}>{task.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Scene>
  )
}

export default Home
