import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice.js";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [loading, setLoading] = useState(false);
  const { loading, error: errorMessage } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      dispatch(signInFailure("Please fill out all the fields !"));
      setTimeout(() => {
        dispatch(signInFailure(null));
      }, 2000);
      return;
    }

    try {
      dispatch(signInStart());

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // Check if there's any error
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="mt-20 min-h-screen">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 p-3 md:flex-row md:items-center">
        {/* ---------- Left ----------- */}
        <div className="flex-1">
          <Link to="/" className="text-4xl font-bold  dark:text-white ">
            <span className="mx-1 rounded-lg bg-gradient-to-r from-blue-700 to-blue-800 px-2 py-2 text-white">
              Aayush&apos;s
            </span>
            Blog
          </Link>
          <p className="mt-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            dolores sint aspernatur expedita sequi. Voluptatibus dicta et hic
            aspernatur maxime recusandae architecto? Minus, necessitatibus.
          </p>
        </div>

        {/* -------- Right ---------- */}
        <div className="flex-1">
          <h1 className="font-base mb-10 hidden text-center text-5xl md:block">
            Sign In
          </h1>

          {/* -------- Sign In Form ---------- */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
              />
            </div>
            {/* Password */}
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              className="bg-gradient-to-r from-blue-700 to-blue-800"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          {/* Sign In Link */}
          <div className="mt-3 flex gap-2 text-sm">
            <span>Don&apos;s have an account?</span>
            <Link to="/sign-up" className="text-blue-800 underline">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5 self-center" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
