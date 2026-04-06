import { Text } from "@radix-ui/themes";
import { useCssLibPreference } from "../../CssLibPreference";
import { useI18n } from "../../../src/i18n";
import Image from "next/image";
import { logoDarkColor, logoLightColor } from "../colors/logoColors";
import { motion } from "framer-motion";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: React.FC<SvgProps>[];
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  url,
}) => {
  const { accentColor } = useCssLibPreference();
  const { t } = useI18n();
  const isDark = accentColor === "crimson";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group rounded-xl overflow-hidden border border-white/10 hover:border-white/25 shadow-sm hover:shadow-xl transition-all duration-300"
      style={{
        background: isDark
          ? "rgba(255,255,255,0.03)"
          : "rgba(255,255,255,0.6)",
      }}
    >
      {/* Image */}
      <div className="overflow-hidden aspect-video relative">
        <Image
          src={image}
          alt={title}
          width={600}
          height={340}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundColor: "var(--gray-5)" }}
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        <div>
          <Text size="3" weight="bold" as="p">
            {title}
          </Text>
          <Text size="2" className="opacity-60 mt-1" as="p">
            {description}
          </Text>
        </div>

        {/* Tech + Link */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex gap-2 flex-wrap">
            {technologies.map((Logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.2 }}
                className="opacity-50 group-hover:opacity-80 transition-opacity"
              >
                <Logo
                  height="18"
                  width="18"
                  fill={isDark ? logoDarkColor : logoLightColor}
                />
              </motion.div>
            ))}
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {t("projects.viewProject")}
            <ArrowTopRightIcon width="14" height="14" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
