# React useEffect Missing Cleanup Function

This repository demonstrates a common error in React's `useEffect` hook: forgetting to include a cleanup function when performing asynchronous operations like fetching data.

## The Bug

The `bug.js` file contains a React component that fetches data using `fetch` within a `useEffect` hook.  The problem is, there's no cleanup function (the return value of `useEffect`). This can cause memory leaks if the component unmounts before the fetch completes, leading to unnecessary cleanup work.

## The Solution

The `bugSolution.js` file demonstrates the correct approach.  A cleanup function is added to the `useEffect` hook.  This function ensures that any pending operations are cancelled if the component unmounts, preventing memory leaks.

## How to reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `npm start`.
5. Observe the console for potential errors (in the buggy version).
