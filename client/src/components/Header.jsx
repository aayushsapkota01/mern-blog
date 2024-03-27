import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      {/* LOGO */}
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm font-semibold dark:text-white sm:text-base"
      >
        <span className="mx-1 rounded-lg bg-gradient-to-r from-blue-700 to-blue-800 px-2 py-2 text-white">
          Aayush&apos;s
        </span>
        Blog
      </Link>

      {/* SEARCH BAR */}
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      {/* SEARCH BUTTON ICON*/}
      <Button className="h-10 w-12 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-3 md:order-2">
        {/* THEME BUTTON ICON*/}
        <Button className="hidden h-10 w-12 sm:inline" color="gray" pill>
          <FaMoon />
        </Button>

        {/* SIGNIN BUTTON  */}
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign In
          </Button>
        </Link>

        {/* HAMBURGER MENU */}
        <Navbar.Toggle />
      </div>

      {/* NAV MENU */}
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/home">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
