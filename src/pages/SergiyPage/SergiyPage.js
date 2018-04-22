import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SergiyPage.css';

class App extends Component {
		componentWillMount(){
			this.props.ReadJob(this.state);
      console.log('propsJob', this.props.jobList[0]);
      var jobId=this.props.location.hash.slice(1)+'';
      var jobList = this.props.jobList;
      var number=false;
      jobId = 1524211904457;
			console.log('props', jobId);
			for (var i=0; i< jobList.length; i++){
        if(jobList[i].id==jobId){
          
          number=i; console.log(i);
        break;}

      
      }
		//this.props.getJobs()
	}
	
	
	
	
	
  render() {
	  var job= this.props.jobList[0];
	 
    return ( 
      <div className="App">
        <div className="Description">
        <h1 className="Name">
          {job.title}
        </h1>
        <p>{job.info}</p>
        <div className="JobFeatures">
        <div className="JobList">
        <ul>
          <li>Тривалість: {job.duration}</li>
          <li>Крайній термін виконання: {job.deadlineDate}</li>
          <li>Локація: {job.city}</li>
          <li>Оплата: {job.salary}</li>
          </ul>
          </div>
          <div className="Contacts">
          <h3>Сергій</h3>
          <p>+380670000000</p>
          </div>
        </div>
        </div>
        <div className="JobImage">
        <img src="https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-9/30623950_1633496920048789_4881096526492860416_n.jpg?_nc_cat=0&oh=c51fe51aec60c56d8a99622b083721ce&oe=5B6D97D4" className="JbImage"  alt="jobphoto" />
        <img src="https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-9/30629531_1633496936715454_914632900798840832_o.jpg?_nc_cat=0&oh=3fea16d8f0b996317c56c571c2b15e72&oe=5B2C2BE5" className="JbImage"  alt="jobphoto" />
        
        </div>
        <div className="Map">
        <img src="https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-9/30624552_1633496923382122_1617418034371100672_n.png?_nc_cat=0&oh=e225e7323cf59e5d843e87785bea4644&oe=5B73A3D4"  alt="map" />
        </div>
      </div>
    );
  }
}

//console.log('props', this.props);
export default connect(
	state => ({
	  jobList: state.jobList
	}),
	dispatch => ({
		ReadJob: ()=>{
			dispatch({ type: 'READ_JOB'})
		} 
	})
  )(App); 

//<img src="https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-9/30709690_1633496930048788_602166771520110592_o.jpg?_nc_cat=0&oh=79ca60a8956fca51059f721409b6b7b3&oe=5B58BD82" className="JbImage"  alt="jobphoto" />