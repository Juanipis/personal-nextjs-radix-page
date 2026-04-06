import { Avatar, Heading, Text, Separator } from "@radix-ui/themes";
import { useCssLibPreference } from "../../components/CssLibPreference";
import { useI18n } from "../i18n";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import {
  logoDarkColor,
  logoLightColor,
} from "../../components/ui/colors/logoColors";
import { motion } from "framer-motion";
import {
  ExperienceItem,
  ExperienceLine,
  ConcurrentGroup,
} from "../../components/ui/timeline/timelineVertical";
import { LinkedInLogo } from "../../components/ui/logos/logos";
import LinkLogo from "../../components/ui/logos/linkLogo/linkLogo";
import juanipis_avatar_dark from "../../public/avatar_juanipis_dark.jpg";
import juanipis_avatar from "../../public/avatar_juanipis.jpg";
import Head from "next/head";

const name = "Juan Pablo Diaz Correa";
const linkedinUrl = "https://www.linkedin.com/in/juanipis/";
const email = "juanipis@gmail.com";

const techStack = [
  "Python",
  "TypeScript",
  "Java",
  "Go",
  "React",
  "Angular",
  "Flutter",
  "Next.js",
  "NestJS",
  "Spring Boot",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "Docker",
  "AWS",
  "Azure",
  "Power Platform",
  "OpenAI",
];

function AboutMe() {
  const { accentColor } = useCssLibPreference();
  const { t } = useI18n();
  const isDark = accentColor === "crimson";
  const logoColor = isDark ? logoDarkColor : logoLightColor;

  const experiences = t("about.experiences") as Array<{
    role: string;
    period: string;
    company: string;
    companyUrl?: string;
    concurrent?: string;
    summary: string;
    highlights: string[];
  }>;

  // Group experiences: concurrent items share the same `concurrent` key
  type ExpType = (typeof experiences)[number];
  type GroupedItem =
    | { type: "single"; exp: ExpType; index: number }
    | { type: "concurrent"; exps: ExpType[]; startIndex: number; key: string };

  const grouped: GroupedItem[] = [];
  let i = 0;
  while (i < experiences.length) {
    const exp = experiences[i];
    if (exp.concurrent) {
      const key = exp.concurrent;
      const concurrentExps: ExpType[] = [exp];
      let j = i + 1;
      while (j < experiences.length && experiences[j].concurrent === key) {
        concurrentExps.push(experiences[j]);
        j++;
      }
      grouped.push({ type: "concurrent", exps: concurrentExps, startIndex: i, key });
      i = j;
    } else {
      grouped.push({ type: "single", exp, index: i });
      i++;
    }
  }

  const softSkills = t("about.softSkills") as string[];

  return (
    <>
      <Head>
        <title>{t("meta.aboutTitle")}</title>
        <meta name="description" content={t("meta.aboutDesc")} />
        <meta property="og:title" content={t("meta.aboutTitle")} />
        <meta property="og:description" content={t("meta.aboutDesc")} />
        <meta property="og:url" content="https://juanipis.vercel.app/about-me/" />
      </Head>

      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Profile Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "backOut" as const }}
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-4"
            >
              <Avatar
                size="8"
                src={isDark ? juanipis_avatar_dark.src : juanipis_avatar.src}
                fallback="JP"
                radius="full"
                style={{
                  boxShadow: isDark
                    ? "0 0 0 4px rgba(225, 29, 72, 0.3)"
                    : "0 0 0 4px rgba(59, 130, 246, 0.3)",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Heading
                size="8"
                className={isDark ? "gradient-text-crimson" : "gradient-text-blue"}
                style={{ lineHeight: 1.2, paddingBottom: "0.1em" }}
              >
                {name}
              </Heading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Text size="5" className="opacity-60">
                {t("about.title")}
              </Text>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center gap-6 mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <LinkLogo
                  href={linkedinUrl}
                  width="15"
                  height="15"
                  logo={LinkedInLogo}
                  paddingBottom="2px"
                />
                <Text size="2">LinkedIn</Text>
              </motion.a>
              <motion.a
                href={"mailto:" + email}
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <EnvelopeClosedIcon color={logoColor} />
                <Text size="2">{email}</Text>
              </motion.a>
            </motion.div>
          </motion.div>

          <Separator size="4" className="mb-10 opacity-30" />

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10">
            {/* Left: About + Experience */}
            <div>
              {/* About */}
              <motion.section
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <Heading size="5" className="mb-3">
                  {t("about.aboutHeading")}
                </Heading>
                <Text
                  size="3"
                  className="opacity-70 leading-relaxed"
                  as="p"
                  dangerouslySetInnerHTML={{ __html: t("about.aboutText") }}
                />
              </motion.section>

              <Separator size="4" className="mb-8 opacity-20" />

              {/* Experience */}
              <motion.section
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <Heading size="5" className="mb-4">
                  {t("about.experienceHeading")}
                </Heading>
                <ExperienceLine>
                  {grouped.map((item, gIdx) => {
                    if (item.type === "concurrent") {
                      return (
                        <ConcurrentGroup
                          key={`group-${item.key}`}
                          label={t("about.currentLabel")}
                        >
                          {item.exps.map((exp, cIdx) => (
                            <motion.div
                              key={cIdx}
                              initial={{ opacity: 0, y: 15 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: cIdx * 0.15,
                                duration: 0.4,
                              }}
                            >
                              <Heading size="3">{exp.role}</Heading>
                              <Text size="2" className="opacity-50" as="p">
                                {exp.period}
                              </Text>
                              <Text size="2" weight="medium" as="p">
                                {exp.companyUrl ? (
                                  <a
                                    href={exp.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {exp.company}
                                  </a>
                                ) : (
                                  exp.company
                                )}
                              </Text>
                              <Text size="2" className="opacity-60 mt-1" as="p">
                                {exp.summary}
                              </Text>
                              <ul className="ml-4 mt-2 space-y-1 list-disc">
                                {exp.highlights.map((h, i) => (
                                  <li key={i}>
                                    <Text size="1" className="opacity-50">
                                      {h}
                                    </Text>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </ConcurrentGroup>
                      );
                    }
                    const exp = item.exp;
                    return (
                      <ExperienceItem key={`single-${item.index}`} isLatest={false}>
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: gIdx * 0.1,
                            duration: 0.4,
                          }}
                        >
                          <Heading size="3">{exp.role}</Heading>
                          <Text size="2" className="opacity-50" as="p">
                            {exp.period}
                          </Text>
                          <Text size="2" weight="medium" as="p">
                            {exp.companyUrl ? (
                              <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {exp.company}
                              </a>
                            ) : (
                              exp.company
                            )}
                          </Text>
                          <Text size="2" className="opacity-60 mt-1" as="p">
                            {exp.summary}
                          </Text>
                          <ul className="ml-4 mt-2 space-y-1 list-disc">
                            {exp.highlights.map((h, i) => (
                              <li key={i}>
                                <Text size="1" className="opacity-50">
                                  {h}
                                </Text>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </ExperienceItem>
                    );
                  })}
                </ExperienceLine>
              </motion.section>
            </div>

            {/* Right: Tech, Education, Languages, Skills */}
            <div>
              {/* Tech Stack */}
              <motion.section
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <Heading size="5" className="mb-3">
                  {t("about.techStackHeading")}
                </Heading>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03, duration: 0.3 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 rounded-full text-sm font-medium text-white"
                      style={{
                        background: isDark
                          ? "linear-gradient(135deg, #e11d48, #f97316)"
                          : "linear-gradient(135deg, #3b82f6, #06b6d4)",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.section>

              <Separator size="4" className="mb-8 opacity-20" />

              {/* Education */}
              <motion.section
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-8"
              >
                <Heading size="5" className="mb-3">
                  {t("about.educationHeading")}
                </Heading>
                <div
                  className="p-4 rounded-xl border border-white/10"
                  style={{
                    background: isDark
                      ? "rgba(255,255,255,0.03)"
                      : "rgba(255,255,255,0.5)",
                  }}
                >
                  <Heading size="3">{t("about.educationDegree")}</Heading>
                  <Text size="2" className="opacity-60" as="p">
                    {t("about.educationSchool")}
                  </Text>
                  <Text size="2" className="opacity-40" as="p">
                    {t("about.educationPeriod")}
                  </Text>
                </div>
              </motion.section>

              <Separator size="4" className="mb-8 opacity-20" />

              {/* Languages */}
              <motion.section
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-8"
              >
                <Heading size="5" className="mb-3">
                  {t("about.languagesHeading")}
                </Heading>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <Text size="2">{t("about.spanish")}</Text>
                      <Text size="1" className="opacity-50">
                        {t("about.native")}
                      </Text>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: isDark
                            ? "linear-gradient(90deg, #e11d48, #f97316)"
                            : "linear-gradient(90deg, #3b82f6, #06b6d4)",
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <Text size="2">{t("about.english")}</Text>
                      <Text size="1" className="opacity-50">
                        B2
                      </Text>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: isDark
                            ? "linear-gradient(90deg, #e11d48, #f97316)"
                            : "linear-gradient(90deg, #3b82f6, #06b6d4)",
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.section>

              <Separator size="4" className="mb-8 opacity-20" />

              {/* Soft Skills */}
              <motion.section
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Heading size="5" className="mb-3">
                  {t("about.softSkillsHeading")}
                </Heading>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill: string, index: number) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-full text-sm border border-white/15 glass-subtle"
                      style={{
                        background: isDark
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(255,255,255,0.6)",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
