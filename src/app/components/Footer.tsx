import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail } from 'lucide-react';
import logo from '@/assets/83eac87f396be9537beb5653e3439d645a384c47.png';

export function Footer() {
  return (
    <footer className="bg-[#2FA4E7] text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Brand */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="cresCER Logo" className="h-16 w-auto" />
            </Link>
            <p className="text-sm opacity-90 leading-relaxed">
              ✨ Para terapeutas, professores, cuidadores e família
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/loja" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Loja Online
                </Link>
              </li>
              <li>
                <Link to="/novidades" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Novidades
                </Link>
              </li>
              <li>
                <Link to="/formacoes" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Formações
                </Link>
              </li>
              <li>
                <Link to="/quem-somos" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/contactos" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Customer Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Apoio ao Cliente</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/condicoes-venda" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Condições de Venda
                </Link>
              </li>
              <li>
                <Link to="/trocas-devolucoes" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link to="/encomendas-pagamentos" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Encomendas e Pagamentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact & Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contactos</h4>
            <div className="space-y-2 text-sm opacity-90 mb-4">
              <p>📱 +351 937 794 784</p>
              <p className="leading-relaxed">
                📍 Rua Natália Correia, n.º 4-B<br />
                Vale Mourão<br />
                2635-475 Rio de Mouro
              </p>
            </div>
            
            <h4 className="font-bold text-sm mb-2">Siga a cresCER</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100057502177201"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/crescer_materialdidatico"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="max-w-md">
            <h4 className="font-bold text-lg mb-2">Receba novidades e conteúdos educativos da cresCER</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="O seu email..."
                className="flex-1 px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
              />
              <button className="px-6 py-2 bg-[#4CAF50] hover:bg-[#45a049] rounded-lg font-medium transition-colors">
                Subscrever
              </button>
            </div>
            <p className="text-xs opacity-75 mt-2">
              Ao subscrever, aceita a nossa Política de Privacidade
            </p>
          </div>
        </div>

        {/* PRR Logo */}
        <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm opacity-90">
              Projeto apoiado pelo Plano de Recuperação e Resiliência (PRR)
            </p>
          </div>
          <div className="w-40 h-12 bg-white/20 rounded flex items-center justify-center">
            <span className="text-xs font-bold">LOGO PRR</span>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <p className="text-sm opacity-75">
            © 2026 cresCER – Materiais Didáticos & Recursos Terapêuticos
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Link to="/politica-privacidade" className="text-xs opacity-75 hover:opacity-100 transition-opacity">
              Política de Privacidade
            </Link>
            <span className="text-xs opacity-75">•</span>
            <Link to="/termos-condicoes" className="text-xs opacity-75 hover:opacity-100 transition-opacity">
              Termos e Condições
            </Link>
            <span className="text-xs opacity-75">•</span>
            <Link to="/politica-cookies" className="text-xs opacity-75 hover:opacity-100 transition-opacity">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}