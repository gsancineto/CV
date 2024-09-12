import { Avatar, Badge, Blockquote, Box, Card, Flex, Heading, Link, Text } from "@radix-ui/themes";


export default function TimelineButton({title, date, description, techList, certification}){




    return(
        <Box maxWidth="350px">
            <Card size="1">
                <Heading size="2">{title}<Badge color="green"><Link href={certification} underline="none" target="_blank">Cert.</Link></Badge></Heading>
                <Blockquote size="1" >{date}</Blockquote>
                <Text size="2">{description}</Text>
                <Flex className="tech-list-card" gap="2" >
                    {
                        techList.map(tech => <Avatar src={tech.src} fallback={tech.fallback} size="2" key={tech.fallback}/>)
                    }
                </Flex>
            </Card>
        </Box>
    )
}