import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordsContainer from '../PasswordsContainer/index'
import UserDetailsInputContainer from '../UserDetailsInputContainer/index'

import './index.css'

class MainPage extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    wantMaskedPasswords: true,
    passwordsList: [],
  }

  onChangeWebsite = value => {
    this.setState({website: value})
  }

  onChangeUsername = value => {
    this.setState({username: value})
  }

  onChangePassword = value => {
    this.setState({password: value})
  }

  onAddButtonClick = () => {
    const {website, username, password} = this.state
    const newPassword = {id: uuidv4(), website, username, password}

    this.setState(previousState => ({
      passwordsList: [...previousState.passwordsList, newPassword],
      website: '',
      username: '',
      password: '',
      search: '',
    }))
  }

  deleteEvent = id => {
    this.setState(previousState => ({
      passwordsList: previousState.passwordsList.filter(each => each.id !== id),
    }))
  }

  checkBoxStatusChange = status => {
    this.setState({wantMaskedPasswords: !status})
  }

  searchValueChange = value => {
    this.setState({search: value})
  }

  render() {
    const {
      website,
      username,
      password,
      wantMaskedPasswords,
      passwordsList,
      search,
    } = this.state

    const filteredPasswordsList = passwordsList.filter(each =>
      each.website.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="mainContainer">
        <div className="card">
          <div className="logoContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="logoImage"
            />
          </div>
          <UserDetailsInputContainer
            website={website}
            username={username}
            password={password}
            onChangePassword={this.onChangePassword}
            onChangeUsername={this.onChangeUsername}
            onChangeWebsite={this.onChangeWebsite}
            onAddButtonClick={this.onAddButtonClick}
          />
          <PasswordsContainer
            passwordsList={filteredPasswordsList}
            wantMaskedPasswords={wantMaskedPasswords}
            deleteEvent={this.deleteEvent}
            checkBoxStatusChange={this.checkBoxStatusChange}
            searchValueChange={this.searchValueChange}
          />
        </div>
      </div>
    )
  }
}

export default MainPage
