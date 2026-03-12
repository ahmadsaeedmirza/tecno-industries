import SectionReveal from "@/components/SectionReveal";

const Privacy = () => (
  <div className="section-container py-12 max-w-3xl">
    <SectionReveal>
      <h1 className="font-display text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert prose-sm max-w-none text-muted-foreground space-y-4">
        <p>Last updated: March 2026</p>
        <h2 className="font-display text-xl font-semibold text-foreground">Information We Collect</h2>
        <p>We collect information you provide directly, such as your name, email, company, and inquiry details when you submit forms on our website.</p>
        <h2 className="font-display text-xl font-semibold text-foreground">How We Use Your Information</h2>
        <p>Your information is used to respond to inquiries, process orders, and improve our services. We do not sell your personal data to third parties.</p>
        <h2 className="font-display text-xl font-semibold text-foreground">Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction.</p>
        <h2 className="font-display text-xl font-semibold text-foreground">Contact</h2>
        <p>For privacy-related inquiries, contact us at privacy@tecnoinstruments.com.</p>
      </div>
    </SectionReveal>
  </div>
);

export default Privacy;
