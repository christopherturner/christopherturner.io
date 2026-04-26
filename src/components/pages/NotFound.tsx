import { AbsoluteCenter, Heading, HStack, Link, Stack } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import ThemeToggle from "../ui/ThemeToggle";

const NotFound = () => {
    return (
    <>
    <AbsoluteCenter>
        <Stack textAlign="center" gap={4} align="center">
            <Heading size="6xl">
                404
            </Heading>
            <Link
                href="/"
                textDecoration="none"
                color={"green.600"}
                _hover={{ color: "green.500" }}
                transition="color 0.2s"
            >
                <HStack gap={2} justify="center">
                    <FaArrowLeft size={20} />
                    <span>Home</span>
                </HStack>
            </Link>
        </Stack>
    </AbsoluteCenter>
    <ThemeToggle />
    </>
    );
};

export default NotFound;