import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./components/landing/page";
import ChatInterface from "./components/ChatBot/ChatInterface";
import LearnMore from "./components/LearnMore";
import SmsInterface from "./components/SMS/SmsInterface";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Page />,
    },
    {
      path: "/chat",
      element: <ChatInterface />,
    },
    {
      path: "/learn-more",
      element: <LearnMore />,
    },
    {
      path: "/sms",
      element: <SmsInterface />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
