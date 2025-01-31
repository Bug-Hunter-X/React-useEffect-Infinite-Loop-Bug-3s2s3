```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: The effect runs only once after the initial render.
    // No infinite loop.
    console.log('Effect ran!'); //This will only run once
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```