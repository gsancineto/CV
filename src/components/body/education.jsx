import { Card, Flex, Heading } from "@radix-ui/themes";
import TimelineCard from "./timelineCard";
import TimelineButton from "./timelineButton";
import Data from "../../constants/education.json"

export default function Education(){

    const {career, certifications} = Data;



    return (
        <Flex direction="column" width="50%">
            <Card>
                <Heading size="6" align="left">Educacion</Heading>
                <TimelineCard data={career[0]} />
                <div style={{height: "8vh"}} />
                <Flex justify="end">
                    {
                        certifications.map(cert => <TimelineButton data={cert} key={cert.title}/>)
                    }
                </Flex>
                <div style={{height: "13vh"}} />
                <TimelineCard data={career[1]} />
            </Card>
        </Flex>
    )
}