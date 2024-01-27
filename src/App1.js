import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


function App1() {

    const[ope, setOpe] = useState('');
    const[user, setUser] = useState("");
    const[operator, setOperator] = useState("");
    const[value, setValue] = useState('');
    const[score, setScore] = useState("");

    const[all, setAll] = useState([]);


    const submitForm = (e) =>{
        e.preventDefault();
        const newValue = {ope, user, value, score, operator}
        setAll([...all, newValue]);
        setOpe("");
        setUser("");
        setOperator("");
        setValue("");
        setScore("");
    }
    const removeExpression = (index) => {
        const newAll = [...all];
        newAll.splice(index, 1);
        setAll(newAll);
    }



  return ( <>

<div className='d-flex p-4 bg-info'>

    <form className='m-5 p-2 rounded bg-secondary' onSubmit={submitForm}>
        {/* Only for Connection type */}
        <div className="container-fluid w-50">
        <h5 className=''>Connection type</h5><br/>
        <select className='form-control' value={ope} onChange={(e) => setOpe(e.target.value)}> 
        <option>Select Operation</option><option>AND</option><option>OR</option></select>
            </div>
        <br/>
{/* Related to all user, Value, Score and Remove button  */}
        <div className='container form-control' >
            <div className='m-2 p-3 row'>
                <h5 className='text-success  m-3'>Users</h5>  <br/> &nbsp;
                <select className="col-sm-5" value={user} onChange={(e) => setUser(e.target.value)}>
                    <option>Select User Option</option>
                    <option>Age</option>
                    <option>Credit Score</option>
                    <option>Account Balance</option>
                    </select>

                <h5 className='text-success  m-3'>Select Operator</h5>  <br/>&nbsp;
                <select className="col-sm-5 " value={operator} onChange={(e) => setOperator(e.target.value)}>
                <option>Select Operator</option>
                    <option> less than </option>
                    <option> greater than </option>
                    <option> less than equal to </option>
                    <option> greater than equal to </option>
                    <option> equal to </option>
                </select>        
            
                <div className='m-4'>
                <h5 className='text-success m-3' >Value</h5> &nbsp; <br/>
                <input type='number' name='value' placeholder='Enter Value' 
                value={value} onChange={(e)=>setValue(e.target.value)}
                className='col-sm-5 p-2 input-lg' required/>
               <br/>

                <h5 className='text-success  m-3'>Score</h5>  &nbsp;<br/>
                <input type='number' name='score' placeholder='Enter Score'
                value={score} onChange={(e)=>setScore(e.target.value)} 
                className='col-sm-5 p-2 input-lg' required/>
             </div>
            </div>
       

        </div>
            <br/>  <br/>
            <button className="btn btn-primary w-50 mx-auto m-3 p-2" >Add Expression</button>
    </form>
      <hr/>
      {/* for showing the selected user data */}
    <section className='p-5 rounded'> 
        {all.map((total, index) => {
            const{ope, user, value, score, operator} = total
            return(
        <div> <hr/>
            <h2>User Data</h2><hr /> &nbsp;
            <h5>Operation : <span>{ope}</span> </h5>
            <h5>Your Operator : <span>{operator}</span></h5>
            <h5>User Selection : <span>{user}</span></h5>
            <h5>Value : <span>{value}</span></h5>
            <h5>Score : <span>{score}</span></h5>
            <button className="btn btn-danger  m-3" onClick={() => removeExpression(index)}>Remove</button>
            </div> 
            )
        })}
    </section>

</div>
 </> )
}

export default App1


// import React, { useState } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";

// function App1() {
//     const[ope, setOpe] = useState('');
//     const[user, setUser] = useState("");
//     const[operator, setOperator] = useState("");
//     const[value, setValue] = useState('');
//     const[score, setScore] = useState("");
//     const[all, setAll] = useState([]);

//     const submitForm = (e) =>{
//         e.preventDefault();
//         const newValue = {ope, user, value, score, operator}
//         setAll([...all, newValue]);
//         setOpe("");
//         setUser("");
//         setOperator("");
//         setValue("");
//         setScore("");
//     }

//     const removeExpression = (index) => {
//         const newAll = [...all];
//         newAll.splice(index, 1);
//         setAll(newAll);
//     }

//     return (
//         <>
//             <div className='d-flex p-4'>
//                 <form className='m-5 p-2 container ' onSubmit={submitForm}>
//                     <div className="container-fluid">
//                         <h5 className=''>Connection type</h5><br/>
//                         <select className='form-control' value={ope} onChange={(e) => setOpe(e.target.value)}> 
//                             <option>Select Operation</option>
//                             <option>AND</option>
//                             <option>OR</option>
//                         </select>
//                     </div>
//                     <br/>
//                     <div className='container form-control' >
//                         <div className='m-2 p-3 row'>
//                             <h5 className='text-success  m-3'>Users</h5>  <br/>  
//                             <select className="col-sm-5" value={user} onChange={(e) => setUser(e.target.value)}>
//                                 <option>Select User Option</option>
//                                 <option>Age</option>
//                                 <option>Credit Score</option>
//                                 <option>Account Balance</option>
//                             </select>
//                             <h5 className='text-success  m-3'>Select Operator</h5>  <br/> 
//                             <select className="col-sm-5  " value={operator} onChange={(e) => setOperator(e.target.value)}>
//                                 <option>Select Operator</option>
//                                 <option> less than </option>
//                                 <option> greater than </option>
//                                 <option> less than equal to </option>
//                                 <option> greater than equal to </option>
//                                 <option> equal to </option>
//                             </select>        
//                             <h5 className='text-success m-3' >Value</h5>   <br/>
//                             <input type='number' name='value' placeholder='Enter Value' 
//                             value={value} onChange={(e)=>setValue(e.target.value)}
//                             className='col-sm-5 rounded'/>
//                             <h5 className='text-success  m-3'>Score</h5>   <br/>
//                             <input type='number' name='score' placeholder='Enter Score'
//                             value={score} onChange={(e)=>setScore(e.target.value)} 
//                             className='col-sm-5 rounded'/>
//                         </div>
//                         {/* <br/>
//                         <button className="btn btn-danger  m-3" >Remove</button>
//                         <br/>  <br/> */}
//                     </div>
//                     <br/>  <br/>
//                     <button className="btn btn-primary" >Add Expression</button>
//                 </form>
//                 <hr/>
//                 <section className='bg-primary p-5 rounded'> 
//                     {all.map((total, index) => {
//                         const{ope, user, value, score, operator} = total
//                         return(
//                             <div key={index}> <hr/>
//                                 <h2>User Data</h2><hr />
//                                 <h5>Operation : <span>{ope}</span> </h5>
//                                 <h5>Your Operator : <span>{operator}</span></h5>
//                                 <h5>User Selection : <span>{user}</span></h5>
//                                 <h5>Value : <span>{value}</span></h5>
//                                 <h5>Score : <span>{score}</span></h5>
//                                 <button className="btn btn-danger  m-3" onClick={() => removeExpression(index)}>Remove</button>
//                             </div> 
//                         )
//                     })}
//                 </section>
//             </div>
//         </>
//     )
// }

// export default App1
