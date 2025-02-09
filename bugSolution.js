```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController(); 
    const signal = controller.signal;
    setLoading(true);
    fetch('/api/data', { signal })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
          if (isMounted) {
            setCount(data.count);
            setLoading(false);
          }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <div>
      {loading ? 'Loading...' : <div>Count: {count}</div>}
    </div>
  );
}
```