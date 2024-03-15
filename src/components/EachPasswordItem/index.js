import './index.css'

const EachPasswordItem = props => {
  const {each, wantMaskedPasswords, deleteEvent} = props
  const {id, website, username, password} = each

  const onClickDelete = () => {
    deleteEvent(id)
  }

  return (
    <li className="eachPasswordItem">
      <div className="nameLogo">
        <p className="firstName">{username[0]}</p>
      </div>
      <div className="dataContainer">
        <p className="website">{website}</p>
        <p className="username">{username}</p>
        {wantMaskedPasswords ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="starsImage"
          />
        ) : (
          <p className="password">{password}</p>
        )}
      </div>
      <button
        className="deleteButton"
        type="button"
        onClick={onClickDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="deleteImage"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default EachPasswordItem
