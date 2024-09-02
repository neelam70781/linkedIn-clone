import React, { useState ,useEffect} from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { auth, database } from "../firebase/setup";
import { doc, getDoc } from "firebase/firestore";

function Main() {

    const [userData,setUserData]=useState([])

    const getUser = ()=>{
      setTimeout(async()=>{
          try {
            const userDocument = doc(database,'User-${auth.currentuser?.uid}',`${auth.currentUser?.uid}`)
            const documentSnapshot = await getDoc(userDocument);
            // Extract and set the data from the document
            if (documentSnapshot.exists()) {
                setUserData(documentSnapshot.data());
            } else {
                console.log("No such document!");
            }
          }catch (error) {
            console.log(error)
          }
        },1000)
      };
      useEffect(() => {
        getUser();
    }, []);
    return(
        <div>
            <Navbar userData={userData}/>
            <Home userData={userData}/>
        </div>
    )
}
export default Main