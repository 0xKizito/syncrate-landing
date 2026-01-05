import React, { useState, useEffect } from 'react';
import { ArrowRight, Twitter, Linkedin, FileText, Menu, X, ArrowUpRight, MessageCircle, Send } from 'lucide-react';

const SyncrateLanding = () => {
const [scrolled, setScrolled] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 20);
};
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);

return (
<div className="bg-black text-white min-h-screen relative overflow-x-hidden">
<style>{`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
* { font-family: 'Space Grotesk', sans-serif !important; }

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
    
    @keyframes ascend {
      from { opacity: 0; transform: translateY(60px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideChains {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
    .animate-pulse { animation: pulse 3s infinite; }
    .animate-slide-in { animation: slideIn 0.3s ease-out forwards; }
    .animate-ascend { animation: ascend 1s ease-out 0.3s forwards; opacity: 0; }
    .animate-slide-chains { animation: slideChains 20s linear infinite; }
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
        <a href="#positioning" className="text-xs text-slate-400 hover:text-[#C1E328] transition-colors uppercase tracking-wider">Developers</a>
        <a href="#workflow" className="text-xs text-slate-400 hover:text-[#C1E328] transition-colors uppercase tracking-wider">Workflow</a>
        <a href="#articles" className="text-xs text-slate-400 hover:text-[#C1E328] transition-colors uppercase tracking-wider">Blog</a>
        <a href="mailto:contact@syncrate.org" target="_blank" rel="noopener noreferrer" className="px-5 py-2 border border-white/20 text-xs hover:border-[#C1E328] hover:text-[#C1E328] transition-all uppercase group tracking-wider">
          Contact Us
          <ArrowUpRight className="inline w-3 h-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
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
          <a href="mailto:contact@syncrate.org" target="_blank" rel="noopener noreferrer" className="block w-full px-5 py-2 border border-white/20 hover:border-[#C1E328] hover:text-[#C1E328] transition-all text-center">
            Partner with Syncrate
          </a>
        </div>
      </div>
    )}
  </nav>

  <section className="relative py-6 md:py-12 lg:py-24 flex flex-col items-center justify-start">
    <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-20">
      <div className="animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 md:mb-8 leading-[0.95] tracking-tight">
          Interoperability
          <br />
          for the
          <br />
          <span className="animate-ascend inline-block" style={{ color: '#62721A' }}>
            Tokenized Economy
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
          Syncrate enables compliant, on-chain settlement for tokenized real-world assets.
        </p>

        <a href="https://testnet.syncrate.org" target="_blank" rel="noopener noreferrer" className="group mt-4 md:mt-8 px-5 md:px-6 py-2.5 md:py-3 border border-white/20 text-xs md:text-sm hover:border-[#C1E328] hover:text-[#C1E328] transition-all uppercase inline-flex items-center space-x-2 tracking-wider">
          <span>Join Testnet</span>
          <ArrowRight className="w-3 md:w-4 h-3 md:h-4" />
        </a>
      </div>

      <div className="mt-16 md:mt-24 relative h-32 overflow-hidden">
        {/* Blockchain logos sliding animation */}
        <div className="absolute inset-0 flex items-center">
          <div className="flex items-center gap-12 animate-slide-chains">
            {/* First set */}
            {[
              { name: 'Ethereum', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
              { name: 'Arbitrum', logo: 'https://cryptologos.cc/logos/arbitrum-arb-logo.png' },
              { name: 'Polygon', logo: 'https://cryptologos.cc/logos/polygon-matic-logo.svg' },
              { name: 'Polkadot', logo: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.svg' },
              { name: 'Optimism', logo: 'https://cryptologos.cc/logos/optimism-ethereum-op-logo.png' },
              { name: 'Avalanche', logo: 'https://cryptologos.cc/logos/avalanche-avax-logo.png' },
              { name: 'BSC', logo: 'https://cryptologos.cc/logos/bnb-bnb-logo.png' },
              { name: 'Solana', logo: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
              // Duplicate set for seamless loop
              { name: 'Mantra', logo: 'https://cryptologos.cc/logos/mantra-om-logo.png' },
              { name: 'Chainlink', logo: 'https://cryptologos.cc/logos/chainlink-link-logo.png' },
              { name: 'Polygon', logo: 'https://cryptologos.cc/logos/polygon-matic-logo.png' },
              { name: 'Base', logo: 'https://avatars.githubusercontent.com/u/108554348' },
              { name: 'Optimism', logo: 'https://cryptologos.cc/logos/optimism-ethereum-op-logo.png' },
              { name: 'USDC', logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png' },
              { name: 'XRP', logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.png' },
              { name: 'Centrifuge', logo: 'https://cryptologos.cc/logos/centrifuge-cfg-logo.png' }
            ].map((chain, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-12 h-12 flex flex-col items-center justify-center hover:opacity-70 transition-opacity"
              >
                <img src={chain.logo} alt={chain.name} className="w-8 h-8 mb-2 object-contain" />
                <div className="text-[10px] text-cyan-400 uppercase tracking-wider mt-2">{chain.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="positioning" className="relative py-6 md:py-12 lg:py-24 border-t border-white/5">
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
          { label: 'Documentation', icon: <FileText className="w-4 h-4" />, url: 'https://docs.syncrate.org' },
          { label: 'Github', icon: <ArrowUpRight className="w-4 h-4" />, url: 'https://github.com/SyncrateLabs' },
          { label: 'Blog', icon: <ArrowUpRight className="w-4 h-4" />, url: 'https://blog.syncrate.org' }
        ].map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 border border-white/10 hover:border-[#C1E328] text-left text-xs uppercase group flex items-center justify-between transition-all tracking-wider hover:translate-x-1"
          >
            <span className="group-hover:text-[#C1E328]">{item.label}</span>
            <span className="group-hover:text-[#C1E328]">{item.icon}</span>
          </a>
        ))}
      </div>
    </div>
  </section>

  <section id="workflow" className="relative py-6 md:py-12 lg:py-24 border-t border-white/5">
    <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-32">
      <h2 className="text-4xl lg:text-5xl font-bold mb-20">The Syncrate Workflow.</h2>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {[
          {
            num: '01',
            title: 'Intent & Identity Layer',
            desc: 'User specifies a source RWA (e.g., OpenEden TBILL) and a target RWA (e.g., Backed bAAPL). Instead of fragmented onboarding, Syncrate integrates an identity hub (e.g., Quadrata, Civic). It maps the user\'s existing credentials to the target issuer\'s allowlist requirements before the transaction even begins.',
            icon: '🆔'
          },
          {
            num: '02',
            title: 'The Canonical Exit',
            desc: 'Syncrate triggers the "Primary Redemption" of the source asset rather than selling into thin secondary markets.',
            icon: '📤'
          },
          {
            num: '03',
            title: 'Stable Settlement & Cross-Chain Bridging',
            desc: 'All trades settle into permissionless USDC to avoid the risks of synthetic or wrapped assets. If the target RWA is on a different chain (e.g., moving from Ethereum to Base or Polygon), Syncrate utilizes Circle CCTP or Chainlink CCIP.',
            icon: '⚖️'
          },
          {
            num: '04',
            title: 'The Canonical Entry',
            desc: 'Once USDC arrives on the target chain, Syncrate calls the mint() or requestIssuance() function for the target RWA.',
            icon: '📥'
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

  <section id="articles" className="relative py-6 md:py-12 lg:py-24 border-t border-white/5">
    <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-32">
      <h2 className="text-4xl lg:text-5xl font-bold mb-20">Articles & Insights.</h2>
      
      <div className="grid lg:grid-cols-2 gap-12">
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
          <h4 className="text-xs uppercase mb-4 text-slate-400 tracking-wider">Ecosystem</h4>
          <ul className="space-y-3 text-xs">
            <li><a href="https://syncrate.org/brand-kit" className="text-slate-600 hover:text-[#C1E328] transition-colors">Brand Kit</a></li>
            <li><a href="https://syncrate.org/careers" className="text-slate-600 hover:text-[#C1E328] transition-colors">Careers</a></li>
            <li><a href="https://docs.syncrate.org" className="text-slate-600 hover:text-[#C1E328] transition-colors">Developers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase mb-4 text-slate-400 tracking-wider">Resources</h4>
          <ul className="space-y-3 text-xs">
            <li><a href="privacy.syncrate.org" className="text-slate-600 hover:text-[#C1E328] transition-colors">Privacy Policy</a></li>
            <li><a href="https://syncrate.org/terms-of-use" className="text-slate-600 hover:text-[#C1E328] transition-colors">Terms Of Use</a></li>
            <li><a href="https://syncrate.org/kyc-policy" className="text-slate-600 hover:text-[#C1E328] transition-colors">KYC / AML Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase mb-4 text-slate-400 tracking-wider">Get In Touch</h4>
          <div className="flex space-x-4">
            <a href="https://x.com/syncratelabs" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/10 flex items-center justify-center hover:border-[#C1E328] hover:text-[#C1E328] transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/company/syncratenetwork" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/10 flex items-center justify-center hover:border-[#C1E328] hover:text-[#C1E328] transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://t.me/syncrate" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/10 flex items-center justify-center hover:border-[#C1E328] hover:text-[#C1E328] transition-all">
              <Send className="w-4 h-4" />
            </a>
            <a href="https://discord.gg/Y449tBJKbv" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/10 flex items-center justify-center hover:border-[#C1E328] hover:text-[#C1E328] transition-all">
              <MessageCircle className="w-4 h-4" />
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
);
};

export default SyncrateLanding;
