FROM node:22-alpine AS base
RUN apk update
RUN apk add --no-cache libc6-compat
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
#RUN addgroup -S appgroup && adduser -S appuser -G appgroup
#USER appuser

FROM base AS builder
WORKDIR /app
# Install turbo globally
RUN yarn global add turbo
# Copy the entire monorepo
COPY . .
# Prune the monorepo to only include strapi and its dependencies
RUN turbo prune cms --docker


FROM base AS develop
WORKDIR /app

# First install the dependencies (as they change less often)
COPY --from=builder /app/out/json/ .
RUN yarn install --frozen-lockfile
COPY --from=builder /app/out/full/ .

CMD yarn dev
