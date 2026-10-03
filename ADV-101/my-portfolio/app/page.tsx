import Link from "next/link";

const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"];

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <p className="text-sm uppercase tracking-widest text-indigo-400">Welcome to my portfolio</p>
      <h1 className="mt-4 text-5xl font-extrabold md:text-7xl">
        Hi, I&apos;m{" "}
        <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
          Jan Carlo Copag
        </span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
        An IT student who loves building clean, modern websites and learning new technologies.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <Link href="/portfolio" className="rounded-full bg-indigo-500 px-6 py-3 font-medium text-white transition hover:bg-indigo-400">
          View Portfolio
        </Link>
        <Link href="/about" className="rounded-full border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10">
          About Me
        </Link>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-3">
        {skills.map((s) => (
          <span key={s} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}