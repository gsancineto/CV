import { Container, Separator } from "@radix-ui/themes";
import Header from "./header";
import Body from "./body";

export default function Home() {



    return (
        <Container>
            <Header />
            <Separator my="3" size="4"  />
            <Body />
        </Container>
    )
}