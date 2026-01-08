import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects, type Project } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/project/${project.slug}`}>
      <Card className="group overflow-hidden relative rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
        <Image
          src={project.coverImage.imageUrl}
          alt={project.coverImage.description}
          width={600}
          height={400}
          data-ai-hint={project.coverImage.imageHint}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <CardContent className="absolute bottom-0 left-0 p-6 w-full">
          <h3 className="text-2xl font-headline font-bold text-white">
            {project.title}
          </h3>
          <p className="text-sm text-primary-foreground/80">
            {project.category}
          </p>
          <div className="flex items-center text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>View Project</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}

export default function Home() {
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r text-white">
          beyond <span className="text-primary">design.</span>
        </h1>
        <p className="mt-4 text-2xl font-headline text-muted-foreground max-w-2xl mx-auto">
          Creating strategic visual identities and digital experiences that help
          businesses grow with clarity and confidence.
        </p>
      </section>

      <Tabs defaultValue="All" className="w-full font-headline text-2xl">
        <div className="flex justify-center mb-8">
          <ScrollArea className="w-full sm:w-auto pb-4">
            <TabsList className="grid-flow-col">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <TabsContent value="All">
          <ProjectGrid projects={projects} />
        </TabsContent>
        {categories
          .filter((c) => c !== "All")
          .map((category) => (
            <TabsContent key={category} value={category}>
              <ProjectGrid
                projects={projects.filter((p) => p.category === category)}
              />
            </TabsContent>
          ))}
      </Tabs>
    </div>
  );
}
