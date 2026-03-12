import SectionReveal from "@/components/SectionReveal";

const Terms = () => (
  <div className="section-container py-12 max-w-3xl">
    <SectionReveal>
      <h1 className="font-display text-4xl font-bold mb-8">Terms & Conditions</h1>
      <div className="prose prose-invert prose-sm max-w-none text-muted-foreground space-y-4">
        <p>Last updated: March 2026</p>
        <h2 className="font-display text-xl font-semibold text-foreground">Use of Website</h2>
        <p>This website is for informational purposes. Product specifications are subject to change without notice.</p>
        <h2 className="font-display text-xl font-semibold text-foreground">Intellectual Property</h2>
        <p>All content, images, and branding on this website are the property of TECNO Instruments and may not be reproduced without permission.</p>
        <h2 className="font-display text-xl font-semibold text-foreground">Limitation of Liability</h2>
        <p>TECNO Instruments shall not be liable for any indirect or consequential damages arising from the use of this website.</p>
        <h2 className="font-display text-xl font-semibold text-foreground">Governing Law</h2>
        <p>These terms are governed by the laws of Pakistan.</p>
      </div>
    </SectionReveal>
  </div>
);

export default Terms;
