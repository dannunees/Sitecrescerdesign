import { Link } from 'react-router-dom';
import { Badge } from '@/app/components/ui/badge';

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  image: string;
  isNew?: boolean;
  isPromo?: boolean;
}

export function ProductCard({ id, name, category, image, isNew, isPromo }: ProductCardProps) {
  return (
    <Link to={`/produto/${id}`}>
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group h-full">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {isNew && (
              <Badge className="bg-[#F6C445] text-gray-800 hover:bg-[#F6C445]">
                Novidade
              </Badge>
            )}
            {isPromo && (
              <Badge className="bg-[#F2994A] text-white hover:bg-[#F2994A]">
                Promoção
              </Badge>
            )}
          </div>
        </div>
        <div className="p-4">
          <p className="text-xs text-[#2FA4E7] font-medium mb-1">{category}</p>
          <h3 className="font-semibold text-gray-900 group-hover:text-[#2FA4E7] transition-colors line-clamp-2">
            {name}
          </h3>
          <button className="mt-4 w-full py-2 bg-[#4CAF50] text-white rounded-lg font-medium hover:bg-[#45a049] transition-colors">
            Ver Produto
          </button>
        </div>
      </div>
    </Link>
  );
}
