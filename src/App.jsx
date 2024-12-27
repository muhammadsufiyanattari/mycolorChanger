import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

let myarr = [
  { name: "Purple", Bgcolor: " #535bf2" },
  { name: "Green", Bgcolor: " rgb(4, 147, 4)" },
  { name: "Pink", Bgcolor: " rgb(244, 80, 107)" },
  { name: "Brown", Bgcolor: " rgb(197, 146, 18)" },
  { name: "Red", Bgcolor: " red" },
  { name: "Yellow", Bgcolor: " rgb(231, 231, 12)" },
  { name: "Black", Bgcolor: " black" },
  { name: "Aqua", Bgcolor: " aqua" },
  { name: "Yellow Green", Bgcolor: " yellowgreen" },
  { name: "Dark Magenta", Bgcolor: " darkmagenta" },
];
// function MyButton({myName,myBgcolor}) {
//   return (
//     <button style={{background:myBgcolor}}>{myName}</button>
//   )
// }
function App() {
  // const [bgcolor, setBgcolor] = useState("rgba(13, 13, 13, 0.3)");

  return (
    <>
      <div
        style={{ background: "rgba(13, 13, 13, 0.2)" }}
        className="main"
      ></div>
      {myarr.map((obj) => {
        // console.log(obj);

        return (
          <button
            onClick={() => {
              // console.log('ho raha he');
              
              document.querySelector(".main").style.background = obj.Bgcolor ;
            }}
            className="mybtn"
            style={{ background: obj.Bgcolor, color: "white" }}
          >
            {obj.name}
          </button>
        );
      })}
    </>
  );
}

export default App;
