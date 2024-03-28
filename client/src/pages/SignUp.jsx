import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="mt-20 min-h-screen md:mt-40">
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
          <form className="flex flex-col gap-4">
            {/* Username */}
            <div>
              <Label value="Username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            {/* Email */}
            <div>
              <Label value="Email" />
              <TextInput type="email" placeholder="Email" id="email" />
            </div>
            {/* Password */}
            <div>
              <Label value="Password" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Button
              className="bg-gradient-to-r from-blue-700 to-blue-800"
              type="submit"
            >
              Sign Up
            </Button>
          </form>
          {/* Sign In Link */}
          <div className="mt-3 flex gap-2 text-sm">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-800 underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
