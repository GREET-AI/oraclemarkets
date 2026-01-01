// Mock data for Oracle LARP

export interface OracleEvent {
  id: string;
  title: string;
  category: 'sports' | 'politics' | 'crypto' | 'economy' | 'gaming' | 'culture' | 'sentiment' | 'general';
  endDate: string;
  outcomes: string[];
  status: 'active' | 'resolved' | 'pending';
  volume: number;
  totalPredictions: number;
  image?: string;
  tag?: string;
}

export interface Market {
  id: string;
  eventId: string;
  outcome: string;
  odds: number;
  volume: number;
  liquidity: number;
  chartData: Array<{ time: string; value: number }>;
  image?: string;
  tag?: string;
}

export interface Prediction {
  id: string;
  marketId: string;
  outcome: string;
  amount: number;
  status: 'pending' | 'won' | 'lost';
  txHash: string;
  createdAt: string;
}

export interface SystemLog {
  id: string;
  timestamp: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

export interface NetworkNode {
  id: string;
  status: 'active' | 'syncing' | 'inactive';
  connections: number;
  location: string;
  lastSeen: string;
}

export const oracleEvents: OracleEvent[] = [
  {
    id: '1',
    title: 'Will Gold be above $4,500 at Year\'s End?',
    category: 'economy',
    endDate: '2024-12-31',
    outcomes: ['Yes', 'No'],
    status: 'active',
    volume: 440000,
    totalPredictions: 236,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop',
    tag: 'Holiday Special',
  },
  {
    id: '2',
    title: 'Ethereum\'s next move: Pump to $4K or Dump to $2.5K?',
    category: 'crypto',
    endDate: '2025-01-15',
    outcomes: ['$4K', '$2.5K'],
    status: 'active',
    volume: 190000,
    totalPredictions: 1000,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop',
  },
  {
    id: '3',
    title: 'Will Logan Paul\'s Illustrator Pokemon card sell above 9M?',
    category: 'culture',
    endDate: '2025-01-01',
    outcomes: ['Yes', 'No'],
    status: 'active',
    volume: 1680,
    totalPredictions: 32,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=200&fit=crop',
  },
  {
    id: '4',
    title: 'Will Barcelona win La Liga 2025/26?',
    category: 'sports',
    endDate: '2026-05-24',
    outcomes: ['Yes', 'No'],
    status: 'active',
    volume: 542,
    totalPredictions: 7,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop',
  },
  {
    id: '5',
    title: 'Will Gen.G win the 2026 LCK season?',
    category: 'gaming',
    endDate: '2026-12-31',
    outcomes: ['Yes', 'No'],
    status: 'active',
    volume: 593,
    totalPredictions: 7,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop',
  },
  {
    id: '6',
    title: 'Will Liverpool defeat Fulham?',
    category: 'sports',
    endDate: '2025-01-04',
    outcomes: ['Yes', 'No'],
    status: 'active',
    volume: 1240,
    totalPredictions: 63,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop',
  },
  {
    id: '7',
    title: 'Will Man City defeat Chelsea?',
    category: 'sports',
    endDate: '2025-01-04',
    outcomes: ['Yes', 'No'],
    status: 'active',
    volume: 918,
    totalPredictions: 65,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop',
  },
  {
    id: '8',
    title: 'ZCash vs Monero: Which will rank higher on the first CMC historical snapshot of the year?',
    category: 'crypto',
    endDate: '2025-01-03',
    outcomes: ['ZCASH', 'MONERO'],
    status: 'active',
    volume: 2030,
    totalPredictions: 35,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop',
  },
  {
    id: '9',
    title: 'Magic vs Bulls: Who wins?',
    category: 'sports',
    endDate: '2025-01-03',
    outcomes: ['Magic', 'Bulls'],
    status: 'active',
    volume: 563,
    totalPredictions: 23,
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=200&fit=crop',
  },
  {
    id: '10',
    title: 'Seahawks vs 49ers: Who wins NFC West matchup?',
    category: 'sports',
    endDate: '2025-01-04',
    outcomes: ['Seahawks', '49ers'],
    status: 'active',
    volume: 909,
    totalPredictions: 31,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop',
  },
  {
    id: '11',
    title: 'Panthers vs Buccaneers: Who wins NFC South matchup?',
    category: 'sports',
    endDate: '2025-01-03',
    outcomes: ['Panthers', 'Buccaneers'],
    status: 'active',
    volume: 1950,
    totalPredictions: 32,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop',
  },
  {
    id: '12',
    title: 'Sentiment: Up or Down?',
    category: 'sentiment',
    endDate: '2025-01-01',
    outcomes: ['UP', 'DOWN'],
    status: 'active',
    volume: 14200000,
    totalPredictions: 4100,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop',
    tag: 'Sentiment',
  },
];

export const markets: Market[] = [
  {
    id: '1',
    eventId: '1',
    outcome: 'Yes',
    odds: 0.65,
    volume: 75000,
    liquidity: 125000,
    chartData: [
      { time: '00:00', value: 0.62 },
      { time: '01:00', value: 0.63 },
      { time: '02:00', value: 0.64 },
      { time: '03:00', value: 0.65 },
      { time: '04:00', value: 0.64 },
    ],
  },
  {
    id: '2',
    eventId: '1',
    outcome: 'No',
    odds: 0.35,
    volume: 50000,
    liquidity: 125000,
    chartData: [
      { time: '00:00', value: 0.38 },
      { time: '01:00', value: 0.37 },
      { time: '02:00', value: 0.36 },
      { time: '03:00', value: 0.35 },
      { time: '04:00', value: 0.36 },
    ],
  },
];

export const predictions: Prediction[] = [
  {
    id: '1',
    marketId: '1',
    outcome: 'Yes',
    amount: 500,
    status: 'pending',
    txHash: '3f5a8b2c...x9y7z1',
    createdAt: '2024-12-30T10:30:00Z',
  },
  {
    id: '2',
    marketId: '2',
    outcome: 'No',
    amount: 250,
    status: 'pending',
    txHash: '7d2e9f4a...m5n8p2',
    createdAt: '2024-12-29T15:20:00Z',
  },
];

export const systemLogs: SystemLog[] = [
  {
    id: '1',
    timestamp: '2024-12-31T12:00:00Z',
    message: '> INIT_ORACLE_NETWORK... [OK]',
    type: 'success',
  },
  {
    id: '2',
    timestamp: '2024-12-31T12:00:01Z',
    message: '> SYNCING_NODES... [OK]',
    type: 'info',
  },
  {
    id: '3',
    timestamp: '2024-12-31T12:00:02Z',
    message: '> VALIDATING_EVENTS... [OK]',
    type: 'success',
  },
  {
    id: '4',
    timestamp: '2024-12-31T12:00:03Z',
    message: '> PROCESSING_PREDICTIONS... [OK]',
    type: 'info',
  },
];

export const networkNodes: NetworkNode[] = [
  {
    id: '1',
    status: 'active',
    connections: 12,
    location: 'US-East',
    lastSeen: '2024-12-31T12:00:00Z',
  },
  {
    id: '2',
    status: 'active',
    connections: 8,
    location: 'EU-West',
    lastSeen: '2024-12-31T12:00:00Z',
  },
  {
    id: '3',
    status: 'syncing',
    connections: 5,
    location: 'Asia-Pacific',
    lastSeen: '2024-12-31T11:59:00Z',
  },
];

export const networkStats = {
  activeEvents: 47,
  totalPredictions: 1021,
  totalVolume: 1250000,
  nodes: 24,
  avgLatency: 0.8,
};

// Social Media Posts
export interface SocialPost {
  platform: "twitter" | "reddit" | "news";
  author: string;
  handle: string;
  content: string;
  likes?: number;
  comments?: number;
  date: string;
  verified?: boolean;
}

export const socialPosts: SocialPost[] = [
  {
    platform: "twitter",
    author: "Crypto Analyst",
    handle: "@cryptoanalyst",
    content: "Prediction markets are revolutionizing how we forecast events. Oracle Network makes it accessible to everyone. The future of decentralized forecasting is here! 🚀",
    likes: 1247,
    comments: 89,
    date: "2h ago",
    verified: true,
  },
  {
    platform: "reddit",
    author: "r/cryptocurrency",
    handle: "u/market_trader",
    content: "Just made my first prediction on Oracle Network. The UI is clean, the odds are transparent, and payouts are instant. This is what DeFi should be.",
    likes: 342,
    comments: 45,
    date: "5h ago",
  },
  {
    platform: "news",
    author: "DeFi Pulse",
    handle: "@defipulse",
    content: "Oracle Network launches with $2M+ in prediction volume in first week. Decentralized prediction markets are gaining serious traction.",
    likes: 892,
    date: "1d ago",
  },
];

// News Articles
export interface NewsArticle {
  title: string;
  source: string;
  date: string;
  excerpt: string;
  category: string;
  url?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    title: "Decentralized Prediction Markets See Record Growth in 2024",
    source: "CoinDesk",
    date: "Dec 28, 2024",
    excerpt: "Oracle Network and other prediction market platforms are experiencing unprecedented adoption as users seek alternative forecasting methods.",
    category: "Crypto",
  },
  {
    title: "How Prediction Markets Are Democratizing Information",
    source: "The Block",
    date: "Dec 25, 2024",
    excerpt: "New platforms like Oracle Network are making prediction markets accessible to everyone, not just institutional traders.",
    category: "Technology",
  },
  {
    title: "The Future of Forecasting: Why Prediction Markets Matter",
    source: "Decrypt",
    date: "Dec 22, 2024",
    excerpt: "Prediction markets aggregate information better than any single expert. Oracle Network's decentralized approach ensures transparency and fairness.",
    category: "DeFi",
  },
];

// Trust Badges
export interface TrustBadge {
  name: string;
  logo: string;
  type: "partner" | "security" | "verification";
}

export const trustBadges: TrustBadge[] = [
  { name: "CoinDesk", logo: "📰", type: "partner" },
  { name: "The Block", logo: "📊", type: "partner" },
  { name: "Decrypt", logo: "🔐", type: "partner" },
  { name: "CryptoSlate", logo: "🪙", type: "partner" },
  { name: "BeInCrypto", logo: "📈", type: "partner" },
];

// User Testimonials
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Prediction markets changed how I think about forecasting. Oracle Network makes it accessible.",
    author: "Sarah Chen",
    role: "Crypto Trader",
  },
  {
    quote: "The transparency and instant payouts are game-changers. This is the future of DeFi.",
    author: "Marcus Rodriguez",
    role: "DeFi Enthusiast",
  },
  {
    quote: "I've made more accurate predictions using the wisdom of the crowd than I ever did alone.",
    author: "Alex Thompson",
    role: "Market Analyst",
  },
];

// Extended Market Categories
export const marketCategories = [
  { id: "crypto", name: "Crypto", count: 18 },
  { id: "sports", name: "Sports", count: 13 },
  { id: "politics", name: "Politics", count: 8 },
  { id: "economy", name: "Economy", count: 5 },
  { id: "gaming", name: "Gaming", count: 1 },
  { id: "culture", name: "Culture", count: 11 },
  { id: "sentiment", name: "Sentiment", count: 5 },
];

// Extended Markets with more data
export const extendedMarkets: Array<Market & {
  participants: number;
  timeRemaining: string;
  isFeatured?: boolean;
  isTrending?: boolean;
  category?: string;
  outcome1Percentage: number;
  outcome2Percentage: number;
  outcome1Label: string;
  outcome2Label: string;
}> = [
  // Event 1: Will Gold be above $4,500 at Year's End?
  {
    id: '1',
    eventId: '1',
    outcome: 'Yes',
    odds: 0.03,
    volume: 132000,
    liquidity: 500000,
    participants: 236,
    timeRemaining: 'Dec 31',
    isFeatured: true,
    category: 'economy',
    outcome1Percentage: 3,
    outcome2Percentage: 97,
    outcome1Label: 'Yes',
    outcome2Label: 'No',
    tag: 'Holiday Special',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop',
    chartData: [
      { time: '00:00', value: 0.62 },
      { time: '01:00', value: 0.63 },
      { time: '02:00', value: 0.64 },
      { time: '03:00', value: 0.65 },
      { time: '04:00', value: 0.64 },
    ],
  },
  {
    id: '1b',
    eventId: '1',
    outcome: 'No',
    odds: 0.97,
    volume: 308000,
    liquidity: 500000,
    participants: 236,
    timeRemaining: 'Dec 31',
    category: 'economy',
    outcome1Percentage: 3,
    outcome2Percentage: 97,
    outcome1Label: 'Yes',
    outcome2Label: 'No',
    tag: 'Holiday Special',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop',
    chartData: [],
  },
  // Event 2: Ethereum's next move: Pump to $4K or Dump to $2.5K?
  {
    id: '2',
    eventId: '2',
    outcome: '$4K',
    odds: 0.41,
    volume: 77900,
    liquidity: 200000,
    participants: 1000,
    timeRemaining: 'HIT',
    isTrending: true,
    category: 'crypto',
    outcome1Percentage: 41,
    outcome2Percentage: 59,
    outcome1Label: '$4K',
    outcome2Label: '$2.5K',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop',
    chartData: [],
  },
  {
    id: '2b',
    eventId: '2',
    outcome: '$2.5K',
    odds: 0.59,
    volume: 112100,
    liquidity: 200000,
    participants: 1000,
    timeRemaining: 'HIT',
    category: 'crypto',
    outcome1Percentage: 41,
    outcome2Percentage: 59,
    outcome1Label: '$4K',
    outcome2Label: '$2.5K',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop',
    chartData: [],
  },
  // Event 3: Will Logan Paul's Illustrator Pokemon card sell above 9M?
  {
    id: '3',
    eventId: '3',
    outcome: 'Yes',
    odds: 0.32,
    volume: 538,
    liquidity: 2000,
    participants: 32,
    timeRemaining: 'Jan 1',
    category: 'culture',
    outcome1Percentage: 32,
    outcome2Percentage: 68,
    outcome1Label: 'Yes',
    outcome2Label: 'No',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=200&fit=crop',
    chartData: [],
  },
  {
    id: '3b',
    eventId: '3',
    outcome: 'No',
    odds: 0.68,
    volume: 1142,
    liquidity: 2000,
    participants: 32,
    timeRemaining: 'Jan 1',
    category: 'culture',
    outcome1Percentage: 32,
    outcome2Percentage: 68,
    outcome1Label: 'Yes',
    outcome2Label: 'No',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=200&fit=crop',
    chartData: [],
  },
  // Event 4: Will Barcelona win La Liga 2025/26?
  {
    id: '4',
    eventId: '4',
    outcome: 'Yes',
    odds: 0.63,
    volume: 341,
    liquidity: 1000,
    participants: 7,
    timeRemaining: 'May 24',
    category: 'sports',
    outcome1Percentage: 63,
    outcome2Percentage: 37,
    outcome1Label: 'Yes',
    outcome2Label: 'No',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop',
    chartData: [],
  },
  {
    id: '4b',
    eventId: '4',
    outcome: 'No',
    odds: 0.37,
    volume: 201,
    liquidity: 1000,
    participants: 7,
    timeRemaining: 'May 24',
    category: 'sports',
    outcome1Percentage: 63,
    outcome2Percentage: 37,
    outcome1Label: 'Yes',
    outcome2Label: 'No',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop',
    chartData: [],
  },
  // Event 5: Will Gen.G win the 2026 LCK season?
  {
    id: '5',
    eventId: '5',
    outcome: 'Yes',
    odds: 0.39,
    volume: 231,
    liquidity: 1000,
    participants: 7,
    timeRemaining: 'Dec 31',
    category: 'gaming',
    outcome1Percentage: 39,
    outcome2Percentage: 61,
    outcome1Label: 'Yes',
    outcome2Label: 'No',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop',
    chartData: [],
  },
  {
    id: '5b',
    eventId: '5',
    outcome: 'No',
    odds: 0.61,
    volume: 362,
    liquidity: 1000,
    participants: 7,
    timeRemaining: 'Dec 31',
    category: 'gaming',
    outcome1Percentage: 39,
    outcome2Percentage: 61,
    outcome1Label: 'Yes',
    outcome2Label: 'No',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop',
    chartData: [],
  },
  // Event 6: Will Liverpool defeat Fulham?
  {
    id: '6',
    eventId: '6',
    outcome: 'Yes',
    odds: 0.53,
    volume: 657,
    liquidity: 2000,
    participants: 63,
    timeRemaining: 'Jan 4',
    category: 'sports',
    outcome1Percentage: 53,
    outcome2Percentage: 47,
    outcome1Label: 'Yes',
    outcome2Label: 'No',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop',
    chartData: [],
  },
  {
    id: '6b',
    eventId: '6',
    outcome: 'No',
    odds: 0.47,
    volume: 583,
    liquidity: 2000,
    participants: 63,
    timeRemaining: 'Jan 4',
    category: 'sports',
    outcome1Percentage: 53,
    outcome2Percentage: 47,
    outcome1Label: 'Yes',
    outcome2Label: 'No',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop',
    chartData: [],
  },
  // Event 7: Will Man City defeat Chelsea?
  {
    id: '7',
    eventId: '7',
    outcome: 'Yes',
    odds: 0.57,
    volume: 523,
    liquidity: 1500,
    participants: 65,
    timeRemaining: 'Jan 4',
    category: 'sports',
    outcome1Percentage: 57,
    outcome2Percentage: 43,
    outcome1Label: 'Yes',
    outcome2Label: 'No',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop',
    chartData: [],
  },
  {
    id: '7b',
    eventId: '7',
    outcome: 'No',
    odds: 0.43,
    volume: 395,
    liquidity: 1500,
    participants: 65,
    timeRemaining: 'Jan 4',
    category: 'sports',
    outcome1Percentage: 57,
    outcome2Percentage: 43,
    outcome1Label: 'Yes',
    outcome2Label: 'No',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop',
    chartData: [],
  },
  // Event 8: ZCash vs Monero
  {
    id: '8',
    eventId: '8',
    outcome: 'ZCASH',
    odds: 0.77,
    volume: 1563,
    liquidity: 3000,
    participants: 35,
    timeRemaining: 'Jan 3',
    category: 'crypto',
    outcome1Percentage: 77,
    outcome2Percentage: 23,
    outcome1Label: 'ZCASH',
    outcome2Label: 'MONERO',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop',
    chartData: [],
  },
  {
    id: '8b',
    eventId: '8',
    outcome: 'MONERO',
    odds: 0.23,
    volume: 467,
    liquidity: 3000,
    participants: 35,
    timeRemaining: 'Jan 3',
    category: 'crypto',
    outcome1Percentage: 77,
    outcome2Percentage: 23,
    outcome1Label: 'ZCASH',
    outcome2Label: 'MONERO',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop',
    chartData: [],
  },
  // Event 9: Magic vs Bulls
  {
    id: '9',
    eventId: '9',
    outcome: 'Magic',
    odds: 0.62,
    volume: 349,
    liquidity: 1000,
    participants: 23,
    timeRemaining: 'Jan 3',
    category: 'sports',
    outcome1Percentage: 62,
    outcome2Percentage: 38,
    outcome1Label: 'Magic',
    outcome2Label: 'Bulls',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=200&fit=crop',
    chartData: [],
  },
  {
    id: '9b',
    eventId: '9',
    outcome: 'Bulls',
    odds: 0.38,
    volume: 214,
    liquidity: 1000,
    participants: 23,
    timeRemaining: 'Jan 3',
    category: 'sports',
    outcome1Percentage: 62,
    outcome2Percentage: 38,
    outcome1Label: 'Magic',
    outcome2Label: 'Bulls',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=200&fit=crop',
    chartData: [],
  },
  // Event 10: Seahawks vs 49ers
  {
    id: '10',
    eventId: '10',
    outcome: 'Seahawks',
    odds: 0.52,
    volume: 473,
    liquidity: 1500,
    participants: 31,
    timeRemaining: 'Jan 4',
    category: 'sports',
    outcome1Percentage: 52,
    outcome2Percentage: 48,
    outcome1Label: 'Seahawks',
    outcome2Label: '49ers',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop',
    chartData: [],
  },
  {
    id: '10b',
    eventId: '10',
    outcome: '49ers',
    odds: 0.48,
    volume: 436,
    liquidity: 1500,
    participants: 31,
    timeRemaining: 'Jan 4',
    category: 'sports',
    outcome1Percentage: 52,
    outcome2Percentage: 48,
    outcome1Label: 'Seahawks',
    outcome2Label: '49ers',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop',
    chartData: [],
  },
  // Event 11: Panthers vs Buccaneers
  {
    id: '11',
    eventId: '11',
    outcome: 'Panthers',
    odds: 0.45,
    volume: 878,
    liquidity: 3000,
    participants: 32,
    timeRemaining: 'Jan 3',
    category: 'sports',
    outcome1Percentage: 45,
    outcome2Percentage: 55,
    outcome1Label: 'Panthers',
    outcome2Label: 'Buccaneers',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop',
    chartData: [],
  },
  {
    id: '11b',
    eventId: '11',
    outcome: 'Buccaneers',
    odds: 0.55,
    volume: 1072,
    liquidity: 3000,
    participants: 32,
    timeRemaining: 'Jan 3',
    category: 'sports',
    outcome1Percentage: 45,
    outcome2Percentage: 55,
    outcome1Label: 'Panthers',
    outcome2Label: 'Buccaneers',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop',
    chartData: [],
  },
  // Event 12: Sentiment: Up or Down?
  {
    id: '12',
    eventId: '12',
    outcome: 'UP',
    odds: 0.59,
    volume: 8378000,
    liquidity: 20000000,
    participants: 4100,
    timeRemaining: 'PERP',
    category: 'sentiment',
    outcome1Percentage: 59,
    outcome2Percentage: 41,
    outcome1Label: 'UP',
    outcome2Label: 'DOWN',
    tag: 'Sentiment',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop',
    chartData: [],
  },
  {
    id: '12b',
    eventId: '12',
    outcome: 'DOWN',
    odds: 0.41,
    volume: 5822000,
    liquidity: 20000000,
    participants: 4100,
    timeRemaining: 'PERP',
    category: 'sentiment',
    outcome1Percentage: 59,
    outcome2Percentage: 41,
    outcome1Label: 'UP',
    outcome2Label: 'DOWN',
    tag: 'Sentiment',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop',
    chartData: [],
  },
];

// Leaderboard Data
export interface LeaderboardEntry {
  rank: number;
  username: string;
  avatar?: string;
  dollarScore: number;
  refScore: number;
  ptsScore: number;
  multiplier: number;
  totalScore: number;
}

export const leaderboardEntries: LeaderboardEntry[] = [
  {
    rank: 1,
    username: "Arii_Defi",
    dollarScore: 123824835,
    refScore: 4567890,
    ptsScore: 8901234,
    multiplier: 3,
    totalScore: 371474505,
  },
  {
    rank: 2,
    username: "Gandi",
    dollarScore: 98765432,
    refScore: 3456789,
    ptsScore: 7654321,
    multiplier: 3,
    totalScore: 296196432,
  },
  {
    rank: 3,
    username: "Novus",
    dollarScore: 87654321,
    refScore: 2345678,
    ptsScore: 6543210,
    multiplier: 3,
    totalScore: 262962963,
  },
  {
    rank: 4,
    username: "jepri",
    dollarScore: 76543210,
    refScore: 1234567,
    ptsScore: 5432109,
    multiplier: 3,
    totalScore: 229729629,
  },
  {
    rank: 5,
    username: "0xculo455632yyy2gufoculobello3787873t17gy2vxx2jjj",
    dollarScore: 65432109,
    refScore: 1123456,
    ptsScore: 4321098,
    multiplier: 3,
    totalScore: 196496295,
  },
  {
    rank: 6,
    username: "R3DuX",
    dollarScore: 54321098,
    refScore: 1012345,
    ptsScore: 3210987,
    multiplier: 3,
    totalScore: 163262961,
  },
  {
    rank: 7,
    username: "sebmauclair",
    dollarScore: 43210987,
    refScore: 901234,
    ptsScore: 2109876,
    multiplier: 3,
    totalScore: 130029627,
  },
  {
    rank: 8,
    username: "Bogo",
    dollarScore: 32109876,
    refScore: 801234,
    ptsScore: 1098765,
    multiplier: 3,
    totalScore: 96796293,
  },
  {
    rank: 9,
    username: "xiuyy",
    dollarScore: 21098765,
    refScore: 701234,
    ptsScore: 987654,
    multiplier: 3,
    totalScore: 63562959,
  },
  {
    rank: 10,
    username: "MargraveJuro",
    dollarScore: 10987654,
    refScore: 601234,
    ptsScore: 876543,
    multiplier: 3,
    totalScore: 30329625,
  },
  {
    rank: 11,
    username: "Yerbz3",
    dollarScore: 9876543,
    refScore: 501234,
    ptsScore: 765432,
    multiplier: 3,
    totalScore: 29629629,
  },
  {
    rank: 12,
    username: "Oxe7D4...De04",
    dollarScore: 8765432,
    refScore: 401234,
    ptsScore: 654321,
    multiplier: 3,
    totalScore: 26296263,
  },
  {
    rank: 13,
    username: "dwes",
    dollarScore: 7654321,
    refScore: 301234,
    ptsScore: 543210,
    multiplier: 3,
    totalScore: 22962909,
  },
];

// Earn Data
export interface EarnOpportunity {
  id: string;
  title: string;
  description: string;
  partner: string;
  image: string;
  points: number;
  category: string;
  url?: string;
}

export const earnOpportunities: EarnOpportunity[] = [
  {
    id: "1",
    title: "Vote for Myriad on the Abstract Portal",
    description: "Support Oracle Network by voting on Abstract Portal and earn points for your participation.",
    partner: "MYRIAD",
    image: "https://via.placeholder.com/400x200/FF006E/FFFFFF?text=Myriad+x+Abstract",
    points: 10000,
    category: "MYRIAD",
  },
  {
    id: "2",
    title: "Myriad Markets partners with Trust Wallet",
    description: "Connect your Trust Wallet and earn bonus points for your first prediction.",
    partner: "MYRIAD",
    image: "https://via.placeholder.com/400x200/FF6B35/FFFFFF?text=Myriad+x+Trust",
    points: 20000,
    category: "MYRIAD",
  },
  {
    id: "3",
    title: "1inch Gives Developers Early Access to Fusion Mode",
    description: "Read the latest Decrypt article about 1inch and earn points for engagement.",
    partner: "DECRYPT",
    image: "https://via.placeholder.com/400x200/F7931E/FFFFFF?text=Decrypt+1",
    points: 5000,
    category: "DECRYPT",
  },
  {
    id: "4",
    title: "Hyperliquid Is Decrypt's 2025 Project of the Year",
    description: "Engage with Decrypt's Project of the Year article and earn rewards.",
    partner: "DECRYPT",
    image: "https://via.placeholder.com/400x200/F7931E/FFFFFF?text=Decrypt+B",
    points: 15000,
    category: "DECRYPT",
  },
  {
    id: "5",
    title: "Rug Radio Live: Crypto Market Analysis",
    description: "Watch Rug Radio's live stream and participate in the discussion to earn points.",
    partner: "RUG RADIO",
    image: "https://via.placeholder.com/400x200/FF006E/FFFFFF?text=Rug+Radio",
    points: 10000,
    category: "RUG RADIO",
  },
  {
    id: "6",
    title: "DegenZ Live: Prediction Markets Deep Dive",
    description: "Join DegenZ Live for an in-depth discussion about prediction markets.",
    partner: "DEGENZ LIVE",
    image: "https://via.placeholder.com/400x200/FF6B35/FFFFFF?text=DegenZ",
    points: 12000,
    category: "DEGENZ LIVE",
  },
  {
    id: "7",
    title: "Myriad x CoinDesk Partnership",
    description: "Read exclusive CoinDesk articles about Oracle Network and earn points.",
    partner: "MYRIAD",
    image: "https://via.placeholder.com/400x200/FF006E/FFFFFF?text=Myriad+x+CoinDesk",
    points: 8000,
    category: "MYRIAD",
  },
  {
    id: "8",
    title: "Decrypt: The Future of DeFi Prediction Markets",
    description: "Engage with Decrypt's latest article on DeFi prediction markets.",
    partner: "DECRYPT",
    image: "https://via.placeholder.com/400x200/F7931E/FFFFFF?text=Decrypt+DeFi",
    points: 10000,
    category: "DECRYPT",
  },
];

// News Data (Mock - wird später durch API ersetzt)
export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  source: string;
  url: string;
  category?: string;
  marketPercentage?: number; // Wenn es ein Market ist
}

export const mockNewsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "$144M in Trades Linked to Suspicious Accounts on Binance Following Plea Agreement: FT",
    description: "Binance continued to allow suspicious accounts to operate even after a 2023 U.S. plea agreement, according to a report in the Financial Times. FT reporters tracked 13 suspicious accounts that traded $144 million on the platform after its plea agreement.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop",
    date: "Dec 22",
    source: "Financial Times",
    url: "#",
    category: "crypto",
    marketPercentage: 67,
  },
  {
    id: "2",
    title: "Sen. Cynthia Lummis, a Key Crypto Advocate, Will Not Seek Reelection",
    description: "Sen. Cynthia Lummis, known as the \"Bitcoin Senator\" for her crypto advocacy, announced she will not seek reelection due to exhaustion. Her retirement may impact the passage of the market structure bill.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=200&fit=crop",
    date: "Dec 19",
    source: "CoinDesk",
    url: "#",
    category: "politics",
    marketPercentage: 3,
  },
  {
    id: "3",
    title: "Brooklyn Resident Charged With Stealing $16 Million in Crypto From Coinbase Users",
    description: "Ronald Spektor, a 23-year-old Brooklyn resident, was charged with stealing $16 million in cryptocurrency from around 100 Coinbase users. He allegedly used phishing and social engineering tactics.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop",
    date: "Dec 19",
    source: "The Block",
    url: "#",
    category: "crypto",
    marketPercentage: 4,
  },
  {
    id: "4",
    title: "SEC Files Settlement Agreements for Former FTX Executives",
    description: "Proposed settlement agreements were filed by the SEC for former FTX executives Caroline Ellison, Gary Wang, and Nishad Singh. The agreements include prohibitions on future securities law violations.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop",
    date: "Dec 19",
    source: "Decrypt",
    url: "#",
    category: "crypto",
    marketPercentage: 4,
  },
  {
    id: "5",
    title: "Bomb Threat in South Korea Demanded Bitcoin Ransom From Hyundai Group",
    description: "Two Hyundai Group buildings in Seoul, South Korea were evacuated due to a bomb threat demanding 13 Bitcoin as ransom. The caller threatened to detonate a bomb if the ransom was not paid.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=200&fit=crop",
    date: "Dec 19",
    source: "CoinDesk",
    url: "#",
    category: "crypto",
    marketPercentage: 42,
  },
  {
    id: "6",
    title: "Bitcoin Could Skyrocket to $1.42 Million by 2035: Analysts",
    description: "Analysts predict a potential surge in Bitcoin's price to $1.42 million by 2035, with a bull case of $2.95 million. Factors such as institutional adoption and regulatory clarity could drive this growth.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop",
    date: "Dec 19",
    source: "Decrypt",
    url: "#",
    category: "crypto",
    marketPercentage: 6,
  },
  {
    id: "7",
    title: "Federal Reserve Mulls 'Skinny' Payment Accounts for Crypto Banks",
    description: "The Federal Reserve is seeking public feedback on its proposal for a \"skinny\" payment account, a modified version of master accounts for crypto banks. This move could potentially revolutionize the U.S. banking system.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=200&fit=crop",
    date: "Dec 19",
    source: "The Block",
    url: "#",
    category: "economy",
    marketPercentage: 1,
  },
  {
    id: "8",
    title: "Stealka Malware, Found in Roblox Game Mods, Steals Data From Crypto Wallets",
    description: "Kaspersky has discovered a new infostealer malware called Stealka, hidden in pirated mods for games like Roblox. This malware targets sensitive information from browsers, browser extensions, cryptocurrency wallets, and other apps.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop",
    date: "Dec 19",
    source: "CoinDesk",
    url: "#",
    category: "crypto",
  },
  {
    id: "9",
    title: "Hyperliquid Is Decrypt's 2025 Project of the Year—Here's Why",
    description: "In 2022, Jeff Yan witnessed Sam Bankman-Fried's FTX collapse, inspiring him to create Hyperliquid. Three years later, Hyperliquid has become a successful decentralized exchange, generating billions in trading volume.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop",
    date: "Dec 19",
    source: "Decrypt",
    url: "#",
    category: "crypto",
  },
];

