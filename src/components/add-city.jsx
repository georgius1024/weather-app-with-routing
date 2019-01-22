/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import config from '../config'
import './add-city.css'
const debounce = require('lodash.debounce')

export default class AddCity extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '', typeahead: [] }
    this.onChange = this.onChange.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.fetchTypeahead = debounce(this.fetchTypeahead.bind(this), 300)
  }
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
  }
  onChange(event) {
    this.setValue(event.target.value)
  }
  onKeyDown(event) {
    if (this.props.active && event.key === 'Escape') {
      this.onClose()
    } 
  }
  setValue(value) {
    this.setState({value})
    this.fetchTypeahead()
  }

  fetchTypeahead () {
    const value = this.state.value
    if (value.length > 3) {
      const url = config.APIXU_URL +
      '/search.json' + 
      '?key=' +
      config.APIXU_KEY +
      '&q=' + 
      value
      fetch(url)
        .then(response => response.json())
        .then((cities) => {
          const typeahead = cities.map(city => {
            const parts = city.name.split(',')
            return {
              id: city.id,
              fullName: city.name,
              name: parts[0],
              lat: city.lat,
              lng: city.lon,
            }
          })
          this.setState({ typeahead })
        })
    } else {
      this.setState({ typeahead: [] })
    }
  }

  onClose() {
    this.props.onClose()
  }

  render() {
    let typeahead
    if (this.state.typeahead.length > 1) {
      const items = this.state.typeahead.map((item, index) => {
        const onSelect = () => {
          const city = { ...item }
          city.image = '/images/' + Math.ceil(Math.random() * 26) + '.jpg'
          this.props.onSubmit(city)
          this.setState({
            value: '',
            typeahead: []
          })
        }
        return (
          <a key={index} className="typeahead-item" onClick={onSelect}>
            {item.fullName}
          </a>
        )
      })
      typeahead = <div className="typeahead">{items}</div>
    } else {
      typeahead = <div className="typeahead" />
    }
    return (
      <div className={'modal  ' + (this.props.active ? 'is-active' : '')}>
        <div className="modal-background" />
        <div className="modal-content has-background-white has-text-black-ter form">
          <div className="field">
            <label className="label">Add city</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter city name"
                value={this.state.value}
                onChange={this.onChange}
              />
              {typeahead}
            </div>
          </div>
        </div>
        <button className="modal-close is-large" onClick={this.onClose} />
      </div>
    )
  }
}

AddCity.propTypes = {
  active: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}
