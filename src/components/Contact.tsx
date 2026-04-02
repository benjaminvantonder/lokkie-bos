import { Mail, Phone, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-brown text-center mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 font-noto mb-12">
          Have a question or interested in a custom piece? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="mailto:lokkiebos@gmail.com"
            className="flex flex-col items-center p-6 bg-cream rounded-xl hover:bg-sage/10 transition-all group"
          >
            <div className="bg-sage/20 p-4 rounded-full mb-4 group-hover:bg-sage group-hover:text-cream transition-all">
              <Mail size={28} className="text-sage group-hover:text-cream" />
            </div>
            <h3 className="font-serif text-lg text-brown mb-2">Email</h3>
            <p className="font-noto text-sm text-gray-600 text-center">
              lokkiebos@gmail.com
            </p>
          </a>

          <a
            href="tel:0649027234"
            className="flex flex-col items-center p-6 bg-cream rounded-xl hover:bg-sage/10 transition-all group"
          >
            <div className="bg-sage/20 p-4 rounded-full mb-4 group-hover:bg-sage group-hover:text-cream transition-all">
              <Phone size={28} className="text-sage group-hover:text-cream" />
            </div>
            <h3 className="font-serif text-lg text-brown mb-2">Phone</h3>
            <p className="font-noto text-sm text-gray-600 text-center">
              064 902 7234
            </p>
          </a>

          <a
            href="https://instagram.com/lokkie_bos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-cream rounded-xl hover:bg-sage/10 transition-all group"
          >
            <div className="bg-sage/20 p-4 rounded-full mb-4 group-hover:bg-sage group-hover:text-cream transition-all">
              <Instagram size={28} className="text-sage group-hover:text-cream" />
            </div>
            <h3 className="font-serif text-lg text-brown mb-2">Instagram</h3>
            <p className="font-noto text-sm text-gray-600 text-center">
              @lokkie_bos
            </p>
          </a>
        </div>

        <div className="bg-cream rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-serif text-brown mb-4">Custom Commissions</h3>
          <p className="font-noto text-gray-700 mb-6 max-w-2xl mx-auto">
            Looking for something special? We accept custom commission requests.
            Get in touch with your ideas, and let's create something beautiful together.
          </p>
          <a
            href="mailto:lokkiebos@gmail.com?subject=Custom Commission Inquiry"
            className="inline-block bg-sage hover:bg-brown text-cream px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg"
          >
            Request a Custom Piece
          </a>
        </div>
      </div>
    </section>
  );
}
