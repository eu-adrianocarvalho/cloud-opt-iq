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
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Image
              src="/cloud_opt_iq.svg"
              alt="CloudOptIQ"
              width={200}
              height={40}
              priority
            />
          </div>
          <div className="nav-links">
            <Link href="#problem">Problema</Link>
            <Link href="#solution">Solução</Link>
            <Link href="#benefits">Benefícios</Link>
            <Link href="#roadmap">Roadmap</Link>
            {/* <Link href="/investors" className="cta-button">
              💎 Para Investidores
            </Link> */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              🚀 Série Seed $2M • ROI Projetado 18x
            </div>
            <h1 className="hero-title">
              Transforme <span className="gradient-text">Cloud Costs</span>
              <br />
              em Vantagem Competitiva
            </h1>
            <p className="hero-subtitle">
              <strong>CloudOptIQ</strong> é a plataforma FinOps com IA que{" "}
              <strong>garante 40% de redução</strong>
              em custos cloud. Implementação em <strong>2 semanas</strong>, ROI
              em <strong>3 meses</strong>. Tecnologia proprietária que
              automatiza otimizações impossíveis manualmente.
            </p>
            <div className="hero-cta">
              <Link href="#" className="primary-button large">
                🎯 Oportunidade de Investimento
              </Link>
              <Link href="#solution" className="secondary-button large">
                🚀 Ver Como Funciona
              </Link>
            </div>

            {/* Métricas de Impacto */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "32px",
                marginTop: "60px",
                textAlign: "center",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: "800",
                    marginBottom: "8px",
                  }}
                >
                  30%
                </div>
                <div style={{ opacity: "0.9" }}>
                  Redução de Custos Garantida
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: "800",
                    marginBottom: "8px",
                  }}
                >
                  2 semanas
                </div>
                <div style={{ opacity: "0.9" }}>Implementação</div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: "800",
                    marginBottom: "8px",
                  }}
                >
                  3 meses
                </div>
                <div style={{ opacity: "0.9" }}>
                  Return Over Investiment (ROI)
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: "800",
                    marginBottom: "8px",
                  }}
                >
                  $76B
                </div>
                <div style={{ opacity: "0.9" }}>
                  Total Addressable Market (TAM)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section
        id="problem"
        className="section"
        style={{ background: "#f8fafc" }}
      >
        <div className="container">
          <div className="section-header">
            <h2>💸 O Problema que Resolvemos</h2>
            <p>
              Empresas desperdiçam bilhões em cloud por falta de visibilidade e
              otimização inteligente
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
            }}
          >
            <div className="card">
              <div style={{ fontSize: "48px", marginBottom: "20px" }}>📊</div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "16px",
                }}
              >
                Falta de Visibilidade
              </h3>
              <p style={{ color: "#4a5568", lineHeight: "1.6" }}>
                <strong>89% das empresas</strong> não sabem onde estão gastando
                em cloud. Dashboards nativos são limitados e não oferecem
                insights acionáveis.
              </p>
            </div>

            <div className="card">
              <div style={{ fontSize: "48px", marginBottom: "20px" }}>⚡</div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "16px",
                }}
              >
                Otimização Manual Impossível
              </h3>
              <p style={{ color: "#4a5568", lineHeight: "1.6" }}>
                <strong>Milhares de recursos</strong> ativos 24/7. Identificar e
                otimizar manualmente leva meses e requer especialistas caros.
              </p>
            </div>

            <div className="card">
              <div style={{ fontSize: "48px", marginBottom: "20px" }}>💰</div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "16px",
                }}
              >
                Desperdício Crescente
              </h3>
              <p style={{ color: "#4a5568", lineHeight: "1.6" }}>
                <strong>35% de desperdício médio</strong> em contas cloud. Para
                uma empresa que gasta $1M/ano, são $350k jogados fora.
              </p>
            </div>
          </div>

          {/* Estatísticas de Mercado */}
          <div
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "16px",
              marginTop: "60px",
              textAlign: "center",
              border: "1px solid #e5e7eb",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "600",
                marginBottom: "30px",
              }}
            >
              📈 Oportunidade de Mercado
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "32px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    color: "#3b82f6",
                  }}
                >
                  $678B
                </div>
                <div style={{ color: "#6b7280" }}>
                  Gasto Global Cloud (2024)
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    color: "#10b981",
                  }}
                >
                  25%
                </div>
                <div style={{ color: "#6b7280" }}>Crescimento Anual FinOps</div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    color: "#f59e0b",
                  }}
                >
                  $76B
                </div>
                <div style={{ color: "#6b7280" }}>Mercado Endereçável</div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    color: "#8b5cf6",
                  }}
                >
                  98%
                </div>
                <div style={{ color: "#6b7280" }}>Empresas Sem FinOps</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="section">
        <div className="container">
          <div className="section-header">
            <h2>🤖 Nossa Solução Proprietária</h2>
            <p>
              IA avançada que automatiza otimizações cloud impossíveis de fazer
              manualmente
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "40px",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  marginBottom: "20px",
                  color: "#1a1a1a",
                }}
              >
                🎯 Como Funciona
              </h3>
              <ul
                style={{ listStyle: "none", color: "#4a5568", lineHeight: "2" }}
              >
                <li>
                  ✅ <strong>Conexão Automática:</strong> Integra com AWS,
                  Azure, GCP em minutos
                </li>
                <li>
                  ✅ <strong>Análise em Tempo Real:</strong> IA processa milhões
                  de métricas simultaneamente
                </li>
                <li>
                  ✅ <strong>Otimizações Inteligentes:</strong> Algoritmos
                  proprietários identificam economias
                </li>
                <li>
                  ✅ <strong>Implementação Automática:</strong> Aplica
                  otimizações com aprovação
                </li>
                <li>
                  ✅ <strong>Monitoramento Contínuo:</strong> Garante
                  performance e economia
                </li>
                <li>
                  ✅ <strong>Relatórios Executivos:</strong> ROI e economia em
                  tempo real
                </li>
              </ul>
            </div>

            <div
              style={{
                background: "#f8fafc",
                padding: "40px",
                borderRadius: "16px",
                border: "1px solid #e5e7eb",
              }}
            >
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                💡 Diferenciais Técnicos
              </h4>
              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  🚀 Backend em Rust
                </div>
                <div style={{ fontSize: "14px", color: "#6b7280" }}>
                  Performance 10x superior, processamento em microssegundos
                </div>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  🧠 IA Proprietária
                </div>
                <div style={{ fontSize: "14px", color: "#6b7280" }}>
                  Algoritmos únicos de otimização multi-cloud
                </div>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  🔒 Enterprise Security
                </div>
                <div style={{ fontSize: "14px", color: "#6b7280" }}>
                  SOC2, ISO27001, zero acesso aos dados sensíveis
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  ⚡ Implementação Rápida
                </div>
                <div style={{ fontSize: "14px", color: "#6b7280" }}>
                  2 semanas vs 6 meses dos concorrentes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="section"
        style={{ background: "#f8fafc" }}
      >
        <div className="container">
          <div className="section-header">
            <h2>🎯 Benefícios Garantidos</h2>
            <p>Resultados mensuráveis desde o primeiro mês de implementação</p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "32px",
            }}
          >
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
              <div key={index} className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "48px", marginBottom: "20px" }}>
                  {benefit.icon}
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginBottom: "12px",
                  }}
                >
                  {benefit.title}
                </h3>
                <p style={{ color: "#4a5568", lineHeight: "1.6" }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="section">
        <div className="container">
          <div className="section-header">
            <h2>🗺️ Roadmap de Implementação</h2>
            <p>Processo estruturado que garante sucesso e ROI rápido</p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "32px",
            }}
          >
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
              <div key={index} className="card">
                <div
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "600",
                    display: "inline-block",
                    marginBottom: "16px",
                  }}
                >
                  {phase.phase}
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "16px",
                  }}
                >
                  {phase.title}
                </h3>
                <ul style={{ listStyle: "none", color: "#4a5568" }}>
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} style={{ marginBottom: "8px" }}>
                      ✅ {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="section" style={{
        background: 'linear-gradient(135deg, #10b981, #059669)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{fontSize: '42px', fontWeight: '700', marginBottom: '20px'}}>
            🚀 Ready to Transform Your Cloud Costs?
          </h2>
          <p style={{fontSize: '20px', marginBottom: '40px', opacity: '0.95'}}>
            Junte-se às empresas que já <strong>economizam milhões</strong> com CloudOptIQ. 
            <br />Implementação gratuita para early adopters qualificados.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '50px'
          }}>
            <Link href="/investors" className="primary-button large">
              💎 Oportunidade de Investimento
            </Link>
            <a 
              href="mailto:anderson@cloudoptiq.com?subject=Demo%20CloudOptIQ&body=Olá,%0A%0AGostaria%20de%20agendar%20uma%20demo%20da%20CloudOptIQ%20para:%0A%0A-%20Empresa:%0A-%20Gasto%20mensal%20cloud:%0A-%20Principal%20provedor:%20(AWS/Azure/GCP)%0A-%20Melhor%20horário:%0A%0AObrigado!" 
              className="secondary-button large"
            >
              📅 Agendar Demo Gratuita
            </a>
          </div>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            padding: '30px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <h4 style={{marginBottom: '20px', fontSize: '18px', fontWeight: '600'}}>
              🎯 Garantias para Early Adopters
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              fontSize: '14px'
            }}>
              <div>✅ Implementação gratuita</div>
              <div>✅ 40% economia garantida</div>
              <div>✅ ROI em 90 dias</div>
              <div>✅ Suporte premium 24/7</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <Image
                src="/CloudOptIQ_01_blue.svg"
                alt="CloudOptIQ"
                width={150}
                height={32}
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/investors">Investidores</Link>
              <Link href="#solution">Solução</Link>
              {/* <a href="mailto:anderson@cloudoptiq.com">Contato</a> */}
            </div>
            <div className="footer-contact">
              <p>📧 anderson@cloudoptiq.com</p>
              {/* <p>🚀 Série Seed $2M • ROI 18x</p> */}
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 CloudOptIQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
