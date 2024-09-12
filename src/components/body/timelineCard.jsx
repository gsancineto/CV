import { Avatar, Blockquote, Card, Flex, Heading, Text } from "@radix-ui/themes";

export default function TimelineCard({data}){
    const {title, period, description, tech} = data;
    
    return(
        <Card>
            <Flex direction="column" gap="2">
                <Heading size="4">{title}</Heading>
                <Blockquote size="2" >{period}</Blockquote>
                <Text>{description}</Text>
                <Heading size="1">Tecnologías</Heading>
                <Flex gap="4" >
                    {
                        tech.map(t => <Avatar src={t.src} fallback={t.fallback} size="2" key={t.fallback}/>)
                    }
                </Flex>
            </Flex>
        </Card>
    )
}