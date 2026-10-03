"use client";

import { useState, useEffect } from "react";
import NoteItem, { Note } from "@/components/NoteItem";

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isDuplicate, setIsDuplicate] = useState(false);

  // BONUS: useEffect checks if the note already exists
  useEffect(() => {
    const t = title.trim().toLowerCase();
    const d = description.trim().toLowerCase();

    if (!t) {
      setIsDuplicate(false);
      return;
    }

    const exists = notes.some(
      (note) =>
        note.id !== editingId &&
        note.title.trim().toLowerCase() === t &&
        note.description.trim().toLowerCase() === d
    );

    setIsDuplicate(exists);
  }, [title, description, notes, editingId]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setEditingId(null);
  };

  // ADD and UPDATE
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || isDuplicate) return;

    if (editingId !== null) {
      // UPDATE an existing note
      setNotes(
        notes.map((note) =>
          note.id === editingId
            ? { ...note, title: title.trim(), description: description.trim() }
            : note
        )
      );
    } else {
      // ADD a new note
      const newNote: Note = {
        id: Date.now(),
        title: title.trim(),
        description: description.trim(),
      };
      setNotes([newNote, ...notes]);
    }

    resetForm();
  };

  // Load a note into the form for editing
  const handleEdit = (note: Note) => {
    setEditingId(note.id);
    setTitle(note.title);
    setDescription(note.description);
  };

  // DELETE
  const handleDelete = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
    if (editingId === id) resetForm();
  };

  return (
    <main className="min-h-screen w-full bg-slate-100 px-6 py-8 text-black lg:px-12">
      <header className="mb-8 flex items-end justify-between border-b-2 border-black pb-4">
        <h1 className="text-5xl font-extrabold tracking-tight text-black">
          Notes
        </h1>
        <p className="text-lg text-black">
          {notes.length === 1 ? "1 note" : `${notes.length} notes`}
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-[380px_1fr]">
        {/* LEFT: form */}
        <section className="md:sticky md:top-8 md:self-start">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 rounded-lg border-2 border-black bg-white p-5 shadow-[6px_6px_0_0_#000]"
          >
            <h2 className="mb-2 text-xl font-bold text-black">
              {editingId !== null ? "Edit note" : "New note"}
            </h2>

            <label htmlFor="title" className="font-semibold text-black">
              Title
            </label>
            <input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Groceries for Sunday"
              className="rounded border border-slate-300 bg-slate-50 p-2 text-black"
            />

            <label htmlFor="description" className="mt-2 font-semibold text-black">
              Description
            </label>
            <textarea
              id="description"
              rows={6}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Rice, eggs, mangoes, coffee..."
              className="rounded border border-slate-300 bg-slate-50 p-2 text-black"
            />

            {isDuplicate && (
              <p className="text-sm font-semibold text-red-600" role="alert">
                This note already exists.
              </p>
            )}

            <div className="mt-3 flex gap-3">
              <button
                type="submit"
                disabled={!title.trim() || !description.trim() || isDuplicate}
                className="rounded bg-black px-5 py-2 font-semibold text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {editingId !== null ? "Save changes" : "Add note"}
              </button>

              {editingId !== null && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded border border-black px-5 py-2 font-semibold text-black hover:bg-slate-100"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </section>

        {/* RIGHT: notes grid */}
        <section>
          {notes.length === 0 ? (
            <p className="py-16 text-center text-lg text-black">
              No notes yet. Write your first one on the left.
            </p>
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {notes.map((note) => (
                <NoteItem
                  key={note.id}
                  note={note}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}