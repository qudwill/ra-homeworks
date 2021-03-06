class SubscribeForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			formClassName: ''
		};

		this.changeEmail = this.changeEmail.bind(this);
	};

	changeEmail(evt) {
		const { currentTarget } = evt;

		this.setState({
			email: currentTarget.value
		});

		this.validateEmail(currentTarget.value, currentTarget.validity.valid);
	};

	validateEmail(value, isValid) {
		let formClassName = '';

		if (value != '') {
			formClassName = isValid ? 'is-valid' : 'is-error';
		}

    this.setState({
    	formClassName: formClassName
    });
	}

	render() {
		const { state } = this;
		
		return (
			<div className="subscribe__form">
  			<form className={`form form--subscribe ${state.formClassName}`}>
    			<h4 className="form-title">Подписаться:</h4>
    			<div className="form-group">
    	  		<label htmlFor="input-email" className="sr-only">Email</label>
    	  		<input type="email" id="input-email" placeholder="Email" className="form-control" value={ state.email } onChange={ this.changeEmail }/>
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