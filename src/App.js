import React, { Component } from 'react';
import Ideas from './Ideas';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
  }

  deleteIdea = (id) => {
    console.log(id);
    const filteredIdeas = this.state.ideas.filter(idea => idea.id != id);
    this.setState({ ideas: filteredIdeas });
  }

  render() {
    return (
      <main className='App'>
        <h1>IdeaBox</h1>
        {!this.state.ideas.length && <h2>No ideas yet -- add some!</h2> }
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
        <Form addIdea={this.addIdea} />
      </main>
    )
  }
}

export default App;