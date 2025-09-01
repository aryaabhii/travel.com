"use client";

import React from "react";
import Script from "next/script";

export default function ScriptLoader() {
     return (
          <>
               <Script src="/assets/js/theme-1.js" strategy="afterInteractive" defer />
               <Script src="/assets/js/theme-2.js" strategy="afterInteractive" defer />
               <Script src="/assets/js/theme-3.js" strategy="afterInteractive" defer />
          </>
     );
}
