import { useSelector } from "react-redux";
import { Button, TextInput } from "flowbite-react";

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="mx-auto w-full max-w-lg p-3">
      <h1 className="my-7 text-center text-3xl font-semibold">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="h-32 w-32 self-center">
          <img
            src={currentUser.profilePicture}
            alt="user"
            className="h-full w-full cursor-pointer overflow-hidden rounded-full border-4 border-[#2c3392] object-cover shadow-md"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.username}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
        />
        <TextInput type="password" id="password" placeholder="password" />
        <Button type="submit" gradientDuoTone="purpleToBlue" outline>
          Update
        </Button>
      </form>
      <div className="mt-5 flex justify-between text-red-950">
        <span className="cursor-pointer underline underline-offset-2">
          Delete Account
        </span>
        <span className="cursor-pointer underline underline-offset-2">
          Sign Out
        </span>
      </div>
    </div>
  );
};

export default DashProfile;
