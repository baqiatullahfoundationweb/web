import Link from "next/link";
import { ArrowLeft, Folders } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ProjectNotFound() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md mx-auto space-y-5">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20">
          <Folders className="w-7 h-7 text-primary" aria-hidden="true" />
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
          Project Not Found
        </h1>

        <p className="text-base text-gray-600 leading-relaxed">
          The project you are looking for does not exist or may have been
          moved. Browse all of our active programmes below.
        </p>

        <div className="pt-2">
          <Button href="/eng/projects" variant="teal" size="lg">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Projects</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
