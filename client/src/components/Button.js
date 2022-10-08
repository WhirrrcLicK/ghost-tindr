import axios from "axios";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export default function ProfileButton() {
   const [cookies, setCookie, removeCookie] = useCookies(["user"]);
   const [ghost, setGhost] = useState([]);

   const userId = cookies.UserId;

   const getGhost = async () => {
      try {
        const response = await axios.get("http://localhost:8000/users", {
          params: { userId },
        });
        setGhost(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getGhost();
    }, []);

    console.log(ghost[0].user_id)

  const ghostProfile = ghost.slice(1).map((eachGhost) => {
    <ProfileButton  />
    })

return (
<>{ghostProfile}</>
   );
}