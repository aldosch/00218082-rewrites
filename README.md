# 00218082-rewrites

Rewriting a legacy v12 app to include pages from a new v14 app

## Example:

- https://00218082-legacy.vercel.app/
- https://00218082-new.vercel.app/

## Set up local

Ensure that the `NEW_APP_URL` environment variable is added

- Locally: Add `.env.local` in the `legacy` app root directory and set it to `http://localhost:3001`
- Deployed: Set `NEW_APP_URL` to the URL of the `new` deployment

## Run

**Legacy**

```
cd legacy && pnpm build && pnpm start
```

**New**

```
cd new && pnpm build && pnpm start -p 3001
```

## Deploy

```
vercel --production
```
