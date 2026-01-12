import { motion } from 'framer-motion';

interface GoldDividerProps {
  className?: string;
  variant?: 'simple' | 'ornate' | 'floral';
}

const GoldDivider = ({ className = '', variant = 'ornate' }: GoldDividerProps) => {
  if (variant === 'simple') {
    return (
      <motion.div
        className={`flex items-center justify-center gap-4 ${className}`}
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-gold" />
        <div className="w-2 h-2 rounded-full bg-gold" />
        <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-gold" />
      </motion.div>
    );
  }

  if (variant === 'floral') {
    return (
      <motion.div
        className={`flex items-center justify-center ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <svg width="300" height="40" viewBox="0 0 300 40" fill="none" className="text-gold">
          <motion.path
            d="M0 20 Q75 10 150 20 Q225 30 300 20"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <motion.circle
            cx="150"
            cy="20"
            r="5"
            fill="currentColor"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
          <motion.path
            d="M140 15 Q150 5 160 15"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          />
          <motion.path
            d="M140 25 Q150 35 160 25"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          />
        </svg>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`flex items-center justify-center ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <svg width="400" height="30" viewBox="0 0 400 30" fill="none" className="text-gold max-w-full">
        <motion.path
          d="M0 15 L100 15"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <motion.path
          d="M110 15 Q120 5 130 15 Q140 25 150 15"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
        <motion.circle
          cx="175"
          cy="15"
          r="4"
          fill="currentColor"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.3 }}
        />
        <motion.circle
          cx="200"
          cy="15"
          r="6"
          fill="currentColor"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.3 }}
        />
        <motion.circle
          cx="225"
          cy="15"
          r="4"
          fill="currentColor"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.3 }}
        />
        <motion.path
          d="M250 15 Q260 5 270 15 Q280 25 290 15"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.5 }}
        />
        <motion.path
          d="M300 15 L400 15"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 0.8 }}
        />
      </svg>
    </motion.div>
  );
};

export default GoldDivider;