import ProductOne from "./ProductOne";
import ProductThree from "./ProductThree";
import ProductTwo from "./ProductTwo";

export default function ProductShowcase() {
  return (
    <div className="flex flex-col gap-[50px]">
      <ProductOne />
      <ProductTwo />
      <ProductThree />
    </div>
  );
}
