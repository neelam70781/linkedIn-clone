import { Grid } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import Middle from "./Middle";
import Rightbar from "./Rightbar";

function Home({userData}) {
    return(
        <div style={{backgroundColor:"#F6F7F3",height:"100vh",padding:"20px"} }>
            <Grid container spacing={4}>

                <Grid item xs={3}>
                <Sidebar userData={userData}/>
                </Grid>
                 
                <Grid item xs={6}>
                <Middle userData={userData}/>
                </Grid>

                <Grid item xs={3}>
                <Rightbar/>
                </Grid>

            </Grid>

           
        </div>
    )
}
export default Home