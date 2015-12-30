import React from 'react';
import Notes from './Notes';
import uuid from 'node-uuid';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };
  }

  // We are using an experimental feature known as a property initializer.
  // It allows us to bind the method `this` to point to our *App* instance.
  // Alternatively we could `bind` in the constructor using a line,
  // such as this.addNote = this.addNote.bind(this);
  addNote = () => {
    // It would be possible to write this in an imperative style.
    // I.e., through `this.state.notes.push`.
    // I tend to favor the functional style whenever that makes sense.
    // Even thought it might take more code sometimes, I feel the benefits
    // (easy to reason about, no side effects) more than make up for it.
    // Libraries like Immutable.js go one step further.
    this.setState({
      notes: [...this.state.notes,
      {
        id: uuid.v4(),
        task: 'New Task'
      }]
    });
  }

  render() {
    const notes = this.state.notes;

    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes notes={notes} />
      </div>
    );
  }
}
