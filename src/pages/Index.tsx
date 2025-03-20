
import React, { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Initialize counter animations
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const increment = Math.ceil(target / 50);
      let currentCount = 0;
      
      const updateCounter = () => {
        if(currentCount < target) {
          currentCount += increment;
          if(currentCount > target) currentCount = target;
          counter.textContent = currentCount.toString();
          setTimeout(updateCounter, 30);
        }
      }
      
      updateCounter();
    });

    // Initialize chart animations
    const animateCharts = () => {
      // Donut chart animation
      const donutSegments = document.querySelectorAll('.donut-segment');
      donutSegments.forEach((segment, index) => {
        setTimeout(() => {
          segment.classList.add('animated');
        }, index * 300);
      });

      // Bar chart animation
      const bars = document.querySelectorAll('.bar');
      bars.forEach((bar, index) => {
        setTimeout(() => {
          bar.classList.add('animated');
        }, index * 200);
      });

      // Line chart animation
      const lineChart = document.querySelector('.chart-line');
      if (lineChart) {
        lineChart.classList.add('animated');
      }

      // Pie chart animation
      const pieSegments = document.querySelectorAll('.pie-segment');
      pieSegments.forEach((segment, index) => {
        setTimeout(() => {
          segment.classList.add('animated');
        }, index * 300);
      });

      // Horizontal bar animation
      const horizontalBars = document.querySelectorAll('.horizontal-bar-fill');
      horizontalBars.forEach((bar, index) => {
        setTimeout(() => {
          bar.classList.add('animated');
        }, index * 200);
      });
    };

    // Run chart animations after a slight delay
    setTimeout(animateCharts, 500);

    // Add hover effects for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('card-hover');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('card-hover');
      });
    });

    // Add table row hover effects
    const tableRows = document.querySelectorAll('.data-table tbody tr');
    tableRows.forEach(row => {
      row.addEventListener('mouseenter', () => {
        row.classList.add('row-hover');
      });
      row.addEventListener('mouseleave', () => {
        row.classList.remove('row-hover');
      });
    });

    // Tooltip functionality
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
      element.addEventListener('mouseenter', (e) => {
        const target = e.currentTarget as HTMLElement;
        const tooltipText = target.getAttribute('data-tooltip');
        
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = tooltipText;
        
        document.body.appendChild(tooltip);
        
        const rect = target.getBoundingClientRect();
        tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
        tooltip.style.left = `${rect.left + (rect.width/2) - (tooltip.offsetWidth/2)}px`;
        tooltip.style.opacity = '1';
        
        target.addEventListener('mouseleave', () => {
          tooltip.remove();
        });
      });
    });

  }, []);

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="https://www.bradesco.com.br/content/dam/bradesco/common/logos/bradesco-logo.svg" alt="Logo Bradesco" />
        </div>
        <div className="user-info">
          <div className="user-avatar">JS</div>
          <div className="user-details">
            <span className="user-name">João Silva</span>
            <span className="user-role">Líder de Equipe</span>
          </div>
        </div>
      </header>

      {/* Dashboard Title */}
      <div className="dashboard-title">
        <h1>Dashboard de Automações</h1>
        <p>Gerenciamento de Automações no ServiceNow</p>
        <div className="title-decoration"></div>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Section 1: Visão Geral da Equipe */}
        <section className="overview-section">
          <h2>Visão Geral da Equipe</h2>
          
          <div className="cards-container">
            <div className="card card-primary">
              <div className="card-icon">👥</div>
              <div className="card-content">
                <div className="card-value"><span className="counter" data-target="12">0</span></div>
                <div className="card-title">Membros na Equipe</div>
              </div>
              <div className="card-shine"></div>
            </div>
            
            <div className="card card-secondary">
              <div className="card-icon">🤖</div>
              <div className="card-content">
                <div className="card-value"><span className="counter" data-target="27">0</span></div>
                <div className="card-title">Automações Criadas</div>
              </div>
              <div className="card-shine"></div>
            </div>
            
            <div className="card card-success">
              <div className="card-icon">✅</div>
              <div className="card-content">
                <div className="card-value"><span className="counter" data-target="20">0</span></div>
                <div className="card-title">Automações Ativas</div>
              </div>
              <div className="card-shine"></div>
            </div>

            <div className="card card-info">
              <div className="card-icon">⚡</div>
              <div className="card-content">
                <div className="card-value"><span className="counter" data-target="120">0</span></div>
                <div className="card-title">Execuções Hoje</div>
              </div>
              <div className="card-shine"></div>
            </div>
          </div>

          <div className="chart-container">
            <div className="chart-box">
              <h3>Automações por Status</h3>
              <div className="donut-chart-container">
                <div className="donut-chart">
                  <svg width="220" height="220" viewBox="0 0 220 220">
                    <defs>
                      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#00000033" />
                      </filter>
                      <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4CAF50" />
                        <stop offset="100%" stopColor="#8BC34A" />
                      </linearGradient>
                      <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFC107" />
                        <stop offset="100%" stopColor="#FFE082" />
                      </linearGradient>
                      <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#F44336" />
                        <stop offset="100%" stopColor="#EF9A9A" />
                      </linearGradient>
                    </defs>
                    
                    <circle className="donut-ring" cx="110" cy="110" r="80" fill="transparent" stroke="#f0f0f0" strokeWidth="20" filter="url(#shadow)"/>
                    
                    <circle className="donut-segment donut-segment-ativas" cx="110" cy="110" r="80" fill="transparent" stroke="url(#greenGradient)" strokeWidth="20" strokeDasharray="502.4 0" strokeDashoffset="0"/>
                    
                    <circle className="donut-segment donut-segment-pausadas" cx="110" cy="110" r="80" fill="transparent" stroke="url(#yellowGradient)" strokeWidth="20" strokeDasharray="125.6 377.0" strokeDashoffset="0"/>
                    
                    <circle className="donut-segment donut-segment-inativas" cx="110" cy="110" r="80" fill="transparent" stroke="url(#redGradient)" strokeWidth="20" strokeDasharray="50.2 452.2" strokeDashoffset="-125.6"/>
                    
                    <g className="donut-text">
                      <text x="110" y="100" textAnchor="middle" className="donut-center-text">Total</text>
                      <text x="110" y="130" textAnchor="middle" className="donut-center-number">27</text>
                    </g>
                  </svg>
                </div>
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-color" style={{background: "linear-gradient(to right, #4CAF50, #8BC34A)"}}></span>
                    <span className="legend-text">Ativas (20)</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{background: "linear-gradient(to right, #FFC107, #FFE082)"}}></span>
                    <span className="legend-text">Pausadas (5)</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{background: "linear-gradient(to right, #F44336, #EF9A9A)"}}></span>
                    <span className="legend-text">Inativas (2)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="chart-box">
              <h3>Execuções Diárias por Automação</h3>
              <div className="bar-chart-container">
                <div className="bar-chart">
                  <div className="bar-chart-y-axis">
                    <span>40</span>
                    <span>30</span>
                    <span>20</span>
                    <span>10</span>
                    <span>0</span>
                  </div>
                  <div className="bar-chart-bars">
                    <div className="bar-group">
                      <div className="bar" style={{height: "15%"}} data-value="15">
                        <div className="bar-tooltip">15</div>
                      </div>
                      <span className="bar-label">Notas Fiscais</span>
                    </div>
                    <div className="bar-group">
                      <div className="bar" style={{height: "32%"}} data-value="32">
                        <div className="bar-tooltip">32</div>
                      </div>
                      <span className="bar-label">Consolidação</span>
                    </div>
                    <div className="bar-group">
                      <div className="bar" style={{height: "20%"}} data-value="20">
                        <div className="bar-tooltip">20</div>
                      </div>
                      <span className="bar-label">Notificações</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Lista de Automações Ativas */}
        <section className="automations-section">
          <h2>Lista de Automações Ativas</h2>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Nome da Automação</th>
                  <th>Criador</th>
                  <th>Status</th>
                  <th>Execuções/Dia</th>
                  <th>Tempo Médio</th>
                  <th>Última Execução</th>
                  <th>Erros Hoje</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="automation-name">Envio de Notas Fiscais</td>
                  <td>João Silva</td>
                  <td><span className="status-active">✅ Ativa</span></td>
                  <td className="text-center">15</td>
                  <td className="text-center">00:02:14</td>
                  <td>10/03/2025 12:34</td>
                  <td><span className="status-ok">0 ❌</span></td>
                </tr>
                <tr>
                  <td className="automation-name">Consolidação de Faturas</td>
                  <td>Ana Souza</td>
                  <td><span className="status-active">✅ Ativa</span></td>
                  <td className="text-center">32</td>
                  <td className="text-center">00:05:30</td>
                  <td>10/03/2025 12:45</td>
                  <td><span className="status-warning">1 ⚠️</span></td>
                </tr>
                <tr>
                  <td className="automation-name">Coleta de Dados Bancários</td>
                  <td>Pedro Lima</td>
                  <td><span className="status-inactive">❌ Inativa</span></td>
                  <td className="text-center">0</td>
                  <td className="text-center">-</td>
                  <td>09/03/2025 18:22</td>
                  <td><span className="status-ok">0 ❌</span></td>
                </tr>
                <tr>
                  <td className="automation-name">Notificações de Atraso</td>
                  <td>João Silva</td>
                  <td><span className="status-active">✅ Ativa</span></td>
                  <td className="text-center">20</td>
                  <td className="text-center">00:03:12</td>
                  <td>10/03/2025 11:20</td>
                  <td><span className="status-ok">0 ❌</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-pagination">
            <span className="pagination-info">Mostrando 1-4 de 4 automações</span>
            <div className="pagination-controls">
              <button disabled className="pagination-button">« Anterior</button>
              <button className="pagination-button active">1</button>
              <button disabled className="pagination-button">Próximo »</button>
            </div>
          </div>
        </section>

        {/* Section 3: Métricas de Performance */}
        <section className="metrics-section">
          <h2>Métricas de Performance</h2>
          
          <div className="cards-container cards-small">
            <div className="card card-info">
              <div className="card-icon">🔄</div>
              <div className="card-content">
                <div className="card-value"><span className="counter" data-target="120">0</span></div>
                <div className="card-title">Execuções Hoje</div>
              </div>
              <div className="card-shine"></div>
            </div>
            
            <div className="card card-primary">
              <div className="card-icon">⏱️</div>
              <div className="card-content">
                <div className="card-value">00:04:32</div>
                <div className="card-title">Média de Tempo</div>
              </div>
              <div className="card-shine"></div>
            </div>
            
            <div className="card card-warning">
              <div className="card-icon">⚠️</div>
              <div className="card-content">
                <div className="card-value"><span className="counter" data-target="3">0</span></div>
                <div className="card-title">Erros Hoje</div>
              </div>
              <div className="card-shine"></div>
            </div>

            <div className="card card-success">
              <div className="card-icon">⌛</div>
              <div className="card-content">
                <div className="card-value"><span className="counter" data-target="45">0</span> hrs</div>
                <div className="card-title">Tempo Economizado</div>
              </div>
              <div className="card-shine"></div>
            </div>
          </div>

          <div className="chart-container">
            <div className="chart-box">
              <h3>Tempo Médio de Execução</h3>
              <div className="line-chart-container">
                <svg width="100%" height="250" viewBox="0 0 500 250">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#cc092f" />
                      <stop offset="100%" stopColor="#ec6a5e" />
                    </linearGradient>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#cc092f" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#cc092f" stopOpacity="0.05" />
                    </linearGradient>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Grid Lines */}
                  <line className="chart-grid-line" x1="0" y1="50" x2="500" y2="50"></line>
                  <line className="chart-grid-line" x1="0" y1="100" x2="500" y2="100"></line>
                  <line className="chart-grid-line" x1="0" y1="150" x2="500" y2="150"></line>
                  <line className="chart-grid-line" x1="0" y1="200" x2="500" y2="200"></line>
                  
                  {/* Y-axis Labels */}
                  <text x="10" y="50" className="chart-axis-label">5.0</text>
                  <text x="10" y="100" className="chart-axis-label">4.5</text>
                  <text x="10" y="150" className="chart-axis-label">4.0</text>
                  <text x="10" y="200" className="chart-axis-label">3.5</text>
                  
                  {/* X-axis Labels */}
                  <text x="80" y="230" className="chart-axis-label">01/03</text>
                  <text x="180" y="230" className="chart-axis-label">02/03</text>
                  <text x="280" y="230" className="chart-axis-label">03/03</text>
                  <text x="380" y="230" className="chart-axis-label">04/03</text>
                  
                  {/* Area under line */}
                  <path className="chart-area" d="M80,100 L180,80 L280,120 L380,90 L380,250 L280,250 L180,250 L80,250 Z" fill="url(#areaGradient)"></path>
                  
                  {/* Line connecting points */}
                  <path className="chart-line" d="M80,100 L180,80 L280,120 L380,90" stroke="url(#lineGradient)" strokeWidth="3" fill="none" filter="url(#glow)"></path>
                  
                  {/* Data points */}
                  <circle className="chart-data-point" cx="80" cy="100" r="6" data-tooltip="01/03: 4.5 min"></circle>
                  <circle className="chart-data-point" cx="180" cy="80" r="6" data-tooltip="02/03: 4.8 min"></circle>
                  <circle className="chart-data-point" cx="280" cy="120" r="6" data-tooltip="03/03: 4.3 min"></circle>
                  <circle className="chart-data-point" cx="380" cy="90" r="6" data-tooltip="04/03: 4.7 min"></circle>
                </svg>
              </div>
            </div>
            
            <div className="chart-box">
              <h3>Erros por Automação</h3>
              <div className="pie-chart-container">
                <div className="pie-chart">
                  <svg width="220" height="220" viewBox="0 0 220 220">
                    <defs>
                      <filter id="pieShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#00000033" />
                      </filter>
                      <linearGradient id="pieGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#e61a30" />
                        <stop offset="100%" stopColor="#ff4d65" />
                      </linearGradient>
                      <linearGradient id="pieGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ffbe3d" />
                        <stop offset="100%" stopColor="#ffdb8c" />
                      </linearGradient>
                      <linearGradient id="pieGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#26a69a" />
                        <stop offset="100%" stopColor="#80cbc4" />
                      </linearGradient>
                    </defs>
                    
                    <circle className="pie-background" cx="110" cy="110" r="100" fill="#f8f9fa" filter="url(#pieShadow)" />
                    
                    {/* Consolidação: 5 erros (62.5%) */}
                    <path className="pie-segment" d="M110,110 L110,10 A100,100 0 0,1 185.7,154.3 Z" fill="url(#pieGradient1)" />
                    
                    {/* Notas: 2 erros (25%) */}
                    <path className="pie-segment" d="M110,110 L185.7,154.3 A100,100 0 0,1 139.6,193.2 Z" fill="url(#pieGradient2)" />
                    
                    {/* Notificações: 1 erro (12.5%) */}
                    <path className="pie-segment" d="M110,110 L139.6,193.2 A100,100 0 0,1 110,210 Z" fill="url(#pieGradient3)" />
                    
                    <circle cx="110" cy="110" r="60" fill="white" />
                    <text x="110" y="105" textAnchor="middle" className="pie-center-text">Erros</text>
                    <text x="110" y="130" textAnchor="middle" className="pie-center-number">8 Total</text>
                  </svg>
                </div>
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-color" style={{background: "linear-gradient(to right, #e61a30, #ff4d65)"}}></span>
                    <span className="legend-text">Consolidação (5 erros)</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{background: "linear-gradient(to right, #ffbe3d, #ffdb8c)"}}></span>
                    <span className="legend-text">Envio de Notas (2 erros)</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color" style={{background: "linear-gradient(to right, #26a69a, #80cbc4)"}}></span>
                    <span className="legend-text">Notificações (1 erro)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Logs e Auditoria */}
        <section className="logs-section">
          <h2>Logs e Auditoria</h2>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Automação</th>
                  <th>Usuário</th>
                  <th>Status</th>
                  <th>Tempo de Execução</th>
                  <th>Erro?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10/03/2025 12:34</td>
                  <td>Envio de Notas</td>
                  <td>João Silva</td>
                  <td><span className="status-active">✅ Sucesso</span></td>
                  <td>00:02:14</td>
                  <td><span className="status-ok">❌</span></td>
                </tr>
                <tr>
                  <td>10/03/2025 12:45</td>
                  <td>Consolidação</td>
                  <td>Ana Souza</td>
                  <td><span className="status-error">⚠️ Erro</span></td>
                  <td>00:05:30</td>
                  <td><span className="status-error">🛑 Sim</span></td>
                </tr>
                <tr>
                  <td>09/03/2025 18:22</td>
                  <td>Coleta de Dados</td>
                  <td>Pedro Lima</td>
                  <td><span className="status-inactive">❌ Falha</span></td>
                  <td>-</td>
                  <td><span className="status-ok">❌</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="logs-actions">
            <button className="action-button">Ver Todos os Logs</button>
            <button className="action-button">Exportar Relatório</button>
          </div>
        </section>

        {/* Section 5: Gerenciamento de Equipes */}
        <section className="team-section">
          <h2>Gerenciamento de Equipes e Permissões</h2>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Cargo</th>
                  <th>Status</th>
                  <th>Última Ação</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>João Silva</td>
                  <td>Líder</td>
                  <td><span className="status-active">✅ Ativo</span></td>
                  <td>10/03/2025</td>
                  <td><button className="mini-button">Gerenciar</button></td>
                </tr>
                <tr>
                  <td>Ana Souza</td>
                  <td>Analista</td>
                  <td><span className="status-active">✅ Ativo</span></td>
                  <td>10/03/2025</td>
                  <td><button className="mini-button">Gerenciar</button></td>
                </tr>
                <tr>
                  <td>Pedro Lima</td>
                  <td>Dev</td>
                  <td><span className="status-active">✅ Ativo</span></td>
                  <td>09/03/2025</td>
                  <td><button className="mini-button">Gerenciar</button></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="chart-container">
            <div className="chart-box">
              <h3>Novos Usuários Adicionados</h3>
              <div className="horizontal-bar-chart">
                <div className="horizontal-bar-item">
                  <span className="horizontal-bar-label">01/03</span>
                  <div className="horizontal-bar-track">
                    <div className="horizontal-bar-fill" style={{width: "66.7%"}} data-value="2"></div>
                  </div>
                  <span className="horizontal-bar-value">2</span>
                </div>
                <div className="horizontal-bar-item">
                  <span className="horizontal-bar-label">02/03</span>
                  <div className="horizontal-bar-track">
                    <div className="horizontal-bar-fill" style={{width: "33.3%"}} data-value="1"></div>
                  </div>
                  <span className="horizontal-bar-value">1</span>
                </div>
                <div className="horizontal-bar-item">
                  <span className="horizontal-bar-label">03/03</span>
                  <div className="horizontal-bar-track">
                    <div className="horizontal-bar-fill" style={{width: "100%"}} data-value="3"></div>
                  </div>
                  <span className="horizontal-bar-value">3</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="team-actions">
            <button className="action-button">Adicionar Usuário</button>
            <button className="action-button">Gerenciar Permissões</button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-copyright">Dashboard de Automações Bradesco © 2025</p>
          <div className="footer-links">
            <a href="#" className="footer-link">Suporte</a>
            <a href="#" className="footer-link">Documentação</a>
            <a href="#" className="footer-link">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
