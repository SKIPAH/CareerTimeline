import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.toggle("show", entry.isIntersecting);
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    const hiddenElements2 = document.querySelectorAll(".hidden-icons");
    hiddenElements.forEach((el) => observer.observe(el));
    hiddenElements2.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      hiddenElements2.forEach((el) => observer.unobserve(el));
    };
  }, []);
};
