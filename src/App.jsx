import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LanguageProvider from "./context/LanguageProvider";
import Root from "./utils/Root";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Error from "./utils/Error";



function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Root />, children: [
        { index: true, element: <Home /> },
        { path: 'projects', element: <Project /> },
        { path: '*', element: <Error /> }
      ]
    }
  ])

  return (
    <div className="bg-zinc-950 text-stone-300">
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </div>
  )
}

export default App;