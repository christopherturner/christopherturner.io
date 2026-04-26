import { AbsoluteCenter, Heading, Stack } from "@chakra-ui/react";

const NotFound = () => (
    <>
    <AbsoluteCenter>
        <Stack textAlign="center" gap={4}>
            <Heading size="6xl">
                404
            </Heading>
        </Stack>
    </AbsoluteCenter>
    </>
);

export default NotFound;