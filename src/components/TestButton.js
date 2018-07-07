import React, { Component } from 'react';
import $ from 'jquery';
import './component.css';
export default class TestButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {

  }

  onClickTest() {
    let yeast = $('.yeast').val();
    let fermentables = [];
    $('.fermentables').each(function(index) {
        fermentables.push({id: $(this).val()});
    });
    $('.fermentablesAmount').each(function(index) {
        fermentables[index]['amount'] = $(this).val() === '' ? 0 : $(this).val();
    });
    let hops = [];
    $('.hops').each(function(index) {
        hops.push({id: $(this).val()});
    });
    $('.hopsAmount').each(function(index) {
        hops[index]['amount'] = $(this).val() === '' ? 0 : $(this).val();
    });
    $('.hopsTime').each(function(index) {
        hops[index]['time'] = $(this).val() === '' ? 0 : $(this).val();
    });
    let recipe = {
        yeast: yeast,
        fermentables: fermentables,
        hops: hops
    };
    let results = $('#results');
    results.html('Fermenting...');
    console.log(recipe);
    // @todo: use environment.json
    fetch('http://127.0.0.1:5000/test', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe)
    }).then(function(response) {
        console.log(response);
        return response.json();
    }).then(function(data) {
        console.log(data);
        let results = $('#results');
        results.html('');
        for (let i=0; i < data.length; i++) {
            let result = data[i];
            let prediction = '<div class="prediction" style="font-size:';
            prediction += 5 + result['confidence'] + 'px';
            if (result['confidence'] < 0) {
                prediction += '; color:#FF7777';
            }
            prediction += '">';
            prediction += result['style'] + ' : ';
            prediction += result['confidence'] + '</div>';
            results.append(prediction);
        }
    }).catch(err => {
        console.log(err);
    });
  }

  render() {
    return (
        <button name="test" className="btn btn-3 btn-3e icon-arrow-right" onClick={this.onClickTest}>BREW</button>
    );
  }
}