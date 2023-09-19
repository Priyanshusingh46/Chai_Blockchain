import { useState,useEffect } from "react";
import "./Memos.css"
const Memos=({state})=>{
    const [memos,setMemos]=useState([]);
    const {contract}=state;
    useEffect(()=>{
        const memosMessage = async()=>{
          console.log("1st");
          console.log("okkk", contract);
          try {
            console.log("memos11111:");
            const memos1 = await contract.getMemos();
            // Handle the result from the getmomos() function
            console.log("memos1:", memos1);
            setMemos(memos1)
          } catch (error) {
            // Handle the error if the Promise is rejected
            console.error("An error occurred:", error);
          }
          console.log("2nd");
          
          console.log("memos",memos)
        }
        contract && memosMessage()
    },[contract])
    return (
        <div className="container-fluid">
          <h3 style={{ textAlign: "center", marginTop: "20px" }}>Messages</h3>           
                <table>
                <tbody >
          {memos.map((memo) => {
            return (
                    <tr >
                      <td 
                        style={{
                          backgroundColor: "dodgerblue",
                          border: "1px solid white",
                          borderCollapse: "collapse",
                          padding: "7px",
                          width: "100px",
                          color:"white",
                         
                        }}
                      >
                        {memo.name}
                      </td>
                      <td 
                        style={{
                          backgroundColor: "dodgerblue",
                          border: "1px solid white",
                          borderCollapse: "collapse",
                          padding: "7px",
                          width: "800px",
                          color:"white"
                        }}
                      >
                        {new Date(memo.timestamp * 1000).toLocaleString()}
                      </td>
                      <td  
                        style={{
                          backgroundColor: "dodgerblue",
                          border: "1px solid white",
                          borderCollapse: "collapse",
                          padding: "7px",
                          width: "300px",
                          color:"white"
                        }}
                      >
                        {memo.message}
                      </td>
                      <td  className="container-fluid"
                        style={{
                          backgroundColor: "dodgerblue",
                          border: "1px solid white",
                          borderCollapse: "collapse",
                          padding: "7px",
                          width: "400px",
                          color:"white"
                        }}
                      >
                        {memo.from}
                      </td>
                    </tr>
             
            );
          })}
               </tbody>
                </table>
        </div>
      );
}
export default Memos;