export default function Hero() {
  return (
    <section className="flex justify-between mt-[165px] pb-[160px]">
      <div className="flex flex-col gap-[24px]">
        <h6 className="sub-header text-white opacity-50">New Product</h6>
        <h1 className="h1 text-white w-[400px]">XX99 Mark II Headphones</h1>
        <p className="p text-white w-[350px] opacity-75">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="btn btn-primary w-[160px]">See Product</button>
      </div>
    </section>
  );
}
