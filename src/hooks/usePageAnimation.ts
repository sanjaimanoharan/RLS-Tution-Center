import { useLayoutEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function usePageAnimation(root: RefObject<HTMLDivElement | null>) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    const context = gsap.context(() => {}, root);
    try {
      context.add(() => {
        media.add(
          {
            motion: "(prefers-reduced-motion: no-preference)",
            desktop: "(min-width: 1000px)",
            wide: "(min-width: 900px)",
            courseColumns: "(min-width: 601px)",
            tall: "(min-height: 850px)",
          },
          ({ conditions }) => {
            if (!conditions?.motion) return;
            const desktop = conditions.desktop;
            const pinnedJourney = desktop && conditions.tall;
            const reveals: {
              element: Element;
              animation: gsap.core.Animation;
            }[] = [];
            const trackReveal = (
              element: Element,
              animation: gsap.core.Animation,
            ) => {
              reveals.push({ element, animation });
              return animation;
            };
            const elements = <T extends Element = HTMLElement>(
              selector: string,
            ) => gsap.utils.toArray<T>(selector);
            const entrance = (
              element: Element,
              animation: gsap.TweenVars,
              delay = 0,
            ) =>
              trackReveal(
                element,
                gsap.from(element, {
                  duration: 1,
                  ease: "power3.out",
                  delay,
                  ...animation,
                  clearProps: "transform,opacity,visibility,clipPath",
                  scrollTrigger: {
                    trigger: element,
                    start: "top 91%",
                    toggleActions: "play none none none",
                  },
                }),
              );

            // The CSS loader has its own dismissal, independent of GSAP or image loading.
            const hero = gsap.timeline({
              delay: window.scrollY < 100 ? 1.08 : 0,
            });
            hero
              .from(".hero-copy h1", {
                y: 48,
                clipPath: "inset(100% 0 0 0)",
                duration: 1.1,
                ease: "power4.out",
                clearProps: "all",
              })
              .from(
                ".hero-copy > .eyebrow",
                { y: 15, opacity: 0, duration: 0.65, clearProps: "all" },
                0,
              )
              .from(
                ".hero-copy > :not(h1):not(.eyebrow)",
                {
                  y: 24,
                  opacity: 0,
                  stagger: 0.11,
                  duration: 0.85,
                  clearProps: "all",
                },
                0.25,
              )
              .from(
                ".hero-image-wrap",
                {
                  clipPath: "inset(12% 0 88% 0 round 8px)",
                  duration: 1.3,
                  ease: "power4.inOut",
                  clearProps: "clipPath",
                },
                -0.12,
              )
              .from(
                ".hero-image-wrap > img",
                {
                  scale: 1.18,
                  duration: 1.6,
                  ease: "power3.out",
                  clearProps: "transform",
                },
                -0.12,
              )
              .from(
                ".hero-stamp, .hero-location",
                {
                  y: 20,
                  opacity: 0,
                  stagger: 0.12,
                  duration: 0.7,
                  clearProps: "transform,opacity",
                },
                0.7,
              );

            gsap.to(".reading-progress", {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: "main",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.2,
              },
            });

            elements<HTMLElement>(".section-heading").forEach((heading) => {
              const sequence = gsap.timeline({
                scrollTrigger: {
                  trigger: heading,
                  start: "top 88%",
                  toggleActions: "play none none none",
                },
              });
              trackReveal(heading, sequence);
              const line = heading.querySelector(".eyebrow > span");
              if (line)
                sequence.from(
                  line,
                  {
                    scaleX: 0,
                    transformOrigin: "left",
                    duration: 0.65,
                    clearProps: "transform",
                  },
                  0,
                );
              sequence
                .from(
                  heading.querySelector(".eyebrow"),
                  { y: 12, opacity: 0, duration: 0.7, clearProps: "all" },
                  0.05,
                )
                .from(
                  heading.querySelector("h2"),
                  {
                    y: 45,
                    clipPath: "inset(100% 0 0 0)",
                    duration: 1.05,
                    ease: "power4.out",
                    clearProps: "all",
                  },
                  0.1,
                );
              const description = heading.querySelector(".section-description");
              const marker = heading.querySelector(".course-heading-highlight");
              if (marker)
                sequence.from(
                  marker,
                  {
                    "--marker-progress": "0%",
                    duration: 0.85,
                    ease: "power2.inOut",
                    clearProps: "--marker-progress",
                  },
                  0.4,
                );
              if (description)
                sequence.from(
                  description,
                  { y: 18, opacity: 0, duration: 0.8, clearProps: "all" },
                  0.32,
                );
            });

            // Animate the outer shell so the card's hover transition never fights GSAP.
            // Pair the two desktop columns; each mobile card enters independently.
            elements(".course-reveal").forEach((shell, index) => {
              trackReveal(
                shell,
                gsap.from(shell, {
                  y: conditions.courseColumns ? 28 : 18,
                  opacity: 0,
                  duration: 0.85,
                  delay: conditions.courseColumns ? (index % 2) * 0.12 : 0,
                  ease: "power3.out",
                  clearProps: "transform,opacity",
                  scrollTrigger: {
                    trigger: shell,
                    start: "top 94%",
                    toggleActions: "play none none none",
                  },
                }),
              );
            });

            // Each card has its own trigger, so later rows animate when actually reached.
            elements(
              ".subject-card, .testimonial-card, .audience-item, .benefit, .journey-item, .school-item, .award-card, .gallery-item",
            ).forEach((card, index) => {
              entrance(
                card,
                {
                  y: desktop ? 65 : 34,
                  opacity: 0,
                  rotateX: desktop ? 5 : 0,
                  transformPerspective: 1000,
                },
                (index % (desktop ? 3 : 2)) * 0.075,
              );
            });
            elements(".info-item").forEach((item, index) =>
              entrance(item, { y: 22, opacity: 0 }, index * 0.1),
            );

            elements(
              ".about-visual, .founder-portrait, .location-card, .family-media, .video-frame",
            ).forEach((element) =>
              entrance(element, {
                y: 35,
                clipPath: "inset(10% 0 90% 0 round 6px)",
                duration: 1.35,
                ease: "power3.inOut",
              }),
            );
            elements(".why-quote").forEach((element) =>
              entrance(element, { y: 35, opacity: 0 }),
            );
            entrance(elements(".enquiry-card")[0], {
              y: 55,
              clipPath: "inset(0 6% 0 6% round 24px)",
              opacity: 0,
              duration: 1.2,
            });

            if (desktop) {
              gsap.fromTo(
                ".enquiry-art",
                { y: 35, rotation: -20 },
                {
                  y: -30,
                  rotation: -10,
                  ease: "none",
                  scrollTrigger: {
                    trigger: ".enquiry-card",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                  },
                },
              );
            }

            const steps = elements<HTMLElement>(".timeline-step");
            const approachSection =
              elements<HTMLElement>(".approach-section")[0];
            if (pinnedJourney && approachSection && steps.length) {
              const journey = gsap.timeline({
                scrollTrigger: {
                  trigger: ".approach-section",
                  start: "top 90px",
                  end: "+=780",
                  pin: true,
                  scrub: 0.6,
                  anticipatePin: 1,
                  invalidateOnRefresh: true,
                },
              });
              // Keep all instructions readable while the numbered markers track progress.
              gsap.set(".timeline-step h3, .timeline-step p", { y: 6 });
              journey.fromTo(
                ".timeline-progress",
                { scaleX: 0 },
                { scaleX: 1, ease: "none", duration: steps.length - 1 },
                0,
              );
              steps.forEach((step, index) => {
                journey
                  .to(
                    step.querySelector(".step-number"),
                    {
                      backgroundColor: "#173c3f",
                      color: "#faf9f5",
                      borderColor: "#173c3f",
                      duration: 0.35,
                    },
                    index * 0.85,
                  )
                  .to(
                    step.querySelectorAll("h3,p"),
                    { y: 0, duration: 0.45 },
                    index * 0.85,
                  );
              });
            } else if (steps.length) {
              const horizontal = conditions.wide;
              gsap.fromTo(
                ".timeline-progress",
                horizontal ? { scaleX: 0 } : { scaleY: 0 },
                {
                  ...(horizontal ? { scaleX: 1 } : { scaleY: 1 }),
                  ease: "none",
                  scrollTrigger: {
                    trigger: ".timeline",
                    start: "top 72%",
                    end: "bottom 50%",
                    scrub: 0.5,
                  },
                },
              );
              steps.forEach((step, index) =>
                entrance(
                  step,
                  { y: 28, opacity: 0 },
                  horizontal ? index * 0.1 : 0,
                ),
              );
            }

            // Native anchor scrolling can cross several reveal triggers in one frame.
            // Settle only the content along that route before scrolling begins, so
            // passing sections do not flash or keep animating behind the sticky header.
            const settleAnchorRoute = (event: MouseEvent) => {
              if (
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
              )
                return;
              const link =
                event.target instanceof Element
                  ? event.target.closest<HTMLAnchorElement>('a[href^="#"]')
                  : null;
              if (
                !link ||
                link.hasAttribute("download") ||
                (link.target && link.target !== "_self")
              )
                return;
              const target = document.getElementById(link.hash.slice(1));
              if (!target || !root.current?.contains(target)) return;
              const destination =
                target.getBoundingClientRect().top + window.scrollY;
              const routeStart =
                Math.min(window.scrollY, destination) - window.innerHeight;
              const routeEnd =
                Math.max(window.scrollY, destination) + window.innerHeight;
              reveals.forEach(({ element, animation }) => {
                const rect = element.getBoundingClientRect();
                const top = rect.top + window.scrollY;
                if (top <= routeEnd && top + rect.height >= routeStart) {
                  animation.totalProgress(1).pause();
                  animation.scrollTrigger?.disable(false);
                }
              });
            };
            const container = root.current;
            container?.addEventListener("click", settleAnchorRoute, true);
            return () =>
              container?.removeEventListener("click", settleAnchorRoute, true);
          },
        );
      });
    } catch {
      // Leave the complete page usable if motion setup is unavailable.
      media.revert();
      context.revert();
    }
    return () => {
      media.revert();
      context.revert();
    };
  }, [root]);
}
