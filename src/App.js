// import React, {
//   useState,
//   useEffect,
//   useContext,
//   useReducer,
//   useRef,
//   useMemo,
//   useCallback,
//   useLayoutEffect,
//   useImperativeHandle,
//   createContext,
//   forwardRef,
//   useId,
// } from "react";

// // 1. useContext example setup
// const ThemeContext = createContext("light");

// // 2. useReducer example setup
// const initialState = { count: 0 };
// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// // 3. useImperativeHandle example setup
// const CustomInput = forwardRef((props, ref) => {
//   const inputRef = useRef();
//   useImperativeHandle(ref, () => ({
//     focus: () => {
//       inputRef.current.focus();
//     },
//     clear: () => {
//       inputRef.current.value = "";
//     },
//   }));
//   return <input ref={inputRef} placeholder="Custom Input" />;
// });

// function App() {
//   // useState
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("");

//   // useEffect
//   useEffect(() => {
//     console.log(`Count changed to: ${count}`);
//     return () => console.log("Cleanup on count change");
//   }, [count]);

//   // useContext
//   const theme = useContext(ThemeContext);

//   // useReducer
//   const [state, dispatch] = useReducer(reducer, initialState);

//   // useRef
//   const inputRef = useRef();

//   // useMemo
//   const squaredCount = useMemo(() => {
//     console.log("Calculating squared count...");
//     return count * count;
//   }, [count]);

//   // useCallback
//   const handleButtonClick = useCallback(() => {
//     alert("Button clicked!");
//   }, []);

//   // useLayoutEffect
//   useLayoutEffect(() => {
//     console.log("useLayoutEffect: DOM updated");
//   });

//   // useId
//   const uniqueId = useId();

//   // useImperativeHandle
//   const customInputRef = useRef();

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>React Hooks Example</h1>

//       {/* useState */}
//       <div>
//         <h2>useState</h2>
//         <p>Count: {count}</p>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//         <button onClick={() => setCount(count - 1)}>Decrement</button>
//       </div>

//       {/* useEffect */}
//       <div>
//         <h2>useEffect</h2>
//         <input
//           ref={inputRef}
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter your name"
//         />
//         <p>Your name: {name}</p>
//       </div>

//       {/* useContext */}
//       <div>
//         <h2>useContext</h2>
//         <p>Theme: {theme}</p>
//       </div>

//       {/* useReducer */}
//       <div>
//         <h2>useReducer</h2>
//         <p>Count: {state.count}</p>
//         <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
//         <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
//       </div>

//       {/* useMemo */}
//       <div>
//         <h2>useMemo</h2>
//         <p>Squared Count: {squaredCount}</p>
//       </div>

//       {/* useCallback */}
//       <div>
//         <h2>useCallback</h2>
//         <button onClick={handleButtonClick}>Show Alert</button>
//       </div>

//       {/* useRef */}
//       <div>
//         <h2>useRef</h2>
//         <button onClick={() => inputRef.current.focus()}>Focus Input</button>
//       </div>

//       {/* useImperativeHandle */}
//       <div>
//         <h2>useImperativeHandle</h2>
//         <CustomInput ref={customInputRef} />
//         <button onClick={() => customInputRef.current.focus()}>Focus Custom Input</button>
//         <button onClick={() => customInputRef.current.clear()}>Clear Custom Input</button>
//       </div>

//       {/* useId */}
//       <div>
//         <h2>useId</h2>
//         <label htmlFor={uniqueId}>Label with Unique ID</label>
//         <input id={uniqueId} placeholder="Type here" />
//       </div>
//     </div>
//   );
// }

// // Wrapping App with ThemeContext Provider
// export default function AppWrapper() {
//   return (
//     <ThemeContext.Provider value="dark">
//       <App />
//     </ThemeContext.Provider>
//   );
// }
// <------------------------------------------------------------------------------------------------------------------------------------------>
import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useRef,
  useMemo,
  useCallback,
  useLayoutEffect,
  useImperativeHandle,
  createContext,
  forwardRef,
  useId,
} from "react";

// Dynamic ThemeContext
const ThemeContext = createContext();

// Reducer for managing complex state
const initialState = { count: 0, toggled: false };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return {  count: state.count - 1 };
    case "toggle":
      return {  toggled: !state.toggled };
    default:
      return state;
  }
}

// Custom Hook: Fetch Data Simulation
function useFetchData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const mockData = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
      setTimeout(() => setData(mockData), 2000); // Simulate API delay
    };
    fetchData();
  }, []);
  return data;
}

// Custom Hook: Managing input state
function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => setValue(e.target.value);
  return { value, onChange, reset: () => setValue("") };
}

// Custom Input Component
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => (inputRef.current.value = ""),
  }));
  return (
    <input
      ref={inputRef}
      {...props}
      className="border p-2 rounded w-full shadow focus:outline-none"
    />
  );
});

// Main App Component
function App() {
  // useState: Simple Counter
  const [count, setCount] = useState(0);

  // useContext: Theme Management
  const { theme, toggleTheme } = useContext(ThemeContext);

  // useReducer: State Management
  const [state, dispatch] = useReducer(reducer, initialState);

  // useRef: DOM Manipulation
  const  inputRef = useRef();

  // useMemo: Expensive Computation
  const expensiveCalculation = useMemo(() => {
    console.log("Expensive Calculation Executed");
    return count * count;
  }, [count]);

  // useCallback: Memoized Function
  const handleAlert = useCallback(() => {
    alert("React is awesome!");
  }, []);

  // useLayoutEffect: DOM Measurement
  useLayoutEffect(() => {
    console.log("useLayoutEffect: DOM Updated");
  }, []);

  // useId: Unique IDs
  const uniqueId = useId();

  // Custom Hooks
  const data = useFetchData();
  const nameInput = useInput();

  // Custom Input Ref
  const customInputRef = useRef();

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">React Hooks Example</h1>

        {/* useState */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">useState</h2>
          <p className="mb-2">Count: {count}</p>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Increment
          </button>
          <button
            onClick={() => setCount((prev) => prev - 1)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Decrement
          </button>
        </section>

        {/* useContext */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">useContext</h2>
          <p>Current Theme: {theme}</p>
          <button
            onClick={toggleTheme}
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            Toggle Theme
          </button>
        </section>

        {/* useReducer */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">useReducer</h2>
          <p>Count: {state.count}</p>
          <button
            onClick={() => dispatch({ type: "increment" })}
            className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch({ type: "decrement" })}
            className="bg-orange-500 text-white px-4 py-2 rounded"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch({ type: "toggle" })}
            className="bg-gray-700 text-white px-4 py-2 rounded ml-2"
          >
            Toggle State ({state.toggled ? "On" : "Off"})
          </button>
        </section>

        {/* useMemo */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">useMemo</h2>
          <p>Squared Count: {expensiveCalculation}</p>
        </section>

        {/* useCallback */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">useCallback</h2>
          <button
            onClick={handleAlert}
            className="bg-teal-500 text-white px-4 py-2 rounded"
          >
            Show Alert
          </button>
        </section>

        {/* useRef */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">useRef</h2>
          <input
            ref={inputRef}
            placeholder="Focus me"
            className="border p-2 rounded w-full mb-2 shadow"
          />
          <button
            onClick={() => inputRef.current.focus()}
            className="bg-indigo-500 text-white px-4 py-2 rounded"
          >
            Focus Input
          </button>
        </section>

        {/* Custom Hook */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Custom Hook</h2>
          <input
            {...nameInput}
            placeholder="Enter your name"
            className="border p-2 rounded w-full shadow"
          />
          <button
            onClick={nameInput.reset}
            className="bg-gray-500 text-white px-4 py-2 rounded mt-2"
          >
            Reset
          </button>
        </section>

        {/* Fetch Data */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">useEffect - Fetch Data</h2>
          <ul>
            {data.length > 0 ? (
              data.map((item, index) => <li key={index}>{item}</li>)
            ) : (
              <li>Loading...</li>
            )}
          </ul>
        </section>

        {/* useImperativeHandle */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">useImperativeHandle</h2>
          <CustomInput ref={customInputRef} />
          <button
            onClick={() => customInputRef.current.focus()}
            className="bg-pink-500 text-white px-4 py-2 rounded mt-2"
          >
            Focus Custom Input
          </button>
        </section>

        {/* useId */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold">useId</h2>
          <label htmlFor={uniqueId}>Unique Input</label>
          <input id={uniqueId} className="border p-2 rounded w-full shadow" />
        </section>
      </div>
    </div>
  );
}

// Theme Provider with State
function AppWrapper() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <App />
    </ThemeContext.Provider>
  );
}

export default AppWrapper;
