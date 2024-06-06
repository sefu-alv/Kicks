import Link from "next/link";
export default function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <html lang="en">
        <head>
          {/* Add any admin-specific meta tags or links to CSS files here */}
        </head>
        <body>
          <nav className="admin-navigation">
            <ul>
              <li><Link href={"/admin/dashboard"}>Dashboard</Link></li>
              <li><Link href={"/admin/products"}>Products</Link></li>
              <li><Link href={"/admin/content"}>Costumers</Link></li>
              <li><Link href={"/admin/content"}>Sales</Link></li>
            </ul>
          </nav>
          <main className="admin-content">
            {children}
          </main>
        </body>
      </html>
    );
  }