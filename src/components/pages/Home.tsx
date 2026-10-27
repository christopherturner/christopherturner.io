import { Heading, Stack, Text, Box } from "@chakra-ui/react";
import { FaPython, FaReact } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import ThemeToggle from "../ui/ThemeToggle";
import ContributedTo from "../ui/ContributedTo";
import { RiCodeFill, RiCodeSSlashFill } from "react-icons/ri";

const Home = () => {
    return (
        <>
            <Box
                minH="100vh"
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                py={{ base: 12, md: 16 }}
                px={4}
            >
                <Stack gap={2} align="center" justify="center" textAlign="center">
                    <Heading size="6xl" textAlign="center">
                        Hello
                    </Heading>
                    <Text fontSize="lg" color={"green.600"}>
                        My name is Christopher.
                        <br />
                        I'm a <a href="https://en.wikipedia.org/wiki/Software_engineering" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>software engineer</a>.
                    </Text>
                    <br />
                    <Stack direction="row" fontSize="lg" color={"green.600"}>
                        <RiCodeFill />
                        <a
                            href="https://isocpp.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SiCplusplus />
                        </a>
                        <a
                            href="https://www.python.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaPython />
                        </a>
                        <a
                            href="https://react.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaReact />
                        </a>
                        <RiCodeSSlashFill />
                    </Stack>
                </Stack>

                {/* Contributed To Section */}
                <ContributedTo />
            </Box>
            <ThemeToggle />
        </>
    );
};

export default Home;
