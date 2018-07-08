import React, { Component } from 'react';
export default class HopList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        hop: [],
        selected: null
    };
  }

  componentDidMount() {
    this.HopList();
  }

  HopList() {
    fetch(`${process.env.REACT_APP_API_URL}/hops`)
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }
        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          hop: d._items
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {
    const hops = this.state.hop.map((item, i) => (
      <option value={ item.id }>{ item.name }</option>
    ));

    return (
      <div>
        <select name="hops" className="hops">
          <option value='0'>None</option>
          { hops }
        </select>
        <input className="hopsAmount" type="number" style={{width: '40px'}}/>
        <input className="hopsTime" type="number" style={{width: '40px'}}/>
      </div>
    );
  }
}