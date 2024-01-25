# Project overview

![sesame](https://github.com/soun1005/auth_next-express-postgres/assets/79379473/4e1fcc9e-eedc-4709-8e27-1e43ffe05da7)

- This project is conducted as a technical test.
- For this project, I had to build a signup and authentication system using Next.js and Express.js. Other choices of technologies were made by me.
- The main page is the login page. Users can either log in or navigate to a page where they can sign up.
- Using the provided API, once the user is logged in, the article page appears.
- On the article page, user can logout or go to main page.
- Login and signup forms are all validated.

## Stack

![Next.js](https://img.shields.io/badge/Front-Next.js-ff69b4) ![express](https://img.shields.io/badge/Back-Express.js-69cc8d) ![postgresql](https://img.shields.io/badge/DB-postgreSQL-305e8e) ![docker](https://img.shields.io/badge/DBbuild-Docker-0db7ed) ![bcrypt](https://img.shields.io/badge/Auth-bcrypt-6c5ce7) ![JWT](https://img.shields.io/badge/Auth-JWT-fb035b) ![axios](https://img.shields.io/badge/Fetch-Axios-671ddf) ![sequelize](https://img.shields.io/badge/DBORM-sequelize-52b1e7) ![CSS Module](https://img.shields.io/badge/Style-CSSModule-ffa)

## Structure

![sesame](https://github.com/soun1005/auth_next-express-postgres/assets/79379473/37c1745f-fc30-4713-ab63-1d64da47d193)

#### Backend

| Folders     | Description                                                     |
| ----------- | --------------------------------------------------------------- |
| DB          | Database connection configuration (migrations, models, configs) |
| Controllers | Processes incoming requests and responses interacting with DB   |
| Routes      | Each routes' endpoints defined and are connected to controllers |

#### Frontend

| Folders    | Description                                        |
| ---------- | -------------------------------------------------- |
| Components | Reusable components                                |
| Hooks      | Custom hooks manage API calls for example, useAuth |

# Deployment

## 1. Requirements

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Docker (**version 4.26**)](https://www.docker.com/)

## 2. Installation

Clone the project

```bash
  git clone https://github.com/soun1005/auth_next-express-postgres
```

### 1) backend

Go to the backend directory

```bash
  cd backend
```

Install dependencies

```bash
  npm install
```

Docker compose

```bash
  docker-compose up -d
```

Apply migrations

```bash
  npx sequelize-cli db:migrate
```

Start the server

```bash
  npm run start
```

---

### 2) frontend

Go to the project directory

```bash
  (Only if your terminal is in backend) cd ..
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

if you see this message,

```bash
  Would you like to run the app on another port instead? › (Y/n)
```

    Press Y to say Yes

---

# Review of the project

## Highlights

- This project's purpose was technical test but I wanted to make this opportunity to learn something new. I had so much fun learning new technologies and apply it even though it was a small project.
- It's always exciting testing API that I made with postman. When it works, I feel gooood😆

## Difficulties

- Applying new technologies(Like postgreSQL, Docker, sequelize) that I haven't used before was quite challenging.
- At first I struggled to check what's in my DB.
