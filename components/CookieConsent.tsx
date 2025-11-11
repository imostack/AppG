"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white p-4 rounded-2xl shadow-lg w-[90%] md:w-auto flex flex-col md:flex-row items-center gap-3">
      <p className="text-sm text-center md:text-left">
        🍪 We use cookies to improve your experience and analyze site traffic.{" "}
        <a
          href="/cookie-policy"
          className="underline text-blue-400 hover:text-blue-300 ml-1"
        >
          Learn more
        </a>
        .
      </p>
      <div className="flex gap-2">
        <button
          onClick={acceptCookies}
          className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-1 px-3 rounded-lg"
        >
          Accept
        </button>
        <button
          onClick={declineCookies}
          className="bg-gray-700 hover:bg-gray-600 text-sm font-medium py-1 px-3 rounded-lg"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
