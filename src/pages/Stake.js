import {useState} from 'react'
import {Button, Modal} from 'antd'
import check from '../assets/img/check.png'

import { Wrapper } from '../components/Styles/Stake.styles.js'


const Stake = () => {

  const [claim, setClaim] = useState(false)

  const handleCancel = () => {
    setClaim(false)
  }

  return (
    <Wrapper>
      <div className="stake">
        <h1 className="heading">Stake</h1>
        <div className="add-border mt">
          <p>Amount to stake</p>
          <b>1.00</b>
          <p>Balance <span>0.00sDAO</span></p>
        </div>
        <div className="add-border mt">
          <div className="apart">
            <p>Stake duration <br/><b>12</b></p>
            <span className="one-year">1 Year</span>
          </div>
        </div>
        <p className="mt">You will receive 0.0008 SDAO</p>
        <div className="apart">
          <Button className="app-btn opt">Optin</Button>
          <Button className="stake-btn">Stake</Button>
        </div>
      </div>
      <div className="summary">
        <h1 className="heading">Summary</h1>
        <div className="add-border mt">
          <p>Your total staked SDAO</p>
          <b>1.00</b>
        </div>
        <div className="add-border mt">
          <div className="apart">
            <p>Claimable rewards <br/><b>1.50 SDAO</b></p>
            <span onClick={() => setClaim(true)} className="app-btn claim">Claim</span>
          </div>
        </div>
        <div className="apart mt">
          <div className="add-border p">
            <p>Average Locking Period</p>
            <b>12 Months</b>
          </div>
          <div className="add-border p">
            <p>Your Voting Power</p>
            <b>10%</b>
          </div>
        </div>
        <Modal className="modal" visible={claim} onCancel={handleCancel} footer={null}>
          <h1 style={{color: '#B523A6'}}>You can’t claim yet</h1>
          <p>Here is what you have to do</p>
          <p>
            <img src={check} alt=""/>
            <span>Vote on the current proposals to be eligible to claim rewards</span>
          </p>
          <p>
            <img src={check} alt=""/>
            <span>
              Rewards are calculated and available for claiming at theend of every month
            </span>
          </p>
          <p>
            <img src={check} alt=""/>
            <span>
              Remember if you are inactive for 3 consecutive months your
               rewards are going to be slashed amd redistributed
               to active participants
            </span>
          </p>
        </Modal>
      </div>
    </Wrapper>
  )
}

export default Stake