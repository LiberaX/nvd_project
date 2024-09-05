import { Link } from "react-router-dom";

export default function ProductTwo() {
  return (
    <div
      className="h-[320px] p-[100px] rounded-lg"
      style={{ backgroundImage: "url(/public/image-speaker-zx7.jpg)" }}
    >
      <h4 className="h4 mb-[30px]">ZX7 SPEAKER</h4>
      <Link className="btn btn-outline-secondary">See Product</Link>
    </div>
  );
}
