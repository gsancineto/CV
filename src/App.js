import 'bootstrap/dist/css/bootstrap.min.css';
import GetEnglishCV from './en';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import GetSpanishCV from './es';
import Language from './lang';
import Download from './download';

function App() {
  const [lang, setLang] = useState("es");
  const changeLanguage = (item) => {
    setLang(item);
  }
  return (
    <Container>
      <Row>
        <Col />
        <Col xs={10}><h1 className='display-6'>Gabriel Sancineto</h1></Col>
        <Col><Language changeLanguage={changeLanguage} lang={lang}/></Col>
        <Col><Download lang={lang} /></Col>
        <Col />
      </Row>
      <Row>
        <Col>
          {lang === "en" ? <GetEnglishCV /> : <GetSpanishCV />}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
