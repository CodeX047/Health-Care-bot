import React, { useState, useEffect, useRef, useCallback } from "react";
import { Chat } from "@google/genai";
import { Language, Sender, createMessage } from "../../types/chat";
import { UI_TEXTS, INITIAL_MESSAGES } from "../../constants/chat";
import {
  createChatSession,
  sendMessageToBot,
} from "../../services/geminiService";
import MessageBubble from "./MessageBubble";
import LanguageSelector from "./LanguageSelector";
import {
  FaHeartbeat,
  FaClinicMedical,
  FaVideo,
  FaExclamationTriangle,
} from "react-icons/fa";

const ChatInterface = () => {
  const [language, setLanguage] = useState(Language.ENGLISH);
  const [messages, setMessages] = useState([INITIAL_MESSAGES[language]]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState(null);
  const chatContainerRef = useRef(null);

  const services = [
    {
      id: "firstAid",
      name: "First Aid",
      icon: FaHeartbeat,
      color: "#4CAF50",
      bgColor: "#E8F5E9",
    },
    {
      id: "findClinic",
      name: "Find Clinic",
      icon: FaClinicMedical,
      color: "#2196F3",
      bgColor: "#E3F2FD",
    },
    {
      id: "teleConsult",
      name: "Tele-Consult",
      icon: FaVideo,
      color: "#9C27B0",
      bgColor: "#F3E5F5",
    },
    {
      id: "emergency",
      name: "Emergency",
      icon: FaExclamationTriangle,
      color: "#FF5722",
      bgColor: "#FBE9E7",
    },
  ];

  useEffect(() => {
    // This effect initializes or resets the chat session when the language changes.
    const startNewSession = () => {
      const newSession = createChatSession(language);
      setChatSession(newSession);
      setMessages([INITIAL_MESSAGES[language]]);
      setIsLoading(false);
      setInputValue("");
    };
    startNewSession();
  }, [language]);

  useEffect(() => {
    // This effect handles auto-scrolling to the latest message.
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = useCallback(async () => {
    if (inputValue.trim() === "" || isLoading || !chatSession) return;

    const userMessage = createMessage({
      id: Date.now(),
      text: inputValue,
      sender: Sender.USER,
    });

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const botResponseText = await sendMessageToBot(chatSession, inputValue);
      const botMessage = createMessage({
        id: Date.now() + 1,
        text: botResponseText,
        sender: Sender.BOT,
      });
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Failed to get bot response:", error);
      const errorMessage = createMessage({
        id: Date.now() + 1,
        text: "Sorry, something went wrong. Please try again.",
        sender: Sender.BOT,
      });
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [inputValue, isLoading, chatSession]);

  const uiText = UI_TEXTS[language];

  const handleServiceClick = (serviceId) => {
    const serviceMessages = {
      firstAid: "I need first-aid guidance",
      findClinic: "Help me find a nearby clinic",
      teleConsult: "I want to schedule a tele-consultation",
      emergency: "This is an emergency situation",
    };

    setInputValue(serviceMessages[serviceId]);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <div className="flex flex-col h-screen w-full bg-background">
      <div className="p-4 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                src="/image/logo.png"
                alt="Health Care Bot"
                className="w-32 sm:w-40 md:w-48 "
              />
            </div>
            <LanguageSelector
              selectedLanguage={language}
              onLanguageChange={setLanguage}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className="flex items-center justify-center p-3 sm:p-4 rounded-lg transition-all hover:shadow-lg"
                style={{ backgroundColor: service.bgColor }}
              >
                <service.icon
                  className="text-xl sm:text-2xl md:text-3xl mr-2"
                  style={{ color: service.color }}
                />
                <span
                  className="font-medium text-sm sm:text-base md:text-lg"
                  style={{ color: service.color }}
                >
                  {service.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 bg-secondary/30 overflow-hidden">
        <div className="max-w-4xl mx-auto h-full flex flex-col">
          <div
            ref={chatContainerRef}
            className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4"
          >
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-800 rounded-lg py-2 px-4 max-w-xs animate-pulse">
                  {uiText.typing}
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-border">
            <div className="max-w-4xl mx-auto">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center space-x-2 sm:space-x-4"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Describe your symptoms..."
                  className="flex-1 p-3 sm:p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-sm sm:text-base"
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="bg-primary text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
                >
                  {uiText.send}
                </button>
              </form>
              {isLoading && (
                <p className="text-xs sm:text-sm text-gray-500 mt-2 text-center">
                  ⚡ For emergencies, call 108 immediately
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
