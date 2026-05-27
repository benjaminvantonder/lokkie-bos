import { Mail, Phone, Instagram, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';
import AnimatedSection from '../components/AnimatedSection';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactLinks = [
  {
    href: 'mailto:lokkiebos@gmail.com',
    icon: <Mail size={28} />,
    title: 'Email',
    detail: 'lokkiebos@gmail.com',
  },
  {
    href: 'tel:0649027234',
    icon: <Phone size={28} />,
    title: 'Phone',
    detail: '064 902 7234',
  },
  {
    href: 'https://instagram.com/lokkie_bos',
    icon: <Instagram size={28} />,
    title: 'Instagram',
    detail: '@lokkie_bos',
    external: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:lokkiebos@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <AnimatedSection className="py-20 px-4 bg-white/50 dark:bg-gray-800/30 min-h-screen transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-serif text-brown dark:text-sage text-center mb-4"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-600 dark:text-gray-400 font-noto mb-12 max-w-2xl mx-auto"
        >
          <span className="font-script text-sage text-2xl">Have a question, want to commission a custom piece, or just want to say hello? I'd love to hear from you.</span>
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.title}
              variants={itemVariants}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex flex-col items-center p-6 bg-cream dark:bg-gray-800 rounded-xl hover:bg-sage/10 dark:hover:bg-sage/20 transition-all group"
            >
              <div className="bg-sage/20 p-4 rounded-full mb-4 group-hover:bg-sage group-hover:text-cream transition-all">
                {link.icon}
              </div>
              <h2 className="font-serif text-lg text-brown dark:text-sage mb-2">{link.title}</h2>
              <p className="font-noto text-sm text-gray-600 dark:text-gray-400 text-center">{link.detail}</p>
            </motion.a>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-cream dark:bg-gray-800 rounded-2xl p-8 md:p-12 transition-colors duration-300"
          >
            <h2 className="text-2xl font-serif text-brown dark:text-sage mb-6">Send a Message</h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <Send size={48} className="mx-auto text-sage mb-4" />
                <p className="font-noto text-gray-700 dark:text-gray-300 text-lg">
                  Your message has been prepared! Your email client will open to send it.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-noto text-sm text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-sage/30 focus:outline-none focus:ring-2 focus:ring-sage text-gray-800 dark:text-gray-200 font-noto"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-noto text-sm text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-sage/30 focus:outline-none focus:ring-2 focus:ring-sage text-gray-800 dark:text-gray-200 font-noto"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-noto text-sm text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-sage/30 focus:outline-none focus:ring-2 focus:ring-sage text-gray-800 dark:text-gray-200 font-noto"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-noto text-sm text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-sage/30 focus:outline-none focus:ring-2 focus:ring-sage text-gray-800 dark:text-gray-200 font-noto resize-y"
                    placeholder="Tell me about your idea, question, or commission request..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-sage hover:bg-brown dark:hover:bg-brown text-cream px-8 py-3 rounded-full font-medium transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-cream dark:bg-gray-800 rounded-2xl p-8 md:p-12 transition-colors duration-300"
          >
            <h2 className="text-2xl font-serif text-brown dark:text-sage mb-4">Custom Commissions</h2>
            <p className="font-noto text-gray-700 dark:text-gray-300 mb-6">
              Looking for something truly unique? I accept custom commission requests
              for personalised watercolour and fineliner artworks.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-sage rounded-full mt-2 shrink-0"></div>
                <p className="font-noto text-sm text-gray-600 dark:text-gray-400">
                  <strong className="text-brown dark:text-sage">Your Vision:</strong> Share your ideas, reference photos, colour palette, or any inspiration.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-sage rounded-full mt-2 shrink-0"></div>
                <p className="font-noto text-sm text-gray-600 dark:text-gray-400">
                  <strong className="text-brown dark:text-sage">Size & Medium:</strong> Choose from A5, A4, or A3 in watercolour, fineliner, or a combination.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-sage rounded-full mt-2 shrink-0"></div>
                <p className="font-noto text-sm text-gray-600 dark:text-gray-400">
                  <strong className="text-brown dark:text-sage">Timeline:</strong> Most commissions are completed within 1-2 weeks. Let me know your deadline.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-sage rounded-full mt-2 shrink-0"></div>
                <p className="font-noto text-sm text-gray-600 dark:text-gray-400">
                  <strong className="text-brown dark:text-sage">Pricing:</strong> Base price covers materials and standard effort. Additional time is charged at R60/hour (first hour free).
                </p>
              </div>
            </div>

            <a
              href="mailto:lokkiebos@gmail.com?subject=Custom Commission Inquiry"
              className="inline-block w-full text-center bg-sage hover:bg-brown dark:hover:bg-brown text-cream px-8 py-3 rounded-full font-medium transition-all transform hover:scale-[1.02] shadow-lg"
            >
              Request a Custom Piece
            </a>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
