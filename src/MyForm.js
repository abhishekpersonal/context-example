import React from "react";
import { ContextConsumer } from "./MyContext";
import $ from 'jquery'

function MyForm(props) {
  return (
    <ContextConsumer>
      {context => (
        <div className="container">
            <form>
            <div className="form-group"><h5><label for="amount">Loan Amount:</label></h5><input className="form-control" type="number" id="amount" placeholder="Please Enter Loan Amount" /><label><h6>{context.loan_amount_err}</h6></label></div>
            <div className="form-group"><h5><label for="rate">Rate:</label></h5><input className="form-control" type="number" id="rate" placeholder="Please Enter Rate of Interest" /><label><h6>{context.rate_err}</h6></label></div>
            <div className="form-group"><h5><label for="year">Years:</label></h5><input className="form-control" type="number" id="year" placeholder="Please Enter Years" /><label><h6>{context.year_err}</h6></label></div>
            </form>
            <button className="btn btn-primary" onClick={() => {context.getCalculate(parseInt($('#amount').val()),parseInt($('#rate').val()),parseInt($('#year').val()))}} >Calculate</button>
            <table className="table table-bordered"><tr><td>EMI : </td><td>₹{context.emi}/month</td></tr>
            <tr><td>Loan Amount : </td><td>₹{context.loan_amount}</td></tr>
            <tr><td>Interest : </td><td>{context.interest}%</td></tr>
            <tr><td>Total Pay : </td><td>₹{context.total_pay}</td></tr></table>
        </div>
      )}
    </ContextConsumer>
  );

  
}

export default MyForm;
