This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Ask-me chatbot setup

The "Ask about me" section (`/#ask-me`) embeds the résumé PDF and answers questions
about it using retrieval-augmented generation: Prisma stores résumé chunks + their
embeddings in Supabase Postgres (pgvector), and `/api/chat` retrieves the closest
chunks and streams an answer back through OpenRouter.

1. **Install dependencies** (needs network access to the npm registry you use):
   ```bash
   npm install prisma @prisma/client openai unpdf
   npm install -D tsx dotenv-cli
   ```
2. **Fill in `.env`** — `DATABASE_URL` / `DIRECT_URL` need your real Supabase DB
   password in place of `[YOUR-PASSWORD]` (Supabase dashboard → Project Settings →
   Database), and `OPENROUTER_API_KEY` needs a key from
   [openrouter.ai/keys](https://openrouter.ai/keys). The chat + embedding model
   env vars already have sensible defaults ($0 chat model, cheap embedding model).
3. **Create the database tables**:
   ```bash
   npm run db:migrate
   ```
   This also enables the `vector` extension on your Supabase database automatically.
4. **Ingest the résumé** (splits `public/aklilu_tamirat_resume.pdf` into chunks,
   embeds them, and stores them — re-run any time the PDF changes):
   ```bash
   npm run ingest
   ```
5. Run `npm run dev` and try the chat panel in the Ask-me section.

The chat API fails gracefully (503 with a friendly message) if `OPENROUTER_API_KEY`
isn't set yet, and rate-limits each visitor to 30 messages/day (tracked in Postgres)
to keep the OpenRouter bill predictable.

## Project screenshots

Drop project screenshots into `public/projects/` — see `public/projects/README.md`
for the exact filenames expected, then uncomment the matching `image:` line in
`components/projects.tsx`. Projects without a screenshot keep the generated
abstract cover art, so the grid never shows a broken image.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
