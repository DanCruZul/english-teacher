import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={() => document.body.style.overflow = 'unset'}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ 
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-4 h-4 bg-primary-600 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2
          }}
          className="absolute inset-0 bg-primary-600/20 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;