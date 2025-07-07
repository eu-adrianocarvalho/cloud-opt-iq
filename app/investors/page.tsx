import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CloudOptIQ - Oportunidade de Investimento | Série Seed $2M",
  description:
    "Investimento Série Seed de $2M na CloudOptIQ. Mercado de $76B, ROI projetado de 18x, equipe experiente. A revolução FinOps com IA.",
  keywords:
    "investimento, série seed, finops, cloud optimization, venture capital, startup, roi",
};

export default function InvestorsPage() {
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
              href="/"
              className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#traction"
              className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
            >
              Tração
            </Link>
            <Link
              href="#team"
              className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
            >
              Time
            </Link>
            <Link
              href="#financials"
              className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
            >
              Financeiro
            </Link>
            {/* <a
              href="mailto:anderson@cloudoptiq.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg shadow-lg shadow-emerald-500/40 hover-scale"
            >
              Contato Direto
            </a> */}
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-slate-200 to-slate-100 text-gray-900 pt-30 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 z-1"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='%232563eb' fill-opacity='0.03'><circle cx='30' cy='30' r='2'/></g></svg>")`,
            backgroundRepeat: "repeat",
          }}
        ></div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="relative z-10 text-center">
            <div className="inline-block bg-blue-500/10 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-500/20">
              💎 Oportunidade de Investimento Série Seed
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
              Transforme{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                $2M em $36M
              </span>
              <br />
              com a Revolução FinOps
            </h1>
            <p className="text-xl mb-10 text-gray-700 max-w-4xl mx-auto">
              CloudOptIQ está capturando um mercado de <strong>$76B</strong> com
              tecnologia proprietária que
              <strong> garante 40% de redução de custos cloud</strong>. ROI
              projetado de <strong>18x em 5 anos</strong>.
            </p>

            {/* Investment Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-15">
              {[
                { number: "$2M", label: "Captação Série Seed" },
                { number: "20%", label: "Equity Oferecido" },
                { number: "18x", label: "ROI Projetado (5 anos)" },
                { number: "$76B", label: "Mercado Total (TAM)" },
              ].map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl text-center border border-blue-500/20 shadow-lg hover-scale"
                >
                  <span className="text-4xl font-extrabold text-blue-600 mb-2 block">
                    {metric.number}
                  </span>
                  <span className="text-base text-gray-600 font-medium">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex gap-5 justify-center flex-wrap">
              {/* <a
                href="../pitch-deck.html"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg text-lg shadow-lg shadow-blue-600/40 hover-scale"
                target="_blank"
              >
                📊 Ver Pitch Deck Completo
              </a> */}
              <Link
                href="#traction"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500/10 text-blue-600 font-semibold rounded-lg text-lg border border-blue-500/20 hover:bg-blue-500/20 hover-scale"
              >
                📈 Analisar Tração
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Pitch Deck Preview */}
      {/* <section className="py-25">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
              📊 Pitch Deck Interativo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Acesse nossa apresentação completa com 16 slides detalhados,
              projeções financeiras e roadmap técnico
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-10 rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-5 text-gray-900">
                  Pitch Deck CloudOptIQ
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✅</span>
                    <span>Problema e Oportunidade de Mercado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✅</span>
                    <span>Solução Tecnológica Proprietária</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✅</span>
                    <span>Modelo de Negócio e Monetização</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✅</span>
                    <span>Análise Competitiva Detalhada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✅</span>
                    <span>Projeções Financeiras 2025-2030</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✅</span>
                    <span>Time Fundador e Roadmap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✅</span>
                    <span>Pedido de Investimento e Uso de Capital</span>
                  </li>
                </ul>

                <div className="mt-8 flex gap-4">
                  <a
                    href="../pitch-deck.html"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover-scale"
                    target="_blank"
                  >
                    🚀 Acessar Pitch Deck
                  </a>
                  <a
                    href="../pitch-deck-print.html"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 hover-scale"
                    target="_blank"
                  >
                    📄 Versão PDF
                  </a>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-slate-50 p-10 rounded-xl border-2 border-dashed border-gray-300">
                  <Image
                    src="/CloudOptIQ_02_symbol_blue.svg"
                    alt="CloudOptIQ"
                    width={60}
                    height={60}
                    className="mx-auto mb-5"
                  />
                  <h4 className="mb-2 text-gray-700 font-semibold">
                    16 Slides Profissionais
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Navegação interativa, gráficos dinâmicos
                    <br />e dados atualizados em tempo real
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Traction Section */}
      <section id="traction" className="py-25 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
              🚀 Por Que Investir Agora?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Momento ideal para entrada no mercado FinOps com tecnologia
              disruptiva e tração comprovada
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📈",
                title: "Mercado em Crescimento Exponencial",
                desc: "Mercado FinOps cresce 25% ao ano. Empresas gastam $678B em cloud anualmente, desperdiçando 35%. Nossa oportunidade: $76B em economia potencial.",
              },
              {
                icon: "🤖",
                title: "Tecnologia Proprietária Única",
                desc: "Backend em Rust + IA proprietária = performance 10x superior. Algoritmos únicos de otimização que competidores levam 2+ anos para replicar.",
              },
              {
                icon: "⚡",
                title: "Go-to-Market Acelerado",
                desc: "Implementação em 2 semanas vs 6 meses dos concorrentes. ROI de 300% em 3 meses garante baixo churn e expansão rápida.",
              },
              {
                icon: "🎯",
                title: "Modelo de Receita Recorrente",
                desc: "SaaS + % sobre economia gerada = receita previsível e escalável. Cliente médio paga $24k/ano, CLV de $120k com payback em 6 meses.",
              },
              {
                icon: "🏆",
                title: "Time de Fundadores Experiente",
                desc: "CEO com 15 anos em enterprise, CTO especialista em sistemas críticos, CPO com track record em produto. Já executaram exits anteriores.",
              },
              {
                icon: "🔒",
                title: "Barreiras de Entrada Altas",
                desc: "Certificações enterprise, compliance SOC2/ISO27001, integrações complexas e rede de parcerias criam moat defensável contra novos entrantes.",
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border-l-4 border-blue-600 shadow-lg hover-lift"
              >
                <span className="text-3xl mb-4 block">{advantage.icon}</span>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Financials Section */}
      <section id="financials" className="py-25">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
              💰 Projeções Financeiras
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Crescimento sustentável com margens altas e path to profitability
              claro
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-15 mt-15">
            {/* Revenue Chart */}
            <div className="bg-slate-50 p-10 rounded-2xl border border-gray-200">
              <div className="text-xl font-semibold mb-8 text-gray-900">
                Receita Anual (ARR)
              </div>
              <div className="flex items-end gap-4 h-48 mb-5">
                {[
                  { value: "$120k", height: "8%" },
                  { value: "$950k", height: "25%" },
                  { value: "$2.8M", height: "48%" },
                  { value: "$6.2M", height: "75%" },
                  { value: "$12.5M", height: "100%" },
                ].map((bar, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-gradient-to-t from-blue-600 to-blue-500 rounded-t relative min-h-5"
                    style={{ height: bar.height }}
                  >
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700">
                      {bar.value}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                {["2025", "2026", "2027", "2028", "2029"].map((year, index) => (
                  <div
                    key={index}
                    className="flex-1 text-center text-sm text-gray-500 font-medium"
                  >
                    {year}
                  </div>
                ))}
              </div>
            </div>

            {/* Margin Chart */}
            <div className="bg-slate-50 p-10 rounded-2xl border border-gray-200">
              <div className="text-xl font-semibold mb-8 text-gray-900">
                Margem Bruta (%)
              </div>
              <div className="flex items-end gap-4 h-48 mb-5">
                {[
                  { value: "65%", height: "65%" },
                  { value: "75%", height: "75%" },
                  { value: "82%", height: "82%" },
                  { value: "87%", height: "87%" },
                  { value: "90%", height: "90%" },
                ].map((bar, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-gradient-to-t from-blue-600 to-blue-500 rounded-t relative min-h-5"
                    style={{ height: bar.height }}
                  >
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700">
                      {bar.value}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                {["2025", "2026", "2027", "2028", "2029"].map((year, index) => (
                  <div
                    key={index}
                    className="flex-1 text-center text-sm text-gray-500 font-medium"
                  >
                    {year}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Use of Capital */}
          <div className="mt-15 bg-slate-50 p-10 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Uso do Capital ($2M)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  percent: "40%",
                  label: "Desenvolvimento Produto",
                  amount: "$800k",
                  color: "text-blue-600",
                },
                {
                  percent: "30%",
                  label: "Vendas & Marketing",
                  amount: "$600k",
                  color: "text-emerald-600",
                },
                {
                  percent: "20%",
                  label: "Operações",
                  amount: "$400k",
                  color: "text-yellow-600",
                },
                {
                  percent: "10%",
                  label: "Reserva",
                  amount: "$200k",
                  color: "text-purple-600",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold mb-2 ${item.color}`}>
                    {item.percent}
                  </div>
                  <div className="text-gray-700">{item.label}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {item.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section id="team" className="py-25 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
              👥 Time Fundador
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experiência combinada de 45+ anos em enterprise, cloud e produtos
              de alto crescimento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-15">
            {[
              {
                initials: "AN",
                name: "Anderson Nasario",
                role: "Chief Executive Officer",
                bio: "15+ anos liderando transformação digital em enterprises. Ex-diretor de TI em multinacionais. MBA em Gestão Estratégica. Track record em escalar operações e liderar times de 100+ pessoas.",
              },
              {
                initials: "DS",
                name: "Denes Santos",
                role: "Chief Technology Officer",
                bio: "Especialista em sistemas críticos e arquiteturas de alta performance. 12+ anos desenvolvendo soluções enterprise. Expert em Rust, distributed systems e machine learning aplicado.",
              },
              {
                initials: "AC",
                name: "Adriano Carvalho",
                role: "Chief Product Officer",
                bio: "Product leader com experiência em startups de crescimento rápido. 10+ anos desenhando produtos B2B com alta adoção. Especialista em UX enterprise e product-market fit.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-2xl text-center border border-gray-200 hover-lift"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mx-auto mb-5 flex items-center justify-center text-3xl text-white font-bold">
                  {member.initials}
                </div>
                <div className="text-xl font-semibold mb-2">{member.name}</div>
                <div className="text-blue-600 font-medium mb-4">
                  {member.role}
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Investment CTA */}
      {/* <section
        style={{
          background: "linear-gradient(135deg, #10b981, #059669)",
          color: "white",
          padding: "80px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            🚀 Ready to Transform FinOps Together?
          </h2>
          <p
            style={{ fontSize: "20px", marginBottom: "50px", opacity: "0.95" }}
          >
            Seja parte da revolução que vai <strong>economizar bilhões</strong>{" "}
            em custos cloud globalmente.
            <br />
            Oportunidade limitada para early investors visionários.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "32px",
              marginBottom: "50px",
            }}
          >
            {[
              {
                icon: "📧",
                title: "Email Direto",
                contact: "anderson@cloudoptiq.com",
                href: "mailto:anderson@cloudoptiq.com",
              },
              {
                icon: "📞",
                title: "Reunião Estratégica",
                contact: "Agendar Call 30min",
                href: "https://calendly.com/cloudoptiq",
              },
              {
                icon: "💼",
                title: "Investimento Mínimo",
                contact: "$50k",
                extra: "Ticket médio: $250k",
              },
            ].map((contact, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  padding: "32px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "32px",
                    marginBottom: "16px",
                    display: "block",
                  }}
                >
                  {contact.icon}
                </span>
                <h4 style={{ marginBottom: "12px", fontWeight: "600" }}>
                  {contact.title}
                </h4>
                {contact.href ? (
                  <a
                    href={contact.href}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "500",
                    }}
                    target={
                      contact.href.startsWith("http") ? "_blank" : undefined
                    }
                  >
                    {contact.contact}
                  </a>
                ) : (
                  <span style={{ fontWeight: "500" }}>{contact.contact}</span>
                )}
                {contact.extra && (
                  <div
                    style={{
                      fontSize: "14px",
                      opacity: "0.8",
                      marginTop: "4px",
                    }}
                  >
                    {contact.extra}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: "50px" }}>
            <a
              href="../pitch-deck.html"
              className="primary-button large"
              target="_blank"
            >
              📊 Revisar Pitch Deck Completo
            </a>
            <a
              href="mailto:anderson@cloudoptiq.com?subject=Interesse%20em%20Investimento%20S%C3%A9rie%20Seed&body=Ol%C3%A1%20Anderson%2C%0A%0ATenho%20interesse%20em%20conhecer%20mais%20sobre%20a%20oportunidade%20de%20investimento%20na%20CloudOptIQ.%0A%0AGostaria%20de%20agendar%20uma%20reuni%C3%A3o%20para%20discutir%3A%0A-%20Detalhes%20da%20S%C3%A9rie%20Seed%0A-%20Projeções%20financeiras%0A-%20Roadmap%20tecnológico%0A-%20Due%20diligence%0A%0AObrigado%21"
              className="secondary-button large"
              style={{ marginLeft: "20px" }}
            >
              💎 Manifestar Interesse
            </a>
          </div>

          <div
            style={{
              marginTop: "40px",
              paddingTop: "40px",
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <p style={{ fontSize: "14px", opacity: "0.8" }}>
              💡 <strong>Next Steps:</strong> Due diligence completa disponível
              para investidores qualificados. Data room com métricas detalhadas,
              código auditado e análise de mercado.
            </p>
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
                href="#traction"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Tração
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
                📧 nasario@nasario.com.br
              </p>
              {/* <p className="text-sm text-gray-400">
                🚀 Série Seed $2M • ROI 18x
              </p> */}
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
