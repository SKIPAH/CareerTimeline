import { useState, useEffect } from "react";
import { getCurrentLanguage } from "../components/Translations2";

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState(getCurrentLanguage());

  useEffect(() => {
    const checkLanguage = () => {
      const newLanguage = getCurrentLanguage();
      if (newLanguage !== currentLanguage) {
        setCurrentLanguage(newLanguage);
      }
    };

    const interval = setInterval(checkLanguage, 100);
    return () => clearInterval(interval);
  }, [currentLanguage]);

  return currentLanguage;
};
