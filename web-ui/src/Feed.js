import { Row, Col, Card } from 'react-bootstrap';
import { connect } from 'react-redux';

// function photo_path(post) {
//     return "http://localhost:4000/photos/" + post.photo_hash;
// }

function Event({ event }) {
    return (
        <Col>
            <Card>
                <Card.Text>
                    Posted by {event.user.name} <br/>
                    {event.title}
                </Card.Text>
        </Card>
        </Col>
    );
}

function Feed({events}) {
    let cards = events.map((event) => (
        <Event event={event} key={event.id} />
    ));
    return (
        <div>
            <h2>Feed</h2>
            <Row>{cards}</Row>
        </div>
    );
}

export default connect(({events}) => ({events}))(Feed);