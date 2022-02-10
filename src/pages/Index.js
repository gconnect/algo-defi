import { Button } from 'antd'

import heroImg from '../assets/img/hero.png'
import img1 from '../assets/img/img1.png'
import img2 from '../assets/img/img2.png'
import img3 from '../assets/img/img3.png'
import img4 from '../assets/img/img4.png'
import investors from '../assets/img/pool.png'
import traders from '../assets/img/traders.png'
import check from '../assets/img/check.png'

import {
  Wrapper,
  Hero,
  Intro,
  HeroImg,
  Feat,
  FeatImg,
  FeatH1,
  FeatP,
  Investors
} from '../components/Home/Home.styles'

const Home = () => {

  return (
    <Wrapper>
      <Hero className="app-pd">
        <div>
          <Intro>
            Automated <div className="app-color">Portfolio</div>
            <div><span className="app-color">Manager</span> and</div>
            <div>Crypto Exchange</div>
            Platform
          </Intro>
          <p>
            Stay up to date with price trends and let your money work for you.
            Invest in liquidity pools and swap one asset for another at a reasonably low fee.
          </p>
          <p>
            Stake SDAO token to participate in governance and get rewarded for participating in governance.
          </p>
        </div>
        <HeroImg src={heroImg} alt="hero"/>
      </Hero>
      <Feat className="app-pd">
        <div>
          <FeatImg src={img1} alt="algofinance"/>
          <FeatP>Trade Volume(7m)</FeatP>
          <FeatH1>$700M</FeatH1>
        </div>
        <div>
          <FeatImg src={img2} alt="algofinance"/>
          <FeatP>Total Fees Earned</FeatP>
          <FeatH1>$700M</FeatH1>
        </div>
        <div>
          <FeatImg src={img3} alt="algofinance"/>
          <FeatP>Total Liquidity</FeatP>
          <FeatH1>$700M</FeatH1>
        </div>
        <div>
          <FeatImg src={img4} alt="algofinance"/>
          <FeatP>Liquidity Providers</FeatP>
          <FeatH1>$700M</FeatH1>
        </div>
      </Feat>
      <Investors>
        <div>
          <Intro style={{ fontSize: '22px' }}>For <span className="app-color">Investors</span></Intro>
          <h3 style={{ fontWeight: 900 }}>Portfolio that generate yield automatically</h3>
          <p><img src={check} alt="algofinance"/> Tested and secure</p>
          <p><img src={check} alt="algofinance"/> Fast, effiecient and low fee</p>
          <p><img src={check} alt="algofinance"/> Stake, vote and earn rewards</p>
          <Button className="app-btn">Create a Pool</Button>
        </div>
        <img src={investors} alt="algofinance"/>
      </Investors>

      <Investors>
        <img src={traders} alt="algofinance"/>
        <div>
          <Intro style={{ fontSize: '22px' }}>For <span className="app-color">Traders</span></Intro>
          <h3 style={{ fontWeight: 900 }}>Decentralized trades at optimal prices</h3>
          <p><img src={check} alt="algofinance"/> Optimal prices</p>
          <p><img src={check} alt="algofinance"/> Cheap transaction fee</p>
          <p><img src={check} alt="algofinance"/> Secure and flexible trading</p>
          <Button className="app-btn">Swap Asset</Button>
        </div>
      </Investors>

    </Wrapper>
  )
}

export default Home
