import { Nav, NavLink } from "@/components/Nav";


export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return <>
  <Nav>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/products">Products</NavLink>
    <NavLink href="/orders">My orders</NavLink>
  </Nav>
  <div className="container my-6">{children}</div>
  </>
}
