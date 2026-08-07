# Deploying glycobar.ironhandscapital.com

Static Vite multi-page site. The build emits `dist/` (three HTML entries: `/`,
`/products/`, `/impact/`) and nginx serves it — there is no Node runtime in
production.

## Pieces

| File | Role |
| --- | --- |
| `Dockerfile` | node:22-alpine builds `dist/`, nginx:1.27-alpine serves it on port 80 |
| `nginx.conf` | directory-index resolution for the multi-page entries, cache headers, `/healthz` |
| `docker-compose.yml` | Traefik labels, project `glycobar`, external network `tandem-proxy` |
| `.gitea/workflows/build-and-deploy.yml` | rsync source to the host, build, restart |
| `.env.example` | the shape of the production `.env` |

## One-time setup

1. **DNS** — point `glycobar.ironhandscapital.com` (A/AAAA, or CNAME to the
   host) at the server running Traefik. Let's Encrypt issues on first request,
   so the record must resolve before the first deploy or the cert fails.

2. **Gitea secret** — Settings → Actions → Secrets → add `GLYCOBAR_SECRET`
   with the full contents of the production `.env`:

   ```
   DOMAIN=glycobar.ironhandscapital.com
   ```

3. **Push to `main`.** The workflow only deploys on `main` or a `v*` tag; other
   branches run nothing.

The deploy directory `/home/edwins/xyz/server/glycobar-app` is created on first
run. If it already exists with files in it, the workflow aborts and prints the
`touch .glycobar-deploy-marker` command to acknowledge and continue — same
guard as the csd pipeline.

## Verifying

```sh
# on the host
docker compose -f /home/edwins/xyz/server/glycobar-app/docker-compose.yml ps
curl -I https://glycobar.ironhandscapital.com/products/
```

The container healthcheck hits `http://127.0.0.1/healthz` every 30s; `ps` shows
`healthy` once it passes.

## Local

```sh
npm install
npm run dev      # vite dev server
npm run build    # -> dist/
npm run preview  # serve dist/ locally
```
