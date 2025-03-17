import React from "react";
import CookieConsent from "react-cookie-consent";

function CookieConsentModule() {
  return (
    <div>
      <CookieConsent
        location="bottom"
        buttonText="Accept Cookies"
        cookieName="ChandraIndustries-VCS"
        style={{ background: "#0d1831f7", zIndex: 9999, fontSize: "10.96px" }}
        buttonStyle={{
          color: "#091020",
          fontSize: "11.96px",
          borderRadius: "5px",
          padding: "10px 20px"
        }}
        expires={150}
      >
        The VCS Website uses cookies to enhance the user experience and enable important functionality. You will not have access to full website functionality if cookies are disabled.{" "}
        <a 
          href="https://victoriancruisesociety.org/legal" 
          style={{ color: "#fff", textDecoration: "underline", marginLeft: "5px" }} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Learn more.
        </a>
      </CookieConsent>
    </div>
  );
}

export default CookieConsentModule;