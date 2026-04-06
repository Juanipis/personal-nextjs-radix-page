import { Heading, Text } from "@radix-ui/themes";
import {
  LinkedInLogo,
  InstagramLogo,
  GitHubLogo,
} from "../../components/ui/logos/logos";
import Head from "next/head";
import { motion } from "framer-motion";
import { useCssLibPreference } from "../../components/CssLibPreference";
import { useI18n } from "../i18n";
import {
  logoDarkColor,
  logoLightColor,
} from "../../components/ui/colors/logoColors";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

const socials = [
  {
    name: "GitHub",
    handle: "@Juanipis",
    url: "https://github.com/Juanipis",
    Logo: GitHubLogo,
  },
  {
    name: "LinkedIn",
    handle: "in/juanipis",
    url: "https://www.linkedin.com/in/juanipis/",
    Logo: LinkedInLogo,
  },
  {
    name: "Instagram",
    handle: "@juanipis",
    url: "https://www.instagram.com/juanipis/",
    Logo: InstagramLogo,
  },
];

const email = "juanipis@gmail.com";

function Contacts() {
  const { accentColor } = useCssLibPreference();
  const { t } = useI18n();
  const isDark = accentColor === "crimson";
  const logoColor = isDark ? logoDarkColor : logoLightColor;

  return (
    <>
      <Head>
        <title>{t("meta.contactTitle")}</title>
        <meta name="description" content={t("meta.contactDesc")} />
        <meta property="og:title" content={t("meta.contactTitle")} />
        <meta property="og:description" content={t("meta.contactDesc")} />
        <meta property="og:url" content="https://juanipis.vercel.app/contact/" />
      </Head>

      <section
        className={`min-h-[85vh] flex items-center justify-center px-4 sm:px-8 ${
          isDark ? "mesh-gradient-dark" : "mesh-gradient-light"
        }`}
      >
        <div className="max-w-3xl w-full py-16">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heading
              size="9"
              className={isDark ? "gradient-text-crimson" : "gradient-text-blue"}
              style={{ lineHeight: 1.1, paddingBottom: "0.1em" }}
            >
              {t("contact.heading")}
            </Heading>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-4"
            >
              <Text size="5" className="opacity-60">
                {t("contact.subtitle")}
              </Text>
            </motion.div>
          </motion.div>

          {/* Social Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="flex flex-col items-center gap-3 p-6 rounded-xl glass-subtle border border-white/10 hover:border-white/25 hover:shadow-lg transition-shadow cursor-pointer"
                style={{
                  background: isDark
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <social.Logo width="36" height="36" fill={logoColor} />
                <div className="text-center">
                  <Text size="3" weight="bold" as="p">
                    {social.name}
                  </Text>
                  <Text size="1" className="opacity-50" as="p">
                    {social.handle}
                  </Text>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Email CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.a
              href={"mailto:" + email}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-shadow"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, #e11d48, #f97316)"
                  : "linear-gradient(135deg, #3b82f6, #06b6d4)",
                textDecoration: "none",
              }}
            >
              <EnvelopeClosedIcon width="16" height="16" />
              {email}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
