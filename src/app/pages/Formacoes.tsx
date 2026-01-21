import { Calendar, Clock, MapPin, User, Users } from 'lucide-react';
import { trainings } from '@/app/data/mockData';

export function Formacoes() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#E3F2FD] to-[#E8F5E9] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Formações</h1>
            <p className="text-xl text-gray-700">
              Capacitação e atualização para profissionais da área clínica, educativa e familiar
            </p>
            <p className="mt-4 text-gray-600">
              Consulte o calendário e inscreva-se nas próximas formações da cresCER
            </p>
          </div>
        </div>
      </section>

      {/* Training Calendar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {trainings.map((training) => (
              <div key={training.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  {/* Date Badge */}
                  <div className="md:w-48 bg-gradient-to-br from-[#2FA4E7] to-[#4CAF50] p-8 text-white flex flex-col items-center justify-center">
                    <Calendar className="w-12 h-12 mb-4" />
                    <p className="text-2xl font-bold">{training.date.split(' ')[0]}</p>
                    <p className="text-sm opacity-90">
                      {training.date.split(' ').slice(2).join(' ')}
                    </p>
                    <div className="mt-4 px-4 py-1 bg-white/20 rounded-full text-xs font-semibold">
                      {training.type}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{training.title}</h3>
                    <p className="text-gray-600 mb-6">{training.description}</p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Clock className="w-5 h-5 text-[#2FA4E7]" />
                        <div>
                          <p className="font-medium text-gray-900">Horário</p>
                          <p>{training.time}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <MapPin className="w-5 h-5 text-[#4CAF50]" />
                        <div>
                          <p className="font-medium text-gray-900">Local</p>
                          <p className="line-clamp-1">{training.location}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <User className="w-5 h-5 text-[#F2994A]" />
                        <div>
                          <p className="font-medium text-gray-900">Formador</p>
                          <p>{training.trainer}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Users className="w-5 h-5 text-[#9B51E0]" />
                        <div>
                          <p className="font-medium text-gray-900">Vagas Disponíveis</p>
                          <p className="text-[#4CAF50] font-semibold">
                            {training.availableSpots} vagas
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="flex-1 px-6 py-3 bg-[#4CAF50] text-white rounded-lg font-semibold hover:bg-[#45a049] transition-colors">
                        Inscrever-me
                      </button>
                      <button className="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                        Ver Detalhes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-[#E3F2FD] to-[#E8F5E9]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tem interesse em futuras formações?
            </h2>
            <p className="text-gray-600 mb-6">
              Subscreva a nossa newsletter para receber novidades sobre próximas formações
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="O seu email..."
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2FA4E7]"
              />
              <button className="px-6 py-3 bg-[#4CAF50] text-white rounded-lg font-semibold hover:bg-[#45a049] transition-colors">
                Subscrever
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
