import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const SkillRow = ({ skills, reverse = false }) => {
  const items = [...skills, ...skills];

  return (
    <div className="skill-row">
      <motion.div
        className="skill-track"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {items.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} p_text={skill.name} />
        ))}
      </motion.div>
    </div>
  );
};

export default SkillRow;
