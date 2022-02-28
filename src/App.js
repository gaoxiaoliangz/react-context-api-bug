import { createContext, useContext, useState } from "react";

const ctx = createContext(0);

const Value1 = () => {
  return (
    <ctx.Consumer>
      {(v) => {
        return <div>value1: {v}</div>;
      }}
    </ctx.Consumer>
  );
};

const Value2 = () => {
  const v = useContext(ctx);
  return <div>value2: {v}</div>;
};

const Demo = (props) => {
  const [v, setV] = useState(0);
  return (
    <ctx.Provider value={v}>
      <button
        onClick={() => {
          setV(v + 1);
        }}
      >
        add
      </button>
      {props.children}
    </ctx.Provider>
  );
};

export const App = (props) => {
  return (
    <Demo>
      <Value1 />
      <Value2 />
    </Demo>
  );
};

export default App;
