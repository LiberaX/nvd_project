import { Link } from "react-router-dom";

export default function CategoryItem({ image, title, to }) {
  return (
    <div className="flex flex-col justify-end bg-lightGray rounded-lg text-center w-[350px] h-[205px]">
      <div className="w-[210px] mx-auto">
        <img src={image} alt={title} />
      </div>
      <div className="mb-[30px]">
        <h6 className="h6">{title}</h6>
        <Link
          to={to}
          className="flex justify-center items-center gap-3 mt-[15px]"
        >
          <span className="btn-link">Shop</span>
          <div>
            <img src="/public/icon-arrow-right.svg" alt="icon" />
          </div>
        </Link>
      </div>
    </div>
  );
}
