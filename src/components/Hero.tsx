import { Palette } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Palette size={64} className="text-sage" strokeWidth={1.5} />
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-brown">
          lokkie-bos
        </h1>

        <h2 className="text-4xl md:text-5xl font-serif text-black mb-8">
          Welcome
        </h2>

        <p className="text-lg md:text-xl font-noto text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Create it from a place where passion and imagination meet. In watercolour,
          I find a quiet magic—where pigment and water move freely, shaping each
          piece with intention and feeling.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-200 to-green-200 mb-4 shadow-lg"></div>
            <p className="text-sm font-noto text-gray-600">Watercolour Magic</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brown to-sage mb-4 shadow-lg"></div>
            <p className="text-sm font-noto text-gray-600">Nature Inspired</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-200 to-yellow-200 mb-4 shadow-lg"></div>
            <p className="text-sm font-noto text-gray-600">Handcrafted Art</p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="#shop"
            className="inline-block bg-sage hover:bg-brown text-cream px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg"
          >
            Explore Collection
          </a>
        </div>
      </div>
    </section>
  );
}
