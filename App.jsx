import { Main } from "./src/views";
import { AppetiteProvider } from "./src/context/AppetiteContext";

export default function App() {
  return (
    <AppetiteProvider>
      <Main />
    </AppetiteProvider>
  );
}
