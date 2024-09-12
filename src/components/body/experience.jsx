import { Card, Flex, Heading } from "@radix-ui/themes";
import TimelineCard from "./timelineCard";
import Data from "../../constants/experience.json";

export default function Experience(){

    return (
        <Flex direction="column" width="50%">
            <Card>
                <Flex direction="column" gap="5">
                    <Heading size="6" align="right">Experiencia</Heading>
                    <div style={{height: "7vh"}} />
                    {
                        Data.map(exp => <TimelineCard data={exp} key={exp.title}/>)
                    }
                </Flex>
            </Card>
        </Flex>
    )
}