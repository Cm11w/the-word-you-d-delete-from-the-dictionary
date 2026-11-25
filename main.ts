// The Word You'd Delete From the Dictionary — make.fun entry
// u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2
//
// Writes a single word, one line, to /output/entry.txt.
// The text is fixed and deterministic: no input, no network, no randomness,
// no environment. The gate in competition.yaml / RULES.txt requires
// 1-77 UTF-8 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

// The word, exactly as submitted. One word, 13 characters, 13 bytes.
// Deleting "figuratively" collapses the literal/figurative distinction:
// without it, everything anyone says is literal — the joke lands the
// moment the word is gone, and the gap it leaves is the punchline.
const WORD = "figuratively";

function validate(text: string): void {
  if (text.length < 1 || text.length > 77) {
    throw new Error(`length ${text.length} outside 1-77 characters`);
  }
  if (text.trim().length === 0) {
    throw new Error("text is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("text must be a single line");
  }
  if (text !== text.trim() || text.includes("  ")) {
    throw new Error("text has stray leading/trailing/double whitespace");
  }
  // ASCII-only: characters equal bytes, so the Size tie-break column
  // (fewer bytes wins) reads exactly the 13 characters submitted.
  if (!/^[\x20-\x7e]*$/.test(text)) {
    throw new Error("text must be plain ASCII");
  }
  // One word, spelled correctly, nothing added around it (judge criterion 5).
  if (/\s/.test(text)) {
    throw new Error("text must be exactly one word");
  }
  // The entry must be the chosen word itself: any other string, however
  // well-formed, is not the deletion the entry claims to make.
  if (text !== "figuratively") {
    throw new Error("text must be the chosen word");
  }
}

validate(WORD);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
