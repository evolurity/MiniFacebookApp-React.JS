import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import  'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app';
class WhoAmI extends Component{
    constructor(props) {
        super(props);
        this.state = {
            years:26
        }

            //this.nextYear = this.nextYear.bind(this); //привязать контекст вызова у обработчика события 1 спос.
        // this.nextYear = () =>{ //2 cпосоb
        //     this.setState(state =>({
        //         years:++state.years
        //     }))
        // }
    }
    nextYear = () =>{ //3 cпособ ES9
        this.setState(state =>({
            years:++state.years
        }))
    }
    // nextYear(){ //1 cпособ
    //     //this.state.years++; - нельзя
    //     this.setState(state =>({
    //         years:++state.years
    //     }))
    // }
    render() {
        const {name, surname, link}=this.props;
        const {years} = this.state;

        return(
            <>
                <button onClick={this.nextYear}></button>
                <h1>My name is {name}, surname - {surname}, years - {years}</h1>
                <a href={link}>My Profile</a>
            </>
        )
    }
}






const All = ()=>{
  return(
        <>
          <WhoAmI name="Yan" surname="GGG" link="https://vk.com/exciting_opportunities8"/>
          <WhoAmI name="S" surname="Sm" link="https://vk.com/exciting_opportunities"/>
        </>
  )
}
ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);



