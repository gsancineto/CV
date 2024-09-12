import { Flex } from "@radix-ui/themes";
import Education from "./body/education";
import Experience from "./body/experience";

export default function Body(){



    return (
        <Flex style={{border: "5px solid red"}} gap="3">
            <Education />
            <Experience />
            {/* TODO: armar el timeline vertical, agregar a cada lado segun año la educacion o experiencia */}
            {/* TODO: resolver traduccion */}
        </Flex>
    )
}