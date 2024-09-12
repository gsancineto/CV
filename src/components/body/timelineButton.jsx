import { Link1Icon } from "@radix-ui/react-icons";
import { Avatar, Badge, Blockquote, Box, Card, Flex, Heading, HoverCard, Link, Text } from "@radix-ui/themes";


export default function TimelineButton({ data }) {
    const {title, date, description, tech, certification} = data;

    // return(
    //     <Box maxWidth="350px">
    //         <Card size="1">
{/* <Heading size="2">{title}<Badge color="green" ><Link href={certification} underline="none" target="_blank"><Link1Icon /></Link></Badge></Heading>
                    <Blockquote size="1" >{date}</Blockquote>
                    <Text size="2">{description}</Text>
                    <Flex className="tech-list-card" gap="2" >
                        {
                            techList.map(tech => <Avatar src={tech.src} fallback={tech.fallback} size="2" key={tech.fallback} />)
                        }
                    </Flex> */}
    //         </Card>
    //     </Box>
    // )

    return (
        <Flex direction="column" justify="end">
            <HoverCard.Root>
                <HoverCard.Trigger>
                    <Avatar
                        size="5"
                        fallback="CH"
                        radius="full"
                        src="https://res.cloudinary.com/hdsqazxtw/image/upload/v1559681445/logo_coderhouse_2_bmqbet.png"
                    />
                </HoverCard.Trigger>
                <HoverCard.Content maxWidth="350px">
                    <Heading size="2">{title}<Link href={certification} underline="none" target="_blank"><Badge color="green" ><Link1Icon /></Badge></Link></Heading>
                    <Blockquote size="1" >{date}</Blockquote>
                    <Text size="2">{description}</Text>
                    <Flex gap="4" >
                        {
                            tech.map(t => <Avatar src={t.src} fallback={t.fallback} size="2" key={t.fallback} />)
                        }
                    </Flex>
                </HoverCard.Content>
            </HoverCard.Root>
        </Flex>

    )
}