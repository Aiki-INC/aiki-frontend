import { notFound } from "next/navigation";
import { projects } from "@/mocks/projectsData";
import ProjectDetail from "@/components/project/projectDetails";
import type { Project } from "@/types";

interface Params {
  id: string;
}

export const dynamic = "force-dynamic";

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const project: Project | undefined = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-24 min-h-screen">
      <ProjectDetail project={project} subpath="" />
    </div>
  );
}
