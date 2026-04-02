import { Mail } from 'lucide-react';
import type { Product } from '../lib/database.types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleInquiry = () => {
    const subject = encodeURIComponent(`Inquiry about ${product.title}`);
    const body = encodeURIComponent(
      `Hi,\n\nI'm interested in purchasing the ${product.title} (${product.size}) for R ${product.price}.\n\nPlease let me know about availability and next steps.\n\nThank you!`
    );
    window.location.href = `mailto:lokkiebos@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image_url || 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800'}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif text-brown">{product.title}</h3>
          <span className="text-sm bg-sage/20 text-sage px-3 py-1 rounded-full font-medium">
            {product.size}
          </span>
        </div>
        {product.description && (
          <p className="text-gray-600 font-noto text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
        )}
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-brown">R {product.price}</span>
          <button
            onClick={handleInquiry}
            className="flex items-center gap-2 bg-sage hover:bg-brown text-cream px-4 py-2 rounded-full font-medium transition-all"
          >
            <Mail size={16} />
            Inquire
          </button>
        </div>
      </div>
    </div>
  );
}
