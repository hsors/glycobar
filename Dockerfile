# Two-stage build: compile the Vite multi-page site, then serve the emitted
# static files with nginx. Nothing from the toolchain ships in the final image —
# the runtime layer is nginx + dist/.

FROM node:22-alpine AS build

WORKDIR /app

# Copy manifests first so the dependency layer is cached across source-only
# changes. npm ci installs devDependencies too — vite and tsc live there.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build


FROM nginx:1.27-alpine AS runtime

# Replace the stock default.conf: we need directory-index resolution for the
# /products/ and /impact/ entries plus split cache headers (see nginx.conf).
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# nginx:alpine's entrypoint runs the template/envsubst scripts before exec'ing
# this, so keep it as the explicit CMD rather than relying on the inherited one.
CMD ["nginx", "-g", "daemon off;"]
