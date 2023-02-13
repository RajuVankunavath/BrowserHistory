import './index.css'

const BrowserHistory = props => {
  const {detailsList, onDeleteList} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = detailsList
  const onDeleteButton = () => {
    onDeleteList(id)
  }
  return (
    <li className="list-items">
      <div className="list-items-container">
        <p className="time">{timeAccessed}</p>
        <div className="list-container">
          <div className="card-Container">
            <img alt="domain logo" src={logoUrl} className="logo" />
            <p className="description">{title}</p>
            <p className="description">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="button" type="button" onClick={onDeleteButton}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-icon"
            alt="delete"
            data-testi="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default BrowserHistory
