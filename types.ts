
export interface RoadmapItemData {
  quarter: string;
  year: string;
  title: string;
  points: string[];
  status: 'Completed' | 'In Progress' | 'Planned';
}

export interface TokenDistributionData {
  name: string;
  value: number;
  color: string;
}
