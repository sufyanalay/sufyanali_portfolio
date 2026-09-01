import ProjectForm from "@/components/admin/ProjectForm";

export default function NewProjectPage() {
  return (
    <div>
      <h1 className="font-heading text-xl font-medium text-text-dark mb-1">
        Add project
      </h1>
      <p className="text-[13px] text-text-gray mb-6">
        Fill in the details and upload images.
      </p>
      <ProjectForm mode="create" />
    </div>
  );
}