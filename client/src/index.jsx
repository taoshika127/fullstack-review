import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  componentDidMount() {
    let getRepos = axios.get('http://localhost:1128/repos').then((response) => {
        this.setState({repos: response.data})
      })
  }

  search (term) {
    var url = 'http://localhost:1128/repos';
    axios.post(url, { username: term}).then(() => {
      console.log('posted to db');
      this.componentDidMount();
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));