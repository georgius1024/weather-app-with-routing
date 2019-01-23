/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
import { connect } from 'react-redux'

class IndexView extends Component {
  render() {
    const cities = this.props.cities.map((city, index) => {
      return (
        <li key={index}>
          <Link to={`/city/${city.id}/`}>
            {city.fullName}
          </Link>
        </li>
      )
    })

    return (
      <div className="columns">
        <div className="column" style={{ padding: '16px' }}>
          <aside className="menu">
            {
              cities.length ? <p className="menu-label">Select city</p> : ''
            }

            <ul className="menu-list">{cities}</ul>
            {
              cities.length ? (
                <div className="menu-label">
                  <hr />
                </div>
              ) : (
                  ''
                )
            }

            <ul className="menu-list">
              <li>
                <Link to="/add">
                  <span className="icon">
                    <i className="fas fa-plus" />
                  </span>
                  Add city
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state
  }
}

export default connect(
  mapStateToProps
)(IndexView)
