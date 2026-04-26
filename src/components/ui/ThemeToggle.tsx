import { Box } from "@chakra-ui/react";
import { ColorModeButton } from "./color-mode";

const ThemeToggle = () => (
  <Box
    position="fixed"
    bottom="4"
    right="4"
    zIndex="1000"
  >
    <ColorModeButton />
  </Box>
);

export default ThemeToggle;