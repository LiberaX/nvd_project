import { useState } from "react";
import OrderModal from "./OrderModal";
import { ref, remove, getDatabase } from "firebase/database";

export default function OrdersTab({ orders }) {
  const [ordersArray, setOrdersArray] = useState(Object.values(orders));
  let ordersKeys = Object.keys(orders);
  const [index, setIndex] = useState(-1);

  function handleClick(id) {
    setIndex(id);
  }

  function deleteOrder() {
    const db = getDatabase();
    const orderRef = ref(db, `orders/${ordersKeys[index]}`);
    remove(orderRef)
      .then(() => {
        setOrdersArray((o) => o.filter((_, i) => i !== index));
        ordersKeys = ordersKeys.filter((_, i) => i !== index);
        handleClick(-1);
      })
      .catch(() => console.log("cant remove"));
  }

  return (
    <>
      {index !== -1 && (
        <OrderModal
          items={ordersArray[index].items}
          onCancel={handleClick}
          deleteOrder={deleteOrder}
        />
      )}
      <table className="w-full mt-10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Country</th>
            <th>City</th>
            <th>Zip Code</th>
            <th>Address</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-center">
          {ordersArray.map((order, i) => (
            <tr key={i}>
              <td>{order.customer.name}</td>
              <td>{order.customer.email}</td>
              <td>{order.customer.phoneNumber}</td>
              <td>{order.customer.country}</td>
              <td>{order.customer.city}</td>
              <td>{order.customer.zipCode}</td>
              <td>{order.customer.address}</td>
              <td>${order.total}</td>
              <td
                className="cursor-pointer"
                onClick={handleClick.bind(null, i)}
              >
                View Order
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
