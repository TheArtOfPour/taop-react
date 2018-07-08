import React, { Component } from 'react';
export default class YeastList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        yeast: [],
        selected: null
    };
  }

  componentDidMount() {
    this.YeastList();
  }

  YeastList() {
    fetch(`${process.env.REACT_APP_API_URL}/yeast`)
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }
        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          yeast: d._items
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {
    const yeasts = this.state.yeast.map((item, i) => (
      <option value={ item.id }>{ item.name }</option>
    ));

    return (
        <select name="yeast" className="yeast">
          <option value='0'>None</option>
          { yeasts }
        </select>
    );
  }
}