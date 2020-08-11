import React from "react";
import styles from './application.scss';

//import { Link } from "react-router-dom";


class TextMessages extends React.Component{
    constructor(props) {
	super(props);
	this.state = {
	    textmessages: []
	};
    }

    componentDidMount(){
	const url = "/api/v1/text_messages/index";
	fetch(url)
	    .then(response => {
		if(response.ok){
			//console.log("Hoowwee");
		    return response.json();
		}
		console.log("yoza");
		throw new Error("Network response was not ok.");
	    })
	    .then(response => this.setState({textmessages: response}));
	   // .catch(() => this.props.history.push("/"));
	}

	addHtmlEntities(str) {
		return String(str)
		.replace(/&lt;/)
	}
	
	formatAMPM(date) { // This is to display 12 hour format like you asked
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0'+minutes : minutes;
		var strTime = hours + ':' + minutes + ' ' + ampm;
		return strTime;
	  }

    render(){
	const {textmessages} = this.state;
	const allTextMessages = textmessages.map((textmessage,index) => (
			<div key={index} className="box3 sb13">
					<p >{textmessage.message}</p>
					<p>{textmessage.created_at}</p>
			</div>
	));
	const noMessage = (
	      <h4>
			No Text Messages Yet!
	      </h4>
	);

	return(
	    <>		
		{textmessages.length > 0 ? allTextMessages : noMessage}		  
	    </>
	);
    }
		  

}
export default TextMessages;
