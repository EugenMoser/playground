"use client";

import { useActionState } from "react";

import { ask } from "./lib/actions/ask";

const initialState = { ok: false, answer: "", error: "" };

export default function Home() {
  const [state, formAction, pending] = useActionState(ask, initialState);

  return (
    <main className="mx-auto max-w-2xl p-6 space-y-4">
      <h1 className="text-2xl font-semibold">OpenAI Demo</h1>

      <form
        action={formAction}
        className="space-y-3"
      >
        <textarea
          name="prompt"
          placeholder="Frag was…"
          className="w-full h-32 p-3 rounded border"
        />
        <button
          type="submit"
          disabled={pending}
          className="rounded px-4 py-2 border"
        >
          {pending ? "Fragt…" : "Senden"}
        </button>
      </form>

      {state.error && <p className="text-red-600">{state.error}</p>}
      {state.answer && (
        <section className="p-4 rounded border text-white whitespace-pre-wrap">
          {state.answer}
        </section>
      )}
    </main>
  );
}
