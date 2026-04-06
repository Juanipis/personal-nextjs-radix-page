import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Separator,
  Text,
} from "@radix-ui/themes";
import LinkLogo from "../../components/ui/logos/linkLogo/linkLogo";
import LinkedinLogo from "../../components/ui/logos/linkedinLogo";
import { useCssLibPreference } from "../../components/CssLibPreference";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import {
  logoDarkColor,
  logoLightColor,
} from "../../components/ui/colors/logoColors";
import { motion } from "framer-motion";
import {
  ExperienceItem,
  ExperienceLine,
} from "../../components/ui/timeline/timelineVertical";
import juanipis_avatar_dark from "../../public/avatar_juanipis_dark.jpg";
import juanipis_avatar from "../../public/avatar_juanipis.jpg";
import Head from "next/head";
const name = "Juan Pablo Díaz Correa";
const linkdeinUrl = "https://www.linkedin.com/in/juanipis/";
const email = "juanipis@gmail.com";
function AboutMe() {
  const { accentColor } = useCssLibPreference();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <>
      <Head>
        <title>Juanipis | About me</title>
        <meta
          name="description"
          content="Juanipis personal website, about me"
        />
      </Head>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Flex
          direction="column"
          justify="center"
          align="center"
          grow="1"
          mt="5"
          gap="7"
        >
          <motion.div variants={itemVariants}>
            <Card style={{ maxWidth: "800px" }}>
              <Flex direction="row" justify="center">
                <Box>
                  <motion.div
                    variants={avatarVariants}
                    whileHover="hover"
                  >
                    <Avatar
                      size="7"
                      src={
                        accentColor === "crimson"
                          ? juanipis_avatar_dark.src
                          : juanipis_avatar.src
                      }
                      radius="full"
                      fallback="T"
                    />
                  </motion.div>
                </Box>
              </Flex>

              <motion.div variants={itemVariants}>
                <Heading size="8" align="center">
                  {name}
                </Heading>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Heading size="6" weight="light" align="center">
                  Software Engineer
                </Heading>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Separator my="3" size="4" />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Flex direction="row" justify="center" gap="8">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Flex direction="row" align="center" gap="1">
                      <LinkLogo
                        href={linkdeinUrl}
                        width="15"
                        height="15"
                        logo={LinkedinLogo}
                        paddingBottom="3px"
                      />
                      <Text color={accentColor === "crimson" ? "crimson" : "blue"}>
                        <a href={linkdeinUrl}>LinkedIn</a>
                      </Text>
                    </Flex>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Flex direction="row" align="center" gap="1">
                      <EnvelopeClosedIcon
                        color={
                          accentColor === "crimson" ? logoDarkColor : logoLightColor
                        }
                      />
                      <Text color={accentColor === "crimson" ? "crimson" : "blue"}>
                        <a href={"mailto:" + email}>{email}</a>
                      </Text>
                    </Flex>
                  </motion.div>
                </Flex>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Separator my="3" size="4" />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Flex className="flex-col md:flex-row" gap="5">
                  <motion.div
                    variants={itemVariants}
                    className="ml-3 experience flex flex-col"
                    style={{ maxWidth: "470px" }}
                  >
                    <motion.section
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <Heading size="6">About me</Heading>
                      <Text>
                        <p>
                          As a <strong>Systems and Computing Engineering</strong>{" "}
                          student at <em>EIA University</em>, I&apos;m immersed in a{" "}
                          rigorous, holistic education, fostering my passion for{" "}
                          <strong>software development</strong> and{" "}
                          <strong>technological innovation</strong>.
                        </p>
                        <p>
                          Skilled in <em>web and mobile application development</em>,
                          I utilize languages like <strong>Python</strong> and{" "}
                          <strong>Java</strong>, along with frameworks like{" "}
                          <strong>Flutter</strong>, to craft dynamic,{" "}
                          <em>responsive</em>, and cross-platform solutions. My
                          proficiency extends to managing both relational and
                          non-relational databases such as <strong>PostgreSQL</strong>{" "}
                          and <strong>Firebase</strong>, ensuring efficient and secure
                          data handling.
                        </p>
                      </Text>
                    </motion.section>
                    <Separator my="3" size="4" />
                    <motion.section
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      <Heading size="6">Experience</Heading>
                      <Box mt="2" />
                      <ExperienceLine>
                        <ExperienceItem>
                          <Flex direction="column">
                            <Heading size="3">Software Developer (Independent Contractor)</Heading>
                            <Text>Dec 2025 - Present</Text>
                            <Text weight="medium">
                              <a href="https://www.procol.no/">
                                PROCOL
                              </a>
                            </Text>
                            <Text>
                              Led the technical direction and development of enterprise
                              applications on the Microsoft Power Platform ecosystem.
                            </Text>
                            <ul className=" ml-5" style={{ listStyleType: "disc" }}>
                              <li>
                                Led the technical direction and development from inception
                                of an enterprise extra work and resource management
                                application using React, TypeScript, and Microsoft Power
                                Platform (Code Apps). Made key architectural decisions
                                including clean architecture adoption, technology stack
                                selection, and development standards.
                              </li>
                              <li>
                                Designed role-based access control integrating Microsoft
                                Entra ID security groups, Office 365 Groups, and Dataverse
                                business units. Played a key role in the solution migration
                                to the client&apos;s Power Platform environment.
                              </li>
                              <li>
                                Created Azure Pipelines for automated deployment and PR
                                validation with multi-environment support using Power
                                Platform CLI.
                              </li>
                              <li>
                                Led the research, technical understanding, and development
                                of a web application for Autodesk platform integration
                                including 3D model viewing.
                              </li>
                              <li>
                                Built Power Automate cloud flows and integrated Dataverse
                                environment variables for cross-environment configuration.
                              </li>
                            </ul>
                          </Flex>
                        </ExperienceItem>
                        <ExperienceItem>
                          <Flex direction="column">
                            <Heading size="3">AI Developer (Freelancer)</Heading>
                            <Text>Aug 2025 - Present</Text>
                            <Text weight="medium">
                              ABACO - Asociación de Bancos de Alimentos de Colombia
                            </Text>
                            <Text>
                              Designed and built AI agents and RAG systems for child
                              nutrition monitoring and strategic analysis.
                            </Text>
                            <ul className=" ml-5" style={{ listStyleType: "disc" }}>
                              <li>
                                Built specialized intelligent agents including the Policy
                                Insights Agent and Observatory Agent using SmolAgents and
                                LangGraph with OpenAI models via Azure.
                              </li>
                              <li>
                                Developed the Research Docs Summarizer and RAG Execute Job
                                systems for document indexing, automated summarization, and
                                retrieval.
                              </li>
                              <li>
                                Built the ANSI Automatic Extractor for automated data
                                collection. Implemented cloud architectures using AWS
                                Lambda, S3, ECR, and API Gateway.
                              </li>
                            </ul>
                          </Flex>
                        </ExperienceItem>
                        <ExperienceItem>
                          <Flex direction="column">
                            <Heading size="3">Intern</Heading>
                            <Text>Jan 2025 - Jul 2025</Text>
                            <Text weight="medium">
                              <a href="https://www.isa.co/">
                                ISA Interconexión Eléctrica S.A. E.S.P.
                              </a>
                            </Text>
                            <Text>
                              Contributed to the digitization of field visit
                              processes and development of data processing tools.
                            </Text>
                            <ul className=" ml-5" style={{ listStyleType: "disc" }}>
                              <li>
                                Replaced a manual Excel-based process with a smart
                                form in Survey123 for the Substation Coordination
                                area, enabling capture of georeferenced photos, voice
                                notes, text, and multiple-choice selections, with
                                data automatically sent via webhook to a SharePoint
                                site (DataTrip).
                              </li>
                              <li>
                                Developed a desktop application using Python and the
                                Flet framework (based on Flutter) to process this
                                data: JSON and multimedia files were extracted from
                                each visit, automatically generating an Excel report.
                                Voice notes were transcribed locally using AI with the
                                faster-whisper model.
                              </li>
                              <li>
                                The application also exports georeferenced images to a
                                .kmz file, allowing easy visualization in Google
                                Earth.
                              </li>
                              <li>
                                Packaged the application as an executable installer
                                for Windows, facilitating its distribution and
                                installation.
                              </li>
                              <li>
                                Technologies Used: Python, Flutter (Flet), Microsoft
                                Power Automate, ArcGIS, Survey123.
                              </li>
                            </ul>
                          </Flex>
                        </ExperienceItem>
                        <ExperienceItem>
                          <Flex direction="column">
                            <Heading size="3">Fullstack developer</Heading>
                            <Text>Jun 2023 - Feb 2024</Text>
                            <Text weight="medium">
                              <a href="https://kuenta.co/">Kuenta</a>
                            </Text>
                            <Text>
                              A dedicated Full Stack Developer skilled in Go,
                              TypeScript (Angular+Ionic), Java, and Python, focused on
                              the design and enhancement of software functionalities.
                            </Text>
                            <ul className=" ml-5" style={{ listStyleType: "disc" }}>
                              <li>
                                Lead full-stack software development initiatives.
                              </li>
                              <li>
                                Design, implement, and maintain software features.
                              </li>
                              <li>
                                Participate in development sprints, ensuring clean and
                                structured coding practices.
                              </li>
                              <li>
                                Adhere to confidentiality and exclusivity agreements,
                                maintaining professional integrity.
                              </li>
                            </ul>
                          </Flex>
                        </ExperienceItem>
                      </ExperienceLine>
                    </motion.section>
                  </motion.div>
                  <div>
                    <Separator
                      className="hidden md:block"
                      orientation="vertical"
                      size="4"
                    />
                  </div>
                  <div>
                    <Separator className="md:hidden" size="4" />
                  </div>
                  <motion.div
                    variants={itemVariants}
                    className="other flex flex-col"
                    style={{ maxWidth: "500px" }}
                  >
                    <motion.section
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <Heading size="6">Tech Stack</Heading>
                      <motion.div
                        className="mt-2 flex flex-row flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, staggerChildren: 0.1 }}
                      >
                        {["Python", "Java", "MongoDB", "PostgreSQL", "Go", "Flutter"].map((tech, index) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2 + index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            <Button variant="surface" size="2">
                              {tech}
                            </Button>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.section>
                    <Separator my="3" size="4" />
                    <motion.section
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      <Heading size="6">Education</Heading>
                      <Box mt="2">
                        <Flex direction="column" gap="1">
                          <Heading size="3">Systems Engineering</Heading>
                          <Text>EIA University</Text>
                          <Text>2021 - 2025 (Graduated)</Text>
                        </Flex>
                      </Box>
                    </motion.section>
                    <Separator my="3" size="4" />
                    <motion.section
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                    >
                      <Heading size="6">Languages</Heading>
                      <Box mt="2">
                        <Flex direction="column" gap="1">
                          <Text>Spanish (native)</Text>
                          <Text>English (in progress)</Text>
                        </Flex>
                      </Box>
                    </motion.section>
                    <Separator my="3" size="4" />
                    <motion.section
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4, duration: 0.5 }}
                    >
                      <Heading size="6">Soft skills</Heading>
                      <Box mt="2">
                        <motion.div
                          className="flex flex-col gap-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.6, staggerChildren: 0.1 }}
                        >
                          {["Teamwork", "Problem solving", "Leadership", "Communication", "Adaptability", "Time management", "Vibe coding"].map((skill, index) => (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1.6 + index * 0.1 }}
                            >
                              <Text>{skill}</Text>
                            </motion.div>
                          ))}
                        </motion.div>
                      </Box>
                    </motion.section>
                  </motion.div>
                </Flex>
              </motion.div>
            </Card>
          </motion.div>
          <Box mt="1" />
        </Flex>
      </motion.div>
    </>
  );
}

export default AboutMe;
