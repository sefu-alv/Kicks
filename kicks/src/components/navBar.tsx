"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";


export default function NavBar() {
  return (
    <nav className="bg-black h-[5.5rem] justify-between flex w-100">
      <div className=" flex gap-10 px-8">
        <p className=" text-red-700 text-[4rem] font-extrabold align-middle font-serif">
          KICKS
        </p>
        <div className="pt-2 relative m-auto text-gray-600\">
          <input
            className="border-2 border-gray-300 bg-white w-[32rem] h-[2.5rem] px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />

          <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 m-auto"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex gap-3 w-[25%] h-auto justify-end align-center px-4">
        <button className="text-white border-4 h-[3rem] w-[5rem] mt-auto mb-auto">
          <p>SIGN IN</p>
        </button>
        <button className="text-white border-4  h-[3rem] w-[5rem]  mt-auto mb-auto">
          <p>SIGN UP</p>
        </button>
        <button className="text-white border-4  h-[3rem] w-[3rem]  mt-auto mb-auto ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 m-auto"
          >
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
        </button>
        <button className="text-white border-4  h-[3rem] w-[3rem] mt-auto mb-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 m-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export function Nav ({children} : {children: ReactNode}){
  return (<nav className="w-full text-white text-xl bg-neutral-900 h-[5rem] flex justify-center items-center gap-6 ">{children}</nav>)
}
export function NavLink(props: Omit<ComponentProps<typeof Link > , "className" >) {
  const pathname = usePathname()
  return <Link {...props} />
}