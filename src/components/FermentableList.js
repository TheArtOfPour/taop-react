import React, { Component } from 'react';
export default class FermentableList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        fermentable: [],
        selected: null
    };
  }

  componentDidMount() {
    this.FermentableList();
  }

  FermentableList() {
    fetch('http://127.0.0.1:5000/fermentables')
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }
        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          fermentable: d._items
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {
    const fermentables = this.state.fermentable.map((item, i) => (
      <option value={ item.id }>{ item.name }</option>
    ));

    return (
      <div>
        <select name="fermentables" className="fermentables">
          <option value='0'>None</option>
          { fermentables }
        </select>
        <input className="fermentablesAmount" type="number" style={{width: '40px'}}></input>
      </div>
    );
  }
}