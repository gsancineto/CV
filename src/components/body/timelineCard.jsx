import { Avatar, Blockquote, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";

export default function TimelineCard({data}){
    const {title, period, description, tech} = data;
    const {t} = useTranslation();
    
    return(
        <Card>
            <Flex direction="column" gap="2">
                <Heading size="3">{t(title)}</Heading>
                <Blockquote size="2" >{t(period)}</Blockquote>
                <Text>{t(description)}</Text>
                <Heading size="1">{t("timelineCard.tech")}</Heading>
                <Flex gap="4" >
                    {
                        tech.map(t => <Avatar src={t.src} fallback={t.fallback} size="2" key={t.fallback}/>)
                    }
                </Flex>
            </Flex>
        </Card>
    )
}