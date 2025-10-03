import { MessageCircle, MapPin, Heart, Clock } from "lucide-react";

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
  { number: "1000+", label: "Health Topics" },
];

export default {
  features,
  stats
}