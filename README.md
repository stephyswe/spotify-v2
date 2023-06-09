README

#2 Supabase setup

##2.1 Create a new Supabase project
https://app.supabase.com/sign-in

> New project
```
Project name: next-spotify
database password: __
Region: Germany (Frankfurt)
(Create new project)
```

```
NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY to .env.local
```
##2.2 Create tables
SQL - Stripe Subscriptions template - Run
stripe.sql


Table editor - New table - songs
songs.sql

##2.3 Edit songs table
> Enable read access for all users

```
No activate RSL policies
New Policy - Get started quickly - Use this template - Review - Save Policy
```

> Enable insert access for authenticated users only

```
New Policy - Get started quickly -
Enable insert access for authenticated users only - Use this template - Review - Save Policy
```

Table Editor - Songs - validate 2 active RSL policies

##2.4 Create liked_songs (ManyToMany) table

```
Table editor - New table - liked_songs

uncheck id - primary key
change to user_id - click edit fk relation
find users table - id
on delete - cascade

create song_id - click edit fk relation
find songs table - id
on delete - cascade

check user_id to primary key
check song_id to primary key

Save
```

##2.5 Add 2 policies as in songs table + 1 policy

> Enable delete access for users based on their user ID

```
New Policy - Get started quickly -
Enable delete access for users based on their user ID - Use this template - Review - Save Policy
```

##2.6 Create Songs & images bucket

```
Storage - New bucket - name songs - public bucket - Additional configuration - MIME Types - audio/mpeg -
Save

New bucket - name images - public bucket - Save
```

##2.7 Edit policy for songs and images to full access

```
Storage - Policies (songs) - new policy - for full customization

policy name: allow all
allowed operation: (all)
Review - Save Policy

(same for images)
```

#3 Supabase Types

URL:
https://supabase.com/docs/guides/api/rest/generating-types

> generate types_db.ts

```
npm i supabase@">=1.8.1" --save-dev
https://app.supabase.com/account/tokens
WWW - Generate new token - name: spotify - copy token
npx supabase login - add token
Finished supabase login.
WWW - https://app.supabase.com/project - spotify - copy /ref_id
npx supabase gen types typescript --project-id "$PROJECT_REF" --schema public > types_db.ts
```

#4 Providers for auth and supabase
```
types.ts
Supabase-, UserProvider
useUser - subscription & user
```

#5 Authentication modal and functionality

```
SignIn validation:
user create in supabase,
user confirm email,
on confirmation close modal

---
Supabase
- Authentication - Email visible
- Table Editor - Users - User visible
- Authentication - Providers - Github - Enable - ID/Secret - Save
```

#6 Upload modal and functionality
Add a song

Supabase:
Table Editor - Song - one row inserted
Storage - song & image bucket

#7 Songs fetching and list display

#8 Favorites functionality

#9 Player functionality

```
Correct way
`const { supabaseClient } = useSessionContext();`
instead of
`const supabaseClient = useSupabaseClient();`
for authentication purposes
```

song! = if song can be undefined

PlayerContent use key to destroy element.
As the song does not support Dynamic and modular URL changes

#10 Stripe integration

Test of error.tsx
layout.tsx: throw new Error("Test")

#Make stripe account
- https://dashboard.stripe.com/test/dashboard
- copy secret key to .env.local
- copy publishable key to .env.local

#Terminal 1 - Webhooks CLI
- Download Stripe CLI
- stripe login
- stripe listen --forward-to localhost:3000/api/webhooks
- copy webhook signing secret to .env.local
- - do not close terminal

#Terminal 2 - Test webhook
- stripe trigger payment_intent.succeeded

# Create a new product
- Table Editor - Prices - should be empty
- WWW Stripe - Products - Add product
```
name: Spotify Premium
price: $9.00
recurring
monthly
Save
```

-- Terminal 1 - should indicate POST & product.created

- https://dashboard.stripe.com/test/events - check if product created

- Table Editor - Prices - should be 1 row
- Table Editor - Products - should be 1 row




---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
