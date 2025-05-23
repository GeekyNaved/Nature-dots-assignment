"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {AiOutlineHome} from "react-icons/ai";
import {RiFileHistoryLine} from "react-icons/ri";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="bg-slate-950 text-slate-50">
      <div className="flex justify-center md:justify-between items-center h-20 max-w-screen-xl mx-auto px-4">
        <Link href="/">
          <h1 className="w-full text-3xl font-bold cursor-pointer">
            Air Watch
          </h1>
        </Link>
        <div className="hidden md:flex gap-6 cursor-pointer">
          <Link
            href="/"
            className={
              pathName === "/"
                ? "underline underline-offset-4 decoration-2 decoration-slate-50"
                : ""
            }
          >
            <p className="text-xl">Home</p>
          </Link>

          <Link
            href="/historicaldata"
            className={
              pathName === "/historicaldata"
                ? "underline underline-offset-4 decoration-2 decoration-slate-50"
                : ""
            }
          >
            <p className="text-xl">Historical Data</p>
          </Link>
        </div>
      </div>
      {/* Bottom navbar for MOBILE only */}
      <div className="md:hidden bg-slate-100 font-bold fixed bottom-0 grid grid-cols-2 min-w-full text-black">
        <Link
          href="/"
          className={
            pathName === "/"
              ? "text-blue-500 flex flex-col items-center px-4 py-5"
              : "flex flex-col items-center px-4 py-5"
          }
        >
          <AiOutlineHome className="text-2xl" />
          <p className="text-md">Home</p>
        </Link>
        <Link
          href="/historicaldata"
          className={
            pathName === "/historicaldata"
              ? "text-blue-500 flex flex-col items-center px-4 py-5"
              : "flex flex-col items-center px-4 py-5"
          }
        >
          <RiFileHistoryLine className="text-2xl" />
          <p className="text-md">Historical Data</p>
        </Link>
      </div>
      {/* END MOBILE NAVBAR */}
    </div>
  );
};

export default Navbar;
