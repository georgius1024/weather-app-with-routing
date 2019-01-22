/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Cities extends Component {
  render() {
    const cities = this.props.cities.map((city, index) => {
      return (
        <li key={index}>
          <Link to={ `/${city.id}/` }>
            {city.name}
          </Link>
        </li>
      )
    })
    return (
      <aside className="menu">
        {cities.length ? <p className="menu-label">Select city</p> : ''}

        <ul className="menu-list">{cities}</ul>
        {cities.length ? (
          <div className="menu-label">
            <hr />
          </div>
        ) : (
          ''
        )}

        <ul className="menu-list">
          <li>
            <a onClick={this.props.onAdd}>
              <span className="icon">
                <i className="fas fa-plus" />
              </span>
              Add city
            </a>
          </li>
        </ul>
      </aside>
    )
  }
}

Cities.propTypes = {
  cities: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
}
