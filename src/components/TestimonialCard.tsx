import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isVideo?: boolean;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  if (testimonial.isVideo) {
    return (
      <motion.div
        style={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="group grid h-full items-center rounded-3xl border border-secondary-300 bg-secondary-50/50 p-8 shadow-md shadow-background-950/5 transition-all duration-500"
      >
        <div>
          <video
            src="/assets/video.mp4"
            className="h-[240px] w-full rounded-lg object-cover"
            controls
            playsInline
            preload="metadata"
          />
        </div>
      </motion.div>
    );
  }

  const getCardStyle = () => {
    if (testimonial.isPrimary) {
      return "border border-accent-300 bg-accent-50/50 text-accent-900";
    } else if (testimonial.isSecondary) {
      return "border border-secondary-300 bg-secondary-50/50 text-secondary-900";
    } else {
      return "border border-primary-300 bg-primary-50/50 text-primary-900";
    }
  };

  const getStarColor = () => {
    if (testimonial.isPrimary) {
      return "text-accent-500";
    } else if (testimonial.isSecondary) {
      return "text-secondary-500";
    } else {
      return "text-primary-600";
    }
  };

  return (
    <motion.div
      style={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`group flex h-full flex-col justify-stretch gap-4 rounded-3xl px-8 py-8 shadow-md shadow-background-950/5 transition-all duration-500 ${getCardStyle()}`}
    >
      <div className="flex items-center space-x-4">
        <motion.div
          className="size-12 overflow-hidden rounded-full"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </motion.div>
        <div>
          <motion.h3
            className="font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.1 }}
          >
            {testimonial.name}
          </motion.h3>
          <motion.p
            className="text-muted-light dark:text-muted-dark"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {testimonial.role}
          </motion.p>
        </div>
      </div>

      <div>
        <motion.p
          className="text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          "{testimonial.content}"
        </motion.p>
      </div>

      <div>
        <motion.div
          className="flex space-x-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ rotate: -180, scale: 0 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4 + i * 0.1 }}
            >
              <Star size={16} className={getStarColor()} fill="currentColor" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
