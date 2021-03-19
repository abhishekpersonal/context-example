import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class ContextProvider extends Component {
    state = {
      loan_amount:0,
      interest:0,
      total_pay:0,
      emi:0,
      loan_amount_err:"",
      rate_err:"",
      year_err:""
    };
  
    getCalculate = (amount,rate,year) => {
      let emi=((amount*(rate/12))/100)+(amount/(year*12));
      let total_pay=(emi*12*year)
      if(amount==0){
        this.setState({loan_amount_err:"Please enter amount",rate_err:"",
        year_err:""})
      }else if(rate==0){
        this.setState({loan_amount_err:"",rate_err:"Please enter valid rate",year_err:""})
      } else if(year<1 || year>21){
        this.setState({loan_amount_err:"",
        rate_err:"",year_err:"Please enter valid year"})
      }else{
        this.setState({
          loan_amount:amount,
          interest:rate,
          total_pay:total_pay,
          emi:emi,
          loan_amount_err:"",
          rate_err:"",
          year_err:""
        })
      }
    };
  
      render() {
      return (
        <Provider
          value={{ getCalculate: this.getCalculate, loan_amount: this.state.loan_amount, interest:this.state.interest, total_pay:this.state.total_pay, emi:this.state.emi, loan_amount_err:this.state.loan_amount_err,rate_err:this.state.rate_err,year_err:this.state.year_err }}
        >
          {this.props.children}
        </Provider>
      );
    }
  }
  
  export { ContextProvider, Consumer as ContextConsumer };