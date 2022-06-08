import React from 'react'
import {AppBar, Typography,Toolbar,Box,Button,Tabs,Tab} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux";
import { authActions } from "../store";


const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state=> state.isLoggedIn);
  const [value, setvalue] = useState();

  return (
    <AppBar
      position="sticky"
     sx={{background:'linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)'}}>
        <Toolbar>
            <Typography variant="h4">BlogsApp</Typography>
            { isLoggedIn &&  <Box display="flex" marginLeft={'auto'} marginRight="auto">
              <Tabs textColor="inherit" value={value} onChange={(e,val)=>setvalue(val)} >
                <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
                <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
                <Tab LinkComponent={Link} to="/blogs/add" label="Add Blogs" />
              </Tabs>
            </Box>}
            <Box display="flex" marginLeft="auto">
                {!isLoggedIn && <> <Button LinkComponent={Link} to="/auth" variant="contained" sx={{margin:1,borderRadius:10}} color="warning">LOGIN</Button>
                <Button  LinkComponent={Link} to="/auth"  variant="contained" sx={{margin:1,borderRadius:10}} color="warning">SIGNUP</Button></>}
                { isLoggedIn &&  <Button onClick={()=>dispatch(authActions.logout())} LinkComponent={Link} to="/auth"  variant="contained" sx={{margin:1,borderRadius:10}} color="warning">LOGOUT</Button>}
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header