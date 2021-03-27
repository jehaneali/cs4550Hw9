import './App.scss';
import Users from "./Users";
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import Feed from './Feed'
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

// async function fetchUsers() {
//   let text = await fetch("http://localhost:4000/api/v1/users", {});
//   let resp = await text.json();
//   return resp.data;

// }

function App() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   if(users.length == 0) {
  //     fetchUsers().then((xs) => setUsers(xs));
  //   }
  // }, [users.length]);

  return (
    <Container>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Feed />
        </Route>
        <Route path="/users">
        <Users />
        </Route>
        
      </Switch>

    </Container>
  );
}

export default App;
