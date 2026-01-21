import { Award, Heart, ShoppingBag, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function QuemSomos() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#E3F2FD] to-[#E8F5E9] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Quem Somos</h1>
            <p className="text-xl text-gray-700">
              cresCER • Materiais Didáticos & Recursos Terapêuticos
            </p>
            <p className="mt-4 text-gray-600">
              Um espaço dedicado ao desenvolvimento, à aprendizagem e à intervenção terapêutica.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">A Nossa História</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                A cresCER é uma empresa de prestação de serviços em Terapia da Fala, com experiência em
                contextos clínicos e educacionais.
              </p>
              <p>
                A sua equipa é constituída por profissionais especializados que mantêm uma forte ligação com
                a comunidade.
              </p>
              <p>
                Com o crescimento da sua intervenção clínica e educativa, a cresCER expandiu a sua atividade
                para uma vertente comercial, reunindo materiais lúdico-didáticos e recursos especializados
                nas áreas da Terapia da Fala, Psicologia, Educação e áreas afins.
              </p>
              <p>Atualmente, os materiais podem ser adquiridos online ou na loja física.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">A Nossa Missão</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
              A cresCER tem como missão disponibilizar materiais especializados que promovam o desenvolvimento
              da linguagem, da cognição, da motricidade e das competências comunicativas, tanto em contexto
              clínico como educativo e familiar.
            </p>
            <p className="text-gray-600 text-center">
              Selecionamos cuidadosamente cada material, garantindo qualidade técnica, versatilidade de
              utilização e adequação a diferentes públicos.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Para Quem Criamos</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#E3F2FD] to-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#2FA4E7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Profissionais da Área Clínica</h3>
              <p className="text-gray-600 text-sm">
                Terapeutas da Fala, psicólogos e outros técnicos especializados.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#FFF3E0] to-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#F2994A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Profissionais da Área Educativa</h3>
              <p className="text-gray-600 text-sm">
                Educadores, professores e instituições.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#E8F5E9] to-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Famílias e Cuidadores</h3>
              <p className="text-gray-600 text-sm">
                Pais, cuidadores e familiares com interesse em apoiar o desenvolvimento das crianças.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            As Fundadoras da cresCER
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-24 h-24 bg-gradient-to-br from-[#2FA4E7] to-[#4CAF50] rounded-full mx-auto mb-6" />
              <h3 className="font-bold text-xl text-center mb-2">Cátia Martins Silva</h3>
              <p className="text-sm text-[#2FA4E7] text-center mb-4">
                Coordenadora Clínica e Técnica
              </p>
              <p className="text-gray-700 mb-4">
                Terapeuta da Fala, pós-graduada em Motricidade Orofacial.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Diagnóstico e intervenção em comunicação, linguagem, fala, fluência, voz e motricidade orofacial</li>
                <li>• Terapeuta da Fala pela ESSA – Escola Superior de Saúde do Alcoitão</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-24 h-24 bg-gradient-to-br from-[#4CAF50] to-[#2FA4E7] rounded-full mx-auto mb-6" />
              <h3 className="font-bold text-xl text-center mb-2">Inês Silva Marcelino</h3>
              <p className="text-sm text-[#4CAF50] text-center mb-4">
                Coordenadora Clínica e Técnica
              </p>
              <p className="text-gray-700 mb-4">
                Terapeuta da Fala, pós-graduada em Necessidades Complexas da Comunicação e Motricidade
                Orofacial.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Diagnóstico e intervenção em comunicação, linguagem, fala, fluência, voz e motricidade orofacial</li>
                <li>• Terapeuta da Fala pela ESSA – Escola Superior de Saúde do Alcoitão</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Conheça os nossos materiais e recursos terapêuticos
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/loja">
                <button className="px-8 py-4 bg-[#4CAF50] text-white rounded-xl font-semibold hover:bg-[#45a049] transition-all">
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
