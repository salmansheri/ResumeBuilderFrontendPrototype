import { 
  Wand2, 
  LayoutTemplate, 
  ShieldCheck, 
  Zap, 
  Download, 
  FileText,
  UploadCloud,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { NavItem, Feature, Step, PricingTier, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Templates', href: '#templates' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'AI-Powered Writing',
    description: 'Generate professional summaries and bullet points tailored to your job role in seconds.',
    icon: Wand2,
  },
  {
    id: '2',
    title: 'ATS-Friendly Templates',
    description: 'Designs optimized for Applicant Tracking Systems to ensure your resume gets seen by humans.',
    icon: LayoutTemplate,
  },
  {
    id: '3',
    title: 'Real-time Suggestions',
    description: 'Get instant feedback on grammar, tone, and impact as you type.',
    icon: Zap,
  },
  {
    id: '4',
    title: 'Data Privacy First',
    description: 'Your personal data is encrypted and never shared with third parties.',
    icon: ShieldCheck,
  },
];

export const STEPS: Step[] = [
  {
    id: 1,
    title: 'Upload or Import',
    description: 'Upload your old resume or import directly from LinkedIn to get started fast.',
    icon: UploadCloud,
  },
  {
    id: 2,
    title: 'AI Enhancement',
    description: 'Let our AI rewrite descriptions, fix errors, and optimize keywords for your target job.',
    icon: Cpu,
  },
  {
    id: 3,
    title: 'Download & Apply',
    description: 'Export as PDF or Word Doc and start applying with confidence.',
    icon: Download,
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'basic',
    name: 'Starter',
    price: '$0',
    period: '/month',
    features: [
      '1 Resume Template',
      'Basic AI Suggestions',
      'TXT Export',
      '7-day History'
    ],
    buttonText: 'Get Started Free',
    recommended: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$12',
    period: '/month',
    features: [
      'All Premium Templates',
      'Unlimited AI Generations',
      'PDF & Word Export',
      'Cover Letter Generator',
      'Priority Support'
    ],
    buttonText: 'Upgrade to Pro',
    recommended: true,
  },
  {
    id: 'enterprise',
    name: 'Team',
    price: '$49',
    period: '/month',
    features: [
      '5 User Seats',
      'Team Collaboration',
      'Admin Dashboard',
      'API Access',
      'Dedicated Account Manager'
    ],
    buttonText: 'Contact Sales',
    recommended: false,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Software Engineer',
    company: 'TechCorp',
    avatar: 'https://picsum.photos/100/100?random=1',
    content: "I've never been good at writing about myself. NovaResume generated perfect bullet points that highlighted my impact. I got the job!",
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'Innovate Inc',
    avatar: 'https://picsum.photos/100/100?random=2',
    content: "The ATS-friendly templates are a lifesaver. My application response rate tripled after switching to a resume built here.",
  },
  {
    id: 't3',
    name: 'Emily Davis',
    role: 'Marketing Director',
    company: 'Creative Solutions',
    avatar: 'https://picsum.photos/100/100?random=3',
    content: "Beautiful designs that don't sacrifice readability. The AI suggestions for keywords were spot on for my industry.",
  },
];