import React, { useState, useEffect } from ‘react’;
import { ArrowRight, Twitter, Linkedin, FileText, Menu, X, ArrowUpRight } from ‘lucide-react’;

const SyncrateLanding = () => {
const [scrolled, setScrolled] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [activeChain, setActiveChain] = useState(0);

const chains = [
{ name: ‘Ethereum’, color: ‘#627EEA’, abbr: ‘ETH’, icon: ‘◆’ },
{ name: ‘Arbitrum’, color: ‘#28A0F0’, abbr: ‘ARB’, icon: ‘▲’ },
{ name: ‘Polygon’, color: ‘#8247E5’, abbr: ‘POL’, icon: ‘◆’ },
{ name: ‘Base’, color: ‘#0052FF’, abbr: ‘BASE’, icon: ‘●’ },
{ name: ‘Optimism’, color: ‘#FF0420’, abbr: ‘OP’, icon: ‘○’ }
];

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 20);
};
window.addEventListener(‘scroll’, handleScroll);
return () => window.removeEventListener(‘scroll’, handleScroll);
}, []);

useEffect(() => {
const interval = setInterval(() => {
setActiveChain((prev) => (prev + 1) % chains.length);
}, 2500);
return () => clearInterval(interval);
}, [chains.length]);

const getRadius = () => {
if (typeof window === ‘undefined’) return 180;
if (window.innerWidth < 640) return 100;
if (window.innerWidth < 768) return 130;
return 180;
};

return (
<div className="bg-black text-white min-h-screen relative overflow-x-hidden">
<style>{`
@import url(‘https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap’);
* { font-family: ‘Space Grotesk’, sans-serif !important; }

```
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    @keyframes slideIn {
      from { opacity: 0; height: 0; }
      to { opacity: 1; height: auto; }
    }
    
    .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
    .animate-pulse { animation: pulse 3s infinite; }
    .animate-slide-in { animation: slideIn 0.3s ease-out forwards; }
  `}</style>

  <div className="fixed inset-0 z-0 pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div 
        key={i} 
        className="absolute top-0 bottom-0 w-px bg-white/5" 
        style={{ left: `${(i / 19) * 100}%` }}
      />
    ))}
  </div>

  <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="text-2xl font-bold tracking-tighter">Syncrate.</div>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <a href="#positioning" className="text-xs text-slate-400 hover:text-[#C1E328] transition-colors uppercase tracking-wider">Positioning</a>
        <a href="#workflow" className="text-xs text-slate-400 hover:text-[#C1E328] transition-colors uppercase tracking-wider">Workflow</a>
        <a href="#articles" className="text-xs text-slate-400 hover:text-[#C1E328] transition-colors uppercase tracking-wider">Insights</a>
        <button className="px-5 py-2 border border-white/20 text-xs hover:border-[#C1E328] hover:text-[#C1E328] transition-all uppercase group tracking-wider">
          Apply for Access
          <ArrowUpRight className="inline w-3 h-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>

    {mobileMenuOpen && (
      <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 animate-slide-in">
        <div className="px-6 py-6 space-y-4 text-xs uppercase tracking-wider">
          <a href="#positioning" className="block text-slate-400 hover:text-white">Positioning</a>
          <a href="#workflow" className="block text-slate-400 hover:text-white">Workflow</a>
          <a href="#articles" className="block text-slate-400 hover:text-white">Insights</a>
          <button className="w-full px-5 py-2 border border-white/20 hover:border-[#C1E328] hover:text-[#C1E328] transition-all">
            Apply for Access
          </button>
        </div>
      </div>
    )}
  </nav>

  <section className="relative min-h-screen flex items-center justify-center pt-20">
    <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-20">
      <div className="animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 md:mb-8 leading-[0.95] tracking-tight">
          Interoperability
          <br />
          for the
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1E328] to-[#8fb320]">
            Tokenized Economy
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
          Syncrate enables direct, on-chain finality for institutional private credit and treasuries, 
          integrating Regulatory Orchestration at the smart-contract level.
        </p>

        <button className="group mt-4 md:mt-8 px-5 md:px-6 py-2.5 md:py-3 border border-white/20 text-xs md:text-sm hover:border-[#C1E328] hover:text-[#C1E328] transition-all uppercase inline-flex items-center space-x-2 tracking-wider">
          <span>Apply for Access</span>
          <ArrowRight className="w-3 md:w-4 h-3 md:h-4" />
        </button>
      </div>

      <div className="mt-16 md:mt-24 relative h-64 md:h-96">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative z-20 animate-pulse">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border-2 border-[#C1E328] rounded-sm flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[#C1E328]/10 rounded-sm" />
              <div className="text-xl sm:text-2xl font-bold relative z-10">S</div>
              <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs text-[#C1E328] whitespace-nowrap tracking-wider">
                SYNCRATE
              </div>
            </div>
          </div>

          {chains.map((chain, index) => {
            const angle = (index * 72) * (Math.PI / 180);
            const radius = getRadius();
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const isActive = index === activeChain;

            return (
              <div
                key={chain.name}
                className="absolute transition-all duration-300"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isActive ? 1.1 : 1})`
                }}
              >
                <div
                  className="absolute top-1/2 left-1/2 h-px origin-left transition-all duration-500"
                  style={{
                    width: `${radius}px`,
                    transform: `translate(-100%, -50%) rotate(${angle * (180 / Math.PI) + 180}deg)`,
                    background: isActive 
                      ? `linear-gradient(to right, ${chain.color}, #C1E328)`
                      : 'rgba(255, 255, 255, 0.05)',
                    opacity: isActive ? 0.6 : 0.1
                  }}
                />

                {isActive && (
                  <div
                    className="absolute top-1/2 left-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2"
                    style={{ 
                      backgroundColor: chain.color, 
                      boxShadow: `0 0 10px ${chain.color}`,
                      animation: 'pulse 2s ease-in-out infinite'
                    }}
                  />
                )}

                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border flex items-center justify-center text-xs font-medium relative transition-all duration-300"
                  style={{
                    borderColor: isActive ? chain.color : 'rgba(255, 255, 255, 0.1)',
                    backgroundColor: isActive ? `${chain.color}20` : 'rgba(0, 0, 0, 0.5)',
                    color: isActive ? chain.color : 'rgba(255, 255, 255, 0.4)'
                  }}
                >
                  <div className="text-xl sm:text-2xl md:text-3xl">{chain.icon}</div>
                  <div className="absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] sm:text-[10px] text-slate-600 tracking-wider">
                    {chain.name.toUpperCase()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>

  <section id="positioning" className="relative min-h-screen flex items-center border-t border-white/5">
    <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-tight">
            Canonical cross-chain routing for tokenized real-world assets
          </h2>
        </div>
        
        <div className="space-y-6 text-sm md:text-base text-slate-400 leading-relaxed">
          <p>
            Syncrate enables institutional-grade settlement across blockchains, 
            uniquely supporting <span className="text-white font-medium">regulatory compliance</span> and{' '}
            <span className="text-white font-medium">atomic execution</span> through{' '}
            <span className="text-white font-medium">verified</span> infrastructure.
          </p>
          <p>
            No wraps. No synthetic representation. Always compliant. Built for institutions 
            that demand regulatory certainty and atomic settlement guarantees across any blockchain.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-20">
        {[
          { label: 'Documentation', icon: <FileText className="w-4 h-4" /> },
          { label: 'Github', icon: <ArrowUpRight className="w-4 h-4" /> },
          { label: 'Blog', icon: <ArrowUpRight className="w-4 h-4" /> }
        ].map((item, i) => (
          <button
            key={i}
            className="px-6 py-4 border border-white/10 hover:border-[#C1E328] text-left text-xs uppercase group flex items-center justify-between transition-all tracking-wider hover:translate-x-1"
          >
            <span className="group-hover:text-[#C1E328]">{item.label}</span>
            <span className="group-hover:text-[#C1E328]">{item.icon}</span>
          </button>
        ))}
      </div>
    </div>
  </section>

  <section id="workflow" className="relative min-h-screen flex items-center border-t border-white/5">
    <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-32">
      <h2 className="text-4xl lg:text-5xl font-bold mb-20">The Syncrate Workflow.</h2>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {[
          {
            num: '01',
            title: 'Intent & Identity Layer',
            subtitle: 'The Entry',
            desc: 'User specifies a source RWA (e.g., OpenEden TBILL) and a target RWA (e.g., Backed bAAPL). Instead of fragmented onboarding, Syncrate integrates an identity hub (e.g., Quadrata, Civic). It maps the user\'s existing credentials to the target issuer\'s allowlist requirements before the transaction even begins.',
            icon: '◆'
          },
          {
            num: '02',
            title: 'The Canonical Exit',
            subtitle: 'Liquidity Injection',
            desc: 'Syncrate triggers the "Primary Redemption" of the source asset rather than selling into thin secondary markets.',
            icon: '↓'
          },
          {
            num: '03',
            title: 'Stable Settlement & Cross-Chain Bridging',
            subtitle: '',
            desc: 'All trades settle into permissionless USDC to avoid the risks of synthetic or wrapped assets. If the target RWA is on a different chain (e.g., moving from Ethereum to Base or Polygon), Syncrate utilizes Circle CCTP or Chainlink CCIP.',
            icon: '⚡'
          },
          {
            num: '04',
            title: 'The Canonical Entry',
            subtitle: 'Issuance',
            desc: 'Once USDC arrives on the target chain, Syncrate calls the mint() or requestIssuance() function for the target RWA.',
            icon: '↑'
          }
        ].map((step, i) => (
          <div
            key={i}
            className="group"
          >
            <div className="border border-white/10 p-6 lg:p-8 hover:border-[#C1E328]/50 transition-all h-full">
              <div className="flex items-start justify-between mb-4 lg:mb-6">
                <div className="text-3xl lg:text-4xl">{step.icon}</div>
                <div className="text-xs text-slate-600 tracking-wider">/ {step.num}</div>
              </div>
              
              <h3 className="text-lg lg:text-xl font-semibold mb-2">{step.title}</h3>
              {step.subtitle && (
                <div className="text-sm text-[#C1E328] mb-3 lg:mb-4 tracking-wider">({step.subtitle})</div>
              )}
              <p className="text-slate-400 text-xs lg:text-sm leading-relaxed font-light">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section id="articles" className="relative min-h-screen flex items-center border-t border-white/5">
    <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-32">
      <div className="grid lg:grid-cols-2 gap-12 mt-12">
        {[
          {
            title: 'The Hidden Fragmentation Problem in Tokenized RWAs',
            excerpt: 'How liquidity silos across chains undermine the promise of tokenized real-world assets.',
          },
          {
            title: 'The Future of Onchain Settlement',
            excerpt: 'Why atomic settlement protocols represent the next evolution in institutional DeFi infrastructure.',
          }
        ].map((article, i) => (
          <article
            key={i}
            className="group border border-white/10 p-8 hover:border-[#C1E328] transition-all cursor-pointer"
          >
            <div className="text-xs text-slate-600 mb-6 tracking-wider">ARTICLE / {String(i + 1).padStart(2, '0')}</div>
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#C1E328] transition-colors leading-tight">
              {article.title}
            </h3>
            <p className="text-slate-400 text-sm mb-6 font-light leading-relaxed">
              {article.excerpt}
            </p>
            <div className="flex items-center space-x-2 text-[#C1E328] text-xs uppercase tracking-wider">
              <span>Read More</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>

  <footer className="relative border-t border-white/5 py-16">
    <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="text-2xl font-bold mb-4">Syncrate.</div>
          <p className="text-slate-600 text-xs">
            Enterprise settlement infrastructure for tokenized assets.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase mb-4 text-slate-400 tracking-wider">Platform</h4>
          <ul className="space-y-3 text-xs">
            <li><a href="#" className="text-slate-600 hover:text-[#C1E328] transition-colors">Documentation</a></li>
            <li><a href="#" className="text-slate-600 hover:text-[#C1E328] transition-colors">API Reference</a></li>
            <li><a href="#" className="text-slate-600 hover:text-[#C1E328] transition-colors">Github</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase mb-4 text-slate-400 tracking-wider">Resources</h4>
          <ul className="space-y-3 text-xs">
            <li><a href="#" className="text-slate-600 hover:text-[#C1E328] transition-colors">Articles</a></li>
            <li><a href="#" className="text-slate-600 hover:text-[#C1E328] transition-colors">Whitepapers</a></li>
            <li><a href="#" className="text-slate-600 hover:text-[#C1E328] transition-colors">Security</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase mb-4 text-slate-400 tracking-wider">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 border border-white/10 flex items-center justify-center hover:border-[#C1E328] hover:text-[#C1E328] transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 border border-white/10 flex items-center justify-center hover:border-[#C1E328] hover:text-[#C1E328] transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 border border-white/10 flex items-center justify-center hover:border-[#C1E328] hover:text-[#C1E328] transition-all">
              <FileText className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-slate-600">
        <p>© 2025 Syncrate. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</div>
```

);
};

export default SyncrateLanding;
