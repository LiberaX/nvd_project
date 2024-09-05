export default function OrderModal({ items, onCancel, deleteOrder }) {
  if (!items) return;

  return (
    <>
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-50 z-40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[540px] h-[540px] rounded-lg p-[48px] z-50 flex flex-col gap-10">
        <ul className="flex flex-col gap-2 h-[330px] overflow-scroll">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-[15px] bg-lightGray p-[24px]"
            >
              <img src={item.thumbnail} alt={item.title} className="w-[50px]" />
              <div className="flex flex-col w-full">
                <span className="font-bold text-[15px]">{item.title}</span>
                <span className="font-bold text-[14px] opacity-50">
                  ${item.price}
                </span>
              </div>
              <span className="font-bold text-[15px] opacity-50">
                x{item.amount}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex gap-3 justify-end">
          <button
            className="btn btn-secondary"
            onClick={onCancel.bind(null, -1)}
          >
            Cancel
          </button>
          <button className="btn btn-outline-secondary" onClick={deleteOrder}>
            Decline
          </button>
          <button className="btn btn-primary" onClick={deleteOrder}>
            Accept
          </button>
        </div>
      </div>
    </>
  );
}
