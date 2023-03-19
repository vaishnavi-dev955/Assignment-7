import './index.css'

import {HiFire, HiOutlineFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'
import {
  AiFillSave,
  AiOutlineSave,
  AiFillHome,
  AiOutlineHome,
} from 'react-icons/ai'

import NxtWatchContext from '../../Context/NxtWatchContext'

const AllOptions = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkBtnTheme} = value
      const leftContainer = isDarkBtnTheme
        ? 'Dark-left-container'
        : 'light-left-container'
      const Para = isDarkBtnTheme ? 'Dark-para' : 'light-para'
      const logoStyle = isDarkBtnTheme ? 'Dark-logo-style' : 'light-logo-style'
      const Contactpara = isDarkBtnTheme ? 'Dark-para1' : 'light-para1'
      return (
        <div className={leftContainer}>
          <ul className="list-container1">
            <li className="list-item">
              {isDarkBtnTheme ? (
                <AiFillHome className={logoStyle} />
              ) : (
                <AiOutlineHome className={logoStyle} />
              )}
              <p className={Para}>Home</p>
            </li>
            <li className="list-item">
              {isDarkBtnTheme ? (
                <HiOutlineFire className={logoStyle} />
              ) : (
                <HiFire className={logoStyle} />
              )}
              <p className={Para}>Trending</p>
            </li>
            <li className="list-item">
              <SiYoutubegaming className={logoStyle} />
              <p className={Para}>Gaming</p>
            </li>
            <li className="list-item">
              {isDarkBtnTheme ? (
                <AiOutlineSave className={logoStyle} />
              ) : (
                <AiFillSave className={logoStyle} />
              )}
              <p className={Para}>Saved Videos</p>
            </li>
          </ul>
          <div>
            <p className={Contactpara}>CONTACT US</p>
            <ul className="list-container2">
              <li>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                  className="social-logo"
                />
              </li>
              <li>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                  className="social-logo"
                />
              </li>
              <li>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                  className="social-logo"
                />
              </li>
            </ul>
            <p className={Contactpara}>
              Enjoy! Now to see your channels and recommendations!
            </p>
          </div>
        </div>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default AllOptions
