a fun and interactive web application called "Superhero Database" that allows users to explore a database of superheroes and their powers. This project is built using AWS CDK, AWS AppSync, Next.js, React, and DynamoDB.

## Getting Started

How to run:

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes/Requirements
### Front-end(Next.js)
- View a list of superheroes.
- Search for superheroes by name or powers.
- View detailed information about a superhero, including their powers and backstory.
- Add new superheroes to the database (name, powers, and backstory).
- Edit existing superhero information.
- Delete superheroes from the database.

### Back-end(AWS CDK, AWS AppSync, DynamoDB)
- Use AWS CDK to provision the necessary AWS resources, including AWS AppSync API, Amazon DynamoDB tables, and Amazon Cognito User Pool.
- Set up AWS AppSync as the GraphQL API to interact with DynamoDB.
- Create GraphQL schemas and resolvers to support the frontend functionalities.
- Implement GraphQL mutations and queries for CRUD operations on superheroes.
- Ensure that only authenticated users can perform mutations (add, edit, delete superheroes).

### Data Model(DynamoDB)
- Design a DynamoDB schema to store superhero data efficiently.
- Implement a secondary index to support efficient searching by superhero powers.
- Populate the DynamoDB tables with sample superhero data.

### Deployment(AWS CDK)
- Use AWS CDK to deploy the entire infrastructure (AppSync, DynamoDB, Cognito) as a cloud formation stack.

### Testing
- Write unit tests for your backend GraphQL resolvers using tools like Jest.
- Test the frontend components using testing libraries like React Testing Library or Enzyme.
- Ensure proper error handling and validation on both the frontend and backend.







