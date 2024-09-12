import { Flex } from "@radix-ui/themes";
import Education from "./body/education";
import Experience from "./body/experience";

export default function Body(){
    return (
        <Flex gap="3">
            <Education />
            <div className="timeline-line"></div>
            <Experience />
            {/* TODO: resolver traduccion */}
        </Flex>
    )
}