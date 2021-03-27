import { Nav, Row, Col, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

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

export default function AppNav() {
    return (
      <Row>
        <Col>
          <Nav variant="pills">
            <Link to="/">Feed</Link>
            <Link to="/users">Users</Link>
          </Nav>
        </Col>
        <Col>
          {/* <LoginOrInfo /> */}
        </Col>
      </Row>
    );
  }