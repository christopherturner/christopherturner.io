import { HStack } from "@chakra-ui/react";
import {
  FaGithub
} from "react-icons/fa";

interface SocialLink {
  icon: React.ComponentType<{ size?: number }>;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: FaGithub, href: "https://github.com/christopherturner", label: "GitHub" },
];

const SocialLinks = () => (
  <HStack gap={6} justify="center">
    {socialLinks.map((link) => (
      <a
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        style={{
          color: "gray",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = "gray.900"}
        onMouseLeave={(e) => e.currentTarget.style.color = "gray"}
      >
        <link.icon size={24} />
      </a>
    ))}
  </HStack>
);

export default SocialLinks;