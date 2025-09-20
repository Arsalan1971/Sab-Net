
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { TokenDistributionData } from '../types';

const data: TokenDistributionData[] = [
  { name: 'Liquidity Pool', value: 40, color: '#4f46e5' }, // indigo-600
  { name: 'Community & Ecosystem', value: 30, color: '#14b8a6' }, // teal-500
  { name: 'Marketing & Development', value: 15, color: '#d946ef' }, // fuchsia-500
  { name: 'Team & Advisors', value: 10, color: '#f97316' }, // orange-500
  { name: 'Airdrops', value: 5, color: '#3b82f6' }, // blue-500
];

const renderLegend = (props: any) => {
  const { payload } = props;
  return (
    <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 mt-8 md:mt-0">
      {payload.map((entry: any, index: number) => (
        <li key={`item-${index}`} className="flex items-center space-x-3">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></span>
          <span className="text-slate-300">{entry.value}</span>
          {entry.payload?.percent !== undefined && (
            <span className="text-slate-400">({(entry.payload.percent * 100).toFixed(0)}%)</span>
          )}
        </li>
      ))}
    </ul>
  );
};

const Tokenomics: React.FC = () => {
  return (
    <div className="py-20 px-6">
      <div className="container mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-black tracking-tighter text-white">SAB Tokenomics</h1>
          <p className="text-indigo-400 mt-2">A sustainable economic model for long-term growth.</p>
        </header>

        <div className="max-w-6xl mx-auto bg-slate-950/30 p-8 md:p-12 rounded-lg border border-slate-800">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="w-full h-80 md:h-96">
                     <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={'90%'}
                                fill="#8884d8"
                                dataKey="value"
                                stroke="none"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    background: 'rgba(20, 30, 48, 0.8)',
                                    borderColor: '#334155',
                                    borderRadius: '0.5rem',
                                }}
                                itemStyle={{ color: '#cbd5e1' }}
                            />
                            <Legend content={renderLegend} layout="vertical" verticalAlign="middle" align="right" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-indigo-400">Liquidity Pool (40%)</h3>
                        <p className="text-slate-400 mt-1">To ensure a healthy and stable market on decentralized exchanges. Locked for a minimum of one year.</p>
                    </div>
                     <div>
                        <h3 className="text-xl font-bold text-teal-400">Community & Ecosystem (30%)</h3>
                        <p className="text-slate-400 mt-1">Funds for the Education DAO, Crowdfunding Launchpad, and Blockchain Incubator, empowering community-driven initiatives.</p>
                    </div>
                     <div>
                        <h3 className="text-xl font-bold text-fuchsia-400">Marketing & Development (15%)</h3>
                        <p className="text-slate-400 mt-1">To fuel global awareness, platform development, and strategic partnerships.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-orange-400">Team & Advisors (10%)</h3>
                        <p className="text-slate-400 mt-1">Vested over a 24-month period to align the core team's interests with the long-term success of the project.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-blue-400">Airdrops (5%)</h3>
                        <p className="text-slate-400 mt-1">To reward early supporters and bootstrap community engagement through targeted distribution campaigns.</p>
                    </div>
                </div>
            </div>
             <div className="mt-16 pt-8 border-t border-slate-800 grid md:grid-cols-3 gap-8 text-center">
                <div>
                    <p className="text-slate-400 text-sm">Total Supply</p>
                    <p className="text-2xl font-bold text-white">1,000,000,000 SAB</p>
                </div>
                 <div>
                    <p className="text-slate-400 text-sm">Token Ticker</p>
                    <p className="text-2xl font-bold text-white">$SAB</p>
                </div>
                <div>
                    <p className="text-slate-400 text-sm">Contract Address</p>
                    <p className="text-lg md:text-xl font-mono text-white break-all">0xAbC...deF</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
