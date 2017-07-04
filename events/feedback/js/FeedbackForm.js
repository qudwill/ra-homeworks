'use strict';

const FeedbackForm = props => {
  const { data } = props;
  const { email, message, name, salutation, snacks, subject } = data;
  let emailInnerField, messageInnerField, nameInnerField, salutationInnerField, snacksInnerField, subjectInnerField;

  const welcomeMessage = (
    <div className='testing'>
      <p>Чем мы можем помочь?</p>
    </div>
  );

  const groupClassName = 'contact-form__input-group';

  const salutationOptions = {
    mr: {
      slug: 'mr',
      name: 'Мистер'
    },
    mrs: {
      slug: 'mrs',
      name: 'Мисис'
    },
    ms: {
      slug: 'ms',
      name: 'Мис'
    }
  };

  const subjectOptions = [
    'У меня проблема',
    'У меня важный вопрос'
  ];

  const wantsToGet = {
    pizza: {
      slug: 'pizza',
      name: 'Пицца'
    },
    cake: {
      slug: 'cake',
      name: 'Пирог'
    }
  }

  const salutationFields = (
    <div className={groupClassName} ref={element => salutationInnerField = element}>
      {
        Object.keys(salutationOptions).map(function(key) {
          const name = salutationOptions[key].name;
          const slug = 'salutation-' + salutationOptions[key].slug;

          return (
            <span>
              <input
                defaultChecked={(name === salutation) ? true : false}
                className='contact-form__input contact-form__input--radio'
                id={slug}
                name='salutation'
                type='radio'
                value={name}
                />
              <label className='contact-form__label contact-form__label--radio' htmlFor={slug}>{name}</label>
            </span>
          )
        })
      }
    </div>
  );

  const nameField = (
    <div className={groupClassName}>
      <label className='contact-form__label' htmlFor='name'>Имя</label>
      <input
        defaultValue={name}
        ref={element => nameInnerField = element}
        className='contact-form__input contact-form__input--text'
        id='name'
        name='name'
        type='text'
        />
    </div>
  );

  const emailField = (
    <div className={groupClassName}>
      <label className='contact-form__label' htmlFor='email'>Адрес электронной почты</label>
      <input
        defaultValue={email}
        ref={element => emailInnerField = element}
        className='contact-form__input contact-form__input--email'
        id='email'
        name='email'
        type='email'
        />
    </div>
  );

  const subjectSelect = (
    <div className={groupClassName}>
      <label className='contact-form__label' htmlFor='subject'>Чем мы можем помочь?</label>
      <select
        defaultValue={subject}
        ref={element => subjectInnerField = element}
        className='contact-form__input contact-form__input--select'
        id='subject'
        name='subject'>
        {subjectOptions.map(item => <option>{item}</option>)}
      </select>
    </div>
  );

  const textareaField = (
    <div className={groupClassName}>
      <label className='contact-form__label' htmlFor='message'>Ваше сообщение</label>
      <textarea
        defaultValue={message}
        ref={element => messageInnerField = element}
        className='contact-form__input contact-form__input--textarea'
        id='message'
        name='message'
        rows='6'
        cols='65'>
      </textarea>
    </div>
  );

  const wantsToGetCheckboxes = (
    <div className={groupClassName} ref={element => snacksInnerField = element}>
      <p className='contact-form__label--checkbox-group'>Хочу получить:</p>
      {
        Object.keys(wantsToGet).map(function(key) {
          const name = wantsToGet[key].name;
          const slug = 'snacks-' + wantsToGet[key].slug;

          return (
            <span>
              <input
                defaultChecked={(snacks.includes(name.toLowerCase())) ? true : false}
                className='contact-form__input contact-form__input--checkbox'
                id={slug}
                name='snacks'
                type='checkbox'
                value={name}
                />
              <label className='contact-form__label contact-form__label--checkbox' htmlFor={slug}>{name}</label>
            </span>
          )
        })
      }
    </div>
  );

  const submitData = data => {
    console.log(data);
  }

  return (
    <form
      className='content__form contact-form'
      onSubmit={() => {
        event.preventDefault();

        const salutation = salutationInnerField.querySelector('input[type=radio]:checked');
        const snacks = snacksInnerField.querySelectorAll('input[type=checkbox]:checked');

        let snackValues = [];

        snacks.forEach(function(item) {
          snackValues.push(item.value);
        });

        const data = {
          salutation: salutation.value,
          name: nameInnerField.value,
          email: emailInnerField.value,
          subject: subjectInnerField.value,
          message: messageInnerField.value,
          snacks: snackValues
        }

        submitData(data);
      }}>
      {welcomeMessage}
      {salutationFields}
      {nameField}
      {emailField}
      {subjectSelect}
      {textareaField}
      {wantsToGetCheckboxes}
      <button className='contact-form__button' type='submit'>Отправить сообщение!</button>
      <output id='result' />
    </form>
  );
}