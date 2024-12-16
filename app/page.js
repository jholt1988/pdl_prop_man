import Link from 'next/link';

export default function Home({ children }) {
  return (
    <div className="flex h-screen bg-primary-200">
      {/* Sidebar */}
      <aside className="w-64 bg-primary-100 p-4">
        <h2 className="text-xl font-bold mb-4">PDL Rentals Management</h2>
        <nav className="flex flex-col space-y-2">
          <Link href="/">
            <button className="btn btn-primary">Home</button>
          </Link>
          <Link href="/tenants">
            <button className="btn btn-primary">Tenants</button>
          </Link>
          <Link href="/properties">
            <button className="btn btn-primary">Properties</button>
          </Link>
          <Link href="/leases">
            <button className="btn btn-primary">Leases</button>
          </Link>
          <Link href="/repairmaint">
            <button className="btn btn-primary">Repairs/Maintaince</button>
          </Link>
          <Link href="/ledgers">
            <button className="btn btn-primary">Tenant Ledgers</button>
          </Link>
          <Link href="/expenses">
            <button className="btn btn-primary">Expenses</button>
          </Link>
          <Link href="/contractors">
            <button className="btn btn-primary">Contractors</button>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-primary-300 p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>

        {/* Footer */}
        <footer className="bg-primary-300 p-4 text-center">
          <p className="text-sm">© 2024 House of Alexander. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
