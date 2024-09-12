import { DownloadIcon, GitHubLogoIcon, LinkedInLogoIcon, MoonIcon } from "@radix-ui/react-icons";
import { Flex, Heading, IconButton, SegmentedControl, Separator, Tooltip } from "@radix-ui/themes";

export default function Header(){



    return(
        <div className="header">
            <Flex justify="between" align="center">
                <Flex direction="column" align="end">
                    <Heading size="8" weight="bold" trim="both">gsancineto</Heading>
                    <Heading size="4" trim="both">Ssr. FullStack Dev</Heading>
                </Flex>
                <Flex gap="3">
                    <SegmentedControl.Root defaultValue="es" >
                        <SegmentedControl.Item value="es">ES</SegmentedControl.Item>
                        <SegmentedControl.Item value="en">EN</SegmentedControl.Item>
                    </SegmentedControl.Root>
                    <Tooltip content="Perfil Linkedin">
                        <IconButton radius="large"><LinkedInLogoIcon /></IconButton>
                    </Tooltip>
                    <Tooltip content="Perfil Github">
                        <IconButton radius="large"><GitHubLogoIcon /></IconButton>
                    </Tooltip>
                    <Tooltip content="Descargar en PDF">
                        <IconButton radius="large"><DownloadIcon /></IconButton>
                    </Tooltip>
                    <Tooltip content="Tema nocturno">
                        <IconButton radius="full"><MoonIcon /></IconButton>
                    </Tooltip>
                </Flex>
            </Flex>
        </div>
    )
}