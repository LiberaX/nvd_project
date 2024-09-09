import { redirect, useLoaderData } from "react-router-dom";
import { getDatabase, get, ref } from "firebase/database";
import OrdersTab from "../components/OrdersTab";
import { getAuth } from "firebase/auth";

async function getOrders() {
  const db = getDatabase();
  const ordersRef = ref(db, "orders");
  const orders = await get(ordersRef);

  return orders.val();
}

export async function loader() {
  const auth = getAuth();

  if (!auth.currentUser) return redirect("/login");

  return await getOrders();
}

export default function DashboardPage() {
  const orders = useLoaderData();

  if (!orders)
    return (
      <h6 className="h6 text-center mt-10 text-warmOrange">
        There is no orders yet
      </h6>
    );

  return (
    <div>
      <OrdersTab orders={orders} />
    </div>
  );
}
