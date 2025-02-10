import axios from "axios";

// Assume you've stored the token in localStorage or retrieved it from somewhere


export const fetchProtected = ()=>{
    const token = localStorage.getItem("token"); // Or use cookies or session storage
    console.log(token)
    // Make a request with the Authorization header
    axios.get("http://localhost:5000/protected-route", {
      headers: {
        Authorization: `Bearer ${token}`,  // Send token as Bearer token
      },
    })
    .then((response) => {
      console.log("Response Data:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error.response.data);
    });
    
}

