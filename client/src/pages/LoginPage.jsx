import Input from "../components/ui/Input";
import { useFormik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const auth = getAuth();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (e) => {
      signInWithEmailAndPassword(auth, e.email, e.password)
        .then(() => {
          navigate("/dashboard");
        })
        .catch((error) => console.log(error));
    },
  });

  return (
    <form
      className="flex flex-col gap-5 w-[300px] mx-auto mt-52"
      onSubmit={formik.handleSubmit}
    >
      <Input
        id="email"
        label="Email"
        inputType="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <Input
        id="password"
        label="Password"
        inputType="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}
