import { Link } from 'react-router-dom';
import { blogPosts } from '@/app/data/mockData';
import { Calendar, User } from 'lucide-react';

export function Novidades() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#E3F2FD] to-[#E8F5E9] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Novidades</h1>
            <p className="text-xl text-gray-700">
              Artigos, dicas e conteúdos educativos para profissionais, famílias e cuidadores
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">
              {blogPosts.map((post) => (
                <Link key={post.id} to={`/novidades/${post.id}`}>
                  <article className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all group">
                    <div className="md:flex">
                      <div className="md:w-80 aspect-video md:aspect-square overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="px-3 py-1 bg-[#2FA4E7]/10 text-[#2FA4E7] rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#2FA4E7] transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
                <h3 className="font-bold text-xl mb-4">Categorias</h3>
                <div className="space-y-2">
                  {['Terapia da Fala', 'Linguagem', 'Desenvolvimento Infantil', 'Educação', 'Materiais Didáticos', 'Dicas para Famílias'].map(
                    (cat) => (
                      <button
                        key={cat}
                        className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
                      >
                        {cat}
                      </button>
                    )
                  )}
                </div>

                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-bold text-lg mb-4">Newsletter</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Gostaria de receber novos conteúdos da cresCER?
                  </p>
                  <input
                    type="email"
                    placeholder="O seu email..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-[#2FA4E7]"
                  />
                  <button className="w-full py-2 bg-[#4CAF50] text-white rounded-lg font-semibold hover:bg-[#45a049] transition-colors">
                    Subscrever
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
