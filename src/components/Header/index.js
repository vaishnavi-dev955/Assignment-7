import NxtWatchContext from '../../Context/NxtWatchContext'

import './index.css'

const Header = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkBtnTheme, onToggleTheme} = value
      const onClickToggleTheme = () => {
        onToggleTheme()
      }

      const background = isDarkBtnTheme ? 'Dark-background' : 'Light-background'
      const ImageUrl = isDarkBtnTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const ButtonImageUrl = isDarkBtnTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const LogoutButtonClass = isDarkBtnTheme ? 'Dark-logout' : 'light-logout'
      return (
        <div className={background}>
          <img src={ImageUrl} alt="theme1" className="image-style" />
          <div className="sub-container1">
            <button
              type="button"
              className="custom-button"
              onClick={onClickToggleTheme}
            >
              <img src={ButtonImageUrl} className="image-style2" alt="theme2" />
            </button>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
              className="image-style2"
            />
            <button className={LogoutButtonClass} type="button">
              LogOut
            </button>
          </div>
        </div>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Header
