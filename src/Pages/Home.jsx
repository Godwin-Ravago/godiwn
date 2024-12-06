import { Container, Row, Col, Button } from 'react-bootstrap';
import '../home.css'
function Home() {
    return (
        <>
        <div id='home-bg'>
            <h1>Home</h1>
            <Container className="mt-4">
                <Row className="align-items-center">
                    <Col md={6} style={{ color: 'white', fontFamily: 'ROBOT' }}>
                        <h2>WELCOME TO MY PERSONAL WEBSITE</h2>
                        <p>Explore my Website.</p>
                        <Button variant="primary" size="lg">Get Started</Button>
                    </Col>
                    <Col md={6}>
                        <img 
                            src="" 
                            alt="Hero" 
                            className="img-fluid"
                        />
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    );
}

export default Home;
