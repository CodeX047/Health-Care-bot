import React, { useState, useEffect, useRef, useCallback } from "react";
import Header from "./Header";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import {
  createChatSession,
  sendMessageToBot,
} from "../../services/geminiService";
import { Language, Sender, createMessage } from "../../types/chat";
import { INITIAL_MESSAGES } from "../../constants/chat";

const SmsInterface = () => {
  const [language, setLanguage] = useState(Language.ENGLISH);
  const [messages, setMessages] = useState([INITIAL_MESSAGES[language]]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState(null);

  useEffect(() => {
    const startNewSession = () => {
      const newSession = createChatSession(language);
      setChatSession(newSession);
      setMessages([INITIAL_MESSAGES[language]]);
      setIsLoading(false);
      setInputValue("");
    };
    startNewSession();
  }, [language]);

  const handleSendMessage = useCallback(
    async (messageText) => {
      if (messageText.trim() === "" || isLoading || !chatSession) return;

      const userMessage = createMessage({
        id: Date.now(),
        text: messageText,
        sender: Sender.USER,
      });

      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setIsLoading(true);

      try {
        const botResponseText = await sendMessageToBot(
          chatSession,
          messageText
        );
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
    },
    [isLoading, chatSession]
  );

  return (
    <>
      <style>{`
          body { font-family: 'Inter', sans-serif; background-color: #f0f2f5; }
          .main-container-chat { height: 100vh; display: flex; flex-direction: column; }
          @media (min-width: 640px) { .main-container-chat { height: 90vh; max-height: 800px; } }
      `}</style>
      <div className="flex items-center justify-center min-h-screen">
        <div className="main-container-chat w-full max-w-md bg-white sm:rounded-xl shadow-lg flex flex-col">
          <Header selectedLanguage={language} onLanguageChange={setLanguage} />
          <MessageList messages={messages} />
          {isLoading && (
            <div className="p-1 text-center text-sm text-gray-500 h-6">
              Bot is typing...
            </div>
          )}
          <MessageInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </>
  );
};

export default SmsInterface;
