import React, { useState , useEffect} from "react";
import "./Userdata.css";
// import Button from "@mui/material/Button";

function Userdata() {
  const [show, setShow] = useState(true);

  const [data, userData] = useState([]);



  
  
  
//   useEffect(() => {
//   let API = "https://jsonplaceholder.typicode.com/users";
//   const fetchApiData = async (url) => {
//     try{
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data);
//       userData(data);
//     }catch(error){
//       console.log(error);
//     }
//   }
//   fetchApiData(API);
// }, []);




  useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
        result.json().then((resp)=>{
            // console.warn(resp)
            userData(resp);
        })
    })
  }, []); 
  return (
    data.map((item)=><div className="userdata">
      <div className="userinfo">
        <p>Hello {item.username}</p>
        <div>
          <h5>CONTACT</h5>
          <p>{item.name}</p>
        </div>
        <div>
          <h5>CITY</h5>
          <p>{item.address.city}</p>
        </div>
        <div>
          <h5>COMPANY</h5>
          <p>{item.company.name}</p>
        </div>
        <button className="btn" onClick={() => setShow(!show)}>
          View/Hide Details
        </button>
      </div>
      {show?<div className="userdescription">
        <div>
          <h5>Description</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            voluptatem assumenda illum ut. Consectetur possimus harum voluptatum
            tempora veniam velit!
          </p>
        </div>
        <div className="list">
          <div>
            <ul>
              <li>
                <h5>Contact Person</h5>
                <p>{item.name}</p>
              </li>
              <li>
                <h5>Website</h5>
                <p>{item.website}</p>
              </li>
              <li>
                <h5>Emails</h5>
                <p>{item.email}</p>
              </li>
              <li>
                <h5>Phone</h5>
                <p>{item.phone}</p>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <h5>Address</h5>
                <p>{item.address.street},{item.address.suite}, {item.address.city},{item.address.zipcode}</p>
              </li>
              <li>
                <h5>City</h5>
                <p>{item.address.city}</p>
              </li>
              <li>
                <h5>Company</h5>
                <p>{item.company.name}</p>
              </li>
              
            </ul>
          </div>
        </div>
      </div>:null}
    </div>)
  );
}

export default Userdata;
