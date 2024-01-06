import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';

export default function GetSpanishCV() {
    const cursos = [
        { title: "Web Develop", url: "https://www.coderhouse.com/certificados/6114692cebb0fb00116cf7e6?lang=es", desc: "Fundamentos del Desarrollo Web: HTML, CSS y Bootstrap", date: "08/21" },
        { title: "JavaScript", url: "https://www.coderhouse.com/certificados/617fc8931deb020067d43f5d?lang=es", desc: "Introducción al lenguaje y creación de una aplicación web sencilla", date: "10/21" },
        { title: "ReactJS", url: "https://www.coderhouse.com/certificados/623cb7ca95db120019ce1b76?lang=es", desc: "Desarrollé una Aplicación de Comercio Electrónico en ReactJS, integrando de manera fluida Firebase y APIs RESTful", date: "02/22" },
    ];

    return (
        <>
            <Tabs fill>
                <Tab eventKey="skills" title="Habilidades">
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
                <Tab eventKey="exp" title="Experiencia">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <Container>
                                    <Row>
                                        <Col><h6>Desarrollador FullStack</h6></Col>
                                        <Col><h6><u><a href='https://ar.nttdata.com/' target='_blank'>NTTData</a></u></h6></Col>
                                        <Col><i>Buenos Aires, Argentina</i></Col>
                                        <Col><h6>08/21 - actualidad</h6></Col>
                                    </Row>
                                </Container>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Container>
                                    <Row>
                                        <Col />
                                        <Col xs={11}>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>Diseñé nuevas funcionalidades e implementé correcciones en aplicaciones industriales utilizando ReactJS y .NET Core en diversas plantas para clientes clave.</ListGroup.Item>
                                                <ListGroup.Item>Lideré una migración crítica de Componentes de Clase de React a React Hooks para una aplicación que sirve a fábricas metalúrgicas de clase mundial.</ListGroup.Item>
                                                <ListGroup.Item>Implementé el desarrollo dentro de una arquitectura de microservicios, creando aplicaciones novedosas en .NET y React con Integración Continua (CI) en Azure DevOps.</ListGroup.Item>
                                                <ListGroup.Item>Competente en la aplicación de metodologías ágiles, especialmente con Scrum, para impulsar una ejecución eficiente y colaborativa de proyectos.</ListGroup.Item>
                                                <ListGroup.Item>Historial comprobado en entornos colaborativos de equipo, demostrando habilidades sólidas de comunicación e interpersonales.</ListGroup.Item>
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
                                        <Col><h6>Desarrollador Backend</h6></Col>
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
                                                <ListGroup.Item>Diseñé y desarrollé aplicaciones ASP.NET para facilitar la integración entre las soluciones de la empresa y las soluciones de los clientes mediante la integración de ADO.NET.</ListGroup.Item>
                                                <ListGroup.Item>Elaboré consultas SQL para extraer y actualizar datos comerciales en tablas relacionales.</ListGroup.Item>
                                                <ListGroup.Item>Lideré el desarrollo de nuevas funcionalidades en aplicaciones empresariales industriales, abarcando tanto el desarrollo del front-end como del back-end, con pruebas manuales y documentación exhaustiva de la aplicación.</ListGroup.Item>
                                                <ListGroup.Item>Encabecé y llevé a cabo proyectos innovadores de integración SAP utilizando .NET, API REST y consumo y creación de servicios SOAP.</ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                        <Col />
                                    </Row>
                                </Container>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Tab>
                <Tab eventKey="ed" title="Educacion">
                    <h3 className='text-center'>Carrera universitaria</h3>
                    <Container>
                        <Card>
                            <Card.Body>
                                <Card.Title>Tecnicatura Superior en Programación</Card.Title>
                                <Card.Text>
                                    <Container>
                                        <a href='https://fra.utn.edu.ar/' target="_blank"><h6><u>Universidad Técnica Nacional Facultad Regional Avellaneda</u></h6></a>
                                        <Row><h6>08/18* - actualidad</h6></Row>
                                        <ProgressBar now={25} label="25%" />
                                        <Row><small className="text-muted"><i>*Prolongué una pausa después del primer semestre y reanudé los estudios en 2023</i></small></Row>
                                    </Container>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>
                    <Container>
                        <h4 className='text-center'>Cursos certificados</h4>
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