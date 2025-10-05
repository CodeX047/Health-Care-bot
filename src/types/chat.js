export const Language = {
  ENGLISH: "en",
  HINDI: "hi",
  MARATHI: "mr",
};

export const Sender = {
  USER: "user",
  BOT: "bot",
};

// Helper function to create a message object
export const createMessage = ({ id, text, sender }) => ({
  id: id || Date.now(),
  text: text || "",
  sender: sender || Sender.BOT,
});
