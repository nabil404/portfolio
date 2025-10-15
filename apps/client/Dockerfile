FROM node:22-alpine AS base

FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
# Set working directory
WORKDIR /app
RUN yarn global add turbo@^2
COPY . .

# Generate a partial monorepo with a pruned lockfile for a target workspace.
RUN turbo prune client --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app

# First install the dependencies (as they change less often)
COPY --from=builder /app/out/json/ .
RUN yarn install --frozen-lockfile

# Build the project
COPY --from=builder /app/out/full/ .
RUN yarn turbo run build

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 client
RUN adduser --system --uid 1001 client
USER client

# Automatically leverage output traces to reduce image size
# https://client.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=client:client /app/apps/client/.next/standalone ./
COPY --from=installer --chown=client:client /app/apps/client/.next/static ./apps/client/.next/static
COPY --from=installer --chown=client:client /app/apps/client/public ./apps/client/public

EXPOSE 3000

CMD node apps/client/server.js