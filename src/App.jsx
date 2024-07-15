import {Container, Typography} from "@mui/material"
import { Box } from "@mui/material"
import  Settings  from "./Settings"

function App() {
  

  return (
    <>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Typography variant="h3" fontWeight="bold">
            Quiz App
          </Typography>
          <Settings/>
        </Box>
      
    </Container>
    
     
    </>
    
    
  )
}

export default App
