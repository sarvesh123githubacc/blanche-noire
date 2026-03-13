import ProductCard from "./ProductCard";

const products = [
  {
    title: "CITRUS SYMPHONY",
    image: "/product.png",
    hoverImage: "/pattern.png",
  },
  {
    title: "AMBER ALLURE",
    image: "/product.png",
    hoverImage: "/pattern.png",
  },
  {
    title: "HAZELNUT HARMONY",
    image: "/product.png",
    hoverImage: "/pattern.png",
    bestSeller: true,
  },
  {
    title: "SUNRISE SERENADE",
    image: "/product.png",
    hoverImage: "/pattern.png",
    bestSeller: true,
  },
  {
    title: "COCOA BLISS",
    image: "/product.png",
    hoverImage: "/pattern.png",
  },
  {
    title: "NUTTY NIRVANA",
    image: "/product.png",
    hoverImage: "/pattern.png",
    bestSeller: true,
  },
];

export default function ProductGrid() {
  return (
    <section className="px-[6%] py-24">

      <h2 className="text-[64px] mb-16">TOP PICKS</h2>

      <div className="grid grid-cols-3 gap-10">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

    </section>
  );
}