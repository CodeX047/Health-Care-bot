import constants from "./../../Constant/index.jsx";
import {
  ArrowLeft,
  Shield,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const LearnMore = () => {
  const { features1, howItWorks, faqs } = constants || {};

  const featuresArray = Array.isArray(features1)
    ? features1
    : features1 && features1.features
    ? features1.features
    : [];

  const howItWorksArray = Array.isArray(howItWorks)
    ? howItWorks
    : howItWorks && howItWorks.features
    ? howItWorks.features
    : [];

  const faqsArray = Array.isArray(faqs)
    ? faqs
    : faqs && faqs.faqs
    ? faqs.faqs
    : [];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b border-border shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Back</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <img src="/image/logo.png" alt="Health Care Bot" className="w-32 sm:w-40" />
              </div>
            </div>
            <Link to="/chat">
              <Button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base">Try It Now</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl text-foreground">
                How Our Healthcare AI Works
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Learn about our AI-powered healthcare assistant designed
                specifically for rural communities. Understand how it works,
                what it can do, and how to use it safely and effectively.
              </p>
              <Link to="/chat">
                <Button className="px-6 py-3 text-base sm:text-lg">Try It Now</Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMEFJJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NTk1OTAyODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI healthcare technology"
                className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl text-foreground">How It Works</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI healthcare assistant follows a simple, four-step process to
              provide you with reliable health guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksArray.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  {step.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-foreground text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl text-foreground">Key Features</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Designed specifically for the unique needs of rural communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {featuresArray.map((feature, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      {feature.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-foreground text-lg">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl text-foreground">
                Important Information
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mt-4">
                Please read these important guidelines before using our AI
                assistant.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-green-800">
                    <CheckCircle className="h-5 w-5" />
                    <span>What We Can Help With</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-green-700 text-sm sm:text-base">
                  <p>• General health questions and symptom guidance</p>
                  <p>• First aid instructions and emergency preparation</p>
                  <p>• Finding nearby healthcare facilities</p>
                  <p>• Health education and prevention tips</p>
                  <p>• When to seek professional medical care</p>
                </CardContent>
              </Card>

              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-red-800">
                    <AlertTriangle className="h-5 w-5" />
                    <span>Important Limitations</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-red-700 text-sm sm:text-base">
                  <p>• Cannot diagnose medical conditions</p>
                  <p>• Cannot prescribe medications</p>
                  <p>• Cannot replace professional medical examination</p>
                  <p>• Not suitable for emergency situations</p>
                  <p>• Cannot access your medical records</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Common questions about our healthcare AI assistant.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqsArray.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-foreground font-medium text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-800 text-xl sm:text-2xl">
                <Shield className="h-6 w-6" />
                <span>Privacy & Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-blue-700 text-sm sm:text-base">
              <p className="leading-relaxed">
                We take your privacy seriously. Our AI assistant is designed to
                provide health guidance without storing or tracking your
                personal health information. Conversations are processed
                securely and are not linked to your identity.
              </p>
              <p className="leading-relaxed">
                However, please avoid sharing sensitive personal information
                like full names, addresses, social security numbers, or detailed
                medical history unless absolutely necessary for the guidance
                you're seeking.
              </p>
              <p className="text-xs sm:text-sm">
                For the most sensitive health concerns, we recommend speaking
                directly with a healthcare provider in a secure, confidential
                setting.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl text-white">Ready to Get Started?</h2>
            <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Our AI healthcare assistant is here to support your rural
              community with reliable health information and guidance, available
              24/7.
            </p>
            <Link to="/chat">
              <Button variant="secondary" className="px-8 py-3 text-base sm:text-lg">
                Launch Healthcare AI Bot
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;
