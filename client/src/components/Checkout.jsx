import { useState } from "react";
import Input from "./ui/Input";
import InputRadio from "./ui/InputRadio";
import { useFormik } from "formik";
import { object, string, date } from "yup";
import { useCart } from "../context/CartContext";
import { getDatabase, ref, push, set } from "firebase/database";

export default function Checkout() {
  const [payment, setPayment] = useState("e-money");
  const { cart, handleOrderComplete, getTotal } = useCart();
  const db = getDatabase();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      payment: payment,
      cardNumber: "",
      expireDate: "",
      cvv: "",
    },
    onSubmit: (customer) => {
      handleOrderComplete();

      const newOrder = push(ref(db, "orders"));

      set(newOrder, {
        items: cart,
        customer,
        total: getTotal(),
        payment: payment === "e-money",
      });
    },
    validationSchema: object({
      name: string().required("Name is required"),
      email: string().required("Email is required").email("Invalid Email"),
      phoneNumber: string().required("Phone Number is required"),
      address: string().required("Address is required"),
      zipCode: string().required("ZIP Code is required"),
      city: string().required("City is required"),
      country: string().required("Country is required"),
      cardNumber: string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(16, "Must be exactly 16 digits")
        .max(16, "Must be exactly 16 digits"),
      expireDate: date(),
      cvv: string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(3, "Must be exactly 3 digits")
        .max(3, "Must be exactly 3 digits"),
    }),
  });

  return (
    <div className="w-[730px] p-[48px] bg-white rounded-lg">
      <h3 className="h3">Checkout</h3>
      <form className="mt-10" onSubmit={formik.handleSubmit} id="checkout-form">
        <h6 className="sub-title text-warmOrange">Billing details</h6>
        <div className="mt-4 flex justify-between flex-wrap gap-y-6">
          <Input
            id="name"
            label="Name"
            placeholder="Alexei Ward"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            errorMessage={formik.touched.name && formik.errors.name}
            onBlur={formik.handleBlur}
          />
          <Input
            id="email"
            label="Email"
            inputType="email"
            placeholder="alexei@mail.com"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            errorMessage={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
          />
          <Input
            id="phoneN  umber"
            label="Phone Number"
            placeholder="+1 202-555-0136"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            errorMessage={
              formik.touched.phoneNumber && formik.errors.phoneNumber
            }
            onBlur={formik.handleBlur}
          />
        </div>
        <h6 className="sub-title text-warmOrange mt-10">Shopping Info</h6>
        <div className="mt-4 flex justify-between flex-wrap gap-y-6">
          <Input
            id="address"
            label="Address"
            placeholder="1137 Williams Avenue"
            width="730px"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            errorMessage={formik.touched.address && formik.errors.address}
            onBlur={formik.handleBlur}
          />
          <Input
            id="zip"
            label="ZIP Code"
            placeholder="10001"
            name="zipCode"
            value={formik.values.zipCode}
            onChange={formik.handleChange}
            errorMessage={formik.touched.zipCode && formik.errors.zipCode}
            onBlur={formik.handleBlur}
          />
          <Input
            id="city"
            label="City"
            placeholder="New York"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            errorMessage={formik.touched.city && formik.errors.city}
            onBlur={formik.handleBlur}
          />
          <Input
            id="country"
            label="Country"
            placeholder="United States"
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            errorMessage={formik.touched.country && formik.errors.country}
            onBlur={formik.handleBlur}
          />
        </div>
        <h6 className="sub-title text-warmOrange mt-10">Shopping Info</h6>
        <div className="flex justify-between">
          <label className="font-bold text-[12px] mt-[15px]">
            Payment Method
          </label>
          <div className="flex flex-col gap-[15px] w-[310px]">
            <InputRadio
              value={payment}
              setValue={setPayment}
              name="payment"
              id="e-money"
              defaultValue="e-money"
            >
              e-Money
            </InputRadio>
            <InputRadio
              value={payment}
              setValue={setPayment}
              name="payment"
              id="cash"
              defaultValue="cash"
            >
              Cash on Delivery
            </InputRadio>
          </div>
        </div>
        {payment === "e-money" ? (
          <div className="mt-4 flex justify-between flex-wrap gap-y-6">
            <Input
              id="number"
              label="Card Number"
              placeholder="1234 5678 9876 4321"
              name="cardNumber"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              errorMessage={
                formik.touched.cardNumber && formik.errors.cardNumber
              }
              onBlur={formik.handleBlur}
            />
            <Input
              id="expire"
              label="Expire"
              placeholder="01/24"
              name="expireDate"
              value={formik.values.expireDate}
              onChange={formik.handleChange}
              errorMessage={
                formik.touched.expireDate && formik.errors.expireDate
              }
              onBlur={formik.handleBlur}
            />
            <Input
              id="cvv"
              label="CVV"
              placeholder="123"
              name="cvv"
              value={formik.values.cvv}
              onChange={formik.handleChange}
              errorMessage={formik.touched.cvv && formik.errors.cvv}
              onBlur={formik.handleBlur}
            />
          </div>
        ) : (
          <div className="flex gap-8 items-center mt-[30px]">
            <img
              src="/public/icon-cash-on-delivery.svg"
              alt="Icon cash on delivery"
              className="h-[48px]"
            />
            <p className="p opacity-50">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
