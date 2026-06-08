# Notice Board CRUD Application

## Project Overview

A full-stack Notice Board CRUD application built as part of the Reno Platforms Web Development Internship Assignment.

Users can:

- View notices
- Add notices
- Edit notices
- Delete notices
- Mark urgent notices
- View notices sorted by priority

---

## Tech Stack

- Next.js (Pages Router)
- Prisma ORM
- MySQL (TiDB Cloud)
- Tailwind CSS
- Vercel

---

## Features

- Create Notice
- Read Notice
- Update Notice
- Delete Notice
- Responsive Design
- Urgent Notice Badge
- Category Based Notices
- Server Side Validation
- Prisma ORM Integration
- TiDB Cloud Database

---

## Project Structure

```text
pages/
components/
lib/
prisma/
public/
styles/
```

## Environment Variables

Create `.env`

```env
DATABASE_URL="your_database_url"
```

## Install Dependencies

```bash
npm install
```

## Run Project

```bash
npm run dev
```

## Prisma Commands

```bash
npx prisma generate
npx prisma migrate dev --name init
```

## Deployment

1. Push code to GitHub
2. Import repository into Vercel
3. Add DATABASE_URL
4. Deploy

## Future Improvement

- Authentication and Role Based Access

## AI Usage Statement

AI tools (ChatGPT) were used for guidance, code generation assistance, debugging support, and project documentation. All code was reviewed, tested, and modified as needed before final submission.