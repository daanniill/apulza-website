# Apulza Website

A simple React + TypeScript marketing page powered by Vite.

## Live Preview

[View the live website](https://apulza-website.apulza.workers.dev/)

## Scripts

- `npm run dev` starts the local dev server.
- `npm run build` creates a production build in `dist`.
- `npm run preview` serves the production build locally.

## Form collection

The demo-request and contact forms can send submissions to one Formspree inbox. Each submission
includes a `form_type` field (`Demo request` or `Contact inquiry`) so the entries can be filtered.

1. Create a form at [Formspree](https://formspree.io/).
2. Copy `.env.example` to `.env.local`.
3. Replace `your-form-id` with the endpoint shown on the form's Integration page.
4. Add the same `VITE_FORMSPREE_ENDPOINT` value to the production build environment before deploying.

If the endpoint is not configured, both forms fall back to opening a prefilled email to
`apulzaai@outlook.com`.
