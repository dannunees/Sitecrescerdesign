import { useParams, Link } from 'react-router-dom';
import { products } from '@/app/data/mockData';
import { ShoppingCart, Check, Star } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';

export function Produto() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Produto não encontrado</h1>
          <Link to="/loja">
            <button className="px-6 py-3 bg-[#4CAF50] text-white rounded-lg">
              Voltar à Loja
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-[#2FA4E7]">Início</Link>
            {' > '}
            <Link to="/loja" className="hover:text-[#2FA4E7]">Loja</Link>
            {' > '}
            <Link to={`/loja?categoria=${product.categorySlug}`} className="hover:text-[#2FA4E7]">
              {product.category}
            </Link>
            {' > '}
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover rounded-xl"
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="flex gap-2 mb-4">
              {product.isNew && (
                <Badge className="bg-[#F6C445] text-gray-800">Novidade</Badge>
              )}
              {product.isPromo && (
                <Badge className="bg-[#F2994A] text-white">Promoção</Badge>
              )}
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-[#2FA4E7] font-medium mb-4">{product.category}</p>
            <p className="text-sm text-gray-600 mb-6">Editora: {product.editora}</p>

            <div className="bg-[#F5F7FA] rounded-xl p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Target Audience */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Público-Alvo</h3>
              <div className="flex flex-wrap gap-2">
                {product.targetAudience.map((audience) => (
                  <span
                    key={audience}
                    className="px-4 py-2 bg-white border-2 border-[#2FA4E7] text-[#2FA4E7] rounded-lg text-sm font-medium"
                  >
                    {audience}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-3">Benefícios Principais</h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Discount Info */}
            {product.isPromo && (
              <div className="bg-gradient-to-br from-[#FFF3E0] to-[#FFECB3] rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  5% de desconto para Terapeutas da Fala
                </h3>
                <p className="text-sm text-gray-700">
                  Código: <span className="font-mono font-bold bg-white px-2 py-1 rounded">PROMO-TF</span>
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Necessário upload de certificado no checkout
                </p>
              </div>
            )}

            {/* Add to Cart */}
            <button className="w-full py-4 bg-[#4CAF50] text-white rounded-xl font-semibold hover:bg-[#45a049] transition-colors flex items-center justify-center gap-2 mb-4">
              <ShoppingCart className="w-5 h-5" />
              Adicionar ao Carrinho
            </button>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className={`flex items-center gap-2 ${product.inStock ? 'text-[#4CAF50]' : 'text-gray-400'}`}>
                <Check className="w-4 h-4" />
                {product.inStock ? 'Em Stock' : 'Esgotado'}
              </span>
              <span>•</span>
              <span>Envio disponível</span>
              <span>•</span>
              <span>Levantamento em loja</span>
            </div>
          </div>
        </div>

        {/* Detailed Info Tabs */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Descrição Completa</TabsTrigger>
              <TabsTrigger value="areas">Áreas de Intervenção</TabsTrigger>
              <TabsTrigger value="usage">Como Utilizar</TabsTrigger>
              <TabsTrigger value="specs">Especificações</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </TabsContent>
            <TabsContent value="areas" className="mt-6">
              <div className="flex flex-wrap gap-3">
                {product.interventionAreas.map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 bg-gradient-to-br from-[#E3F2FD] to-[#E8F5E9] text-gray-800 rounded-lg font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="usage" className="mt-6">
              <p className="text-gray-700 leading-relaxed">{product.howToUse}</p>
            </TabsContent>
            <TabsContent value="specs" className="mt-6">
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="font-semibold text-gray-900 mb-1">Idade Recomendada</dt>
                  <dd className="text-gray-700">{product.ageRecommendation}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 mb-1">Jogadores</dt>
                  <dd className="text-gray-700">{product.numberOfPlayers}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="font-semibold text-gray-900 mb-1">Conteúdo</dt>
                  <dd className="text-gray-700">{product.contents}</dd>
                </div>
              </dl>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Materiais Relacionados</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/produto/${p.id}`}>
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden group">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-[#2FA4E7] font-medium mb-1">{p.category}</p>
                      <h3 className="font-semibold text-gray-900">{p.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
