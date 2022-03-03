import './App.css';
import React ,{Component} from 'react';
 

const createArray = (first,last)=>{
  let arr = [];
  for(first;first<=last;first++){
    arr.push(first);
  }
  return arr;
};

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const days = createArray(1,31);
const year = createArray(1980,(new Date).getFullYear());


function CalculateAge(birthday) {
  let today = new Date(),
  dob = new Date(birthday),
  diff = today.getTime() - dob.getTime(),
  years = Math.floor(diff/31556736000),
  days_diff = Math.floor((diff%31556736000)/86400000),
  months = Math.floor(days_diff/30),
  days = Math.floor(days_diff % 30);

  return `${years} years ${months} months ${days} days`;
}


class AgeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 14,
      month : 'Feb',
      year: 1999,
      age : '23 years 0 months 18 days'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
  }

  handleDayChange(e){
    this.setState({
      day: e.target.value
    });
  }
  handleMonthChange(e){
    this.setState({
      month: e.target.value
    });
  }
  handleYearChange(e){
    this.setState({
      year: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();

    let day = this.state.day,
      month = this.state.month,
      year = this.state.year;

      let age =  CalculateAge(`${month} ${day} ${year}`);

      this.setState({
        age: age
      });
  }



  render(){

    return (
      <div className="App">
        <article>
          <h1>Age Calculator</h1>
        </article>
        <form onSubmit={this.handleSubmit}>
          <div className='container'>
            <Input arr = {days} handleChange = {this.handleDayChange} val = {this.state.day} />
            <Input arr = {months} handleChange = {this.handleMonthChange} val = {this.state.month} />
            <Input arr = {year} handleChange = {this.handleYearChange} val = {this.state.year} />
          </div>
          <button type="submit">Calculate</button>
        </form>
        <article>
          <h2>Your age is</h2>
          <span>{this.state.age}</span>
        </article>
      </div>          
    );
  }      
}
    


function Input(props){
  let options = props.arr.map((item)=> <option value={item} key={item}>{item}</option>);
                              
   return  <select onChange = {props.handleChange} value={props.val}>
               {options}
            </select>;
}
export default AgeCalculator;