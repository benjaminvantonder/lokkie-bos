import { Link } from 'react-router-dom';
import { Palette, Sparkles, Leaf, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import Parallax from '../components/Parallax';

const features = [
  {
    icon: <Palette size={32} />,
    title: 'Original Watercolours',
    description: 'Every piece is hand-painted with care, making each artwork truly one-of-a-kind.',
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Custom Commissions',
    description: 'Have a specific vision? I work with you to create a bespoke piece tailored to your style.',
  },
  {
    icon: <Leaf size={32} />,
    title: 'Nature Inspired',
    description: 'From botanicals to landscapes, each piece draws from the natural beauty around us.',
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Premium Quality',
    description: 'Only the finest paper and professional-grade paints are used in every creation.',
  },
];

const featuredWorks = [
  {
    title: 'Wildflower Meadow',
    category: 'Watercolour',
    size: 'A4',
    price: 380,
    gradient: 'from-pink-200 to-purple-200',
  },
  {
    title: 'Mountain Silhouette',
    category: 'Watercolour & Fineliner',
    size: 'A3',
    price: 500,
    gradient: 'from-blue-200 to-indigo-200',
  },
  {
    title: 'Botanical Study',
    category: 'Fineliner',
    size: 'A5',
    price: 250,
    gradient: 'from-green-200 to-emerald-200',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function HomePage() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center py-20 px-4 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <Palette size={64} className="text-sage" strokeWidth={1.5} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 text-brown dark:text-sage"
          >
            lokkie-bos
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-script text-5xl md:text-6xl text-sage mb-4"
          >
            Welcome
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl font-noto text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Create it from a place where passion and imagination meet. In watercolour,
            I find a quiet magic — where pigment and water move freely, shaping each
            piece with intention and feeling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <Parallax speed={0.2}>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-200 to-green-200 mb-4 shadow-lg" aria-hidden="true"></div>
              <p className="text-sm font-script text-sage text-lg">Watercolour Magic</p>
            </div>
            </Parallax>
            <Parallax speed={0.1}>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brown to-sage mb-4 shadow-lg" aria-hidden="true"></div>
                <p className="text-sm font-script text-sage text-lg">Nature Inspired</p>
              </div>
            </Parallax>
            <Parallax speed={0.3}>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-200 to-yellow-200 mb-4 shadow-lg" aria-hidden="true"></div>
                <p className="text-sm font-script text-sage text-lg">Handcrafted Art</p>
              </div>
            </Parallax>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex gap-4 justify-center flex-wrap"
          >
            <Link
              to="/shop"
              className="inline-block bg-sage hover:bg-brown dark:hover:bg-brown text-cream px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Collection
            </Link>
            <Link
              to="/contact"
              className="inline-block border-2 border-sage text-sage hover:bg-sage hover:text-cream px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="py-20 px-4 bg-cream dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-serif text-brown dark:text-sage text-center mb-4"
          >
            Why Lokkie-bos?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-gray-600 dark:text-gray-400 font-noto mb-16 max-w-2xl mx-auto"
          >
            <span className="font-script text-sage text-2xl">Every piece is created with intention, from first brushstroke to final detail.</span>
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="bg-sage/20 p-4 rounded-full text-sage">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-serif text-brown dark:text-sage mb-3">{feature.title}</h3>
                <p className="font-noto text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-4 bg-white/50 dark:bg-gray-800/30 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-serif text-brown dark:text-sage text-center mb-4"
          >
            Featured Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-gray-600 dark:text-gray-400 font-noto mb-12 max-w-2xl mx-auto"
          >
            <span className="font-script text-sage text-2xl">A glimpse into the collection — each piece tells its own story.</span>
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredWorks.map((work) => (
              <motion.div key={work.title} variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`aspect-square bg-gradient-to-br ${work.gradient} flex items-center justify-center`}>
                  <Palette size={48} className="text-white/60" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif text-brown dark:text-sage">{work.title}</h3>
                    <span className="text-sm bg-sage/20 text-sage px-3 py-1 rounded-full font-medium">{work.size}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-noto text-sm mb-4">{work.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-brown dark:text-sage">R {work.price}</span>
                    <Link
                      to="/shop"
                      className="bg-sage hover:bg-brown text-cream px-4 py-2 rounded-full font-medium text-sm transition-all"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/shop"
              className="inline-block bg-sage hover:bg-brown dark:hover:bg-brown text-cream px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              View Full Collection
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-4 bg-sage/10 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
        <Parallax speed={0.08}>
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-sage/5" aria-hidden="true"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-sage/5" aria-hidden="true"></div>
        </Parallax>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-serif text-brown dark:text-sage mb-6"
          >
            Ready to Find Your Piece?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-noto text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto"
          >
            Browse the full collection or reach out for a custom commission.
            <span className="font-script text-sage text-2xl">Let's create something beautiful together.</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link
              to="/shop"
              className="bg-sage hover:bg-brown text-cream px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              Browse Shop
            </Link>
            <Link
              to="/contact"
              className="border-2 border-sage text-sage hover:bg-sage hover:text-cream px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Request Commission
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </>
  );
}
