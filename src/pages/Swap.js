import {Button} from 'antd'

import token from '../assets/img/token.png'
import selecToken from '../assets/img/select-token.png'
import swapDown from '../assets/img/swap-down.png'
import swapUp from '../assets/img/swap-up.png'

import { Wrapper } from '../components/Styles/Exchange.styles.js'

const Swap = () => {

  return (
    <Wrapper className="app-pd">
      <h1>Exchange Token</h1>
      <div className="from">
        <div className="bal"><div></div><span>BALANCE 1.999</span></div>
        <div className="apart">
          <p>From <br/><b>1</b></p>
          <div className="max">
            <span>MAX</span>
            <img src={token} alt=""/></div>
        </div>
      </div>
      <div className="swap-arrow">
        <img src={swapDown} alt=""/>
        <img src={swapUp} alt=""/>
      </div>
      <div className="to">
        <p>To <br/><b>120</b></p>
        <img src={selecToken} alt=""/>
      </div>
      <div className="mt grey-bg">
        <div className="apart">
          <b>Price 120 IDX per TM</b>
        </div>
        <div className="apart">
          <b>Minimum received</b>
          <b>119.6</b>
        </div>
        <div className="apart">
          <b>Slippage Tolerance</b>
          <b>0.5%</b>
        </div>
        <div className="apart">
          <b>Swap Fee</b>
          <b>0.002 Algo</b>
        </div>
        <div className="apart">
          <b>Price Impact</b>
          <b>0.201%</b>
        </div>
      </div>
      <p style={{textAlign: 'center', fontWeight: 'bold'}}>
        To swap these assets, you need to opt-in your account to the IDX asset.
        You only need to do this once per account to validate that it has access to the IDX asset.
      </p>
      <div className="apart">
        <Button className="app-btn btns">OPTIN</Button>
        <Button className="swap btns">SWAP</Button>
      </div>
    </Wrapper>
  )
}

export default Swap