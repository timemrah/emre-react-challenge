import React, { createContext, useState } from 'react';

const Context = createContext({
  data: Object,
  setData: Function,
});

export default function Provider({ children }) {
  const [data, setData] = useState(null);
  return <Context.Provider value={{ data, setData }}>{children}</Context.Provider>;
}

Provider.Context = Context;
