import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer'
import Cities from './components/cities'
import City from './components/city'
import AddCity from './components/add-city'
import config from './config'
import actions from './store/actions'
const { addCityAction, removeCityAction } = actions


class App extends Component {
  constructor(p, c) {
    super(p, c)
    this.addCity = this.addCity.bind(this)
    this.removeCity = this.removeCity.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.submitCity = this.submitCity.bind(this)
    this.state = {
      modalActive: false,
      dbIsLoaded: false,
      DB: [],
    }
  }

  componentDidMount() {
    if (this.props.cities.length === 0) {
      this.addCity()
    }
  }

  render() {
    const cities = this.props.cities.sort((a, b) =>
      a.name.localeCompare(b.name)
    )
    const indexRoute = (
    <div className="columns">
      <div className="column" style={{ padding: '16px' }}>
        <Cities
          cities={cities}
          onAdd={this.addCity}
        />
      </div>
    </div>
    )
  
    const modalActive = this.state.modalActive
    return (
      <BrowserRouter>
        <div>
          <AddCity
            active={modalActive}
            onClose={this.closeModal}
            onSubmit={this.submitCity}
          />
          <Header config={config} />
          <Route exact path="/" render = { () => indexRoute } />
          <Route exact path="/:id" render = { () => <City /> } />
          <Footer config={config} />
        </div>
      </BrowserRouter>
    )
  }

  removeCity(id) {
    this.props.removeCity(id)
    if (this.props.cities.length === 1) {
      this.addCity()
    }
  }
  addCity() {
    this.setState({
      modalActive: true,
    })
  }
  submitCity(city) {
    this.closeModal()
    this.props.addCity(city)
  }
  closeModal() {
    this.setState({
      modalActive: false,
    })
  }
}

const mapStateToProps = state => {
  return {
    cities: state,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addCity: city => dispatch(addCityAction(city)),
    removeCity: key => dispatch(removeCityAction(key)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
