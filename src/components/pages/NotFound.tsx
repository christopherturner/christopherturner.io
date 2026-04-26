import { AbsoluteCenter, Heading, HStack, Link, Stack } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import ThemeToggle from "../ui/ThemeToggle";
import { useColorModeValue } from "../ui/color-mode";

const NotFound = () => {
    const linkColor = useColorModeValue("green.600", "cyan.400");
    const hoverColor = useColorModeValue("green.500", "cyan.300");

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
                color={linkColor}
                _hover={{ color: hoverColor }}
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