import NavBar from "@/components/navBar";
import { Nav, NavLink } from "@/components/navBar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <Nav>
        <NavLink href="/#">WOMENS</NavLink>
        <NavLink href="/#">MENS</NavLink>
        <NavLink href="/#">KIDS</NavLink>
        <NavLink href="/#">ACCESSORIES</NavLink>
        <NavLink href="/#">ON SALE</NavLink>
      </Nav>
      <main>{children}</main>
    </>
  );
}
