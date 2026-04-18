<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Codex / Claude collaboration

This repository is intentionally worked on by both Codex and Claude Code.

- `.claude/` is Claude Code workspace state with git worktrees and may be used as shared context.
- Do not delete, ignore, or rewrite `.claude/` unless the user explicitly asks.
- Treat `.claude/worktrees/*` as separate worktrees: read them for context, compare diffs when useful, but do not edit them during normal work in the main checkout.
- Before committing from the main checkout, distinguish product changes from local agent workspace state.
- If Claude branches contain relevant work, prefer comparing or cherry-picking deliberately rather than copying files blindly.
