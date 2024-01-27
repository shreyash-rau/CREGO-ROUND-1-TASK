

//Considering App1 file over it


// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"


import React, { useState } from 'react';

function App(){
  const [expressions, setExpressions] = useState([{ ruleType: '', operator: '', value: '', score: '' }]);

  const handleChange = (i, event) => {
    const values = [...expressions];
    values[i][event.target.name] = event.target.value;
    setExpressions(values);
  }

  const handleAdd = () => {
    const values = [...expressions];
    values.push({ ruleType: '', operator: '', value: '', score: '' });
    setExpressions(values);
  }

  const handleRemove = (i) => {
    const values = [...expressions];
    values.splice(i, 1);
    setExpressions(values);
  }

  return (
    <form className="text-center m-5">
      <div className="form-group">
        <label htmlFor="connectorType">Connector Type</label>
        <select className="form-control" name="connectorType" id="connectorType">
          <option>AND</option>
          <option>OR</option>
        </select>
      </div>
      <br/><hr/>
      {expressions.map((expression, idx) => (
        <div key={`${expression}-${idx}`} className="d-flex" >
          <div className="form-group ">
            <label htmlFor={`ruleType${idx}`}>Rule Type</label>
            <select className="form-control" name="ruleType" id={`ruleType${idx}`} onChange={e => handleChange(idx, e)}>
              <option>Age</option>
              <option>Credit Score</option>
              <option>Account Balance</option>
            </select>
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor={`operator${idx}`}>Operator</label>
            <select className="form-control" name="operator" id={`operator${idx}`} onChange={e => handleChange(idx, e)}>
            <option> less than </option>
            <option> greater than </option>
            <option> less than equal to </option>
            <option> greater than equal to </option>
            <option> equal to </option>
            </select>
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor={`value${idx}`}>Value</label>
            <input type="text" className="form-control" name="value" id={`value${idx}`} onChange={e => handleChange(idx, e)} />
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor={`score${idx}`}>Score</label>
            <input type="text" className="form-control" name="score" id={`score${idx}`} onChange={e => handleChange(idx, e)} />
          </div>
          <br/> <hr/>
          <button type="button" className="btn btn-danger" onClick={() => handleRemove(idx)}>Remove</button>
        </div>
      ))}
      <br/>
      <button type="button" className="btn btn-primary" onClick={handleAdd}>Add Expression</button>
    </form>
  );
}

export default App;
