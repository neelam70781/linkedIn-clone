import React from "react";
import reactjs from "../images/reactjs.png";
import profile from "../images/profile.png";

function Sidebar({ userData }) {
    // Debugging: Log the entire userData object
    console.log(userData);

    const profileImage = userData?.profile_image || profile;
    const username = userData?.username || "Username";
    const designation = userData?.designation || "Designation";

    return (
        <div style={{ backgroundColor: "white", border: "1px solid #D6D6D6", width: "210px", height: "370px", borderRadius: "15px" }}>
            <img style={{ height: "65px", width: "210px", borderTopRightRadius: "15px", borderTopLeftRadius: "15px" }} src={reactjs} />
            <div style={{ textAlign: "center" }}>
                <img src={profileImage} style={{ width: "65px", borderRadius: "40px" }} />
                <h3>{username}</h3>
            </div>
            <h4 style={{ color: "#6F6F6F" ,textAlign: "center"}}>{designation}</h4>
            <div style={{ color: "#6F6F6F", borderTop: "1px solid #D6D6D6", paddingLeft: "10px" }}>
              <Link to="/connect" style={{textDecoration:"none"}} state={{username:userData._document?.data?.value.mapValue.fields.username.stringValue,
              designation:userData._document?.data?.value.mapValue.fields.designation.stringValue,
              profile_img:userData._document?.data?.value.mapValue.fields.profile_image.stringValue}}>
                
                 <h5 style={{fontWeight:"100"}}>Connections</h5></Link>
                 
                 <Link to="/invite" style={{textDecoration:"none",color:"grey"}} state={{username:userData._document?.data?.value.mapValue.fields.username.stringValue,
                designation:userData._document?.data?.value.mapValue.fields.designation.stringValue,
                profile_img:userData._document?.data?.value.mapValue.fields.profile_image.stringValue}} >
                    
                    <h5  style={{fontWeight:"100"}}>Invitations</h5></Link>
            </div>
         </div>
    );
}

export default Sidebar;
