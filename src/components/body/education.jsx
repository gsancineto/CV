import { Card, Flex, Heading } from "@radix-ui/themes";
import TimelineCard from "./timelineCard";
import TimelineButton from "./timelineButton";
import Data from "../../data/education.json"
import { useTranslation } from "react-i18next";

export default function Education(){

    const {career, certifications} = Data;
    const {t} = useTranslation();

    return (
        <Flex direction="column" width="50%">
            <Card>
                <Flex direction="column" gap="3">
                    <Heading size="6" align="left">{t("education.title")}</Heading>
                    <Card>
                        <Heading size="4" align="left">{t("education.formal")}</Heading>
                        {
                            career.map(car => <TimelineCard data={car} key={car.title}/>)
                        }
                    </Card>
                </Flex>
                <Flex direction="column" gap="3">
                    <Card>
                        <Heading size="4" align="left">{t("education.certifications.title")}</Heading>
                        <Flex>
                            {
                                certifications.map(cert => <TimelineButton data={cert} key={cert.title}/>)
                            }
                        </Flex>
                    </Card>
                </Flex>
            </Card>
        </Flex>
    )
}