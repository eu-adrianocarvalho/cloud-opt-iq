import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CloudOptIQ - Oportunidade de Investimento | Série Seed $2M',
  description: 'Investimento Série Seed de $2M na CloudOptIQ. Mercado de $76B, ROI projetado de 18x, equipe experiente. A revolução FinOps com IA.',
  keywords: 'investimento, série seed, finops, cloud optimization, venture capital, startup, roi',
}

export default function InvestorsPage() {
  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Image 
              src="/CloudOptIQ_01_blue.svg" 
              alt="CloudOptIQ" 
              width={200}
              height={40}
              priority
            />
          </div>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="#traction">Tração</Link>
            <Link href="#team">Time</Link>
            <Link href="#financials">Financeiro</Link>
            <a href="mailto:anderson@cloudoptiq.com" className="cta-button">
              Contato Direto
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
        color: '#1a1a1a',
        padding: '120px 0 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='%232563eb' fill-opacity='0.03'><circle cx='30' cy='30' r='2'/></g></svg>")`,
          backgroundRepeat: 'repeat',
          zIndex: 1
        }} />
        
        <div className="container">
          <div style={{position: 'relative', zIndex: 2, textAlign: 'center'}}>
            <div className="hero-badge" style={{
              background: 'rgba(37, 99, 235, 0.1)',
              color: '#2563eb',
              border: '1px solid rgba(37, 99, 235, 0.2)'
            }}>
              💎 Oportunidade de Investimento Série Seed
            </div>
            <h1 className="hero-title" style={{color: '#1a1a1a'}}>
              Transforme <span style={{
                background: 'linear-gradient(135deg, #2563eb, #10b981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>$2M em $36M</span><br />
              com a Revolução FinOps
            </h1>
            <p className="hero-subtitle" style={{color: '#374151'}}>
              CloudOptIQ está capturando um mercado de <strong>$76B</strong> com tecnologia proprietária que 
              <strong> garante 40% de redução de custos cloud</strong>. ROI projetado de <strong>18x em 5 anos</strong>.
            </p>
            
            {/* Investment Metrics */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px',
              margin: '60px 0'
            }}>
              {[
                { number: '$2M', label: 'Captação Série Seed' },
                { number: '20%', label: 'Equity Oferecido' },
                { number: '18x', label: 'ROI Projetado (5 anos)' },
                { number: '$76B', label: 'Mercado Total (TAM)' }
              ].map((metric, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  padding: '32px 24px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  border: '1px solid rgba(37, 99, 235, 0.2)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                  transition: 'transform 0.3s ease'
                }}>
                  <span style={{
                    fontSize: '36px',
                    fontWeight: '800',
                    color: '#2563eb',
                    marginBottom: '8px',
                    display: 'block'
                  }}>
                    {metric.number}
                  </span>
                  <span style={{
                    fontSize: '16px',
                    color: '#4a5568',
                    fontWeight: '500'
                  }}>
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="hero-cta">
              <a href="../pitch-deck.html" className="primary-button large" target="_blank">
                📊 Ver Pitch Deck Completo
              </a>
              <Link href="#traction" className="secondary-button large" style={{
                background: 'rgba(37, 99, 235, 0.1)',
                color: '#2563eb',
                border: '1px solid rgba(37, 99, 235, 0.2)'
              }}>
                📈 Analisar Tração
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch Deck Preview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>📊 Pitch Deck Interativo</h2>
            <p>Acesse nossa apresentação completa com 16 slides detalhados, projeções financeiras e roadmap técnico</p>
          </div>
          
          <div style={{
            background: 'white',
            border: '1px solid #e5e7eb',
            padding: '40px',
            borderRadius: '16px'
          }}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center'}}>
              <div>
                <h3 style={{fontSize: '24px', fontWeight: '600', marginBottom: '20px', color: '#1a1a1a'}}>
                  Pitch Deck CloudOptIQ
                </h3>
                <ul style={{listStyle: 'none', color: '#4a5568', lineHeight: '2'}}>
                  <li>✅ Problema e Oportunidade de Mercado</li>
                  <li>✅ Solução Tecnológica Proprietária</li>
                  <li>✅ Modelo de Negócio e Monetização</li>
                  <li>✅ Análise Competitiva Detalhada</li>
                  <li>✅ Projeções Financeiras 2025-2030</li>
                  <li>✅ Time Fundador e Roadmap</li>
                  <li>✅ Pedido de Investimento e Uso de Capital</li>
                </ul>
                
                <div style={{marginTop: '30px'}}>
                  <a href="../pitch-deck.html" className="primary-button" target="_blank">
                    🚀 Acessar Pitch Deck
                  </a>
                  <a href="../pitch-deck-print.html" className="secondary-button" target="_blank" style={{marginLeft: '16px'}}>
                    📄 Versão PDF
                  </a>
                </div>
              </div>
              
              <div style={{textAlign: 'center'}}>
                <div style={{
                  background: '#f8fafc',
                  padding: '40px',
                  borderRadius: '12px',
                  border: '2px dashed #d1d5db'
                }}>
                  <Image 
                    src="/CloudOptIQ_02_symbol_blue.svg" 
                    alt="CloudOptIQ" 
                    width={60}
                    height={60}
                    style={{marginBottom: '20px'}}
                  />
                  <h4 style={{marginBottom: '10px', color: '#374151'}}>16 Slides Profissionais</h4>
                  <p style={{color: '#6b7280', fontSize: '14px'}}>
                    Navegação interativa, gráficos dinâmicos<br />e dados atualizados em tempo real
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section id="traction" style={{background: '#f8fafc', padding: '100px 0'}}>
        <div className="container">
          <div className="section-header">
            <h2>🚀 Por Que Investir Agora?</h2>
            <p>Momento ideal para entrada no mercado FinOps com tecnologia disruptiva e tração comprovada</p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {[
              {
                icon: '📈',
                title: 'Mercado em Crescimento Exponencial',
                desc: 'Mercado FinOps cresce 25% ao ano. Empresas gastam $678B em cloud anualmente, desperdiçando 35%. Nossa oportunidade: $76B em economia potencial.'
              },
              {
                icon: '🤖',
                title: 'Tecnologia Proprietária Única',
                desc: 'Backend em Rust + IA proprietária = performance 10x superior. Algoritmos únicos de otimização que competidores levam 2+ anos para replicar.'
              },
              {
                icon: '⚡',
                title: 'Go-to-Market Acelerado',
                desc: 'Implementação em 2 semanas vs 6 meses dos concorrentes. ROI de 300% em 3 meses garante baixo churn e expansão rápida.'
              },
              {
                icon: '🎯',
                title: 'Modelo de Receita Recorrente',
                desc: 'SaaS + % sobre economia gerada = receita previsível e escalável. Cliente médio paga $24k/ano, CLV de $120k com payback em 6 meses.'
              },
              {
                icon: '🏆',
                title: 'Time de Fundadores Experiente',
                desc: 'CEO com 15 anos em enterprise, CTO especialista em sistemas críticos, CPO com track record em produto. Já executaram exits anteriores.'
              },
              {
                icon: '🔒',
                title: 'Barreiras de Entrada Altas',
                desc: 'Certificações enterprise, compliance SOC2/ISO27001, integrações complexas e rede de parcerias criam moat defensável contra novos entrantes.'
              }
            ].map((advantage, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '32px',
                borderRadius: '16px',
                borderLeft: '4px solid #3b82f6',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
              }}>
                <span style={{fontSize: '32px', marginBottom: '16px', display: 'block'}}>{advantage.icon}</span>
                <h3 style={{fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#1a1a1a'}}>
                  {advantage.title}
                </h3>
                <p style={{color: '#4a5568', lineHeight: '1.6'}}>{advantage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financials Section */}
      <section id="financials" className="section">
        <div className="container">
          <div className="section-header">
            <h2>💰 Projeções Financeiras</h2>
            <p>Crescimento sustentável com margens altas e path to profitability claro</p>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginTop: '60px'}}>
            {/* Revenue Chart */}
            <div style={{
              background: '#f8fafc',
              padding: '40px',
              borderRadius: '16px',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{fontSize: '20px', fontWeight: '600', marginBottom: '30px', color: '#1a1a1a'}}>
                Receita Anual (ARR)
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'end',
                gap: '16px',
                height: '200px',
                marginBottom: '20px'
              }}>
                {[
                  { value: '$120k', height: '8%' },
                  { value: '$950k', height: '25%' },
                  { value: '$2.8M', height: '48%' },
                  { value: '$6.2M', height: '75%' },
                  { value: '$12.5M', height: '100%' }
                ].map((bar, index) => (
                  <div key={index} style={{
                    flex: 1,
                    background: 'linear-gradient(180deg, #3b82f6, #2563eb)',
                    borderRadius: '4px 4px 0 0',
                    position: 'relative',
                    minHeight: '20px',
                    height: bar.height
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-25px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#374151'
                    }}>
                      {bar.value}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{display: 'flex', gap: '16px'}}>
                {['2025', '2026', '2027', '2028', '2029'].map((year, index) => (
                  <div key={index} style={{
                    flex: 1,
                    textAlign: 'center',
                    fontSize: '14px',
                    color: '#6b7280',
                    fontWeight: '500'
                  }}>
                    {year}
                  </div>
                ))}
              </div>
            </div>

            {/* Margin Chart */}
            <div style={{
              background: '#f8fafc',
              padding: '40px',
              borderRadius: '16px',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{fontSize: '20px', fontWeight: '600', marginBottom: '30px', color: '#1a1a1a'}}>
                Margem Bruta (%)
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'end',
                gap: '16px',
                height: '200px',
                marginBottom: '20px'
              }}>
                {[
                  { value: '65%', height: '65%' },
                  { value: '75%', height: '75%' },
                  { value: '82%', height: '82%' },
                  { value: '87%', height: '87%' },
                  { value: '90%', height: '90%' }
                ].map((bar, index) => (
                  <div key={index} style={{
                    flex: 1,
                    background: 'linear-gradient(180deg, #3b82f6, #2563eb)',
                    borderRadius: '4px 4px 0 0',
                    position: 'relative',
                    minHeight: '20px',
                    height: bar.height
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-25px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#374151'
                    }}>
                      {bar.value}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{display: 'flex', gap: '16px'}}>
                {['2025', '2026', '2027', '2028', '2029'].map((year, index) => (
                  <div key={index} style={{
                    flex: 1,
                    textAlign: 'center',
                    fontSize: '14px',
                    color: '#6b7280',
                    fontWeight: '500'
                  }}>
                    {year}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Use of Capital */}
          <div style={{
            marginTop: '60px',
            background: '#f8fafc',
            padding: '40px',
            borderRadius: '16px'
          }}>
            <h3 style={{fontSize: '24px', fontWeight: '600', marginBottom: '30px', textAlign: 'center'}}>
              Uso do Capital ($2M)
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px'
            }}>
              {[
                { percent: '40%', label: 'Desenvolvimento Produto', amount: '$800k', color: '#3b82f6' },
                { percent: '30%', label: 'Vendas & Marketing', amount: '$600k', color: '#10b981' },
                { percent: '20%', label: 'Operações', amount: '$400k', color: '#f59e0b' },
                { percent: '10%', label: 'Reserva', amount: '$200k', color: '#8b5cf6' }
              ].map((item, index) => (
                <div key={index} style={{textAlign: 'center'}}>
                  <div style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    color: item.color,
                    marginBottom: '8px'
                  }}>
                    {item.percent}
                  </div>
                  <div style={{color: '#374151'}}>{item.label}</div>
                  <div style={{fontSize: '14px', color: '#6b7280', marginTop: '4px'}}>
                    {item.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" style={{background: '#f8fafc', padding: '100px 0'}}>
        <div className="container">
          <div className="section-header">
            <h2>👥 Time Fundador</h2>
            <p>Experiência combinada de 45+ anos em enterprise, cloud e produtos de alto crescimento</p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            marginTop: '60px'
          }}>
            {[
              {
                initials: 'AN',
                name: 'Anderson Nasario',
                role: 'Chief Executive Officer',
                bio: '15+ anos liderando transformação digital em enterprises. Ex-diretor de TI em multinacionais. MBA em Gestão Estratégica. Track record em escalar operações e liderar times de 100+ pessoas.'
              },
              {
                initials: 'DS',
                name: 'Denes Santos',
                role: 'Chief Technology Officer',
                bio: 'Especialista em sistemas críticos e arquiteturas de alta performance. 12+ anos desenvolvendo soluções enterprise. Expert em Rust, distributed systems e machine learning aplicado.'
              },
              {
                initials: 'AC',
                name: 'Adriano Carvalho',
                role: 'Chief Product Officer',
                bio: 'Product leader com experiência em startups de crescimento rápido. 10+ anos desenhando produtos B2B com alta adoção. Especialista em UX enterprise e product-market fit.'
              }
            ].map((member, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '40px 32px',
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  color: 'white',
                  fontWeight: '700'
                }}>
                  {member.initials}
                </div>
                <div style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: '#1a1a1a'
                }}>
                  {member.name}
                </div>
                <div style={{
                  fontSize: '16px',
                  color: '#3b82f6',
                  fontWeight: '500',
                  marginBottom: '16px'
                }}>
                  {member.role}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  {member.bio}
                </div>
              </div>
            ))}
          </div>
          
          <div style={{
            marginTop: '60px',
            textAlign: 'center',
            background: 'white',
            padding: '40px',
            borderRadius: '16px',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{fontSize: '20px', fontWeight: '600', marginBottom: '20px'}}>
              🎯 Advisory Board
            </h3>
            <p style={{color: '#4a5568', marginBottom: '30px'}}>
              Estruturando board com ex-executivos de AWS, Microsoft Azure e líderes de FinOps de empresas Fortune 500
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              {['Ex-VP AWS', 'CFO Fortune 500', 'Head of FinOps'].map((role, index) => (
                <span key={index} style={{
                  background: '#f3f4f6',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '14px'
                }}>
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #10b981, #059669)',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{fontSize: '42px', fontWeight: '700', marginBottom: '20px'}}>
            🚀 Ready to Transform FinOps Together?
          </h2>
          <p style={{fontSize: '20px', marginBottom: '50px', opacity: '0.95'}}>
            Seja parte da revolução que vai <strong>economizar bilhões</strong> em custos cloud globalmente. 
            <br />Oportunidade limitada para early investors visionários.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
            marginBottom: '50px'
          }}>
            {[
              { icon: '📧', title: 'Email Direto', contact: 'anderson@cloudoptiq.com', href: 'mailto:anderson@cloudoptiq.com' },
              { icon: '📞', title: 'Reunião Estratégica', contact: 'Agendar Call 30min', href: 'https://calendly.com/cloudoptiq' },
              { icon: '💼', title: 'Investimento Mínimo', contact: '$50k', extra: 'Ticket médio: $250k' }
            ].map((contact, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                textAlign: 'center'
              }}>
                <span style={{fontSize: '32px', marginBottom: '16px', display: 'block'}}>{contact.icon}</span>
                <h4 style={{marginBottom: '12px', fontWeight: '600'}}>{contact.title}</h4>
                {contact.href ? (
                  <a href={contact.href} style={{color: 'white', textDecoration: 'none', fontWeight: '500'}} target={contact.href.startsWith('http') ? '_blank' : undefined}>
                    {contact.contact}
                  </a>
                ) : (
                  <span style={{fontWeight: '500'}}>{contact.contact}</span>
                )}
                {contact.extra && (
                  <div style={{fontSize: '14px', opacity: '0.8', marginTop: '4px'}}>{contact.extra}</div>
                )}
              </div>
            ))}
          </div>
          
          <div style={{marginTop: '50px'}}>
            <a href="../pitch-deck.html" className="primary-button large" target="_blank">
              📊 Revisar Pitch Deck Completo
            </a>
            <a 
              href="mailto:anderson@cloudoptiq.com?subject=Interesse%20em%20Investimento%20S%C3%A9rie%20Seed&body=Ol%C3%A1%20Anderson%2C%0A%0ATenho%20interesse%20em%20conhecer%20mais%20sobre%20a%20oportunidade%20de%20investimento%20na%20CloudOptIQ.%0A%0AGostaria%20de%20agendar%20uma%20reuni%C3%A3o%20para%20discutir%3A%0A-%20Detalhes%20da%20S%C3%A9rie%20Seed%0A-%20Projeções%20financeiras%0A-%20Roadmap%20tecnológico%0A-%20Due%20diligence%0A%0AObrigado%21" 
              className="secondary-button large"
              style={{marginLeft: '20px'}}
            >
              💎 Manifestar Interesse
            </a>
          </div>
          
          <div style={{
            marginTop: '40px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <p style={{fontSize: '14px', opacity: '0.8'}}>
              💡 <strong>Next Steps:</strong> Due diligence completa disponível para investidores qualificados. 
              Data room com métricas detalhadas, código auditado e análise de mercado.
            </p>
          </div>
        </div>
      </section>

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
                style={{filter: 'brightness(0) invert(1)'}}
              />
            </div>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <a href="../pitch-deck.html" target="_blank">Pitch Deck</a>
              <Link href="#team">Time</Link>
              <a href="mailto:anderson@cloudoptiq.com">Contato</a>
            </div>
            <div className="footer-contact">
              <p>📧 anderson@cloudoptiq.com</p>
              <p>🚀 Série Seed $2M • ROI 18x</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 CloudOptIQ. Confidential - For Qualified Investors Only. | Fundadores: Anderson Nasario, Denes Santos, Adriano Carvalho</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
