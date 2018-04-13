import React from 'react';
import ReactDOM from 'react-dom';
import './addjob.css';
import Header from '../RoksaPage/Header/Header.js'

class Job extends React.Component{
	render(){
		return(
			<div className="form">   
		 		    <label>Короткий опис</label>
					<input type="text" id="name" className="regform_name"/>
					<label>Детальний опис</label>
					<textarea type="text" name="message" id="info" className="regform_name"/>
					<label>Локація</label>
					<input type="text" id="name" className="regform_name"/>
					<label>Вартість, грн</label>
					<input type="text" id="name" className="regform_name"/>
					<label>Тривалість</label>
					<select>
					  <option> до 2 годин</option>
					  <option> 2-5 годин</option>
					  <option> 5-8 годин</option>
					</select>
					<label>Крайній термін</label>
					<input type="date" name="calendar"/>
					<button className="regform_send">Підтвердити</button>
			</div>
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
