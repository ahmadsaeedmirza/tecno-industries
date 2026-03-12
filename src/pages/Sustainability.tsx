import SectionReveal from "@/components/SectionReveal";
import { Leaf, Recycle, Droplets, Sun } from "lucide-react";

const items = [
  { icon: Leaf, title: "Eco-Friendly Materials", desc: "We source sustainably and minimize waste throughout our manufacturing process." },
  { icon: Recycle, title: "Recyclable Packaging", desc: "All packaging is made from recycled and recyclable materials." },
  { icon: Droplets, title: "Water Conservation", desc: "Closed-loop water systems reduce consumption by 60% in our finishing processes." },
  { icon: Sun, title: "Solar Energy", desc: "30% of our facility is powered by rooftop solar panels, with plans to reach 100%." },
];

const Sustainability = () => (
  <div className="section-container pt-24 pb-12">
    <SectionReveal>
      <p className="text-primary uppercase tracking-widest text-sm mb-2">Our Commitment</p>
      <h1 className="font-display text-4xl font-bold mb-4">Sustainability</h1>
      <p className="text-muted-foreground max-w-2xl mb-12">
        We believe manufacturing excellence and environmental responsibility go hand in hand.
      </p>
    </SectionReveal>

    <div className="grid sm:grid-cols-2 gap-6">
      {items.map((item, i) => (
        <SectionReveal key={i} delay={i * 0.1}>
          <div className="glass-card p-8 hover-tilt">
            <item.icon className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        </SectionReveal>
      ))}
    </div>
  </div>
);

export default Sustainability;
