// components/ProjectCard.tsx
type Props = { title: string; description: string; tags: string[] };

export default function ProjectCard({ title, description, tags }: Props) {
    return (
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-indigo-400/50">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-slate-400">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                    <span key={t} className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs text-indigo-300">{t}</span>
                ))}
            </div>
        </article>
    );
}