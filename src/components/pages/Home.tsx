import { AbsoluteCenter, Heading, Stack, Text } from "@chakra-ui/react";
import ThemeToggle from "../ui/ThemeToggle";

const Home = () => {
    return (
        <>
            <AbsoluteCenter>
                <Stack gap={2} align="center" justify="center">
                    <Heading size="6xl" textAlign="center">
                        Hello
                    </Heading>
                    <Text fontSize="lg" color={"green.600"}>
                        My name is Christopher.
                        <br />
                        I'm a software engineer.
                    </Text>
                    <br />
                    {/* <SocialLinks /> */}
                </Stack>
            </AbsoluteCenter>
            <ThemeToggle />
        </>
    );
};

export default Home;