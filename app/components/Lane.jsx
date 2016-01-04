import AltContainer from 'alt-container';
import React from 'react';
import LaneActions from '../actions/LaneActions';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
import Editable from './Editable';

export default class Lane extends React.Component {
  render() {
    const {lane, ...props} = this.props;
    const id = lane.id;

    return (
      <div {...props}>
        <div className="lane-header">
          <Editable className="lane-name" editing={lane.editing}
            value={lane.name} onEdit={this.editName.bind(this, id)}
            onValueClick={this.activateLaneEdit.bind(this, id)} />
          <div className="lane-add-note">
            <button onClick={this.addNote}>+</button>
          </div>
        </div>
        <AltContainer
          stores={[NoteStore]}
          inject={{
            notes: () => NoteStore.get(lane.notes)
          }}
          >
          <Notes onValueClick={this.activateNoteEdit}
            onEdit={this.editNote} onDelete={this.deleteNote} />
        </AltContainer>
      </div>
    );
  }

  addNote(laneId) {
    const note = NoteActions.create({task: 'New task'});

    LaneActions.attachToLane({
      noteId: note.id,
      laneId
    });
  }

  editNote(id, task) {
    NoteActions.update({id, task});
  }

  deleteNote(laneId, noteId) {
    LaneActions.detachFromLane({laneId, noteId});
    NoteActions.delete(noteId);
  }

  editName(id, name) {
    console.log('edited lane name', id, name);
  }

  activateLaneEdit(id) {
    console.log('edit lane name', id);
  }

  activateNoteEdit(id) {
    console.log('edit note task', id);
  }
}
