import {
  MessageCircle,
  MapPin,
  Heart,
  Clock,
  Brain,
  Book,
  Users,
  Shield,
  Phone,
} from "lucide-react";

const features = [
  {
    icon: <MessageCircle className="h-8 w-8" />,
    title: "24/7 AI Health Assistant",
    description:
      "Get instant medical guidance and health information anytime, anywhere in your rural community.",
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Find Nearby Care",
    description:
      "Locate the nearest hospitals, clinics, and healthcare facilities in your area with real-time information.",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Emergency Guidance",
    description:
      "Access critical first aid instructions and emergency protocols designed for rural settings.",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Tele-consultations",
    description:
      "Book virtual appointments with healthcare providers without traveling long distances.",
  },
];

const stats = [
  { number: "24/7", label: "Availability" },
  { number: "100+", label: "Health Topics" },
];

const howItWorks = [
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Ask Your Questions",
    description:
      "Type your health concerns, symptoms, or questions in natural language. Our AI understands medical terminology and everyday descriptions.",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI Analysis",
    description:
      "Our healthcare AI processes your question using medical knowledge databases and provides relevant, evidence-based guidance.",
  },
  {
    icon: <Book className="h-6 w-6" />,
    title: "Get Guidance",
    description:
      "Receive clear, understandable health information, first aid instructions, or recommendations for when to seek professional care.",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Find Local Care",
    description:
      "Access information about nearby healthcare facilities, emergency services, and how to reach them from your location.",
  },
];

const features1 = [
  {
    icon: <Clock className="h-5 w-5" />,
    title: "24/7 Availability",
    description:
      "Get health guidance anytime, day or night, even when healthcare facilities are closed.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Rural-Focused",
    description:
      "Specifically designed for rural communities with limited healthcare access and longer travel distances.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Privacy First",
    description:
      "Your conversations are secure and private. We don't store personal health information.",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Emergency Ready",
    description:
      "Quick access to emergency numbers and first aid guidance for urgent situations.",
  },
];

const faqs = [
  {
    question: "Is this a replacement for seeing a doctor?",
    answer:
      "No, this AI assistant provides general health information and guidance only. It's designed to supplement, not replace, professional medical care. Always consult with healthcare providers for diagnosis and treatment.",
  },
  {
    question: "How accurate is the medical information?",
    answer:
      "Our AI is trained on reputable medical sources and follows evidence-based guidelines. However, individual health situations are unique, and this tool cannot account for all personal factors that a healthcare provider would consider.",
  },
  {
    question: "What should I do in a medical emergency?",
    answer:
      "For life-threatening emergencies, always call 112 immediately. This AI assistant can provide first aid guidance while you wait for emergency services, but professional emergency care is always the priority.",
  },
  {
    question: "Is my health information private?",
    answer:
      "Yes, we prioritize your privacy. Conversations are not linked to your personal identity, and we don't store sensitive health information. However, avoid sharing specific personal details unnecessarily.",
  },
  {
    question: "Can I use this for my children or elderly family members?",
    answer:
      "Yes, you can ask questions about family members' health concerns. However, children and elderly individuals may have specific medical needs that require professional evaluation more frequently than adults.",
  },
];

export default {
  features,
  stats,
  howItWorks,
  features1,
  faqs,
};
