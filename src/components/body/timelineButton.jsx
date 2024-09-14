import { Link1Icon } from "@radix-ui/react-icons";
import { Avatar, Badge, Blockquote, Flex, Heading, HoverCard, Link, Text } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";


export default function TimelineButton({ data }) {
    const {title, date, description, institution, tech, certification} = data;
    const {t} = useTranslation();

    return (
        <Flex direction="column" justify="end" gap="3">
            <HoverCard.Root>
                <HoverCard.Trigger>
                    <Avatar
                        size="5"
                        fallback="CH"
                        radius="full"
                        src={institution}
                    />
                </HoverCard.Trigger>
                <HoverCard.Content maxWidth="350px">
                    <Heading size="2">{t(title)}<Link href={certification} underline="none" target="_blank"><Badge color="green" ><Link1Icon /></Badge></Link></Heading>
                    <Blockquote size="1" >{t(date)}</Blockquote>
                    <Text size="2">{t(description)}</Text>
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