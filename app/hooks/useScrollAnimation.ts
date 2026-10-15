import { useEffect } from "react";

export function useScrollAnimation(selectors: string[]) {
  useEffect(() => {
    const targets = document.querySelectorAll(selectors.join(", "));
    targets.forEach((node) => node.classList.add("reveal-on-scroll"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -35px 0px" }
    );

    targets.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [selectors]);
}
