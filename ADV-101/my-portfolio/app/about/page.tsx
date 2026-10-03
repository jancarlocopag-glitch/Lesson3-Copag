import Image from "next/image";

const skills = ["JavaScript", "React", "Next.js", "Tailwind CSS", "Java", "Figma"];

export default function About() {
    return (
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-white/10">
                <Image src="/profile.jpg" alt="Your Name" fill sizes="400px" className="object-cover" />
            </div>

            <div>
                <h1 className="text-4xl font-bold">About Me</h1>
                <p className="mt-4 text-slate-400">
                    I&apos;m an IT student based in Davao City, Philippines. I enjoy turning ideas into
                    working websites and apps, and I&apos;m always learning something new.
                </p>

                <h2 className="mt-8 text-xl font-semibold">Education</h2>
                <p className="mt-2 text-slate-400">BS Information Technology, Holy Cross of Davao College (2 to present)</p>

                <h2 className="mt-8 text-xl font-semibold">Skills</h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                    {skills.map((s) => (
                        <li key={s} className="rounded-full bg-indigo-500/20 px-3 py-1 text-sm text-indigo-300">
                            {s}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}