import React from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { formatPhoneNumber } from 'react-phone-number-input'
import styles from './application.scss';
import { URL } from 'url';


import TextMessages from "../components/TextMessages";


class newTextMessage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name:"",
			message:"",
			phoneNumber:null,
			formattedNumber:null,
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
		this.stripNonNumeric = this.stripNonNumeric.bind(this);
	}

	stripHtmlEntities(str) {
		return String(str)
		  .replace(/</g, "&lt;")
		  .replace(/>/g, "&gt;");
	  }

	stripNonNumeric(str){
		return String(str).replace(/\D/g,'');
	}

	 pgFormatDate(date) {
		/* Via http://stackoverflow.com/questions/3605214/javascript-add-leading-zeroes-to-date */
		function zeroPad(d) {
		  return ("0" + d).slice(-2);
		}
	  
		var parsed = new Date(date);
	  
		return [parsed.getUTCFullYear(), zeroPad(parsed.getMonth() + 1), zeroPad(parsed.getDate()), zeroPad(parsed.getHours()), zeroPad(parsed.getMinutes()), zeroPad(parsed.getSeconds())].join(" ");
	  }

	  onChange(event) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        });
        console.log(this.state);
	  }

	  onNumberChange(event)
	  {
		  const value = event;
	  }

	  isValidNumber(p) {
		p = p.toString();
		var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
		var digits = p.replace(/\D/g, "");
		return phoneRe.test(digits);
	  }

	  onSubmit = (event) => {
		event.preventDefault();
		const formattedNumber = Number(this.stripNonNumeric(formatPhoneNumber(this.state.phoneNumber)));
		this.setState({ formattedNumber: formattedNumber});
        console.log(this.state);

		const url = "/api/v1/text_messages/create";
		let { name, message, phoneNumber } = this.state;
		
		 const oldNumber = phoneNumber;
		 phoneNumber = formattedNumber;
		 if(!this.isValidNumber(formattedNumber))
		 {
			 alert("Invalid Number!");
			 return;
		 }

	
		const body = {
		  name,
		  message,
		  phoneNumber,
		};
		

		console.log(body);
	
		const token = document.querySelector('meta[name="csrf-token"]').content;
		fetch(url, {
		  method: "POST",
		  headers: {
			"X-CSRF-Token": token,
			"Content-Type": "application/json"
		  },
		  body: JSON.stringify(body)
		})
		  .then(response => {
			if (response.ok) {
				alert("Text Message Sent! Refresh to view log");
				return;
			}
			alert("Network Error Occureed!");
			throw new Error("Network response was not ok.");
		  })
		  .then(response => this.props.history.push(`/textmessages`))
		  .catch(error => console.log(error.message));
      }
      
      render()
      {
    return(		
        <form className="form" onSubmit = {this.onSubmit}>
			<br></br>
		<input type="text" placeholder="Name" required className="form-control" onChange={this.onChange} size="15" id="name" name="name"></input>

		<br></br>
		<PhoneInput className="form-control" required defaultCountry="US" placeholder="Phone Number" id="phoneNumber" name="phoneNumber" size = "15" value={this.state.phone}
  onChange={phoneNumber => this.setState({ phoneNumber })}></PhoneInput>
		<div className={styles.MessageContainer}>

        <TextMessages></TextMessages>
	</div>
        <div >
        <input type="text" className="form-control" placeholder="Message" required onChange={this.onChange} size="40" name ="message" id="messageTextarea"></input>
		<br></br>
          <button className="btn btn-outline-secondary" type="submit" id="send">Send</button>
        </div>
		<br></br>
        </form>
    );

    }
}

export default newTextMessage;