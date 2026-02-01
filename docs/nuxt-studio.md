# Nuxt Studio (Self-hosted)

This project uses the self-hosted Nuxt Studio module so content edits can be made directly against this repository.

## Config overview

- Nuxt Studio is enabled in `nuxt.config.ts` via the `studio` config.
- Studio is reachable at `/_studio` (default route).
- Repository settings point to `marcel-tuinstra/site-marcel` on `main`.

## Environment variables

Set these in your deployment environment (or `.env` for local testing):

```
STUDIO_GITHUB_CLIENT_ID=...
STUDIO_GITHUB_CLIENT_SECRET=...
```

Restrict access to specific users (team-only access):

```
STUDIO_GITHUB_MODERATORS=alice@example.com,bob@example.com
```

Optional for local testing:

```
STUDIO_GITHUB_REDIRECT_URL=http://localhost:3000/__nuxt_studio/auth/github
```

## GitHub OAuth setup

1) Create a GitHub OAuth App.
2) Homepage URL: `https://marcel.tuinstra.dev`
3) Authorization callback URL: `https://marcel.tuinstra.dev/__nuxt_studio/auth/github`
4) Add the client ID and secret as env vars above.

## Deployment notes

- Studio requires server-side routes for authentication, so deploy with SSR (`nuxt build`).
- Static-only deployments will not support Studio auth callbacks.

## Usage

1) Open `https://marcel.tuinstra.dev/_studio`
2) Authenticate with GitHub
3) Edit content and publish back to `main`
