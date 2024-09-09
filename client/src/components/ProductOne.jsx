import { Link } from "react-router-dom";

export default function ProductOne() {
  return (
    <div
      className="h-[560px] bg-warmOrange bg-no-repeat flex justify-center items-center gap-[140px] overflow-hidden rounded-lg"
      style={{
        backgroundImage: "url(public/pattern-circles.svg)",
        backgroundPosition: "-160px -50px",
      }}
    >
      <div className="w-[350px] self-end -mb-[10px]">
        <img src="/public/image-speaker-zx9.png" alt="Speaker" />
      </div>
      <div className="w-[350px] -mb-[30px]">
        <h1 className="h1 text-white">ZX9 SPEAKER</h1>
        <p className="p text-white mt-[25px] mb-10 opacity-75">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link className="btn btn-secondary" to="/speakers/zx9-speaker">
          See Product
        </Link>
      </div>
    </div>
  );
}
