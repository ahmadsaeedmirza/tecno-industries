import { useParams, Link } from "react-router-dom";
import { TextReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import { getCategoryBySlug, getProductsByCategory } from "@/data/products";

const ProductCategory = () => {
  const { category } = useParams<{ category: string }>();
  const cat = getCategoryBySlug(category || "");
  const prods = getProductsByCategory(category || "");

  if (!cat) return (
    <div className="section-container pt-28 pb-20 text-center">
      <h1 className="font-display text-3xl font-bold mb-4">Category Not Found</h1>
      <Link to="/products" className="text-primary hover:underline">← Back to Products</Link>
    </div>
  );

  return (
    <div className="pt-24 pb-20">
      <div className="section-container">
        <TextReveal>
          <Link to="/products" className="text-primary text-sm hover:underline mb-6 inline-block">← All Categories</Link>
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-2">{cat.name}</h1>
          <p className="text-muted-foreground text-lg mb-12">{cat.description}</p>
        </TextReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {prods.map((p) => (
            <StaggerItem key={p.id}>
              <ProductCard product={p} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {prods.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No products in this category yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCategory;
