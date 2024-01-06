import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';

export default function GetEnglishCV() {
    const cursos = [
        { title: "Web Develop", url: "https://www.coderhouse.com/certificados/6114692cebb0fb00116cf7e6?lang=en", desc: "Fundamentals of Web Development: HTML, CSS, and Bootstrap", date: "08/21" },
        { title: "JavaScript", url: "https://www.coderhouse.com/certificados/617fc8931deb020067d43f5d?lang=en", desc: "Introduction to the language and creation of simple web app", date: "10/21" },
        { title: "ReactJS", url: "https://www.coderhouse.com/certificados/623cb7ca95db120019ce1b76?lang=en", desc: "Developed an eCommerce Application in ReactJS, seamlessly integrating Firebase and RESTful APIs", date: "02/22" },
    ];

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
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <Container>
                                    <Row>
                                        <Col><h6>FullStack Developer</h6></Col>
                                        <Col><h6><u><a href='https://ar.nttdata.com/' target='_blank'>NTTData</a></u></h6></Col>
                                        <Col><i>Buenos Aires, Argentina</i></Col>
                                        <Col><h6>08/21 - to present</h6></Col>
                                    </Row>
                                </Container>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Container>
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
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <Container>
                                    <Row>
                                        <Col><h6>Backend Developer</h6></Col>
                                        <Col><h6><u><a href='https://www.tecnologisticaconsultores.com/' target='_blank'>TLC Innovation</a></u></h6></Col>
                                        <Col><i>Buenos Aires, Argentina</i></Col>
                                        <Col><h6>03/2019 - 08/2021</h6></Col>
                                    </Row>
                                </Container>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Container>
                                    <Row>
                                        <Col />
                                        <Col xs={11}>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>Engineered and implemented ASP.NET applications facilitating seamless integration between company and client solutions through ADO.NET integration.</ListGroup.Item>
                                                <ListGroup.Item>Formulated and executed SQL queries for extracting and updating commercial data within relational databases.</ListGroup.Item>
                                                <ListGroup.Item>Pioneered the enhancement of features in industrial business applications, encompassing both front-end and back-end development, complete with manual testing and comprehensive app documentation.</ListGroup.Item>
                                                <ListGroup.Item>Spearheaded and executed cutting-edge SAP integration initiatives leveraging .NET, API REST, and SOAP for consumption and creation.</ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                        <Col />
                                    </Row>
                                </Container>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Tab>
                <Tab eventKey="ed" title="Education">
                <h3 className='text-center'>University</h3>
                    <Container>
                        <Card>
                            <Card.Body>
                                <Card.Title>Bachelor in Programming</Card.Title>
                                <Card.Text>
                                    <Container>
                                        <a href='https://fra.utn.edu.ar/' target="_blank"><h6><u>Universidad Técnica Nacional Facultad Regional Avellaneda</u></h6></a>
                                        <Row><h6>08/18* - to present</h6></Row>
                                        <ProgressBar now={25} label="25%" />
                                        <Row><small className="text-muted"><i>*Extended a hiatus following the initial semester and resumed studies in 2023</i></small></Row>
                                    </Container>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>
                    <Container>
                        <h4 className='text-center'>Certified Courses</h4>
                        <Row>
                            <Col />
                            {cursos.map((curso) => (
                                <Col>
                                    <Card style={{ width: '20rem' }}>
                                        <Card.Body>
                                            <a href={curso.url} target="_blank"><Card.Title>{curso.title}</Card.Title></a>
                                            <Card.Text>
                                                <Container>
                                                    <h6><u>Coderhouse</u></h6>
                                                    <Row><h6>{curso.date}</h6></Row>
                                                    <ProgressBar now={100} label="100%" />
                                                    <Row><small className="text-muted"><i>{curso.desc}</i></small></Row>
                                                </Container>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                            <Col />
                        </Row>
                    </Container>
                </Tab>
            </Tabs>
        </>
    )
}