'use strict'

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      current: props.filters[0],
      projects: props.projects
    }
  }
    
  selectFilter(filter) {
    let projects = this.props.projects;
    
    if (filter !== 'All') {
      projects = projects.filter(project => project.category === filter);
    }
    
    this.setState({
      current: filter,
      projects: projects
    });
  }
  
  render() {
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.current}
          onSelectFilter={(filter) => this.selectFilter(filter)} />
        <Portfolio projects={this.state.projects} />
      </div>
    )
  }
}
