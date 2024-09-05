import CategoryItem from "./CategoryItem";

export default function Category() {
  return (
    <ul className="flex justify-between">
      <li>
        <CategoryItem
          image="/public/image-category-thumbnail-headphones.png"
          title="Headphones"
          to="/headphones"
        />
      </li>
      <li>
        <CategoryItem
          image="/public/image-category-thumbnail-speakers.png"
          title="Speakers"
          to="/speakers"
        />
      </li>
      <li>
        <CategoryItem
          image="/public/image-category-thumbnail-earphones.png"
          title="Earphones"
          to="/earphones"
        />
      </li>
    </ul>
  );
}
