import {Container, Typography} from "@mui/material"
import { Box } from "@mui/material"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import  Settings  from "./screens/Settings"
import Quiz from "./screens/Quiz"
import Final from "./screens/Final"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Settings/>
    },
    {
      path: '/quiz',
      element: <Quiz/>
    },
    {
      path: '/final',
      element: <Final/>
    }
  ])

  return (
    
    <>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          
          <RouterProvider router={router}/>
          
        </Box>
      </Container>
    
     
    </>
    
    
  )
}

export default App
