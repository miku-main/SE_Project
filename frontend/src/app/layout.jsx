import React from 'react';
import '../../src/index.css';
import {Box, Container} from "@mui/material"
import Navigator from '../components/global/navigator';


const Layout = ({children}) => {

  const navigatorContainerStyle = {
    position:"fixed",
    bottom:"5%",
  }
  
  const layoutStyle = {
    backgroundColor:"#D9D9D9",
    height:"100vh"
  }

  const innerLayoutStyle = {
    display:"flex",
    justifyContent:"center"
  }

  return (
    <html>
      <body>
        <Container disableGutters={true} maxWidth={"xl"}>
          <Box sx={layoutStyle}>
            <Box sx={innerLayoutStyle}>
              <Box>
                {children}
              </Box>
              <Box sx={navigatorContainerStyle}>
                <Navigator/>
              </Box>
            </Box>
          </Box>
        </Container>
      </body>
    </html>
  )
}

export default Layout;
