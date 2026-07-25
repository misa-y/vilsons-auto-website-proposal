import { RFQForm } from "@/components/rfq-form";
import { SectionHeading } from "@/components/section-heading";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Contact & RFQ"
        title="Manufacturing RFQ Terminal"
        copy="Submit a structured demo RFQ and adjust Estimated Annual Volume to see the production tier gauge respond in real time."
      />
      <div className="mt-10">
        <RFQForm />
      </div>
    </section>
  );
}
