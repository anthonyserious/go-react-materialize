class Nav extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
           <div className="card blue-grey darken-1">
             <div className="card-content white-text">
             <i className="medium material-icons">toc</i>
             </div>
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
               <button data-target={this.props.modalTarget} className="btn">Details</button>
             </div>
           </div>
         </div>
      </div>
    )
  }
}

class Modal extends React.Component {
  render() {
    return (
      <div>
        <div id={this.props.modalId} className="modal">
          <div className="modal-content">
            <h4>{this.props.header}</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a href="#" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    $("#" + this.props.modalId).modal();
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Modal modalId="pipelinesModal" header="Pipelines"></Modal>
        <Modal modalId="jobsModal" header="Jobs"></Modal>
        <Modal modalId="reposModal" header="Repos"></Modal>
        <Nav></Nav>
        <div className="row">
          <Card title="Pipelines" modalTarget="pipelinesModal"></Card>
          <Card title="Jobs" modalTarget="jobsModal"></Card>
          <Card title="Repos" modalTarget="reposModal"></Card>
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
