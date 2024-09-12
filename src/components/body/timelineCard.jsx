import { Avatar, Blockquote, Card, Flex, Heading, Text } from "@radix-ui/themes";

export default function TimelineCard({title, period, description, techList}){

    return(
        <Card>
            <Heading size="4">{title}</Heading>
            <Blockquote size="2" >{period}</Blockquote>
            <Text>{description}</Text>
            <Heading size="1">Tecnologias</Heading>
            <Flex className="tech-list-card" gap="2" >
                {
                    techList.map(tech => <Avatar src={tech.src} fallback={tech.fallback} size="2" key={tech.fallback}/>)
                }
            </Flex>
        </Card>
    )
}