import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="font-heading text-xl font-medium text-text-dark mb-1">
        Welcome back
      </h1>
      <p className="text-[13px] text-text-gray mb-8">
        Manage your portfolio content from here.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
        <Link
          href="/admin/projects"
          className="rounded-[16px] border border-border bg-surface p-5 hover:border-primary transition-colors"
        >
          <p className="text-[13px] font-medium text-text-dark">Projects</p>
          <p className="mt-1 text-[11px] text-text-gray">
            Add, edit or remove projects shown on your homepage.
          </p>
        </Link>
      </div>
    </div>
  );
}