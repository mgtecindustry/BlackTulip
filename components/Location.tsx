import React from "react";

export default function Location() {
  return (
    <div className="w-full h-[60vh] sm:h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2713.39661016039!2d23.874083876679595!3d47.15008621939018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4749c77d9bf15205%3A0x274f5a70ae3ca6f4!2sTerasa%20Black%20Tulip!5e0!3m2!1sen!2sro!4v1738325495640!5m2!1sen!2sro"
        className="w-full h-full"
        style={{ border: 0 }}
        title="Google Map - Locația Terasa Black Tulip"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
