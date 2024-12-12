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

    // Cleanup function
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      hiddenElements2.forEach((el) => observer.unobserve(el));
    };
  }, []); // Empty dependency array means this runs once on mount
};

/*

VANILLA JS VERSION 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
        entry.target.classList.add('show');
        }else{
        entry.target.classList.remove('show');
        }
        });
    });
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



*/
