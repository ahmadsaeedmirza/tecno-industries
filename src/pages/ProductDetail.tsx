import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { getProductBySlug } from "@/data/products";
import { Check, ArrowLeft, ArrowRight } from "lucide-react";

const InstrumentViewer3D = lazy(() => import("@/components/InstrumentViewer3D"));

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");

  if (!product) return (
    <div className="section-container pt-28 pb-20 text-center">
      <h1 className="font-display text-3xl font-bold mb-4">Product Not Found</h1>
      <Link to="/products" className="text-primary hover:underline">← Back to Products</Link>
    </div>
  );

  return (
    <div className="pt-24 pb-20">
      <div className="section-container">
        <Link to={`/products/${product.categorySlug}`} className="text-muted-foreground text-sm hover:text-primary inline-flex items-center gap-1 mb-8 transition-colors">
          <ArrowLeft className="w-3 h-3" /> Back to {product.category}
        </Link>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl overflow-hidden bg-secondary/30 border border-border/10">
              <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
            </div>

            <div className="mt-6 glass-card rounded-2xl overflow-hidden">
              <div className="p-4 border-b border-border/10">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">Interactive 3D Preview</p>
              </div>
              <Suspense fallback={
                <div className="h-[300px] flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              }>
                <div className="h-[300px]">
                  <InstrumentViewer3D />
                </div>
              </Suspense>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-primary uppercase tracking-[0.3em] text-xs mb-3">{product.category}</p>
            <h1 className="font-display text-4xl sm:text-5xl font-black mb-6 leading-tight">{product.name}</h1>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">{product.description}</p>

            <div className="glass-card p-6 mb-6 rounded-xl">
              <h3 className="font-display font-semibold text-xs uppercase tracking-[0.2em] mb-3 text-muted-foreground">Material</h3>
              <p className="text-foreground font-display font-semibold text-lg">{product.material}</p>
            </div>

            <div className="glass-card p-6 mb-8 rounded-xl">
              <h3 className="font-display font-semibold text-xs uppercase tracking-[0.2em] mb-4 text-muted-foreground">Features</h3>
              <ul className="space-y-3">
                {product.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to={`/inquiry?product=${encodeURIComponent(product.name)}`}
              className="gradient-button px-10 py-4 text-base inline-flex items-center gap-2 group"
            >
              Send Inquiry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
