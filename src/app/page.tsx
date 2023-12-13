import Home from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index() {
  const props = {
    banners: bannersMock,
    newGames: gamesMock,
    mostPopularHighlight: highlightMock,
    mostPopularGames: gamesMock,
    upcommingGames: gamesMock,
    upcommingHighlight: highlightMock,
    upcommingMoreGames: gamesMock,
    freeGames: gamesMock,
    freeHighlight: highlightMock
  }

  return <Home {...props} />
}
