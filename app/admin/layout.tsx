import { Nav, NavLink } from "@/components/Nav";

// no cache on admin page
export const dynamic = "force-dynamic";

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return <>
  <Nav>
    <NavLink href="/admin">Dashboard</NavLink>
    <NavLink href="/admin/products">Products</NavLink>
    <NavLink href="/admin/users">Customers</NavLink>
    <NavLink href="/admin/orders">Sales</NavLink>
  </Nav>
  <div className="container my-6">{children}</div>
  </>
}