# Memory Protocol (Engram Rules)

This project uses **Engram** for persistent memory. The agent must strictly follow this protocol to maintain context, record progress, and recover from context resets or compactions.

## 1. Startup & Compaction Recovery
*   **Action:** Immediately when starting a new session or after a context compaction/reset, you must call `mem_context` to retrieve the most recent handoff summaries and memories.
*   **Search:** Use `mem_search` to find relevant memories when working on specific components or files (e.g. `mem_search "routing"` or `mem_search "auth"`).

## 2. Topic Upserts (topic_key)
*   For knowledge that evolves over time (e.g. architectural designs, project patterns, configuration choices, long-running feature tasks), always assign a `topic_key`.
*   **Format:** The `topic_key` must be lowercase kebab-case in the format `family/specific-description` (e.g. `architecture/auth-model`, `config/env-settings`, `pattern/naming-conventions`).
*   **Upserting:** Using a `topic_key` will update the existing observation (upsert) instead of creating duplicate observations.
*   **Key Suggestions:** If you are unsure of the appropriate key, use `mem_suggest_topic_key` first.

## 3. Mandatory Saves
You must call `mem_save` immediately after:
*   Completing a bug fix (e.g. type: `bug`, `bugfix`).
*   Making an architectural or design decision (e.g. type: `architecture`).
*   Discovering non-obvious details about the codebase (e.g. type: `discovery`).
*   Modifying environment configuration or project setup (e.g. type: `config`).
*   Establishing new patterns or conventions (e.g. type: `pattern`).

## 4. End-of-Session Summary
*   **Handoff:** Before ending your turn or finishing a major block of work, you must call `mem_session_summary` to save a handoff summary.
*   **Contents:** Provide details on the current Goal, Discoveries made, accomplishments, Next Steps, and impacted files.
