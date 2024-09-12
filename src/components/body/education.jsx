import { Card, Flex, Heading } from "@radix-ui/themes";
import TimelineCard from "./timelineCard";
import TimelineButton from "./timelineButton";

export default function Education(){
    const techUtn = [
        {src:"", fallback: "C"},
        {src:"", fallback: "JS"},
        {src:"", fallback: "Html"},
    ];




    return (
        <Flex direction="column" width="50%">
            <Card>
                <Heading size="6" align="left">Educacion</Heading>
                <TimelineCard title="Tecnicatura Superior en Programación - UTN" period="Agosto 2018 - Marzo 2019" description="lorem ipsum blablabla" techList={techUtn} />
                <div style={{height: "7vh"}} />
                <TimelineButton title="Web Developer - Coderhouse" date="Agosto 2021" description="Fundamentos del desarrollo web: HTML, CSS y Bootstrap." techList={techUtn} certification="https://google.com"/>
                <TimelineButton title="Javascript - Coderhouse" date="Octubre 2021" description="Introducción al lenguaje y creación de una aplicación web con JS." techList={techUtn} certification={"#"}/>
                <TimelineButton title="ReactJS - Coderhouse" date="Febrero 2022" description="Desarrollo de una Aplicación e-Commerce en ReactJS, integrando de manera fluida Firebase y APIs RESTful." techList={techUtn} certification={"#"}/>
            </Card>
        </Flex>
    )
}