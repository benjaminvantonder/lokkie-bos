import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sage text-cream py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-4">
          <h3 className="font-bold text-2xl mb-2">lokkie-bos</h3>
          <p className="font-noto text-sm opacity-90">
            Watercolour art crafted with passion
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm">
          <span>Made with</span>
          <Heart size={16} fill="currentColor" />
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
