import { AbsoluteCenter, Heading, Stack, Text, Box } from "@chakra-ui/react";
import { FaPython, FaReact, FaEnvelope } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import ThemeToggle from "../ui/ThemeToggle";
import { RiCodeFill, RiCodeSSlashFill } from "react-icons/ri";

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
            </AbsoluteCenter>

            <Box position="fixed" bottom={4} left={4} zIndex={1000}>
                <a
                    href="/contact"
                    style={{
                        color: "#16a34a",
                        fontSize: "22px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "8px",
                        borderRadius: "8px",
                        transition: "transform 0.2s ease, color 0.2s ease",
                    }}
                    aria-label="Contact Me"
                >
                    <FaEnvelope />
                </a>
            </Box>

            <ThemeToggle />
        </>
    );
};

export default Home;
