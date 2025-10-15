FROM node:22-alpine AS base
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

FROM base AS builder
# Install dependencies for Alpine
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
# Install turbo globally
RUN yarn global add turbo
# Copy the entire monorepo
COPY . .
# Prune the monorepo to only include strapi and its dependencies
RUN turbo prune cms --docker


FROM base AS production
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app

# First install the dependencies (as they change less often)
COPY --from=builder /app/out/json/ .
RUN yarn install --frozen-lockfile
COPY --from=builder /app/out/full/ .
CMD yarn build --filter=cms
WORKDIR /app/apps/cms
CMD ["yarn", "start"]
