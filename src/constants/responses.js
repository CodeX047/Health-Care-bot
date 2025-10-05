export const EMERGENCY_RESPONSE = {
  heading:
    "Oh dear, if this is an emergency situation, **please understand that I am an AI and cannot provide medical help or advice for emergencies.**",
  mainMessage: "**You must seek immediate professional medical attention.**",
  instructions: "**Please do one of the following right away:**",
  actions: [
    "**Call your local emergency number immediately.** In India, this is often **108** for an ambulance.",
    "**Go to the nearest hospital or emergency room as quickly as possible.**",
  ],
  footer:
    "Your safety and well-being are paramount. Do not delay in getting help from trained medical professionals.",
};

export const SERVICE_RESPONSES = {
  firstAid: {
    intro: "I can help guide you through basic first aid steps. Please note:",
    disclaimer:
      "This information is for educational purposes only and not a substitute for professional medical care.",
    prompt:
      "Please describe the specific first aid situation you need help with:",
  },
  findClinic: {
    intro: "I'll help you locate healthcare facilities near you.",
    prompt: "Please share your location or area to find nearby clinics:",
  },
  teleConsult: {
    intro:
      "While I can't connect you directly to a live service, I can tell you that many government initiatives and private platforms offer affordable teleconsultations. These services often allow you to speak with a general physician or specialist via phone or video call.",
    recommendations: [
      "Government telemedicine platforms",
      "Registered private telehealth services",
      "Hospital teleconsultation services",
    ],
    prompt:
      "Would you like information about verified telemedicine services in your region?",
  },
};

export const formatBotResponse = (content) => {
  if (typeof content === "string") return content;

  let response = [];
  if (content.heading) response.push(content.heading);
  if (content.mainMessage) response.push(content.mainMessage);
  if (content.instructions) {
    response.push(content.instructions);
    if (content.actions) {
      content.actions.forEach((action, index) => {
        response.push(`${index + 1}. ${action}`);
      });
      response.push("");
    }
  }
  if (content.intro) response.push(content.intro);
  if (content.recommendations) {
    content.recommendations.forEach((rec) => {
      response.push(`• ${rec}`);
    });
    response.push("");
  }
  if (content.disclaimer) response.push(`_${content.disclaimer}_`);
  if (content.prompt) response.push(content.prompt);
  if (content.footer) {
    response.push("");
    response.push(content.footer);
  }

  return response.join("\n");
};
