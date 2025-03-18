import React, { useState, useEffect } from "react";

const GoogleCalendarEmbed = () => {
  const [calendarSize, setCalendarSize] = useState({
    width: window.innerWidth * 0.9, // 90% of viewport width
    height: window.innerHeight * 0.7, // 70% of viewport height
  });

  useEffect(() => {
    const handleResize = () => {
      setCalendarSize({
        width: window.innerWidth * 0.9,
        height: window.innerHeight * 0.7,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "20px",
      }}
    >
      <iframe
        title="Victorian Cruise Society Events"
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Australia%2FMelbourne&showPrint=0&title=Victorian%20Cruise%20Society%20Events&showTabs=0&src=YzBhZjZlYzQzZGVhNzU1Y2FhNzIyNDdmMTM1ZDhmNTEyMjU5NDI3ZDhlNjFjNDBmZDc5NTMwZGM1Y2EzNDNmYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F4511E"
        style={{
          border: "none",
          borderRadius: "10px",
        }}
        width={calendarSize.width}
        height={calendarSize.height}
      ></iframe>
    </div>
  );
};

export default GoogleCalendarEmbed;
