export default function AboutUs() {
  return (
    <div className="flex justify-between items-center">
      <div className="w-[445px]">
        <h2 className="h2">
          Bringing you the <span className="text-warmOrange">best</span> audio
          gear
        </h2>
        <p className="p opacity-50 mt-[30px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div>
        <img
          src="/public/image-best-gear.jpg"
          alt="Person with headphones"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
