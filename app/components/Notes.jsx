import React from 'react';
import Editable from './Editable';

export default ({notes, onEdit, onDelete}) => {
  return (
    <ul className="notes">
      {notes.map((note) => {
        return (
          <li className="note" key={note.id}>
            <Editable
              edinting={note.editing}
              value={note.task}
              onValueClick={this.props.onValueClick.bind(null, note.id)}
              onEdit={onEdit.bind(null, note.id)}
              onDelete={onDelete.bind(null, note.id)}
              />
          </li>
        );
      })}
    </ul>
  );
};
