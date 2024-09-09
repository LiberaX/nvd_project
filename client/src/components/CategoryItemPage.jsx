import { Link } from "react-router-dom";

export default function CategoryItemPage({ item, dir }) {
  let direction = (
    <>
      <Image thumbnail={item.thumbnail} title={item.title} />
      <Details title={item.title} description={item.description} id={item.id} />
    </>
  );

  if (!dir) {
    direction = (
      <>
        <Details
          title={item.title}
          description={item.description}
          id={item.id}
        />
        <Image thumbnail={item.thumbnail} title={item.title} />
      </>
    );
  }

  return <li className="flex justify-between items-center">{direction}</li>;
}

function Image({ thumbnail, title }) {
  return (
    <div className="w-[540px] rounded-lg">
      <img src={thumbnail} alt={title} />
    </div>
  );
}

function Details({ id, title, description }) {
  return (
    <div className="w-[445px]">
      <h2 className="h2 w-[400px]">{title}</h2>
      <p className="p opacity-50 mt-[30px]">{description}</p>
      <Link to={id}>
        <button className="btn btn-primary mt-[40px]" to={id}>
          See Product
        </button>
      </Link>
    </div>
  );
}
