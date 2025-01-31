```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic:  The effect runs on every render,
    // causing an infinite loop because setCount triggers a re-render.
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```