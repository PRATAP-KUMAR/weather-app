import { CitiesContextProvider } from "./context/CitiesContext";
import Header from "./components/Header";
import Home from "./pages/Home";

export default function App() {

  return (
    <CitiesContextProvider>
      <Header />
      <Home />
    </CitiesContextProvider >
  )
}
