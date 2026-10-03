import ProjectCard from "@/components/ProjectCard";

const projects = [
    { title: "UniCalc", description: "A calculator app with integrated unit conversion.", tags: ["Java", "Desktop"] },
    { title: "MyLibrary Figma", description: "A personal manga library.", tags: ["Figma", "HTML / CSS"] },
];

export default function Portfolio() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-16">
            <h1 className="text-4xl font-bold">My Projects</h1>
            <p className="mt-3 text-slate-400">A selection of things I&apos;ve built and designed.</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((p) => (
                    <ProjectCard key={p.title} {...p} />
                ))}
            </div>
        </section>
    );
}