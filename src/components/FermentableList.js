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
    fetch(`${process.env.REACT_APP_API_URL}/fermentables`)
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
      <option key={item.id} value={ item.id }>{ item.name }</option>
    ));

    return (
      <div>
        <select name="fermentables" className="fermentables">
          <option value='0'>none</option>
          { fermentables }
        </select>
        <input className="fermentablesAmount" type="number" style={{width: '40px'}}/>
      </div>
    );
  }
}