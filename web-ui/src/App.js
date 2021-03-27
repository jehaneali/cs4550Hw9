import logo from './logo.svg';
import './App.css';

import {useState, useEffect} from 'react';

async function fetchUsers() {
  let text = await fetch("http://localhost:4000/api/v1/users", {});
  let resp = await text.json();
  return resp.data;

}

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if(users.length == 0) {
      fetchUsers().then((xs) => setUsers(xs));
    }
  }, [users.length]);

  return (
    <div>
      <ul>
        {users.map((uu) => (<li key={uu.id}>{uu.name}</li>))}
      </ul>
    </div>
  )
}

export default App;
