import { createContext } from "solid-js";

const SaknotoThemeContext = createContext();

export const SaknotoThemeProvider = (props: any) => {
  return (
    <SaknotoThemeContext.Provider value={{}}>
      {props.children}
    </SaknotoThemeContext.Provider>
  );
};
