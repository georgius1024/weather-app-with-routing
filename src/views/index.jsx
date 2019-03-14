/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'

class IndexView extends Component {
  constructor(p, c) {
    super(p, c)
    this.state = { search: '' }
    this.onChange = this.onChange.bind(this)
  }
  onChange(event) {
    this.setState({ search: event.target.value })
  }

  render() {
    const { search } = this.state || {}
    const cities = this.props.cities
      .map((city, index) => {
        if (
          !search ||
          city.fullName.toLowerCase().includes(search.toLowerCase())
        ) {
          return (
            <li key={index}>
              <Link to={`/city/${city.id}/`}>{city.fullName}</Link>
            </li>
          )
        } else {
          return false
        }
      })
      .filter(item => Boolean(item))

    return (
      <div className="columns">
        <div className="column">
          <div className="control ma">
            <input
              className="input"
              type="text"
              placeholder="Find city"
              value={search}
              onChange={this.onChange}
            />
          </div>

          <aside className="menu">
            {cities.length ? (
              <div>
                <p className="menu-label ml">Select city</p>
                <ul className="menu-list">{cities}</ul>
              </div>
            ) : (
              (search 
                ?
                <div className="ml">
                  Search string "{search}" not found in list
                </div>
                : 
                <div className="ml">
                  No city added to list yet. Click <Link to="/add">here</Link> to add some
                </div>
              )
            )}
            {cities.length ? (
              <div className="menu-list">
                <hr />
                <Link to="/add">
                  <span className="icon">
                    <i className="fas fa-plus" />
                  </span>
                  Add city
                </Link>
              </div>
            ) : (
              ''
            )}
          </aside>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cities: state,
  }
}

export default connect(mapStateToProps)(IndexView)
