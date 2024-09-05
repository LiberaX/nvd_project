import { Link } from "react-router-dom";

export default function ProductThree() {
  return (
    <div className="h-[320px] flex justify-between">
      <img
        src="/public/image-earphones-yx1.jpg"
        alt="Earphones"
        className="rounded-lg"
      />
      <div className="w-[540px] bg-lightGray p-[100px] rounded-lg">
        <h4 className="h4 mb-[30px]">YX1 EARPHONES</h4>
        <Link className="btn btn-outline-secondary">See Product</Link>
      </div>
    </div>
  );
}
