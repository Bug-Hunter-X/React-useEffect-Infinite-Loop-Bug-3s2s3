# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying state within the effect without proper dependency array management. The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.

## Problem

The initial `useEffect` attempts to increment the `count` state on every render.  This creates an infinite loop because each `setCount` call triggers a re-render, leading to another `setCount` call, and so on.  The browser's JavaScript engine might eventually halt execution or crash.

## Solution

The solution involves correctly utilizing the dependency array in `useEffect`. An empty dependency array `[]` indicates that the effect should only run once after the initial render. Alternatively, including `count` as a dependency means the effect will only run when the value of `count` changes (though this is unnecessary in this case.)