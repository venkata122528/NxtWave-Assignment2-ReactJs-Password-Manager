import EachPasswordItem from '../EachPasswordItem/index'
import './index.css'

const PasswordsContainer = props => {
  const {
    passwordsList,
    wantMaskedPasswords,
    deleteEvent,
    checkBoxStatusChange,
    searchValueChange,
  } = props

  const checkBoxClick = event => {
    checkBoxStatusChange(event.target.checked)
  }

  const searchInputChange = event => {
    searchValueChange(event.target.value)
  }

  return (
    <div className="passWordsCardContainer">
      <div className="titleSearchBarContainer">
        <div className="titleCountContainer">
          <h1 className="passwordsTitle">Your Passwords</h1>
          <p className="passWordsCount">{passwordsList.length}</p>
        </div>
        <div className="searchBarContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
            className="searchImageLogo"
          />
          <input
            type="search"
            placeholder="Search"
            className="searchInput"
            onChange={searchInputChange}
          />
        </div>
      </div>
      <hr />
      <div className="checkBoxContainer">
        <input type="checkbox" id="checkbox" onClick={checkBoxClick} />
        <label htmlFor="checkbox">Show Passwords</label>
      </div>
      <ul className="passwordsDataContainer">
        {passwordsList.length === 0 ? (
          <div className="noPasswordContainer">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="noPasswordsImage"
              />
              <p className="noPasswordTitle">No Passwords</p>
            </div>
          </div>
        ) : (
          passwordsList.map(each => (
            <EachPasswordItem
              each={each}
              key={each.id}
              wantMaskedPasswords={wantMaskedPasswords}
              deleteEvent={deleteEvent}
            />
          ))
        )}
      </ul>
    </div>
  )
}

export default PasswordsContainer
