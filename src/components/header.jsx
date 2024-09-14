import { DownloadIcon, EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Flex, Heading, IconButton, Link, SegmentedControl, Tooltip } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import en from "../cv/en.pdf";
import es from "../cv/es.pdf";

export default function Header(){
    const {t } = useTranslation();
    const switchLang = (value) => {
        i18n.changeLanguage(value);
    }

    return(
        <div className="header">
            <Flex justify="between" align="center">
                <Flex direction="column" align="end">
                    <Heading size="8" weight="bold" trim="both">gSancineto</Heading>
                    <Heading size="4" trim="both">Ssr. FullStack Dev</Heading>
                </Flex>
                <Flex gap="3">
                    <SegmentedControl.Root defaultValue="es"  onValueChange={switchLang}>
                        <SegmentedControl.Item value="es">ES</SegmentedControl.Item>
                        <SegmentedControl.Item value="en">EN</SegmentedControl.Item>
                    </SegmentedControl.Root>
                    <Tooltip content={t("header.linkedin")}>
                        <Link href="https://www.linkedin.com/in/gsancineto/" target="_blank"><IconButton radius="large"><LinkedInLogoIcon /></IconButton></Link>
                    </Tooltip>
                    <Tooltip content={t("header.github")}>
                        <Link href="https://github.com/gsancineto" target="_blank"><IconButton radius="large"><GitHubLogoIcon /></IconButton></Link>
                    </Tooltip>
                    <Tooltip content={t("header.download")}>
                        <Link href={i18n.language === "en" ? en : es} download="gsancineto-cv" target="_blank" rel="noreferrer"><IconButton radius="large"><DownloadIcon /></IconButton></Link>
                    </Tooltip>
                    <Tooltip content={t("header.email")}>
                        <Link href="mailto:jgabrielsancineto@gmail.com" target="_blank"><IconButton radius="large"><EnvelopeClosedIcon /></IconButton></Link>
                    </Tooltip>
                </Flex>
            </Flex>
        </div>
    )
}