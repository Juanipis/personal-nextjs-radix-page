import React from "react";
import { Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useCssLibPreference } from "../../components/CssLibPreference";
import { useI18n } from "../i18n";
import { motion } from "framer-motion";

import juanipis_cover_photo_dark from "../../public/cover-photo-dark.jpg";
import juanipis_cover_photo_light from "../../public/cover-photo-light.jpg";

import {
  GoLogo,
  JavaLogo,
  MongoDBLogo,
  PostgreSQLLogo,
  PythonLogo,
  FlutterLogo,
  SpiderLogo,
  HikingLogo,
  TypescriptLogo,
  ReactLogo,
  AWSLogo,
  AzureLogo,
  DockerLogo,
} from "../../components/ui/logos/logos";
import {
  logoDarkColor,
  logoLightColor,
} from "../../components/ui/colors/logoColors";
import Head from "next/head";

const techs = [
  { component: PythonLogo, label: "Python" },
  { component: TypescriptLogo, label: "TypeScript" },
  { component: JavaLogo, label: "Java" },
  { component: GoLogo, label: "Go", width: "60", height: "60" },
  { component: ReactLogo, label: "React" },
  { component: FlutterLogo, label: "Flutter" },
  { component: PostgreSQLLogo, label: "PostgreSQL" },
  { component: MongoDBLogo, label: "MongoDB" },
  { component: DockerLogo, label: "Docker" },
  { component: AWSLogo, label: "AWS" },
  { component: AzureLogo, label: "Azure" },
];

export default function Home() {
  const { accentColor } = useCssLibPreference();
  const { t } = useI18n();
  const isDark = accentColor === "crimson";
  const logoColor = isDark ? logoDarkColor : logoLightColor;

  return (
    <>
      <Head>
        <title>{t("meta.homeTitle")}</title>
        <meta name="description" content={t("meta.homeDesc")} />
        <meta property="og:title" content={t("meta.homeTitle")} />
        <meta property="og:description" content={t("meta.homeDesc")} />
        <meta property="og:url" content="https://juanipis.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <section
        className={`min-h-[85vh] flex items-center justify-center px-4 sm:px-8 ${
          isDark ? "mesh-gradient-dark" : "mesh-gradient-light"
        }`}
      >
        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? (
                  <SpiderLogo fill={logoDarkColor} width="50" height="50" />
                ) : (
                  <HikingLogo fill={logoLightColor} width="50" height="50" />
                )}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Heading
                size={{ initial: "8", md: "9" }}
                className={isDark ? "gradient-text-crimson" : "gradient-text-blue"}
                style={{ lineHeight: 1.1, paddingBottom: "0.1em" }}
              >
                {t("home.greeting")}
              </Heading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-4"
            >
              <Text size="6" className="opacity-70">
                {t("home.subtitle")}
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-6 max-w-xl mx-auto lg:mx-0"
            >
              <Text size="4" className="opacity-60 leading-relaxed">
                {t("home.description")}
              </Text>
            </motion.div>
          </motion.div>

          {/* Cover Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" as const }}
          >
            <motion.div
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src={isDark ? juanipis_cover_photo_dark.src : juanipis_cover_photo_light.src}
                alt="Juan Pablo Diaz Correa"
                width={380}
                height={500}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <Heading size="6" className="opacity-80">
              {t("home.techHeading")}
            </Heading>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
            {techs.map((tech, index) => (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="flex flex-col items-center gap-3 p-4 rounded-xl glass-subtle border border-white/10 hover:border-white/25 hover:shadow-lg transition-shadow"
                style={{
                  background: isDark
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(255,255,255,0.5)",
                }}
              >
                {React.createElement(tech.component, {
                  fill: logoColor,
                  width: tech.width || "40",
                  height: tech.height || "40",
                })}
                <Text size="2" className="opacity-60 font-medium">
                  {tech.label}
                </Text>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
