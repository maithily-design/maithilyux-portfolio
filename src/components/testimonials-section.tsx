"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import siteData from "@/data/site-data.json";

const colorClasses = {
  blue: "bg-blue-0 text-blue-700",
  green: "bg-green-0 text-green-500",
  purple: "bg-purple-0 text-purple-500",
};

export function TestimonialsSection() {
  const testimonials = siteData.testimonials.items;
  const carouselRef = useRef<HTMLDivElement>(null);

  function scrollTestimonials(direction: "previous" | "next") {
    const carousel = carouselRef.current;

    if (!carousel) return;

    carousel.scrollBy({
      left:
        direction === "next"
          ? carousel.clientWidth * 0.88
          : carousel.clientWidth * -0.88,
      behavior: "smooth",
    });
  }

  return (
    <section className="bg-dots py-16 sm:py-24 lg:py-28">
      <div className="home-shell flex flex-col gap-8 sm:gap-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-mono-label uppercase text-brand">
              {siteData.testimonials.eyebrow}
            </p>
            <h2 className="mt-4 max-w-[12ch] whitespace-pre-line text-h2">
              {siteData.testimonials.heading}
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => scrollTestimonials("previous")}
              className="flex size-11 items-center justify-center rounded-full border border-hairline bg-white text-ink shadow-small transition hover:-translate-y-0.5 hover:text-brand"
            >
              <ArrowLeft aria-hidden className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => scrollTestimonials("next")}
              className="flex size-11 items-center justify-center rounded-full border border-hairline bg-white text-ink shadow-small transition hover:-translate-y-0.5 hover:text-brand"
            >
              <ArrowRight aria-hidden className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-bleed: spans the viewport, independent of the heading's max-width */}
      <div
        ref={carouselRef}
        className="testimonial-carousel no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 sm:mt-10 sm:px-6 lg:px-8"
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={`${testimonial.name}-${testimonial.company}`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </section>
  );
}

type Testimonial = (typeof siteData.testimonials.items)[number];

function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <article
      className="w-[min(76vw,280px)] shrink-0 snap-start rounded-[22px] border border-hairline bg-white p-5 shadow-small sm:w-[320px] sm:p-6 xl:w-[340px]"
    >
      <div className="flex items-center gap-3">
        <div
          className={
            "flex size-12 items-center justify-center rounded-full text-button " +
            colorClasses[testimonial.color as keyof typeof colorClasses]
          }
        >
          {testimonial.initials}
        </div>
        <div>
          <h3 className="text-h4">{testimonial.name}</h3>
          <p className="text-caption text-ink-secondary">{testimonial.role}</p>
        </div>
      </div>
      <p className="mt-5 text-[14px] leading-6 text-ink-secondary sm:text-body">&ldquo;{testimonial.quote}&rdquo;</p>
    </article>
  );
}
