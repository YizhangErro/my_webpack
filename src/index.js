import style from "./common/index.less"
import styles from "./common/index.css"
import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return <h1 className={style.a}>Hello, world!</h1>
	}
}


ReactDOM.render(
		<Hello/>,
  		document.getElementById('app')
	)