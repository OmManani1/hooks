React Hooks Summary
React hooks allow you to manage state, lifecycle, and side effects in functional components without using class components. Here’s a brief summary of the most commonly used hooks:

1. useState() – State Management
Used for managing local state in a component.
Example:
const [count, setCount] = useState(0);
setCount(count + 1);

2. useEffect() – Side Effects & Lifecycle Management
Executes code after render (e.g., data fetching, subscriptions).
Can run on mount, update, or unmount.
Example:
useEffect(() => {
  console.log("Component Mounted!");
  return () => console.log("Cleanup on Unmount");
}, []);

3. useContext() – Global State Sharing
Accesses values from a React Context without passing props manually.
Example:
const theme = useContext(ThemeContext);

4. useReducer() – Complex State Management
Alternative to useState, useful for managing state with actions.
Example:
const [state, dispatch] = useReducer(reducer, { count: 0 });
dispatch({ type: "increment" });

5. useRef() – Direct DOM Access & Persisting Values
Stores a reference to a DOM element or value that persists across renders.
Example:
const inputRef = useRef(null);
inputRef.current.focus();

6. useMemo() – Performance Optimization
Memoizes an expensive computation to prevent unnecessary recalculations.
Example:
const squaredValue = useMemo(() => number * number, [number]);

7. useCallback() – Memoizing Functions
Prevents functions from being recreated on each render.
Example:
const memoizedFunction = useCallback(() => console.log("Hello"), []);

8. useLayoutEffect() – DOM Synchronization
Similar to useEffect, but runs synchronously after DOM updates.
Example:
useLayoutEffect(() => {
  console.log("DOM Updated!");
});

9. useImperativeHandle() – Exposing Functions from a Component
Customizes a component’s instance when using ref.
Example:
useImperativeHandle(ref, () => ({
  focus: () => inputRef.current.focus(),
}));

10. useId() – Unique ID Generation
Generates unique IDs for elements inside the component.
Example:
const id = useId();
<label htmlFor={id}>Name:</label>
<input id={id} />

Conclusion 
useState & useReducer → Manage State
useEffect & useLayoutEffect → Handle Side Effects
useContext → Share Global State
useRef & useImperativeHandle → Access DOM
useMemo & useCallback → Optimize Performance
useId → Generate Unique Identifiers