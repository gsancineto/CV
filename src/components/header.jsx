import { DownloadIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Avatar, Flex, Heading, IconButton, Link, SegmentedControl, Tooltip } from "@radix-ui/themes";

export default function Header(){



    return(
        <div className="header">
            <Flex justify="between" align="center">
                <Flex direction="column" align="end">
                    <Heading size="8" weight="bold" trim="both">gSancineto</Heading>
                    <Heading size="4" trim="both">Ssr. FullStack Dev</Heading>
                </Flex>
                <Flex gap="3">
                    <SegmentedControl.Root defaultValue="es" >
                        <SegmentedControl.Item value="es">ES</SegmentedControl.Item>
                        <SegmentedControl.Item value="en">EN</SegmentedControl.Item>
                    </SegmentedControl.Root>
                    <Tooltip content="Perfil Linkedin">
                        <Link href="https://www.linkedin.com/in/gsancineto/" target="_blank"><IconButton radius="large"><LinkedInLogoIcon /></IconButton></Link>
                    </Tooltip>
                    <Tooltip content="Perfil Github">
                        <Link href="https://github.com/gsancineto" target="_blank"><IconButton radius="large"><GitHubLogoIcon /></IconButton></Link>
                    </Tooltip>
                    <Tooltip content="Descargar en PDF">
                        <IconButton radius="large"><DownloadIcon /></IconButton>
                    </Tooltip>
                </Flex>
            </Flex>
        </div>
    )
}