# FROM node:20.5.1-alpine3.18


# WORKDIR /app

# COPY . .

# RUN chown -R node:node /app && \
#     chmod -R 755 /app/public

# USER node
# RUN npm install && \
#     npm rebuild --arch=x64 --platform=linux --libc=musl sharp && \
#     npm i @formatjs/intl-localematcher &&\
#     npm i negotiator &&\
#     npx tailwindcss init -p && \
#     npm run build

# EXPOSE 3000

# CMD ["npm", "start"]


FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build
FROM node:16-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
