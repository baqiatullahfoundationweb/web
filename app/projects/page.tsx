import type { Metadata } from "next";
import OngoingProjects from "@/components/projects/OngoingProjects";
import CompletedProjects from "@/components/projects/CompletedProjects";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Our Projects | Baqiatullah Foundation Pakistan",
  description:
    "Explore our ongoing and completed projects in child education, daily nutrition, dorm expansions, and vocational workshops across Pakistan.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <OngoingProjects />
      <CompletedProjects />
      <CtaBanner />
    </div>
  );
}
