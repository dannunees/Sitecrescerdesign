import { Link } from 'react-router-dom';
import { ProductCard } from '@/app/components/ProductCard';
import { CategoryCard } from '@/app/components/CategoryCard';
import { categories, products, blogPosts } from '@/app/data/mockData';
import { GraduationCap, Heart, ShoppingBag, Sparkles } from 'lucide-react';

export function Home() {
  const newProducts = products.filter((p) => p.isNew).slice(0, 4);
  const promoProducts = products.filter((p) => p.isPromo).slice(0, 3);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-[#E3F2FD] via-[#F5F7FA] to-[#E8F5E9] py-16 md:py-24 overflow-hidden"
      >
        {/* Decorative Elements - Floating animation */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#F6C445] rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#9B51E0] rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-[#F2994A] rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />
        <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-[#4CAF50] rounded-full opacity-10 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-[#2FA4E7] rounded-full opacity-15 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                cresCER
                <br />
                <span className="text-[#2FA4E7]">Materiais Didáticos</span>
                <br />
                <span className="text-[#4CAF50]">& Recursos Terapêuticos</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                ✨ Para terapeutas, professores, cuidadores e família
                <br />
                🧸 Loja física: visitas por marcação | Loja online disponível
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/loja">
                  <button className="px-8 py-4 bg-[#4CAF50] text-white rounded-xl font-semibold hover:bg-[#45a049] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Explorar Loja Online
                  </button>
                </Link>
                <Link to="/novidades">
                  <button className="px-8 py-4 bg-white text-[#2FA4E7] rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg border-2 border-[#2FA4E7]">
                    Ver Novidades
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1631032024590-140cc8dd4b32?w=800"
                alt="Materiais didáticos cresCER"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#E3F2FD] to-white">
              <div className="w-16 h-16 bg-[#2FA4E7] rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Selecionados por Profissionais</h3>
              <p className="text-sm text-gray-600">Materiais cuidadosamente escolhidos por especialistas</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#E8F5E9] to-white">
              <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Intervenção Terapêutica</h3>
              <p className="text-sm text-gray-600">Para uso clínico, educativo e familiar</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#FFF3E0] to-white">
              <div className="w-16 h-16 bg-[#F2994A] rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Loja Online e Física</h3>
              <p className="text-sm text-gray-600">Compre online ou visite-nos por marcação</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#F3E5F5] to-white">
              <div className="w-16 h-16 bg-[#9B51E0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Uso Clínico e Familiar</h3>
              <p className="text-sm text-gray-600">Materiais versáteis para diferentes contextos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Material de Intervenção
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore as nossas categorias de materiais especializados
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/loja">
              <button className="px-8 py-3 bg-[#2FA4E7] text-white rounded-lg font-semibold hover:bg-[#2890c7] transition-colors">
                Ver Todos os Materiais
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* New Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Novidades</h2>
            <p className="text-gray-600">Conheça os materiais mais recentes da cresCER</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {newProducts.map((product) => (
              <div key={product.id} className="w-full max-w-[280px] sm:w-[280px]">
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/loja?filter=novidades">
              <button className="px-8 py-3 bg-[#2FA4E7] text-white rounded-lg font-semibold hover:bg-[#2890c7] transition-colors">
                Ver Todas as Novidades
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-16 bg-gradient-to-br from-[#FFF3E0] to-[#FFECB3]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Promoções</h2>
            <p className="text-gray-700 mb-2">
              5% de desconto na compra online para Terapeutas da Fala
            </p>
            <p className="text-sm text-gray-600">
              Código: <span className="font-mono font-bold bg-white px-3 py-1 rounded">PROMO-TF</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {promoProducts.map((product) => (
              <div key={product.id} className="w-full max-w-[300px] md:w-[300px]">
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/loja?filter=promocoes">
              <button className="px-8 py-3 bg-[#F2994A] text-white rounded-lg font-semibold hover:bg-[#e8863a] transition-colors">
                Ver Promoções
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sobre a cresCER</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              A cresCER é um espaço online e físico dedicado à comercialização de materiais especializados
              para a intervenção em Terapia da Fala e áreas afins.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Os nossos materiais são cuidadosamente selecionados por profissionais, para profissionais e
              famílias.
            </p>
            <Link to="/quem-somos">
              <button className="px-8 py-3 bg-[#2FA4E7] text-white rounded-lg font-semibold hover:bg-[#2890c7] transition-colors">
                Conheça a cresCER
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trainings Section */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#E3F2FD] to-[#E8F5E9] rounded-3xl p-8 md:p-12 text-center shadow-lg">
            <div className="w-20 h-20 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Formações e Workshops
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Consulte o calendário de formações e inscreva-se online.
              <br />
              Capacitação profissional com especialistas da área.
            </p>
            <Link to="/formacoes">
              <button className="px-8 py-3 bg-[#4CAF50] text-white rounded-lg font-semibold hover:bg-[#45a049] transition-colors shadow-lg">
                Ver Formações
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Novidades Educativas
            </h2>
            <p className="text-gray-600">
              Artigos, dicas e conteúdos para profissionais e famílias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {latestPosts.map((post) => (
              <Link key={post.id} to={`/novidades/${post.id}`}>
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-[#2FA4E7] font-medium mb-2">{post.category}</p>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#2FA4E7] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-4">{post.excerpt}</p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/novidades">
              <button className="px-8 py-3 bg-[#2FA4E7] text-white rounded-lg font-semibold hover:bg-[#2890c7] transition-colors">
                Ver Todas as Novidades
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-[#E3F2FD] to-[#E8F5E9]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Receba novidades, promoções e conteúdos educativos da cresCER
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
              <input
                type="email"
                placeholder="O seu email..."
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2FA4E7]"
              />
              <button className="px-6 py-3 bg-[#4CAF50] text-white rounded-lg font-semibold hover:bg-[#45a049] transition-colors">
                Subscrever
              </button>
            </div>
            <p className="text-xs text-gray-600">
              Ao subscrever, aceita a nossa Política de Privacidade
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Encomende os seus materiais didáticos com confiança
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/loja">
                <button className="px-8 py-4 bg-[#4CAF50] text-white rounded-xl font-semibold hover:bg-[#45a049] transition-all shadow-lg">
                  Visitar Loja Online
                </button>
              </Link>
              <Link to="/contactos">
                <button className="px-8 py-4 bg-white text-[#2FA4E7] border-2 border-[#2FA4E7] rounded-xl font-semibold hover:bg-gray-50 transition-all">
                  Fale Connosco
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}