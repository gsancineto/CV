import { Card, Flex, Heading } from "@radix-ui/themes";
import TimelineCard from "./timelineCard";
import Data from "../../constants/experience.json";
import { useTranslation } from "react-i18next";

export default function Experience(){

    const {t} = useTranslation();
    return (
        <Flex direction="column" width="50%">
            <Card>
                <Flex direction="column" gap="3">
                    <Heading size="6" align="right">{t("experience.title")}</Heading>
                    {
                        Data.map(exp => <TimelineCard data={exp} key={exp.title}/>)
                    }
                </Flex>
            </Card>
        </Flex>
    )
}