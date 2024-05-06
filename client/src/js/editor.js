// Import methods to save and get data from the indexedDB database in './database.js'
import { getDb, putDb } from './database';
import { header } from './header';

export default class {
  constructor() {
    const localData = localStorage.getItem('content');

    // check if CodeMirror is loaded
    if (typeof CodeMirror === 'undefined') {
      throw new Error('CodeMirror is not loaded');
    }

    this.editor = CodeMirror(document.querySelector('#main'), {
      value: '',
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    // When the editor is ready, set the value to whatever is stored in indexeddb.

    // If nothing is stored in indexeddb, set the value to header.
    // Data is an array of previous saved content, so code is only taking the content value of the last item of the array
    getDb().then((data) => {
      if (!data || data.length === 0) {
        this.editor.setValue(header)
      } else {
        this.editor.setValue(data[data.length - 1].content);
      }
    });

    this.editor.on('change', () => {
      localStorage.setItem('content', this.editor.getValue());
    });

    // Save the content of the editor when the editor itself is loses focus
    this.editor.on('blur', () => {
      putDb(localStorage.getItem('content'));
    });
  }
}
