import Link from "next/link";
import LogoutButton from "@/components/admin/LogoutButton";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/admin" },
  { label: "Projects", href: "/admin/projects" },
];

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 border-r border-border bg-surface p-5 hidden sm:flex sm:flex-col">
        <div className="flex items-center gap-2.5 mb-8">
          <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-heading font-medium text-sm">
            S
          </span>
          <span className="text-sm font-medium text-text-dark">Admin</span>
        </div>

        <nav className="flex-1 space-y-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-[10px] px-3 py-2 text-[13px] text-text-gray hover:bg-background hover:text-text-dark transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <LogoutButton />
      </aside>

      {/* Mobile top bar */}
      <div className="sm:hidden fixed top-0 inset-x-0 z-40 bg-surface border-b border-border px-5 h-14 flex items-center justify-between">
        <span className="text-sm font-medium text-text-dark">Admin</span>
        <LogoutButton />
      </div>

      {/* Main content */}
      <main className="flex-1 p-6 sm:p-8 pt-20 sm:pt-8">{children}</main>
    </div>
  );
}