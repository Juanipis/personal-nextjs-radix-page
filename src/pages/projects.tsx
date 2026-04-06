import { Heading, Text } from "@radix-ui/themes";
import Head from "next/head";
import ProjectCard from "../../components/ui/projectCard/projectCard";
import { motion } from "framer-motion";
import { useCssLibPreference } from "../../components/CssLibPreference";
import { useI18n } from "../i18n";
import {
  PostgreSQLLogo,
  PythonLogo,
  MongoDBLogo,
  DockerLogo,
  HTMLLogo,
  JavascriptLogo,
  FirebaseLogo,
  OpenAILogo,
  LinuxLogo,
  AWSLogo,
  FlutterLogo,
  JavaLogo,
  FastapiLogo,
  SpringBootLogo,
  NextjsLogo,
  TypescriptLogo,
  RaspberryPiLogo,
  IBMCloudLogo,
  PowerAutomateLogo,
} from "../../components/ui/logos/logos";
import NestjsLogo from "../../components/ui/logos/nestjsLogo";

const projects = [
  {
    title: "DataTrip",
    description:
      "Desktop app for Survey123 data: extracts georeferenced photos, transcribes voice notes with AI, and generates Excel reports.",
    image: "/banner_images/datatrip.webp",
    technologies: [PythonLogo, FlutterLogo, PowerAutomateLogo],
    url: "#",
  },
  {
    title: "Dance Club Comuna 8",
    description: "A web app for a dance club in Medellin.",
    image: "/banner_images/dance_club.webp",
    technologies: [FlutterLogo, FirebaseLogo],
    url: "https://github.com/Juanipis/dance_club_comuna_8",
  },
  {
    title: "Miyuki Webpage",
    description: "An online store for a miyuki products brand.",
    image: "/banner_images/miyuki.webp",
    technologies: [NextjsLogo],
    url: "https://github.com/pablomesa08/miyuki-webpage",
  },
  {
    title: "Miyuki Backend",
    description: "A backend for a online miyuki products brand.",
    image: "/banner_images/miyuki-backend.webp",
    technologies: [NestjsLogo, PostgreSQLLogo],
    url: "https://github.com/pablomesa08/backend-miyuki",
  },
  {
    title: "Who's that Pokemon?",
    description: "Guess the Pokemon by its silhouette.",
    image: "/banner_images/pokemon.webp",
    technologies: [FlutterLogo],
    url: "https://github.com/Juanipis/pokemon_game",
  },
  {
    title: "Backend for an Online Store",
    description: "Necessary backend for an online store.",
    image: "/banner_images/backend_tienda_online.webp",
    technologies: [PythonLogo, PostgreSQLLogo, MongoDBLogo, DockerLogo],
    url: "https://github.com/Juanipis/backend_tienda_online",
  },
  {
    title: "AprendIoT",
    description:
      "Educational website about IoT. It was an engineering project at EIA.",
    image: "/banner_images/aprendiot.webp",
    technologies: [HTMLLogo, JavascriptLogo, FirebaseLogo],
    url: "https://github.com/Juanipis/AprendIoT",
  },
  {
    title: "Dwalle",
    description:
      "Bot connected to GPT-3.5 to chat about products of an online store.",
    image: "/banner_images/dwalle.webp",
    technologies: [PythonLogo, DockerLogo, OpenAILogo, LinuxLogo],
    url: "https://github.com/alejop153/DWALLE",
  },
  {
    title: "Harry Potter Recognition",
    description:
      "Select a Harry Potter character, upload an image and if it matches, save it.",
    image: "/banner_images/app_flutter_aws_rekognition.webp",
    technologies: [PythonLogo, FastapiLogo, DockerLogo, AWSLogo, FlutterLogo],
    url: "https://github.com/Juanipis/api-consulta-flutter-impltgr",
  },
  {
    title: "Personal Website",
    description: "Personal website with an arachnid design in Next.js.",
    image: "/banner_images/personal_webpage.webp",
    technologies: [NextjsLogo, TypescriptLogo, HTMLLogo],
    url: "https://github.com/Juanipis/personal-nextjs-radix-page",
  },
  {
    title: "Apptibiogram Clone",
    description: "Clone of the Apptibiogram app for analyzing antibiograms.",
    image: "/banner_images/apptibiograma.webp",
    technologies: [FlutterLogo, JavaLogo, SpringBootLogo, PostgreSQLLogo],
    url: "https://github.com/Juanipis/proyecto_medico",
  },
  {
    title: "Mi Contratista CLI",
    description: "CLI to manage a contractor's tasks.",
    image: "/banner_images/mi_contratista_cli.webp",
    technologies: [PythonLogo],
    url: "https://github.com/Juanipis/mi_contratista_cli?tab=readme-ov-file#mi-contratista-cli",
  },
  {
    title: "Murder REST API",
    description: "REST API to consult a PostgreSQL database.",
    image: "/banner_images/asesinatos_spring_boot.webp",
    technologies: [JavaLogo, SpringBootLogo, PostgreSQLLogo],
    url: "https://github.com/Juanipis/asesinatos-springboot",
  },
  {
    title: "Huffman Encoder",
    description: "Huffman encoder in Java to compress and decompress texts.",
    image: "/banner_images/huffman.webp",
    technologies: [JavaLogo],
    url: "https://github.com/Juanipis/Huffman",
  },
  {
    title: "Polyphasic Sorting",
    description: "Polyphasic sorting method in Java.",
    image: "/banner_images/polifasico.webp",
    technologies: [JavaLogo],
    url: "https://github.com/Enano2001/Polifasico",
  },
  {
    title: "IBM Personality Analysis",
    description: "Personality analysis with IBM Personality Insights.",
    image: "/banner_images/personality_insight.webp",
    technologies: [PythonLogo, IBMCloudLogo],
    url: "https://github.com/Juanipis/Analisis-de-personalidad",
  },
  {
    title: "Pychat",
    description: "Chat in Python using sockets.",
    image: "/banner_images/pychat.webp",
    technologies: [PythonLogo],
    url: "https://github.com/Juanipis/Pychat",
  },
  {
    title: "Quimera Eyes",
    description:
      "Block programming based on USB devices for visually impaired people.",
    image: "/banner_images/quimera_eyes.webp",
    technologies: [PythonLogo, LinuxLogo, RaspberryPiLogo],
    url: "https://github.com/Juanipis/QuimeraEyes",
  },
];

function Projects() {
  const { accentColor } = useCssLibPreference();
  const { t } = useI18n();
  const isDark = accentColor === "crimson";

  return (
    <>
      <Head>
        <title>{t("meta.projectsTitle")}</title>
        <meta name="description" content={t("meta.projectsDesc")} />
        <meta property="og:title" content={t("meta.projectsTitle")} />
        <meta property="og:description" content={t("meta.projectsDesc")} />
        <meta property="og:url" content="https://juanipis.vercel.app/projects/" />
      </Head>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heading
              size="8"
              className={isDark ? "gradient-text-crimson" : "gradient-text-blue"}
              style={{ lineHeight: 1.1, paddingBottom: "0.1em" }}
            >
              {t("projects.heading")}
            </Heading>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-3"
            >
              <Text size="4" className="opacity-50">
                {t("projects.subtitle")}
              </Text>
            </motion.div>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                url={project.url}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
