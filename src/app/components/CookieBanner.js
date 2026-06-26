"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: "var(--text-primary)", color: "var(--bg-color)", padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 9999, fontSize: "0.875rem" }}>
      <div>
        We use cookies to enhance your experience and serve personalized AdSense ads. By continuing to visit this site you agree to our <a href="/privacy" style={{ textDecoration: "underline", color: "var(--accent)" }}>Privacy Policy</a>.
      </div>
      <button onClick={() => { localStorage.setItem("cookie_consent", "true"); setShow(false); }} style={{ backgroundColor: "var(--bg-color)", color: "var(--text-primary)", border: "none", padding: "0.5rem 1rem", borderRadius: "4px", fontWeight: "bold", cursor: "pointer", marginLeft: "1rem" }}>
        Accept
      </button>
    </div>
  );
}
