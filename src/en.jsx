import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';

export default function GetEnglishCV() {
    return (
        <>
            <Tabs fill>
                <Tab eventKey="skills" title="Skills">
                    <Container>
                        <Row>
                            <ListGroup variant="flush" className="lead">
                                <ListGroup.Item >C# | .NET | ReactJS | Python | JavaScript | SQL | Unit Testing | Lambda | OOP | Entity Framework</ListGroup.Item>
                                <ListGroup.Item>Azure | Cloud | CI/CD | Git | Docker | Kubernetes</ListGroup.Item>
                                <ListGroup.Item>Microservices | Frontend | Backend | Full-Stack | English, Spanish</ListGroup.Item>
                            </ListGroup>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="exp" title="Experience">
                    {/* TODO: Poner accordion para las exp  */}
                    <Container>
                        <Row>
                            <Col><h6>FullStack Developer</h6></Col>
                            <Col><h6><u>NTTData</u></h6></Col>
                            <Col><i>Buenos Aires, Argentina</i></Col>
                            <Col><h6>08/21 - to present</h6></Col>
                        </Row>
                        <Row>
                            <Col />
                            <Col xs={11}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Engineered new functionalities and implemented fixes on industrial applications using ReactJS and .NET Core across various plants for key clients.</ListGroup.Item>
                                    <ListGroup.Item>Led a critical migration from React Class Components to React Hooks for an application serving world-class metallurgical factories.</ListGroup.Item>
                                    <ListGroup.Item>Implemented development within a microservices architecture, creating novel .NET and React applications with Continuous Integration (CI) in Azure DevOps.</ListGroup.Item>
                                    <ListGroup.Item>Proficient in applying agile methodologies, particularly with Scrum, to drive efficient and collaborative project execution.</ListGroup.Item>
                                    <ListGroup.Item>Proven track record in collaborative team environments, demonstrating strong communication and interpersonal skills.</ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col />
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="ed" title="Education">
                    <Container>
                        <Row>
                            <Col><h6>Bachelor in Programming</h6></Col>
                            <Col><h6><u>Universidad Técnica Nacional</u></h6></Col>
                            <Col><i>Buenos Aires, Argentina</i></Col>
                            <Col><h6>08/18 - to present</h6></Col>
                        </Row>
                        <Row>
                            <Col />
                            <Col xs={11}>
                                Extended a hiatus following the initial semester and resumed studies in 2023
                            </Col>
                            <Col />
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="courses" title="Certificated Courses">
                    <Container>
                        <Row>
                            <ListGroup variant="flush" className="lead">
                                <ListGroup.Item>
                                    <a href='https://www.coderhouse.com/certificados/6114692cebb0fb00116cf7e6?lang=es'>
                                        <b>Web Develop - Coderhouse:</b> Fundamentals of Web Development: HTML, CSS, and Bootstrap (08/2021)
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href='https://www.coderhouse.com/certificados/617fc8931deb020067d43f5d?lang=es'>
                                        <b>JavaScript - Coderhouse:</b> Introduction to the language and creation of simple web app (10/2021)
                                    </a>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href='https://www.coderhouse.com/certificados/623cb7ca95db120019ce1b76?lang=es'>
                                        <b>ReactJS - Coderhouse:</b> Developed an eCommerce Application in ReactJS, seamlessly integrating Firebase and RESTful APIs (02/2022)
                                    </a>
                                </ListGroup.Item>
                            </ListGroup>
                        </Row>
                    </Container>
                </Tab>
            </Tabs>
        </>
    )
}