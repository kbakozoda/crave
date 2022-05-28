# Crave
Implementation of test assignment

## Installation

Run the following command to install dependencies
```bash
npm i
```

## How to run
Run the following command to run the server
```bash
npm run start
```

## Usage

You can access GraphQL on `http://localhost:4001/graphql`

A query to get all stages with their steps

```graphql
{
 getStages {
  title
  id
  isCompleted
  completedAt
  steps {
    id
    title
    isCompleted
    completedAt
    stageId
    }
  }
}
```

To attempt completing the step run the following mutation:
```graphql
mutation completeStep($input: CompleteStepInput!) {
  completeStep(input: $input) {
    id
    title
    id
    isCompleted
    completedAt
  }
}
```
As an input use:
```graphql
{
  "input":{
    "id":"stp31"
  }
}
```