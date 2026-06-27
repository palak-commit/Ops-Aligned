"use client";

import { useEffect } from "react";

const PUBLISHER_ID = "ca-pub-3720190862522195";

// Google AdSense in-article ad unit.
// TODO: replace `slot` with the real ad slot ID from your AdSense dashboard
// (Ads -> By ad unit -> In-article). Ads won't serve until this is set.
export default function AdUnit({ slot = "0000000000", layout = "in-article", format = "fluid" }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // adsbygoogle not ready yet; ignored
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", textAlign: "center" }}
      data-ad-layout={layout}
      data-ad-format={format}
      data-ad-client={PUBLISHER_ID}
      data-ad-slot={slot}
    />
  );
}
