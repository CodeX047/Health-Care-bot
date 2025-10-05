import { GoogleGenAI, Chat } from "@google/genai";
import { Language } from "../types/chat";
import {
  EMERGENCY_RESPONSE,
  SERVICE_RESPONSES,
  formatBotResponse,
} from "../constants/responses";

// This function provides a detailed system instruction to the AI model,
// tailoring its personality and capabilities for the rural healthcare context.
const getSystemInstruction = (language) => {
  const languageMap = {
    [Language.ENGLISH]: "English",
    [Language.HINDI]: "Hindi",
    [Language.MARATHI]: "Marathi",
  };
  const langName = languageMap[language];

  return `You are a helpful and friendly AI assistant for "Rural Healthcare AI Bot". Your primary goal is to assist users in rural areas with basic healthcare information.
  
  RESPONSE GUIDELINES:
  1. Language: MUST respond in ${langName} only
  2. Tone: Be empathetic, patient, and use simple, easy-to-understand language
  3. Format: Use clear sections with headings and bullet points
  4. Important information should be marked with ** for emphasis
  
  MEDICAL ADVICE RULES:
  - For non-emergency situations:
    • Provide verified first-aid information step by step
    • Always include a disclaimer about seeking professional medical help
    • Explain when the situation requires immediate medical attention
  
  - For emergencies:
    • Immediately direct to call 108 or visit nearest emergency room
    • Do not provide medical advice for critical situations
    • Emphasize the importance of professional medical care
  
  - When discussing symptoms:
    • Never provide diagnosis
    • Explain general information about the condition
    • Always recommend consulting a qualified healthcare professional
    • Use phrases like "This information is for educational purposes only"
  
  STRUCTURE YOUR RESPONSES:
  1. Start with a clear understanding/acknowledgment
  2. Provide structured, step-by-step information
  3. Include relevant precautions and warnings
  4. End with next steps or recommendations
  
  Remember: Your knowledge is for informational purposes only and is not a substitute for professional medical advice.
  `;
};

// Ensure the API key is available in the environment variables.
if (!import.meta.env.VITE_GOOGLE_API_KEY) {
  throw new Error("VITE_GOOGLE_API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_API_KEY });

export const createChatSession = (language) => {
  const model = ai.chats.create({
    model: "gemini-2.5-flash",
    config: {
      systemInstruction: getSystemInstruction(language),
      // Lower temperature for more factual, less creative responses
      temperature: 0.2,
    },
  });
  return model;
};

export const sendMessageToBot = async (chat, message) => {
  try {
    // Check for emergency keywords
    const emergencyKeywords = [
      "emergency",
      "urgent",
      "critical",
      "ambulance",
      "bleeding",
      "unconscious",
      "not breathing",
      "heart attack",
      "stroke",
    ];
    const isEmergency = emergencyKeywords.some((keyword) =>
      message.toLowerCase().includes(keyword)
    );

    if (isEmergency) {
      return formatBotResponse(EMERGENCY_RESPONSE);
    }

    // Check for service-specific queries
    if (message === "I need first-aid guidance") {
      return formatBotResponse(SERVICE_RESPONSES.firstAid);
    } else if (message === "Help me find a nearby clinic") {
      return formatBotResponse(SERVICE_RESPONSES.findClinic);
    } else if (message === "I want to schedule a tele-consultation") {
      return formatBotResponse(SERVICE_RESPONSES.teleConsult);
    }

    const response = await chat.sendMessage({ message });
    return response.text ?? "Sorry, I couldn't generate a response";
  } catch (error) {
    console.error("Error sending message to bot:", error);
    throw error;
  }
};
