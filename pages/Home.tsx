
import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpenIcon } from '../components/icons/BookOpenIcon';
import { UsersIcon } from '../components/icons/UsersIcon';
import { CubeTransparentIcon } from '../components/icons/CubeTransparentIcon';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-2">
    <div className="mb-4 inline-block p-4 bg-indigo-600/20 text-indigo-400 rounded-lg">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative text-center py-24 md:py-40 px-6 bg-grid-slate-800/[0.2]">
         <div 
          className="absolute inset-0 bg-gradient-to-b from-slate-900 to-transparent" 
          style={{ height: '30%' }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" 
          style={{ top: '70%' }}
        />
        <div 
          className="absolute inset-x-0 top-0 m-auto h-[350px] w-[350px] sm:h-[550px] sm:w-[550px] bg-indigo-900/40 rounded-full blur-3xl"
        />
        <div className="relative z-10 container mx-auto">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4 leading-tight">
            Powering <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-teal-400">Education</span> & <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400">Innovation</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-300 mb-8">
            SAB Coin is a decentralized ecosystem fueling the next generation of learners, creators, and blockchain pioneers through community-driven funding.
          </p>
          <div className="flex justify-center items-center gap-4">
            <NavLink to="/whitepaper" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105">
              Read Whitepaper
            </NavLink>
            <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105">
              Join Community
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">The Three Pillars of SAB</h2>
            <p className="text-slate-400 mt-4">
              Our ecosystem is built on a foundation of education, collaborative funding, and technological advancement.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BookOpenIcon className="w-8 h-8" />}
              title="Education"
              description="Funding scholarships, open-source educational resources, and learning platforms to make knowledge accessible to all."
            />
            <FeatureCard
              icon={<UsersIcon className="w-8 h-8" />}
              title="Crowdfunding"
              description="A decentralized launchpad for students, researchers, and entrepreneurs to pitch ideas and secure funding from the SAB community."
            />
            <FeatureCard
              icon={<CubeTransparentIcon className="w-8 h-8" />}
              title="Blockchain Projects"
              description="Incubating and investing in innovative blockchain projects that solve real-world problems and push the boundaries of technology."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
