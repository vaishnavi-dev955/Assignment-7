import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../Header'
import NxtWatchContext from '../../Context/NxtWatchContext'
import AllOptions from '../AllOptions'
import './index.css'

class Home extends Component {
  state = {searchInput: '', VideosData: []}

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const Url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(Url, options)
    console.log(response)

    const UpdatingChannelData = Item => {
      const updatedChannel = {
        name: Item.name,
        profileImageUrl: Item.profile_image_url,
      }
      return updatedChannel
    }
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const UpdatedData = data.videos.map(eachItem => ({
        channel: UpdatingChannelData(eachItem.channel),
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({VideosData: UpdatedData})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => this.getHomeVideos()

  render() {
    const {searchInput, VideosData} = this.state
    console.log(VideosData)
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkBtnTheme} = value
          const fullContainer = isDarkBtnTheme
            ? 'Dark-full-container'
            : 'light-full-container'

          return (
            <div className={fullContainer}>
              <Header className="Header-class" />
              <div className="container">
                <AllOptions className="options-class" />
                <div className="search-container">
                  <input
                    type="search"
                    className="searchStyle"
                    placeholder="Search"
                    onChange={this.onChangeSearchInput}
                    value={searchInput}
                  />
                  <button type="button" onClick={this.onClickSearch}>
                    <img
                      src="http://www.clker.com/cliparts/g/Y/P/o/h/U/search-logo-md.png"
                      alt="search"
                      className="search-logo"
                    />
                  </button>
                </div>
              </div>
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
