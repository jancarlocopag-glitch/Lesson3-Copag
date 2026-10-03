export type Note = {
    id: number;
    title: string;
    description: string;
};

type NoteItemProps = {
    note: Note;
    onEdit: (note: Note) => void;
    onDelete: (id: number) => void;
};

export default function NoteItem({ note, onEdit, onDelete }: NoteItemProps) {
    return (
        <li className="list-none">
            <article className="flex h-full flex-col justify-between gap-4 rounded-lg border-t-8 border-yellow-400 bg-white p-4 shadow">
                <div>
                    <h3 className="text-lg font-bold text-black">{note.title}</h3>
                    <p className="mt-1 whitespace-pre-wrap break-words text-black">
                        {note.description}
                    </p>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => onEdit(note)}
                        className="rounded bg-blue-600 px-3 py-1 text-sm font-semibold text-white hover:bg-blue-700"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onDelete(note.id)}
                        className="rounded bg-red-600 px-3 py-1 text-sm font-semibold text-white hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
            </article>
        </li>
    );
}