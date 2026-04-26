import { AbsoluteCenter, Heading, Stack, Text } from "@chakra-ui/react";
import ThemeToggle from "../ui/ThemeToggle";
import { useColorModeValue } from "../ui/color-mode";

const Home = () => {
    const textColor = useColorModeValue("gray.500", "cyan.400");

    return (
    <>
    <AbsoluteCenter>
        <Stack gap={2} align="center" justify="center">
            <Heading size="6xl">
                Hello
            </Heading>
            <Text fontSize="lg" color={textColor}>
                Nice to meet you. My name is Christopher.
                <br />
                I'm a software engineer & tinkerer.
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