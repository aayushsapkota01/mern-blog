import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      setErrorMessage("Please fill out all the fields !");
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
      return;
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // Check if there's any error
      if (data.success === false) {
        return setErrorMessage(data.message);
      }

      setLoading(false);

      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
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
            Sign Up
          </h1>

          {/* -------- Sign Up Form ---------- */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Username */}
            <div>
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
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
                placeholder="Password"
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
                "Sign Up"
              )}
            </Button>
            <OAuth />
          </form>

          {/* Sign In Link */}
          <div className="mt-3 flex gap-2 text-sm">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-800 underline">
              Sign In
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

export default SignUp;
