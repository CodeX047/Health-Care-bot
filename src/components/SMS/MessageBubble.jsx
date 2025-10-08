import React from "react";
import { Sender } from "../../types/chat";

const MessageBubble = ({ message }) => {
  const isUser = message.sender === Sender.USER;

  const bubbleClasses = isUser
    ? "bg-primary text-primary-foreground rounded-lg rounded-br-none"
    : "bg-muted text-muted-foreground rounded-lg rounded-bl-none";

  const formatText = (text) => {
    // Replace **text** with bold text
    text = text.replace(
      /\*\*(.*?)\*\*/g,
      "<strong class='font-semibold'>$1</strong>"
    );
    // Replace _text_ with italic text
    text = text.replace(/_(.*?)_/g, "<em class='italic'>$1</em>");
    // Replace • with bullet points
    text = text.replace(/^•\s/gm, "• ");
    // Add spacing after periods in sentences
    text = text.replace(/\.(?=[^\n])/g, ". ");
    return text;
  };

  const renderLine = (line, index) => {
    if (line.trim() === "") return <div key={index} className="h-2" />;

    // Handle bullet points
    if (line.trim().startsWith("•")) {
      return (
        <div key={index} className="flex items-start space-x-3 ml-2 mb-2">
          <span className="text-lg leading-none mt-0.5">•</span>
          <span
            className="flex-1"
            dangerouslySetInnerHTML={{ __html: formatText(line.substring(1)) }}
          />
        </div>
      );
    }

    // Handle numbered lists
    const numberMatch = line.match(/^(\d+)\.\s/);
    if (numberMatch) {
      return (
        <div key={index} className="flex items-start space-x-3 ml-2 mb-2">
          <span className="font-medium min-w-[1.5rem] mt-0.5">
            {numberMatch[1]}.
          </span>
          <span
            className="flex-1"
            dangerouslySetInnerHTML={{
              __html: formatText(line.substring(numberMatch[0].length)),
            }}
          />
        </div>
      );
    }

    return (
      <p
        key={index}
        className={`mb-2 ${line.startsWith("**") ? "font-medium" : ""} ${
          line === line.toUpperCase() ? "font-semibold" : ""
        }`}
        dangerouslySetInnerHTML={{ __html: formatText(line) }}
      />
    );
  };

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`p-3 max-w-[80%] ${bubbleClasses}`}>
        <div className="space-y-1 text-sm sm:text-base">
          {message.text
            .split("\n")
            .map((line, index) => renderLine(line, index))}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
