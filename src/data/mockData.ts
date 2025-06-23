export interface Video {
  id: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  duration: string;
  thumbnail: string;
  channelAvatar: string;
  description: string;
  likes: string;
  dislikes: string;
  subscribers: string;
  isVerified: boolean;
}

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  replies?: Comment[];
}

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Building Modern Web Applications with React and TypeScript',
    channel: 'TechMastery',
    views: '2.3M',
    timestamp: '2 days ago',
    duration: '15:42',
    thumbnail: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    channelAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    description: 'Learn how to build scalable and maintainable web applications using React and TypeScript. This comprehensive tutorial covers best practices, advanced patterns, and real-world examples.',
    likes: '45K',
    dislikes: '1.2K',
    subscribers: '1.2M',
    isVerified: true
  },
  {
    id: '2',
    title: 'The Future of AI and Machine Learning in 2025',
    channel: 'AI Insights',
    views: '1.8M',
    timestamp: '1 week ago',
    duration: '22:15',
    thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    channelAvatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    description: 'Explore the latest trends and developments in artificial intelligence and machine learning. Discover what the future holds for these transformative technologies.',
    likes: '32K',
    dislikes: '800',
    subscribers: '850K',
    isVerified: true
  },
  {
    id: '3',
    title: 'Mastering CSS Grid and Flexbox Layout Techniques',
    channel: 'WebDev Pro',
    views: '956K',
    timestamp: '3 days ago',
    duration: '18:30',
    thumbnail: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    channelAvatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    description: 'Master modern CSS layout techniques with this comprehensive guide to CSS Grid and Flexbox. Learn when and how to use each approach effectively.',
    likes: '28K',
    dislikes: '600',
    subscribers: '650K',
    isVerified: false
  },
  {
    id: '4',
    title: 'JavaScript ES2024 New Features and Updates',
    channel: 'CodeCraft',
    views: '1.2M',
    timestamp: '5 days ago',
    duration: '12:45',
    thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    channelAvatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    description: 'Discover the latest JavaScript ES2024 features and how they can improve your code. Learn about new syntax, built-in methods, and performance improvements.',
    likes: '38K',
    dislikes: '900',
    subscribers: '980K',
    isVerified: true
  },
  {
    id: '5',
    title: 'Building Responsive Web Design from Scratch',
    channel: 'DesignHub',
    views: '743K',
    timestamp: '1 week ago',
    duration: '25:18',
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    channelAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    description: 'Learn the fundamentals of responsive web design and create websites that look great on all devices. Covering mobile-first approach and modern CSS techniques.',
    likes: '22K',
    dislikes: '450',
    subscribers: '420K',
    isVerified: false
  },
  {
    id: '6',
    title: 'Advanced Node.js Performance Optimization',
    channel: 'Backend Masters',
    views: '892K',
    timestamp: '4 days ago',
    duration: '31:22',
    thumbnail: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    channelAvatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    description: 'Optimize your Node.js applications for maximum performance. Learn about profiling, memory management, and scaling techniques for production environments.',
    likes: '35K',
    dislikes: '1.1K',
    subscribers: '720K',
    isVerified: true
  }
];

export const mockComments: Comment[] = [
  {
    id: '1',
    author: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    content: 'This is an excellent tutorial! The explanations are clear and the examples are very practical. Thank you for sharing your knowledge.',
    timestamp: '2 hours ago',
    likes: 24,
    replies: [
      {
        id: '1-1',
        author: 'Mike Chen',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
        content: 'I completely agree! This helped me understand the concepts much better.',
        timestamp: '1 hour ago',
        likes: 8
      }
    ]
  },
  {
    id: '2',
    author: 'Alex Rivera',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    content: 'Great content as always! Could you make a follow-up video about advanced patterns?',
    timestamp: '5 hours ago',
    likes: 15
  },
  {
    id: '3',
    author: 'Emma Thompson',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    content: 'I\'ve been struggling with this topic for weeks. Your explanation finally made it click for me. Thank you!',
    timestamp: '1 day ago',
    likes: 42
  }
];