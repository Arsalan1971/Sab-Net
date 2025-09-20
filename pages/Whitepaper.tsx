
import React from 'react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-4 pb-2 border-b-2 border-indigo-500/50 text-white">{title}</h2>
    <div className="space-y-4 text-slate-300 leading-relaxed">
      {children}
    </div>
  </div>
);

const Whitepaper: React.FC = () => {
  return (
    <div className="py-20 px-6">
      <div className="container mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-black tracking-tighter text-white">SAB Coin Whitepaper</h1>
          <p className="text-indigo-400 mt-2">Version 1.0 - The Blueprint for Decentralized Education and Innovation</p>
        </header>
        
        <div className="max-w-4xl mx-auto bg-slate-950/30 p-8 md:p-12 rounded-lg border border-slate-800">
          <Section title="1. Abstract">
            <p>
              SAB Coin emerges as a novel cryptocurrency initiative at the intersection of meme culture, decentralized finance (DeFi), and social good. Its primary mission is to establish a self-sustaining ecosystem that leverages blockchain technology to fund and foster advancements in education, support innovative projects through community crowdfunding, and incubate next-generation blockchain technologies. This paper outlines the vision, technical architecture, tokenomics, and strategic roadmap for SAB Coin.
            </p>
          </Section>

          <Section title="2. Introduction">
            <p>
              The digital age has democratized access to information, yet significant barriers remain in formal education and project funding. Traditional systems are often centralized, inefficient, and inaccessible to many. SAB Coin proposes a paradigm shift, utilizing the transparency, security, and global reach of blockchain to create a more equitable and efficient model for distributing educational and developmental capital.
            </p>
            <p>
              By combining the viral potential of a meme coin with a robust utility-driven framework, SAB aims to build a large, engaged community dedicated to a common cause: empowering human potential.
            </p>
          </Section>

          <Section title="3. The SAB Ecosystem">
            <h3 className="text-xl font-semibold text-slate-100 mb-2">3.1. Educational Grants DAO</h3>
            <p>A Decentralized Autonomous Organization (DAO) will govern the distribution of funds earmarked for educational purposes. SAB token holders can vote on proposals for scholarships, research grants, and open-source curriculum development.</p>
            <h3 className="text-xl font-semibold text-slate-100 mt-4 mb-2">3.2. Crowdfunding Launchpad</h3>
            <p>A platform where innovators can submit project proposals to the SAB community. Projects can range from academic research to tech startups. Funding is provided in SAB tokens, aligning project success with the growth of the ecosystem.</p>
             <h3 className="text-xl font-semibold text-slate-100 mt-4 mb-2">3.3. Blockchain Incubator</h3>
            <p>A dedicated fund to support early-stage blockchain projects building on or integrating with the SAB ecosystem. The incubator will provide not only capital but also mentorship and technical support.</p>
          </Section>

          <Section title="4. Technology">
            <p>
              SAB Coin will initially be launched as an ERC-20 token on the Ethereum blockchain to leverage its security, vast user base, and mature developer ecosystem. We are exploring Layer 2 scaling solutions to ensure low transaction fees and high throughput for micropayments and voting within the ecosystem. The smart contracts governing the DAO and crowdfunding platform will be open-source and subject to rigorous third-party audits to ensure security and transparency.
            </p>
          </Section>

          <Section title="5. Conclusion">
            <p>
              SAB Coin is more than a meme; it is a movement. By uniting a global community around the shared goals of education and innovation, we can create a powerful, decentralized engine for positive change. We invite you to join us in building a future where opportunity is not limited by geography or economic status, but only by the scope of our collective ambition.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
