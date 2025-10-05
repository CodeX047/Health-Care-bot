import { Language } from "../types/chat";

export const UI_TEXTS = {
  [Language.ENGLISH]: {
    title: "Rural Healthcare Assistant",
    typing: "Typing...",
    placeholder: "Type your health question...",
    send: "Send",
  },
  [Language.HINDI]: {
    title: "ग्रामीण स्वास्थ्य सहायक",
    typing: "टाइप कर रहा है...",
    placeholder: "अपना स्वास्थ्य प्रश्न टाइप करें...",
    send: "भेजें",
  },
  [Language.MARATHI]: {
    title: "ग्रामीण आरोग्य सहाय्यक",
    typing: "टाइप करत आहे...",
    placeholder: "तुमचा आरोग्य प्रश्न टाइप करा...",
    send: "पाठवा",
  },
};

import { createMessage, Sender } from "../types/chat";

export const INITIAL_MESSAGES = {
  [Language.ENGLISH]: createMessage({
    id: 1,
    text: "Hello! I'm your rural healthcare assistant. How can I help you today?",
    sender: Sender.BOT,
  }),
  [Language.HINDI]: createMessage({
    id: 1,
    text: "नमस्ते! मैं आपका ग्रामीण स्वास्थ्य सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
    sender: Sender.BOT,
  }),
  [Language.MARATHI]: createMessage({
    id: 1,
    text: "नमस्कार! मी तुमचा ग्रामीण आरोग्य सहाय्यक आहे. मी आज तुमची कशी मदत करू शकतो?",
    sender: Sender.BOT,
  }),
};
