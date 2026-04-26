import { AbsoluteCenter, Heading, Stack, Text } from "@chakra-ui/react";
import { FaPython, FaReact } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import ThemeToggle from "../ui/ThemeToggle";
import { RiCodeFill, RiCodeSSlashFill } from "react-icons/ri";

const Home = () => {
    return (
        <>
            {/* <style>
                {`
                    @keyframes colorCycle {
                        0%, 100% { color: #16a34a; }
                        50% { color: #22d3ee; }
                    }
                    .animate-icon {
                        animation: colorCycle 3s ease-in-out infinite;
                    }
                `}
            </style> */}
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
                    <Stack direction="row" fontSize="lg" color={"green.600"}>
                        <RiCodeFill />
                        <a
                            href="https://isocpp.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            // className="animate-icon"
                        >
                            <SiCplusplus />
                        </a>
                        <a
                            href="https://www.python.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            // className="animate-icon"
                            // style={{ animationDelay: "1s" }}
                        >
                            <FaPython />
                        </a>
                        <a
                            href="https://react.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            // className="animate-icon"
                            // style={{ animationDelay: "2s" }}
                        >
                            <FaReact />
                        </a>
                        <RiCodeSSlashFill />
                    </Stack>
                    {/* <SocialLinks /> */}
                </Stack>
            </AbsoluteCenter>
            <ThemeToggle />
        </>
    );
};

export default Home;