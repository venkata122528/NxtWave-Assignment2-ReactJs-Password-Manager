import './index.css'

const UserDetailsInputContainer = props => {
  const {
    website,
    password,
    username,
    onChangePassword,
    onChangeUsername,
    onChangeWebsite,
    onAddButtonClick,
  } = props

  const websiteInput = event => {
    onChangeWebsite(event.target.value)
  }

  const usernameInput = event => {
    onChangeUsername(event.target.value)
  }

  const passwordInput = event => {
    onChangePassword(event.target.value)
  }

  const onSubmitEvent = event => {
    event.preventDefault()
    onAddButtonClick()
  }

  return (
    <div className="dataInputCard">
      <form className="userDetailsForm" onSubmit={onSubmitEvent}>
        <h1 className="title">Add New Password</h1>
        <div className="websiteInputContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            alt="website"
            className="logos"
          />
          <input
            className="websiteInput"
            type="text"
            placeholder="Enter Website"
            value={website}
            onChange={websiteInput}
          />
        </div>
        <div className="websiteInputContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
            alt="username"
            className="logos"
          />
          <input
            className="usernameInput"
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={usernameInput}
          />
        </div>
        <div className="websiteInputContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            alt="password"
            className="logos"
          />
          <input
            className="passwordInput"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={passwordInput}
          />
        </div>
        <div className="addButtonContainer">
          <button type="submit">Add</button>
        </div>
      </form>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
        alt=" password manager"
        className="userLoginImage"
      />
    </div>
  )
}

export default UserDetailsInputContainer
