class SubscribeForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			formClassName: ''
		};
	};

	changeEmail(evt) {
		this.setState({
			email: evt.currentTarget.value
		});

		this.validateEmail(evt.currentTarget.value, evt.currentTarget.validity.valid);
	};

	validateEmail(value, isValid) {
		let formClassName = '';

		if (value != '') {
			if (isValid) {
				formClassName = 'is-valid';
  		} else {
  			formClassName = 'is-error';
  		}
		}

    this.setState({
    	formClassName: formClassName
    });
	}

	render() {
		return (
			<div className="subscribe__form">
  			<form className={`form form--subscribe ${this.state.formClassName}`}>
    			<h4 className="form-title">Подписаться:</h4>
    			<div className="form-group">
    	  		<label htmlFor="input-email" className="sr-only">Email</label>
    	  		<input type="email" id="input-email" placeholder="Email" className="form-control" value={ this.state.email } onChange={ this.changeEmail.bind(this) }/>
    	  		<div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
    	  		<button type="submit" className="form-next">
    	  	  	<i className="material-icons">keyboard_arrow_right</i>
    	  		</button>
    			</div>
  			</form>
			</div>
		);
	};
};