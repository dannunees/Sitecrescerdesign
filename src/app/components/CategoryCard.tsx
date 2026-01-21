import { Link } from 'react-router-dom';

interface CategoryCardProps {
  name: string;
  slug: string;
  productCount: number;
  color: string;
  icon: string;
}

export function CategoryCard({ name, slug, productCount, color, icon }: CategoryCardProps) {
  return (
    <Link to={`/loja?categoria=${slug}`}>
      <div
        className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
        style={{ backgroundColor: `${color}20` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 group-hover:to-black/10 transition-all duration-300" />
        <div className="relative h-full p-6 flex flex-col justify-between">
          <div className="text-5xl">{icon}</div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#2FA4E7] transition-colors">
              {name}
            </h3>
            <p className="text-sm text-gray-600">{productCount} produtos</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
