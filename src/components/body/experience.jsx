import { Card, Flex, Heading } from "@radix-ui/themes";
import TimelineCard from "./timelineCard";

export default function Experience(){

    const techListTLC = [
        {src:"", fallback: "C#"},
        {src:"", fallback: ".NET"},
        {src:"", fallback: "SQL"},
    ];
    const techListNTT = [
        {src:"", fallback: "React"},
        {src:"", fallback: ".NET"},
        {src:"", fallback: "SQL"},
    ];

    return (
        <Flex direction="column" width="50%">
            <Card>
                <Flex direction="column" gap="5">
                    <Heading size="6" align="right">Experiencia</Heading>
                    <div style={{height: "7vh"}} />
                    <TimelineCard title="Tecnologística Consultores" period="Marzo 2019 - Agosto 2021" description="blablabla" techList={techListTLC} />
                    <TimelineCard title="NTT Data" period="Agosto 2021 - Actualidad" description="blablabla" techList={techListNTT} />
                </Flex>
            </Card>
        </Flex>
    )
}