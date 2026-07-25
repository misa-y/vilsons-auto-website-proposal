import { ProductGallery } from "@/components/product-gallery";
import { SectionHeading } from "@/components/section-heading";

export default function ProductsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Product Examples & Industries"
        title="Spec Viewer Gallery"
        copy="Interactive cards based on the product range shown in the company profile: seating system components, tube components, brackets, chassis structures, mountings, and suspension parts."
      />
      <ProductGallery />
    </section>
  );
}
