// import React,{useEffect, useState} from 'react'
// import axios from 'axios'
// // import { Button } from 'bootstrap'
// const Playerata = (props) => {
//     const [players,setPlayers]=useState([])
//     const[loaded,setLoaded]=useState(false)

//     // const changeme=(id,status)=>{
//     //     axios.put()
//     //     props.mid===1?:props.mid?:

//     // }
//     useEffect(() => {
//         axios
//           .get("http://localhost:8000/api/players")
//           .then((res) => {
//             setPlayers(res.data);
//             setLoaded(true);
//           })
//           }
//           )

          
//   return (
//     <div>
// <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>team name</th>
//               <th> Actions</th>
//             </tr>

//           </thead>
//           <tbody>
//             {loaded &&
//               players.map((player, i) => {
//                 return (
//                   <tr key={i}>
//                     <td>{player.name}</td>
//                     <td>
//                     {props.mid===1?<>

//                     <button onClick={changeme(player._id,0)}>playing</button>
//                     <button onClick={changeme(player._id,1)}>not playing</button>
//                     <button onClick={changeme(player._id,2)}>undefined</button>
                    
//                     </>:props.mid===2?<>
                                        
//                     <button onClick={changeme(player._id,0)}>playing</button>
//                     <button onClick={changeme(player._id,1)}>not playing</button>
//                     <button onClick={changeme(player._id,2)}>undefined</button></>:<>
                                                            
//                     <button onClick={changeme(player._id,0)}>playing</button>
//                     <button onClick={changeme(player._id,1)}>not playing</button>
//                     <button onClick={changeme(player._id,2)}>undefined</button>
//                                         </>}
//                         </td>
//                   </tr>
//                 );
//               })}
//           </tbody>
//         </table>

//     </div>
//   )
// }

// export default Playerata;
