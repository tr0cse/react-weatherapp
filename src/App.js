import "./App.css";
import Options from "./components/Options";
import Weather from "./components/Weather";
import { FormProvider } from "./context/FormContext";
import { memo } from "react";

function App() {
  return (
    <FormProvider>
      <Options></Options>
      <Weather></Weather>
    </FormProvider>
  );
}

export default memo(App);
