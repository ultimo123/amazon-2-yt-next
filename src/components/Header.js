import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  console.log(items);

  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div
          className="mt-2 flex items-center flex-grow sm:flex-grow-0"
          onClick={() => router.push("/")}
        >
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search */}
        <div className=" hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="flex-grow p-2 h-full w-6 flex-shrink focus:outline-none rounded-l-md px-4"
          />
          <SearchIcon className="h-12 p-4  cursor-pointer" />
        </div>

        {/* Right */}
        <div className="text-white flex  items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={!session ? signIn : signOut} className=" link">
            <p>{session ? `Hello ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className=" link">
            <p>Return</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div
            className="relative flex items-center link"
            onClick={() => router.push("/checkout")}
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">
              {items.length}
            </span>

            <ShoppingCartIcon className="h-10" />
            <p className="hidden font-extrabold  md:text-sm md:inline-flex mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
