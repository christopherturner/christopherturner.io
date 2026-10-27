import React, { useState, useRef } from "react";
import { Box, Stack, Heading, Text, Input, Textarea, Button, Link as ChakraLink } from "@chakra-ui/react";
import { LuArrowLeft, LuSend, LuCircleCheck } from "react-icons/lu";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import ThemeToggle from "../ui/ThemeToggle";
import { useColorMode } from "../ui/color-mode";

// Web3Forms access key
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || "5eb0db0e-764d-488d-abb5-9fb0291de67f";

// Free plan default sitekey per Web3Forms documentation
const HCAPTCHA_SITEKEY =
    import.meta.env.VITE_HCAPTCHA_SITEKEY || "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

interface FormState {
    name: string;
    email: string;
    message: string;
    botcheck: string;
}

const Contact: React.FC = () => {
    const { colorMode } = useColorMode();
    const captchaRef = useRef<HCaptcha | null>(null);

    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        message: "",
        botcheck: "",
    });
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleCaptchaVerify = (token: string) => {
        setCaptchaToken(token);
        if (errorMessage === "Please complete the captcha verification.") {
            setErrorMessage("");
        }
    };

    const handleCaptchaExpire = () => {
        setCaptchaToken(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;

        if (!captchaToken) {
            setErrorMessage("Please complete the captcha verification.");
            setStatus("error");
            return;
        }

        setStatus("submitting");
        setErrorMessage("");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: ACCESS_KEY,
                    name: form.name,
                    email: form.email,
                    message: form.message,
                    botcheck: form.botcheck,
                    "h-captcha-response": captchaToken,
                    subject: `New message from ${form.name} (christopherturner.io)`,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                setForm({ name: "", email: "", message: "", botcheck: "" });
                setCaptchaToken(null);
                captchaRef.current?.resetCaptcha();
            } else {
                setStatus("error");
                setErrorMessage(data.message || "Something went wrong. Please try again.");
                captchaRef.current?.resetCaptcha();
                setCaptchaToken(null);
            }
        } catch {
            setStatus("error");
            setErrorMessage("Network error. Please check your connection and try again.");
        }
    };

    return (
        <>
            <Box
                minH="100vh"
                width="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                py={{ base: 10, md: 16 }}
                px={4}
            >
                <style>
                    {`
                    .contact-card {
                        background: rgba(16, 185, 129, 0.02);
                        border: 1px solid rgba(16, 185, 129, 0.2);
                        border-radius: 10px;
                        backdrop-filter: blur(8px);
                        width: 100%;
                        max-width: 460px;
                        padding: 28px 24px;
                    }

                    .dark .contact-card {
                        background: rgba(12, 24, 18, 0.55);
                        border: 1px solid rgba(52, 211, 153, 0.18);
                    }

                    .contact-input {
                        background: rgba(255, 255, 255, 0.6) !important;
                        border: 1px solid rgba(16, 185, 129, 0.25) !important;
                        border-radius: 6px !important;
                        font-size: 14px !important;
                        transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
                    }

                    .dark .contact-input {
                        background: rgba(10, 18, 14, 0.6) !important;
                        border: 1px solid rgba(52, 211, 153, 0.22) !important;
                        color: #f1f5f9 !important;
                    }

                    .contact-input:focus {
                        border-color: #10b981 !important;
                        box-shadow: 0 0 0 1px #10b981 !important;
                    }

                    .hcaptcha-wrapper {
                        display: flex;
                        justify-content: center;
                        margin-top: 4px;
                        overflow: hidden;
                        border-radius: 6px;
                    }
                    `}
                </style>

                <Box className="contact-card">
                    {/* Header */}
                    <Stack gap={1} mb={6} textAlign="center" align="center">
                        <Heading size="xl" letterSpacing="-0.02em">
                            Contact
                        </Heading>
                        <Text fontSize="xs" color="fg.muted">
                            Send a note directly to my inbox.
                        </Text>
                    </Stack>

                    {status === "success" ? (
                        <Stack gap={4} align="center" textAlign="center" py={6}>
                            <Box color="green.600" fontSize="3xl">
                                <LuCircleCheck size={40} />
                            </Box>
                            <Heading size="md" color="fg">
                                Message sent
                            </Heading>
                            <Text fontSize="xs" color="fg.muted" maxW="280px">
                                Thank you for reaching out. I'll get back to you as soon as possible.
                            </Text>
                            <Button
                                size="sm"
                                variant="outline"
                                colorPalette="green"
                                mt={2}
                                onClick={() => setStatus("idle")}
                            >
                                Send another message
                            </Button>
                        </Stack>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            {/* Honeypot spam field */}
                            <input
                                type="checkbox"
                                name="botcheck"
                                className="hidden"
                                style={{ display: "none" }}
                                checked={!!form.botcheck}
                                onChange={(e) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        botcheck: e.target.checked ? "checked" : "",
                                    }))
                                }
                            />

                            <Stack gap={4}>
                                <Stack gap={1}>
                                    <Text fontSize="xs" fontWeight="500" color="fg">
                                        Name
                                    </Text>
                                    <Input
                                        className="contact-input"
                                        name="name"
                                        placeholder="Your name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        disabled={status === "submitting"}
                                    />
                                </Stack>

                                <Stack gap={1}>
                                    <Text fontSize="xs" fontWeight="500" color="fg">
                                        Email
                                    </Text>
                                    <Input
                                        className="contact-input"
                                        type="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        disabled={status === "submitting"}
                                    />
                                </Stack>

                                <Stack gap={1}>
                                    <Text fontSize="xs" fontWeight="500" color="fg">
                                        Message
                                    </Text>
                                    <Textarea
                                        className="contact-input"
                                        name="message"
                                        placeholder="How can I help you?"
                                        rows={4}
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        disabled={status === "submitting"}
                                    />
                                </Stack>

                                {/* hCaptcha verification */}
                                <Box className="hcaptcha-wrapper">
                                    <HCaptcha
                                        ref={captchaRef}
                                        sitekey={HCAPTCHA_SITEKEY}
                                        reCaptchaCompat={false}
                                        onVerify={handleCaptchaVerify}
                                        onExpire={handleCaptchaExpire}
                                        theme={colorMode === "dark" ? "dark" : "light"}
                                    />
                                </Box>

                                {status === "error" && (
                                    <Box
                                        p={2.5}
                                        borderRadius="md"
                                        bg="red.500/10"
                                        border="1px solid"
                                        borderColor="red.500/30"
                                    >
                                        <Text fontSize="xs" color="red.500" textAlign="center">
                                            {errorMessage}
                                        </Text>
                                    </Box>
                                )}

                                <Button
                                    type="submit"
                                    bg="green.600"
                                    color="white"
                                    _hover={{ bg: "green.700" }}
                                    size="sm"
                                    width="100%"
                                    mt={1}
                                    disabled={status === "submitting"}
                                >
                                    <LuSend size={14} style={{ marginRight: "6px" }} />
                                    {status === "submitting" ? "Sending..." : "Send Message"}
                                </Button>
                            </Stack>
                        </form>
                    )}

                    {/* Back link */}
                    <Box mt={6} pt={4} borderTop="1px solid" borderColor="green.600/15" textAlign="center">
                        <ChakraLink
                            href="/"
                            fontSize="xs"
                            color="green.600"
                            display="inline-flex"
                            alignItems="center"
                            gap={1}
                            _hover={{ textDecoration: "underline" }}
                        >
                            <LuArrowLeft size={13} />
                            Back to Home
                        </ChakraLink>
                    </Box>
                </Box>
            </Box>
            <ThemeToggle />
        </>
    );
};

export default Contact;
