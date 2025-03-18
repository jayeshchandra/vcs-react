import React, { useState, useEffect } from "react";

const GoogleForm1 = () => {
  const [formSize, setFormSize] = useState({
    width: window.innerWidth * 0.9, // 90% of viewport width
    height: window.innerHeight * 0.7, // 70% of viewport height
  });

  useEffect(() => {
    const handleResize = () => {
      setFormSize({
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
        title="Victorian Cruise Society Test Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLScbD092qIoQsYICLja6BbpPUoBBKbR2mwLKfD4jRMbKsdgoTg/viewform?embedded=true"
        style={{
          border: "none",
          borderRadius: "10px",
        }}
        width={formSize.width}
        height={formSize.height}
      ></iframe>
    </div>
  );
};

export default GoogleForm1;