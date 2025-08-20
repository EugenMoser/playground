"use server";

import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function ask(prevState: any, formData: FormData) {
  const prompt = (formData.get("prompt") ?? "").toString().trim();
  if (!prompt) return { ok: false, answer: "", error: "Kein Prompt" };

  // Moderner Responses-Endpoint
  const res = await client.responses.create({
    model: "o3-2025-04-16", // oder ein anderes aktuelles Modell
    input: prompt,
  });

  const answer = res.output_text ?? "";
  return { ok: true, answer, error: "" };
}
