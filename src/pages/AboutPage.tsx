import { Brush, Heart, Sparkles, Palette, Eye, Clock } from 'lucide-react';

const processSteps = [
  {
    icon: <Eye size={28} />,
    title: 'Inspiration',
    description: 'Every piece begins with a moment of wonder — a wildflower, a landscape, or a feeling that demands to be captured.',
  },
  {
    icon: <Palette size={28} />,
    title: 'Sketching & Planning',
    description: 'Light pencil sketches map out composition and flow. For fineliner pieces, every line is carefully planned.',
  },
  {
    icon: <Brush size={28} />,
    title: 'Painting',
    description: 'Layers of watercolour are built slowly, allowing each wash to dry before the next. Pigment and water dance together.',
  },
  {
    icon: <Clock size={28} />,
    title: 'Finishing Touches',
    description: 'Final details are refined, edges are softened or sharpened, and the piece is left to rest before framing.',
  },
];

const pricing = [
  {
    category: 'Watercolour',
    items: [
      { size: 'Small (A5)', price: 'R 280' },
      { size: 'Medium (A4)', price: 'R 380' },
      { size: 'Large (A3)', price: 'R 480' },
    ],
  },
  {
    category: 'Fineliner',
    items: [
      { size: 'Small (A5)', price: 'R 250' },
      { size: 'Medium (A4)', price: 'R 350' },
      { size: 'Large (A3)', price: 'R 450' },
    ],
  },
  {
    category: 'Watercolour & Fineliner',
    items: [
      { size: 'Small (A5)', price: 'R 300' },
      { size: 'Medium (A4)', price: 'R 400' },
      { size: 'Large (A3)', price: 'R 500' },
    ],
  },
];

const faqs = [
  {
    q: 'How long does a custom commission take?',
    a: 'Turnaround time depends on complexity, but most pieces are completed within 1-2 weeks. Larger or more detailed works may take longer.',
  },
  {
    q: 'Can I request a specific theme or subject?',
    a: 'Absolutely! Custom commissions are tailored to your vision. Share your ideas, reference photos, or colour preferences, and I\'ll bring them to life.',
  },
  {
    q: 'What materials do you use?',
    a: 'I use professional-grade watercolour paints on 100% cotton cold-pressed paper. Fineliner pieces use archival-quality pigment ink pens.',
  },
  {
    q: 'How are artworks shipped?',
    a: 'Each piece is carefully packed in protective packaging to ensure it arrives in perfect condition. Shipping costs are calculated based on size and destination.',
  },
  {
    q: 'Do you offer framing?',
    a: 'Framing can be arranged for an additional fee. Contact me to discuss framing options that best suit your piece.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 px-4 bg-cream dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif text-brown dark:text-sage text-center mb-4">
            About Lokkie-bos
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 font-noto mb-16 max-w-2xl mx-auto">
            Every stroke tells a story, every color holds emotion.
          </p>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-sage/20 p-4 rounded-full">
                  <Brush className="text-sage" size={32} />
                </div>
              </div>
              <h2 className="text-xl font-serif text-brown dark:text-sage mb-3">Handcrafted</h2>
              <p className="font-noto text-gray-600 dark:text-gray-400">
                Each piece is meticulously created by hand, ensuring unique character and quality in every artwork.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-sage/20 p-4 rounded-full">
                  <Heart className="text-sage" size={32} />
                </div>
              </div>
              <h2 className="text-xl font-serif text-brown dark:text-sage mb-3">Made with Love</h2>
              <p className="font-noto text-gray-600 dark:text-gray-400">
                Passion and dedication flow into every creation, bringing warmth and soul to your space.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-sage/20 p-4 rounded-full">
                  <Sparkles className="text-sage" size={32} />
                </div>
              </div>
              <h2 className="text-xl font-serif text-brown dark:text-sage mb-3">Original Art</h2>
              <p className="font-noto text-gray-600 dark:text-gray-400">
                No two pieces are exactly alike. Own a truly one-of-a-kind work of art.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/30 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-brown dark:text-sage text-center mb-8">
            The Artist's Story
          </h2>
          <div className="prose prose-lg mx-auto font-noto text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              Lokkie-bos was born from a love of quiet observation — the way light falls on a leaf,
              the intricate patterns of a fern, the soft gradient of a sunset over the South African
              landscape. Every piece I create starts with a moment of noticing something beautiful.
            </p>
            <p>
              Working primarily in watercolour and fineliner, I let the medium guide the process.
              Watercolour has a mind of its own — pigment blooms across wet paper, creating textures
              and blends that cannot be fully controlled. That unpredictability is where the magic lives.
            </p>
            <p>
              My fineliner work, on the other hand, is about precision and patience. Fine lines build
              into intricate patterns, revealing details that reward a closer look. When combined with
              watercolour, the two techniques create a unique tension — fluid washes against sharp,
              deliberate lines.
            </p>
            <p>
              Each piece is signed, dated, and shipped with care. Whether you're looking for a
              statement piece for your home or a meaningful gift, I hope my art brings a touch of
              nature's quiet beauty into your space.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-cream dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-brown dark:text-sage text-center mb-4">
            My Creative Process
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 font-noto mb-12 max-w-2xl mx-auto">
            From first spark of inspiration to the final brushstroke.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={step.title} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="flex justify-center mb-4">
                  <div className="bg-sage/20 p-4 rounded-full text-sage relative">
                    {step.icon}
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-sage text-cream text-xs rounded-full flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-serif text-brown dark:text-sage mb-3">{step.title}</h3>
                <p className="font-noto text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/30 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-brown dark:text-sage text-center mb-4">
            Price List
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 font-noto mb-12 max-w-2xl mx-auto">
            All prices are in South African Rand (ZAR).
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {pricing.map((group) => (
              <div key={group.category} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-colors duration-300">
                <h3 className="font-bold text-xl mb-6 text-brown dark:text-sage text-center">{group.category}</h3>
                <div className="space-y-4 font-noto">
                  {group.items.map((item) => (
                    <div key={item.size} className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
                      <span className="text-gray-700 dark:text-gray-300">{item.size}</span>
                      <span className="font-bold text-brown dark:text-sage text-lg">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm font-noto text-gray-600 dark:text-gray-400 text-center mt-8 italic max-w-xl mx-auto">
            Please note: each custom artwork will incur an additional fee of R60 per hour for
            time spent on the piece. The first hour is free of charge.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-cream dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-brown dark:text-sage text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 font-noto mb-12 max-w-2xl mx-auto">
            Everything you need to know about ordering and commissions.
          </p>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm group open:shadow-md transition-shadow">
                <summary className="font-serif text-lg text-brown dark:text-sage cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-sage group-open:rotate-180 transition-transform text-2xl font-bold">▾</span>
                </summary>
                <p className="mt-4 font-noto text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
