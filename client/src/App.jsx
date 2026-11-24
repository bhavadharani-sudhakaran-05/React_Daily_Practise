// import { useState } from "react";
// function App() {
//   const [change, setChange] = useState(false);
//   return (
//     <>
//       <div
//         style={{
//           backgroundColor: change ? "black " : "white", height: "100px",
//           color: change ? "white" : "black"
//         }}>
//         <h1>Webpage </h1>
//       </div>
//       <button onClick={(() => setChange(!change))} >
//         Change Background Color
//       </button>
//     </>
//   );
// }
// export default App;



function App()
{
  const arr=["Bhava","Thaddhi","Sachin","Hari"];
   return (<>
    <ul>
      <li {arr.map((name) => (
        <span>{name}</span>
      ))}></li>
    </ul>
    </>
   );
}
export default App;