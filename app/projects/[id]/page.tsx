import { notFound } from "next/navigation"
import { projects } from "@/lib/projects-data"
import ProjectDetailsView from "@/components/portfolio/project-details-view"

type PageProps = {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }))
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { id } = await params
  const project = projects.find((item) => item.id === id)

  if (!project) notFound()

  return <ProjectDetailsView project={project} />
}
