import 'bootstrap/dist/css/bootstrap.min.css';
import GetEnglishCV from './en';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <Container>
      <Row>
        <Col />
        <Col><h1 className='display-6'>Gabriel Sancineto</h1></Col>
        <Col />
      </Row>
      <Row>
        <Col>
          {GetEnglishCV()}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
