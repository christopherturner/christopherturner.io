import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { contributions } from "../../data/contributions";

const ContributedTo: React.FC = () => {
    return (
        <Box mt={6} px={4} display="flex" flexDirection="column" alignItems="center">
            <style>
                {`
                .compact-tile {
                    position: relative;
                    background: rgba(16, 185, 129, 0.03);
                    border: 1px solid rgba(16, 185, 129, 0.2);
                    border-radius: 6px;
                    padding: 8px 12px;
                    text-decoration: none;
                    transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                    width: 100%;
                    max-width: 320px;
                }

                .dark .compact-tile {
                    background: rgba(12, 24, 18, 0.5);
                    border: 1px solid rgba(52, 211, 153, 0.18);
                }

                .compact-tile:hover {
                    background: rgba(16, 185, 129, 0.06);
                    border-color: #10b981;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 14px -2px rgba(16, 185, 129, 0.2);
                }

                .dark .compact-tile:hover {
                    background: rgba(16, 36, 26, 0.65);
                    border-color: #34d399;
                    box-shadow: 0 4px 16px -2px rgba(16, 185, 129, 0.28);
                }

                .compact-tile:focus-visible {
                    outline: 2px solid #10b981;
                    outline-offset: 2px;
                }

                .compact-tile .tile-arrow {
                    opacity: 0.4;
                    transition: opacity 0.2s ease, transform 0.2s ease, color 0.2s ease;
                }

                .compact-tile:hover .tile-arrow {
                    opacity: 1;
                    transform: translate(1px, -1px);
                    color: #10b981;
                }

                @media (prefers-reduced-motion: reduce) {
                    .compact-tile,
                    .compact-tile .tile-arrow {
                        transition: none !important;
                        transform: none !important;
                    }
                }
                `}
            </style>

            {/* Subtle, restrained label */}
            <Stack gap={1} align="center" mb={2.5}>
                <Box display="flex" alignItems="center" gap={2}>
                    <Box
                        width="30px"
                        height="1px"
                        bg="linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.35))"
                    />
                    <Text
                        fontSize="2xs"
                        fontWeight="500"
                        letterSpacing="0.08em"
                        color="green.600"
                        textTransform="uppercase"
                    >
                        Contributed To
                    </Text>
                    <Box
                        width="30px"
                        height="1px"
                        bg="linear-gradient(90deg, rgba(16, 185, 129, 0.35), transparent)"
                    />
                </Box>
            </Stack>

            {/* Small Compact Tile */}
            {contributions.map((item) => (
                <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="compact-tile"
                    aria-label={`Contributed to ${item.name}: ${item.description}`}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        gap={2}
                    >
                        <Box display="flex" alignItems="center" gap={2}>
                            <img
                                src={item.logoSrc}
                                alt="Covid Act Now logo"
                                width={16}
                                height={16}
                                style={{
                                    borderRadius: "3px",
                                    objectFit: "contain",
                                    flexShrink: 0,
                                }}
                            />
                            <Text
                                fontWeight="600"
                                fontSize="xs"
                                letterSpacing="-0.01em"
                                color="fg"
                            >
                                {item.name}
                            </Text>
                        </Box>

                        <Box className="tile-arrow">
                            <RiArrowRightUpLine size={13} />
                        </Box>
                    </Box>

                    <Text
                        fontSize="11px"
                        color="fg.muted"
                        lineHeight="1.35"
                    >
                        {item.description}
                    </Text>
                </a>
            ))}
        </Box>
    );
};

export default ContributedTo;
