const snippets = [
  {
    snippet: `const [count, setCount] = useState(0);`,
    answer: "Creates a state variable",
    correct: 1
  },
  {
    snippet: `useEffect(() => console.log("Hello"), []);`,
    answer: "Runs after component renders",
    correct: 2
  },
  {
    snippet: `<button onClick={handleClick}>Click</button>`,
    answer: "Triggers a function on click",
    correct: 3
  },
  {
    snippet: `function App() { return <h1>Hello</h1>; }`,
    answer: "Functional component",
    correct: 4
  }
];

export default snippets;
