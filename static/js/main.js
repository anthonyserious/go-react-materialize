class Nav extends React.Component {
  render() {
    return (
      <div className="col s12">
         <div className="card blue-grey darken-1">
           <div className="card-content white-text">
            Nav stuff
           </div>
         </div>
      </div>
    )
  }
}

class Card extends React.Component {
  render() {
    return (
      <div className="col s12 m4">
         <div className="card blue-grey darken-1">
           <div className="card-content white-text">
             <span className="card-title">{this.props.title}</span>

             <div className="card-action">
               <a href="#">Details</a>
             </div>
           </div>
         </div>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <div className="row">
          <Card title="Repos"></Card>
          <Card title="Pipelines"></Card>
          <Card title="Jobs"></Card>
        </div>
      </div>
    )
  }
}

var HelloMessage = React.createClass({
  render: function () {
    return <h1>Hello {this.props.message}!</h1>;
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
