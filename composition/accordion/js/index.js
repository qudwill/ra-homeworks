'use strict';

class AccordionSection extends React.Component {
  constructor(props) {
    super(props);

    let openState;

    this.props.openedByDefault ? openState = true : openState = false;

    this.state = {
      open: openState
    }
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <section className={`section ${this.state.open ? 'open' : ''}`}>
        <button>toggle</button>
        <h3 className="sectionhead" onClick={() => this.toggleOpen()}>{ this.props.name }</h3>
        <div className="articlewrap">
          <div className="article">
            { this.props.content } 
          </div>
        </div>
      </section>
    );
  }
}

const Accordion = ({title}) => (
  <div>
    <h2 className="title">{ title }</h2>
    <AccordionSection
      openedByDefault={true}
      name='Компоненты'
      content='Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.' />
    <AccordionSection
      name='Выучил раз, используй везде!'
      content='После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.' />
    <AccordionSection
      name='Использование JSX'
      content='JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.' />
  </div>
);

const App = () => (
  <main className='main'>
    <Accordion title='React' />
  </main>
);