import { BrowserRouter } from "react-router-dom"
import { Router } from "./routes"

function App() {

  return (
    <>
      <section className="bg-gray-800 text-white min-h-screen">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
