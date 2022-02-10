import { Link } from 'react-router-dom'
import { Footer, FootTitle, Icons } from './Footer.styles'

import logo from '../../../assets/img/logo2.png'
import twitter from '../../../assets/img/twitter.png'

const AppFooter= () => {

  return (
    <Footer>
      <div>
        <img style={{ marginBottom: '20px' }} src={logo} alt="algofinance"/>
        <Link to="#">Pool</Link>
        <Link to="#">Swap</Link>
        <Link to="#">Assets</Link>
      </div>
      <div>
        <FootTitle>Governance</FootTitle>
        <Link to="#">Stake</Link>
        <Link to="#">Vote</Link>
        <Link to="#">Claim Reward</Link>
      </div>
      <div>
        <FootTitle>Learn</FootTitle>
        <Link to="#">Blog</Link>
        <Link to="#">Documentation</Link>
        <Link to="#">White Paper</Link>
        <Link to="#">Github</Link>
      </div>
      <div>
        <FootTitle>Community</FootTitle>
        <Icons>
          <img src={twitter} alt="algofinance"/>
          <img src={twitter} alt="algofinance"/>
          <img src={twitter} alt="algofinance"/>
          <img src={twitter} alt="algofinance"/>
          <img src={twitter} alt="algofinance"/>
          <img src={twitter} alt="algofinance"/>
        </Icons>
      </div>
    </Footer>
)};

export default AppFooter
