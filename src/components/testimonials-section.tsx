import siteData from "@/data/site-data.json";

const colorClasses = {
  blue: "bg-blue-0 text-blue-700",
  green: "bg-green-0 text-green-500",
  purple: "bg-purple-0 text-purple-500",
};

export function TestimonialsSection() {
  const testimonials = siteData.testimonials.items;

  return (
    <section className="bg-canvas px-4 py-24 sm:px-6">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-10">
        <div>
          <div>
            <p className="font-mono text-mono-label uppercase text-brand">
              {siteData.testimonials.eyebrow}
            </p>
            <h2 className="mt-4 max-w-[12ch] whitespace-pre-line text-h2">
              {siteData.testimonials.heading}
            </h2>
          </div>
        </div>

        <div className="testimonial-carousel -mx-4 overflow-hidden px-4 sm:-mx-6 sm:px-6">
          <div className="testimonial-track flex w-max gap-4 pb-4">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={`${testimonial.name}-${testimonial.company}`}
                testimonial={testimonial}
              />
            ))}
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={`${testimonial.name}-${testimonial.company}-duplicate`}
                testimonial={testimonial}
                ariaHidden
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type Testimonial = (typeof siteData.testimonials.items)[number];

function TestimonialCard({
  testimonial,
  ariaHidden,
}: {
  testimonial: Testimonial;
  ariaHidden?: boolean;
}) {
  return (
    <article
      aria-hidden={ariaHidden}
      className="w-[310px] shrink-0 rounded-[24px] border border-hairline bg-white p-6 shadow-small sm:w-[380px]"
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
      <p className="mt-6 text-body text-ink-secondary">&ldquo;{testimonial.quote}&rdquo;</p>
    </article>
  );
}
