import Link from "next/link";
import { Nav, NavLink } from "@/components/navBar";
export default function AdminContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="bg-black h-[5.5rem] justify-between flex w-100">
        <div className=" flex gap-10 px-8">
          <p className=" text-red-700 text-[4rem] font-extrabold align-middle font-serif">
            KICKS
          </p>
        </div>
      </nav>
      <Nav>
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
        <NavLink href="/#">Customers</NavLink>
        <NavLink href="/admin/orders">Orders</NavLink>
      </Nav>
      <main className="admin-content">{children}</main>
    </>
  );
}
