# ArqTek Solutions website

A responsive React + Vite marketing website for ArqTek Solutions, prepared for Cloudflare Pages.

## Included
- Responsive single-page website with mobile navigation
- Services, approach, project gallery, process and FAQ sections
- Enquiry form that opens WhatsApp with a pre-filled message
- Direct WhatsApp and phone links
- Vite production build and Cloudflare Pages SPA fallback (`public/_redirects`)

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Deploy to Cloudflare Pages
1. Push this project to a GitHub repository.
2. In Cloudflare Pages, create a project and connect the repository.
3. Set **Build command** to `npm run build`.
4. Set **Build output directory** to `dist`.
5. Leave the root directory blank if `package.json` is in the repository root.
6. Deploy.

No backend or environment variables are required for this version.

## Before going live
- Replace the illustrative Unsplash imagery with ArqTek Solutions' own approved photos, architectural drawings and renders.
- Verify the exact list of services and any claims before publishing.
- Confirm phone number and WhatsApp account.
- Add the final domain once available.

## Important
The enquiry form does not store submissions. It builds a WhatsApp message and opens WhatsApp for the visitor to send manually. The displayed portfolio photos are illustrative placeholders, not verified ArqTek projects.
