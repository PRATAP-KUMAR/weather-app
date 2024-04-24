import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import Cities from "./components/Cities";

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Cities />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
