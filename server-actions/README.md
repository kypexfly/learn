# Get started
1. Install dependencies
```
npm install
```
2. Copy `.env.example` to `.env` file in root directory.
3. Start PostgreSQL database with docker compose.
```
docker compose up -d
```
4. Generate Prisma types and push schemas to DB.
```
npx prisma generate
npx prisma db push
```
5. Run devlopment mode
```
npm dev
```

# More info
* https://nextjs.org/docs/app/api-reference/functions/server-actions
* https://blog.greenroots.info/understanding-nextjs-server-actions-with-examples
* https://makerkit.dev/blog/tutorials/nextjs-server-actions
* https://www.youtube.com/watch?v=sdKFEo6978U by Hamed Bahram
* https://www.youtube.com/watch?v=RadgkoJrhu0 by ByteGrad