import { Nav, Row, Col, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function LoginForm() {
    return (
        <Form inline>
            <Form.Control type="text" />
            <Form.Control type="password" />
            <Button variant="primary">Login</Button>
        </Form>
    );
}

function SessionInfo({session}) {
    return (
        <p>Logged in as {session.name}</p>
    );
}

// const LoginOrInfo = connect(
//     ({session}) => ({session})
//     (({session}) => {
//         if (session) {
//             return<SessionInfo session={session} />;
//         }
//         else {
//             return <LoginForm />;
//         }
//     }));

function LOI({session}) {
    if (session) {
      return <SessionInfo session={session} />;
    }
    else {
      return <LoginForm />;
    }
  }
  
  const LoginOrInfo = connect(
    ({session}) => ({session}))(LOI);

function Link({to, children}) {
    return (
      <Nav.Item>
        <NavLink to={to} exact className="nav-link"
                 activeClassName="active">
          {children}
        </NavLink>
      </Nav.Item>
    );
  }

export default function AppNav({session}) {
    return (
      <Row>
        <Col>
          <Nav variant="pills">
            <Link to="/">Feed</Link>
            <Link to="/users">Users</Link>
          </Nav>
        </Col>
        <Col>
          <LoginOrInfo />
        </Col>
      </Row>
    );
  }