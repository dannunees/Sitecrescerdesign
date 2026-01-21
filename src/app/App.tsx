import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { Home } from '@/app/pages/Home';
import { Loja } from '@/app/pages/Loja';
import { Produto } from '@/app/pages/Produto';
import { QuemSomos } from '@/app/pages/QuemSomos';
import { Formacoes } from '@/app/pages/Formacoes';
import { Novidades } from '@/app/pages/Novidades';
import { Contactos } from '@/app/pages/Contactos';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loja" element={<Loja />} />
            <Route path="/produto/:id" element={<Produto />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/formacoes" element={<Formacoes />} />
            <Route path="/novidades" element={<Novidades />} />
            <Route path="/novidades/:id" element={<NovidadeDetalhes />} />
            <Route path="/contactos" element={<Contactos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

// Simple blog post detail page
function NovidadeDetalhes() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Detalhes da Novidade
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Conteúdo completo do artigo será exibido aqui.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
