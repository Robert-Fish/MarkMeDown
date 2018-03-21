import React, { Component } from 'react';
import './App.css';
import { FormGroup } from "react-bootstrap";
import { ControlLabel } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Panel } from "react-bootstrap";

let marked =  require('marked');
class App extends Component {

  state = {
    markdown: ""
  }

  updateMarkDown = function(markdown){
    this.setState({markdown});
    console.log(markdown);
  }
  render() {
    let {markdown} = this.state;
    return (
      <div className="App container">
        <Panel>
          <h1 className="mainText">Markdown Previewer</h1>
          <hr/>
          <h4>A simple tool to view your markdown in realtime</h4>
          <br/>
          <div>
            <FormGroup controlId="formControlTextArea">
              <ControlLabel>Input your markdown</ControlLabel>
              <FormControl 
                componentClass="textarea"
                placeholder="Enter your markdown"
                value={markdown}
                onChange={(event) => this.updateMarkDown(event.target.value)}
              />
            </FormGroup>
          </div>
          <div>
            <h3 className="mainText">Markdown Output</h3>
            <div dangerouslySetInnerHTML={{__html: marked(markdown)}}>
            
            </div>
          </div>
        </Panel>
      </div>
    );
  }
}

export default App;
