import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{title}</h2>
      <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
      <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
    </motion.div>
  );
}

export default SectionHeader;
