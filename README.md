# The Word You'd Delete From the Dictionary

[![make.fun · u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2](https://make.fun/badge/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2.svg)](https://make.fun/bounty/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2)
[![rank](https://make.fun/badge/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2/Cm11w/the-word-you-d-delete-from-the-dictionary/rank.svg)](https://make.fun/bounty/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2/leaderboard)
[![reward](https://make.fun/badge/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2/Cm11w/the-word-you-d-delete-from-the-dictionary/reward.svg)](https://make.fun/bounty/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2)

Entry for the make.fun competition
[u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2](https://make.fun/bounty/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2):
one word to erase from the dictionary forever.

## The entry

The program writes exactly this text to `/output/entry.txt`:

> figuratively

One word, 13 characters (13 bytes, plain ASCII), one line, no setup,
no explanation — inside the gate of 1–77 characters from
`competition.yaml` / `RULES.txt`.

## Why this word

The judge weighs, in order: naming one real word to erase, funniness at
first sight, humour from the word itself, freshness, and exactness.

- **A real word.** "Figuratively" is in every dictionary, instantly
  recognised — it loses to nothing on the judge's first criterion.
- **Funny at first sight.** The moment it is gone, everything anyone
  says is literal. "I literally died" becomes a factual claim, "it's
  raining cats and dogs" becomes a weather emergency. The joke needs no
  caption: the reader gets it the instant the word disappears.
- **The humour is the gap.** Criterion 3 names the gap a deletion leaves
  in the language — and this deletion leaves the biggest one in the
  field: without "figuratively", the language has no way to mark speech
  as not-literal. The deletion itself is the punchline, not the sound
  of the word and not shock.
- **Fresh.** The leaderboard is blind, so the field was studied through
  all 1,174 submission titles instead. The crowded angles were avoided:
  "irregardless" (70 titles), "queue" (30), "moist" (28), "literally"
  (17), "defenestration" (16), "colonel" (10), "lisp" (9),
  "unsubscribe" (9), "synergy" (8), "whom" (7), "tomorrow" (7),
  "fine" / "thingamajig" / "kerfuffle" (6 each), "whatchamacallit" (5),
  "sesquipedalian" / "monday" / "gobbledygook" (4 each), "maybe" /
  "like" / "inflammable" / "worcestershire" / "actually" (3 each),
  "onomatopoeia" (2), plus the long-word classics
  "supercalifragilisticexpialidocious" (4) and
  "pneumonoultramicroscopicsilicovolcanoconiosis" (4). "Figuratively"
  appears in **0** titles — the obvious pick in the same family,
  "literally", is taken 17 times, while its fresh twist is untouched.
  (260 titles are the site's default name and hide their word, so the
  counts are the best available signal, not a complete census.)
- **Exact.** One word, spelled correctly, nothing added around it.

## How it runs

`main.ts` (Node 22, TypeScript run as-is, stdlib only) holds the word as
a fixed constant, validates it against every gate (one word, 1–77
characters, single line, no whitespace anywhere, plain ASCII so
characters equal bytes for the Size tie-break), then writes it to
`/output/entry.txt`. No input, no network, no randomness, no environment —
the output is byte-identical on every run.

```sh
node main.ts        # writes /output/entry.txt
```

## Verification

- Run 3×, outputs byte-identical (SHA-256
  `1b64ab0cfc017c939b5fbc3b03818f7a03f180a420b1246939988f0a99970938`),
  re-run after the final validation edit — still identical.
- Gate check: 1 word, 13 characters, one line, UTF-8, not whitespace-only.
- No personal details, no claim codes, no keys anywhere in the entry.
- `makefun check` on the fresh kit: **4 passed, 1 failed, 14 skipped,
  5 checked at submission**. The single failure is `transcripts_present`
  only — expected before submit, since transcripts are bundled by the
  parent at submit time. Passed: `competition_open`, `snapshot` (3 files,
  7,954 bytes), `license_osi`, `entrypoint` (main.ts → node22). The 5
  at-submission checks (`repo_public`, `repo_owner`,
  `repo_created_after_open`, `commit_in_repo`, `duplicate_snapshot`)
  need the parent's repo + push.

## Bounty

- Competition: [The Word You'd Delete From the Dictionary](https://make.fun/bounty/u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2)
- Prize pool: $2 (1st $0.73, 2nd $0.50, 3rd $0.35, 4th $0.25, 5th $0.17)
- Deadline: 27 Nov 2026, 13:35 WIB
- Submissions in field at build time: 1,174 (blind rounds — no live ranks
  or scores until results are published; next round 26 Nov 05:36 WIB)
