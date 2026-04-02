import { Brush, Heart, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-brown text-center mb-4">
          About Lokkie-bos
        </h2>
        <p className="text-center text-gray-600 font-noto mb-16 max-w-2xl mx-auto">
          Every stroke tells a story, every color holds emotion.
        </p>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-sage/20 p-4 rounded-full">
                <Brush className="text-sage" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-serif text-brown mb-3">Handcrafted</h3>
            <p className="font-noto text-gray-600">
              Each piece is meticulously created by hand, ensuring unique character and quality in every artwork.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-sage/20 p-4 rounded-full">
                <Heart className="text-sage" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-serif text-brown mb-3">Made with Love</h3>
            <p className="font-noto text-gray-600">
              Passion and dedication flow into every creation, bringing warmth and soul to your space.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-sage/20 p-4 rounded-full">
                <Sparkles className="text-sage" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-serif text-brown mb-3">Original Art</h3>
            <p className="font-noto text-gray-600">
              No two pieces are exactly alike. Own a truly one-of-a-kind work of art.
            </p>
          </div>
        </div>

        <div className="bg-white/50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-serif text-brown mb-6 text-center">Price List</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4 text-brown">Watercolour</h4>
              <div className="space-y-2 font-noto">
                <div className="flex justify-between">
                  <span>Small (A5)</span>
                  <span className="font-bold">R 280</span>
                </div>
                <div className="flex justify-between">
                  <span>Medium (A4)</span>
                  <span className="font-bold">R 380</span>
                </div>
                <div className="flex justify-between">
                  <span>Large (A3)</span>
                  <span className="font-bold">R 480</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-brown">Fineliner</h4>
              <div className="space-y-2 font-noto">
                <div className="flex justify-between">
                  <span>Small (A5)</span>
                  <span className="font-bold">R 250</span>
                </div>
                <div className="flex justify-between">
                  <span>Medium (A4)</span>
                  <span className="font-bold">R 350</span>
                </div>
                <div className="flex justify-between">
                  <span>Large (A3)</span>
                  <span className="font-bold">R 450</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-brown">Watercolour & Fineliner</h4>
              <div className="space-y-2 font-noto">
                <div className="flex justify-between">
                  <span>Small (A5)</span>
                  <span className="font-bold">R 300</span>
                </div>
                <div className="flex justify-between">
                  <span>Medium (A4)</span>
                  <span className="font-bold">R 400</span>
                </div>
                <div className="flex justify-between">
                  <span>Large (A3)</span>
                  <span className="font-bold">R 500</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm font-noto text-gray-600 text-center mt-8 italic">
            Please note: each custom artwork will incur an additional fee of R60 per hour for
            time spent on the piece. The first hour is free of charge.
          </p>
        </div>
      </div>
    </section>
  );
}
