import './index.css'

const TabItem = props => {
  const {tabDetails, onEvent,isActive} = props
  const {displayText} = tabDetails

  const buttonClick = () => {
    onEvent(tabDetails.tabId)
  }
  const isActiveCat=isActive ? "active-tab-btn":""
  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${isActiveCat}`} onClick={buttonClick}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
