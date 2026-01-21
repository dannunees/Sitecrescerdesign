import { Mail, MapPin, Phone, Facebook, Instagram } from 'lucide-react';

export function Contactos() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#E3F2FD] to-[#E8F5E9] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contactos</h1>
            <p className="text-xl text-gray-700">Estamos disponíveis para ajudar. Fale connosco.</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie-nos uma Mensagem</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FA4E7]"
                  placeholder="O seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FA4E7]"
                  placeholder="seuemail@exemplo.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telemóvel</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FA4E7]"
                  placeholder="+351 912 345 678"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FA4E7]">
                  <option>Informações sobre produtos</option>
                  <option>Encomendas online</option>
                  <option>Loja física</option>
                  <option>Formações</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FA4E7]"
                  placeholder="A sua mensagem..."
                />
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="gdpr" className="mt-1" />
                <label htmlFor="gdpr" className="text-sm text-gray-600">
                  Aceito que os meus dados sejam utilizados para contacto no âmbito do pedido efetuado.
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#4CAF50] text-white rounded-lg font-semibold hover:bg-[#45a049] transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="font-bold text-xl mb-6">Contactos Diretos</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2FA4E7]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#2FA4E7]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Telemóvel</p>
                    <p className="text-gray-600">+351 937 794 784</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Morada</p>
                    <p className="text-gray-600">
                      Rua Natália Correia, n.º 4-B
                      <br />
                      Vale Mourão
                      <br />
                      2635-475 Rio de Mouro
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FFF3E0] to-[#FFECB3] rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-4">Loja Física</h3>
              <p className="text-gray-700 mb-2">🧸 Visitas por marcação</p>
              <p className="text-sm text-gray-600">
                A nossa loja física funciona mediante marcação prévia, garantindo um atendimento personalizado
                e adequado às necessidades de cada cliente.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="font-bold text-xl mb-4">Siga a cresCER</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100057502177201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#2FA4E7] hover:bg-[#2890c7] rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-7 h-7 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/crescer_materialdidatico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#F2994A] hover:bg-[#e8863a] rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-7 h-7 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
