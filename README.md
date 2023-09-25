# NestJS and Next.js Starter

This is a starter project that combines the power of NestJS for building a server-side application and Next.js for creating a client-side application. It's a perfect choice if you're looking to build a full-stack TypeScript application.


## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download](https://nodejs.org/)
- Yarn: [Download](https://yarnpkg.com/)

### Installation

Follow these steps to set up the project locally:

1. Clone the repository to your local machine:

```bash
git clone <repository_url.git>
cd task-home-test
```
2. Navigate to the server directory:
```bash
 cd task-home-test/server
 ```
 - Install the dependencies using yarn:
```bash
yarn install
```
- Create a .env file in the server directory and configure your github access token:
```bash
GITHUB_ACCESS_TOKEN="YOUR ACCESS TOKEN"
```
- Start the NestJS development server:
```bash
yarn start:dev
```

3. Navigate to the client directory:
```bash
 cd task-home-test/client
 ```
 - Install the dependencies using yarn:
```bash
yarn install
```
- Create a .env.local file in the server directory and configure the base api url:
```bash
NEXT_PUBLIC_BASE_API_URL=http://localhost:3001
```
- Start the Next.js development server:
```bash
yarn dev
```
`Your server will run on http://localhost:3001, and your client will run on http://localhost:3000.`

## Author

- [@alejandrosandi22](https://www.github.com/alejandrosandi22)