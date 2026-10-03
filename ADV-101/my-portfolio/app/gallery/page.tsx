import Image from "next/image";

const photos = [
    { src: "/gallery/campus.jpg", caption: "Campus life" },
    { src: "/gallery/gaming.jpg", caption: "Gaming" },
    { src: "/gallery/padagat.jpg", caption: "Weekend trip" },
    { src: "/gallery/study.jpeg", caption: "Study session" },
    { src: "/gallery/friends.jpg", caption: "With friends" },
    { src: "/gallery/workspace.jpg", caption: "My workspace" },
];

export default function Gallery() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-16">
            <h1 className="text-4xl font-bold">Gallery</h1>
            <p className="mt-3 text-slate-400">Moments and memories.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {photos.map((p) => (
                    <figure key={p.src} className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                        <Image
                            src={p.src}
                            alt={p.caption}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition duration-500 group-hover:scale-110"
                        />
                        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-sm opacity-0 transition group-hover:opacity-100">
                            {p.caption}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}