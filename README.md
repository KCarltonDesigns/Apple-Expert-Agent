# Apple Expert Agent

An AI instruction set that turns your AI tool into an expert researcher for Apple's design and developer docs. It answers from Apple's own sources (the Human Interface Guidelines, Apple Developer Documentation, Apple Newsroom and technical specifications, and Apple's GitHub), cites a source for each claim, and says "not found" instead of making up APIs or code.

**Who it's for:** designers, and anyone else, who want quick, sourced answers about designing for iPhone and other Apple platforms, including iPhone Duo and iOS 27. You don't need to write code.

## Use it in 3 steps (ChatGPT, Claude, or Gemini)

1. Open [`AGENTS.md`](AGENTS.md) in this repo and copy its text.
2. Paste it into the instructions box of one of these:
   - **ChatGPT:** Explore GPTs → Create → Configure → Instructions
   - **Claude:** Projects → New project → Project instructions
   - **Gemini:** Gems → New Gem → Instructions
3. Save it, then start asking questions.

## Or use it in Cursor

1. On this page, click **Code → Download ZIP**, then unzip it.
2. Open the folder in [Cursor](https://cursor.com).
3. Ask your question in Cursor's chat. The rule in `.cursor/rules/apple-expert.mdc` loads automatically.

## Example questions

- "What does the Human Interface Guidelines say about tab bars, and when should I use a sidebar instead?"
- "How should an app's layout adapt when iPhone Duo is opened? Cite your sources."
- "What is the search tab role in iOS 27, and what can a single app control versus the system?"
- "Is there an Apple API for [feature]? If you can't find it in Apple's docs, say so."

## Check the sources

AI can still get things wrong. Open the sources it cites and confirm the answer before you rely on it in a design or a handoff.

## License

MIT. See [LICENSE](LICENSE).

## Author

Katie Carlton, Carlton Design Co. · [LinkedIn](https://www.linkedin.com/in/katiecarltondesigns)
