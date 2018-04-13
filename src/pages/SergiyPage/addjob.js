import React from 'react';
import ReactDOM from 'react-dom';
import './addjob.css';
import Header from '../RoksaPage/Header/Header.js'

class Job extends React.Component{
	render(){
		return(
			<form className="formjob">   
		 		    <label className="formLabel">Короткий опис</label>
					<input type="text" id="name" className="inpform"/>
					<label className="formLabel"> Детальний опис </label>
					<textarea type="text" name="message" id="info" className="inpform"/>
					<label className="formLabel">Локація</label>
					<input type="text" id="name" className="inpform"/>
					<label className="formLabel">Вартість, грн</label>
					<input type="text" id="name" className="inpform"/>
					<label className="formLabel">Тривалість</label>
					<select className="inpform">
					  <option> до 2 годин</option>
					  <option> 2-5 годин</option>
					  <option> 5-8 годин</option>
					</select>
					<label className="formLabel">Крайній термін</label>
					<input type="date" name="calendar" className="inpform"/>
					<button className="inpform_send">Підтвердити</button>
			</form>
		);
	}
}

class Addjob extends React.Component{
	render(){
		return(
			<div>
		 		<Header/>
		 		<Job/>
			</div>
		);
	}
}

export default Addjob
