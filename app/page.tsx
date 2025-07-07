import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CloudOptIQ - Transforme Cloud Costs em Vantagem Competitiva",
  description:
    "Plataforma FinOps com IA que garante 40% de redução em custos cloud. Implementação em 2 semanas, ROI em 3 meses.",
};

export default function HomePage() {
  return (
    <main>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 glass border-b border-black/10 z-50 py-4">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="nav-logo">
            <Image
              src="/cloud_opt_iq.svg"
              alt="CloudOptIQ"
              width={200}
              height={40}
              priority
            />
          </div>
          <div className="flex gap-8 items-center">
            <Link
              href="#problem"
              className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
            >
              Problema
            </Link>
            <Link
              href="#solution"
              className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
            >
              Solução
            </Link>
            <Link
              href="#benefits"
              className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
            >
              Benefícios
            </Link>
            <Link
              href="#roadmap"
              className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
            >
              Roadmap
            </Link>
            <Link
              href="/investors"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg shadow-lg shadow-emerald-500/40 hover-scale"
            >
              🎯 Para Investidores
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient text-white pt-30 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative z-10 text-center">
            <div className="inline-block bg-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/30">
              🚀 Série Seed $2M • ROI Projetado 18x
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Transforme <span className="text-gradient">Cloud Costs</span>
              <br />
              em Vantagem Competitiva
            </h1>
            <p className="text-xl mb-10 opacity-95 max-w-4xl mx-auto">
              <strong>CloudOptIQ</strong> é a plataforma FinOps com IA que{" "}
              <strong>garante 40% de redução</strong>
              em custos cloud. Implementação em <strong>2 semanas</strong>, ROI
              em <strong>3 meses</strong>. Tecnologia proprietária que
              automatiza otimizações impossíveis manualmente.
            </p>
            <div className="flex gap-5 justify-center flex-wrap mt-10">
              <Link
                href="/investors"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg text-lg shadow-lg shadow-blue-600/40 hover-scale"
              >
                🎯 Oportunidade de Investimento
              </Link>
              <Link
                href="#solution"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white font-semibold rounded-lg text-lg border border-white/30 hover:bg-white/30 hover-scale"
              >
                🚀 Ver Como Funciona
              </Link>
            </div>

            {/* Métricas de Impacto */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-15 text-center">
              <div>
                <div className="text-4xl font-extrabold mb-2">40%</div>
                <div className="opacity-90">Redução Garantida</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold mb-2">2 semanas</div>
                <div className="opacity-90">Implementação</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold mb-2">3 meses</div>
                <div className="opacity-90">ROI Comprovado</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold mb-2">$76B</div>
                <div className="opacity-90">Mercado Total</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-25 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
              💸 O Problema que Resolvemos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Empresas desperdiçam bilhões em cloud por falta de visibilidade e
              otimização inteligente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift">
              <div className="text-5xl mb-5">📊</div>
              <h3 className="text-xl font-semibold mb-4">
                Falta de Visibilidade
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>89% das empresas</strong> não sabem onde estão gastando
                em cloud. Dashboards nativos são limitados e não oferecem
                insights acionáveis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift">
              <div className="text-5xl mb-5">⚡</div>
              <h3 className="text-xl font-semibold mb-4">
                Otimização Manual Impossível
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>Milhares de recursos</strong> ativos 24/7. Identificar e
                otimizar manualmente leva meses e requer especialistas caros.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift">
              <div className="text-5xl mb-5">💰</div>
              <h3 className="text-xl font-semibold mb-4">
                Desperdício Crescente
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>35% de desperdício médio</strong> em contas cloud. Para
                uma empresa que gasta $1M/ano, são $350k jogados fora.
              </p>
            </div>
          </div>

          {/* Estatísticas de Mercado */}
          <div className="bg-white p-10 rounded-2xl mt-15 text-center border border-gray-200">
            <h3 className="text-2xl font-semibold mb-8">
              📈 Oportunidade de Mercado
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">$678B</div>
                <div className="text-gray-500">Gasto Global Cloud (2024)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">25%</div>
                <div className="text-gray-500">Crescimento Anual FinOps</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-600">$76B</div>
                <div className="text-gray-500">Mercado Endereçável</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">98%</div>
                <div className="text-gray-500">Empresas Sem FinOps</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-25">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
              🤖 Nossa Solução Proprietária
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              IA avançada que automatiza otimizações cloud impossíveis de fazer
              manualmente
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-5 text-gray-900">
                🎯 Como Funciona
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✅</span>
                  <span>
                    <strong>Conexão Automática:</strong> Integra com AWS, Azure,
                    GCP em minutos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✅</span>
                  <span>
                    <strong>Análise em Tempo Real:</strong> IA processa milhões
                    de métricas simultaneamente
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✅</span>
                  <span>
                    <strong>Otimizações Inteligentes:</strong> Algoritmos
                    proprietários identificam economias
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✅</span>
                  <span>
                    <strong>Implementação Automática:</strong> Aplica
                    otimizações com aprovação
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✅</span>
                  <span>
                    <strong>Monitoramento Contínuo:</strong> Garante performance
                    e economia
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✅</span>
                  <span>
                    <strong>Relatórios Executivos:</strong> ROI e economia em
                    tempo real
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-10 rounded-2xl border border-gray-200">
              <h4 className="text-xl font-semibold mb-5 text-center">
                💡 Diferenciais Técnicos
              </h4>
              <div className="space-y-5">
                <div>
                  <div className="text-lg font-semibold mb-2">
                    🚀 Backend em Rust
                  </div>
                  <div className="text-sm text-gray-600">
                    Performance 10x superior, processamento em microssegundos
                  </div>
                </div>
                <div>
                  <div className="text-lg font-semibold mb-2">
                    🧠 IA Proprietária
                  </div>
                  <div className="text-sm text-gray-600">
                    Algoritmos únicos de otimização multi-cloud
                  </div>
                </div>
                <div>
                  <div className="text-lg font-semibold mb-2">
                    🔒 Enterprise Security
                  </div>
                  <div className="text-sm text-gray-600">
                    SOC2, ISO27001, zero acesso aos dados sensíveis
                  </div>
                </div>
                <div>
                  <div className="text-lg font-semibold mb-2">
                    ⚡ Implementação Rápida
                  </div>
                  <div className="text-sm text-gray-600">
                    2 semanas vs 6 meses dos concorrentes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-25 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
              🎯 Benefícios Garantidos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Resultados mensuráveis desde o primeiro mês de implementação
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "40% Redução de Custos",
                desc: "Garantimos mínimo de 40% de economia ou reembolso total",
              },
              {
                icon: "⚡",
                title: "ROI em 3 Meses",
                desc: "Investimento se paga em 90 dias, economia líquida imediata",
              },
              {
                icon: "🚀",
                title: "Implementação em 2 Semanas",
                desc: "Setup completo em 14 dias vs 6 meses dos concorrentes",
              },
              {
                icon: "📊",
                title: "Visibilidade Total",
                desc: "Dashboard executivo com insights acionáveis em tempo real",
              },
              {
                icon: "🤖",
                title: "Automação Completa",
                desc: "Zero trabalho manual, otimizações 24/7 sem intervenção",
              },
              {
                icon: "🔒",
                title: "Segurança Enterprise",
                desc: "Conformidade SOC2/ISO27001, auditoria completa disponível",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover-lift"
              >
                <div className="text-5xl mb-5">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-25">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
              🗺️ Roadmap de Implementação
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Processo estruturado que garante sucesso e ROI rápido
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                phase: "Semana 1-2",
                title: "Setup e Integração",
                items: [
                  "Conexão com provedores cloud",
                  "Configuração de permissões",
                  "Baseline de custos atual",
                  "Treinamento da equipe",
                ],
              },
              {
                phase: "Semana 3-4",
                title: "Análise e Otimização",
                items: [
                  "Identificação de oportunidades",
                  "Aprovação das otimizações",
                  "Implementação gradual",
                  "Monitoramento de impacto",
                ],
              },
              {
                phase: "Mês 2-3",
                title: "Expansão e Automação",
                items: [
                  "Otimizações avançadas",
                  "Automação completa",
                  "Relatórios executivos",
                  "Métricas de ROI",
                ],
              },
              {
                phase: "Ongoing",
                title: "Evolução Contínua",
                items: [
                  "Novas otimizações IA",
                  "Expansão multi-cloud",
                  "Insights predictivos",
                  "Suporte premium 24/7",
                ],
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover-lift"
              >
                <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {phase.phase}
                </div>
                <h3 className="text-xl font-semibold mb-4">{phase.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✅</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-25 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            🚀 Ready to Transform Your Cloud Costs?
          </h2>
          <p className="text-xl mb-10 opacity-95 max-w-3xl mx-auto">
            Junte-se às empresas que já <strong>economizam milhões</strong> com CloudOptIQ. 
            <br />Implementação gratuita para early adopters qualificados.
          </p>
          
          <div className="flex gap-5 justify-center flex-wrap mb-12">
            <Link href="/investors" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg text-lg shadow-lg hover-scale">
              💎 Oportunidade de Investimento
            </Link>
            <a 
              href="mailto:anderson@cloudoptiq.com?subject=Demo%20CloudOptIQ&body=Olá,%0A%0AGostaria%20de%20agendar%20uma%20demo%20da%20CloudOptIQ%20para:%0A%0A-%20Empresa:%0A-%20Gasto%20mensal%20cloud:%0A-%20Principal%20provedor:%20(AWS/Azure/GCP)%0A-%20Melhor%20horário:%0A%0AObrigado!" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white font-semibold rounded-lg text-lg border border-white/30 hover:bg-white/30 hover-scale"
            >
              📅 Agendar Demo Gratuita
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 max-w-4xl mx-auto">
            <h4 className="mb-5 text-lg font-semibold">
              🎯 Garantias para Early Adopters
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span>Implementação gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span>40% economia garantida</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span>ROI em 90 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✅</span>
                <span>Suporte premium 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-15">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <Image
                src="/cloud_opt_iq.svg"
                alt="CloudOptIQ"
                width={150}
                height={32}
                className="brightness-0 invert"
              />
            </div>
            <div className="flex gap-8 justify-center">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/investors"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Investidores
              </Link>
              <Link
                href="#solution"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Solução
              </Link>
              <a
                href="mailto:anderson@cloudoptiq.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contato
              </a>
            </div>
            <div className="text-right">
              <p className="mb-2 text-sm text-gray-400">
                📧 anderson@cloudoptiq.com
              </p>
              {/* <p className="text-sm text-gray-400">🚀 Série Seed $2M • ROI 18x</p> */}
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-700 text-gray-500 text-sm">
            <p>&copy; 2025 CloudOptIQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
