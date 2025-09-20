
import React from 'react';
import { RoadmapItemData } from '../types';

const roadmapData: RoadmapItemData[] = [
  {
    quarter: 'Q2',
    year: '2024',
    title: 'Project Inception & Community Building',
    points: [
      'Core concept development and whitepaper drafting.',
      'Initial team formation and advisory board setup.',
      'Website and social media channel launch.',
      'Community growth and marketing initiatives.',
    ],
    status: 'Completed',
  },
  {
    quarter: 'Q3',
    year: '2024',
    title: 'Token Launch & Ecosystem Foundation',
    points: [
      'Smart contract development and audit.',
      'SAB Token fair launch on Uniswap.',
      'CoinGecko and CoinMarketCap listings.',
      'Initial CEX listing discussions.',
    ],
    status: 'In Progress',
  },
  {
    quarter: 'Q4',
    year: '2024',
    title: 'Platform V1: Education DAO',
    points: [
      'Development of the SAB DAO governance portal.',
      'First round of educational grant proposals.',
      'Community voting on initial scholarship distributions.',
      'Partnerships with educational institutions.',
    ],
    status: 'Planned',
  },
  {
    quarter: 'Q1',
    year: '2025',
    title: 'Platform V2: Crowdfunding Launchpad',
    points: [
      'Launchpad platform beta testing.',
      'Onboarding the first cohort of projects.',
      'Smart contract upgrades for milestone-based funding.',
      'Major marketing campaign for the launchpad.',
    ],
    status: 'Planned',
  },
  {
    quarter: 'Q2',
    year: '2025',
    title: 'Ecosystem Expansion',
    points: [
      'Launch of the Blockchain Incubator program.',
      'Exploration of cross-chain bridges.',
      'Tier-1 CEX listings.',
      'First annual SAB community conference.',
    ],
    status: 'Planned',
  },
];

const statusStyles = {
    Completed: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
    'In Progress': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    Planned: 'bg-slate-600/20 text-slate-400 border-slate-600/30',
};

interface RoadmapItemProps {
  item: RoadmapItemData;
  index: number;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ item, index }) => {
  const isLeft = index % 2 === 0;
  return (
    <div className={`flex justify-between items-center w-full ${isLeft ? 'flex-row-reverse' : ''}`}>
      <div className="hidden md:block w-5/12"></div>
      <div className="relative z-10">
        <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center border-2 border-indigo-500">
          <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
        </div>
      </div>
      <div className="w-full md:w-5/12">
        <div className={`p-6 rounded-lg border ${statusStyles[item.status]}`}>
            <div className="flex items-baseline gap-4 mb-3">
                <span className="text-3xl font-black text-white">{item.quarter}</span>
                <span className="text-xl font-bold text-slate-400">{item.year}</span>
                 <span className={`ml-auto text-xs font-semibold px-2 py-1 rounded-full ${statusStyles[item.status]}`}>{item.status}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
                {item.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
        </div>
      </div>
    </div>
  );
};


const Roadmap: React.FC = () => {
  return (
    <div className="py-20 px-6">
      <div className="container mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-black tracking-tighter text-white">Project Roadmap</h1>
          <p className="text-indigo-400 mt-2">Our strategic plan for building the future of decentralized funding.</p>
        </header>

        <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="absolute left-1/2 -ml-px h-full border-l-2 border-slate-700 border-dashed"></div>
            <div className="space-y-12">
                 {roadmapData.map((item, index) => (
                    <RoadmapItem key={index} item={item} index={index} />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
