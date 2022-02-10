import {Button, Card, Progress, Tag, Alert} from 'antd'

import algo from '../assets/img/algor.png'
import idex from '../assets/img/asset.png'
import tin from '../assets/img/tin.png'

import { Wrapper } from '../components/Styles/PoolPage.styles.js'

const CreatePool = () => {

  return (
    <Wrapper className="app-pd">

      <div>
        <p>Algorand TestNet</p>
        <h2>Choose token & weights</h2>
        <Card size="small" extra="Initial Liquidity" title="Assets">
          <div className="items">
            <div className="apart">
              <Tag className="tag"><img src={algo} width="20" alt="algofinance"/> ALGO</Tag>
              <span>0</span>
            </div>
            <div className="apart">
              <span>Balance: 10 <a href="#">Max</a></span>
              <span>0.012</span>
            </div>
          </div>
          <div className="items">
            <div className="apart">
              <Tag className="tag"><img src={idex} width="20" alt="algofinance"/> IDEX</Tag>
              <span>0</span>
            </div>
            <div className="apart">
              <span>Balance: 10 <a href="#">Max</a></span>
              <span>0.012</span>
            </div>
          </div>
          <div className="items">
            <div className="apart">
              <Tag className="tag"><img src={tin} width="20" alt="algofinance"/> TIN</Tag>
              <span>0</span>
            </div>
            <div className="apart">
              <span>Balance: 10 <a href="#">Max</a></span>
              <span>0.012</span>
            </div>
          </div>
        </Card>
        <div className="apart mt">
          <b>Total allocated</b>
          <b>100.00%</b>
        </div>
        <Progress percent={100} />
        <div className="pool-fee">

          <Card className="mt">
            <h2>Set Pool Fees</h2>
            <b>Initial Swap Fee</b><br/>
            <small>0.30% is best for most weighted pools with estimated assets.</small>
            <div className="tags">
              <Tag>0.1%</Tag>
              <Tag>0.3%</Tag>
              <Tag>1.0%</Tag>
              <Tag>1.1%</Tag>
            </div>
          </Card>
          <div className="apart">
            <b>Total</b>
            <b>$2.00</b>
          </div>
        </div>
        <div className="add-liquidity">
          <p>
            To add liquidity, you need to first opt-in your account to the liquidity token of this pool.
            You only need to do this once per account to validate that it has access to the liquidity token
          </p>
        </div>
        <div className="btns">
          <Button className="app-btn">Optin</Button>
          <Button className="cp">Create Pool</Button>
        </div>
        <Alert
          className="mt"
          message="By adding liquidity you’ll earn 0.25% of all trades on this pair propotional to your share of the pool. Fees are added to the pool , accrue in real time and can be claimed by withdrawing your liquidity."
          type="warning"
          closable
        />
      </div>
      <div>
        <Card size="small" title="My Pool Balance" extra={<a href="#">-</a>}>
          <div className="right-card">
            <div>
              <span className="span">ALGO <br/><small>Algorand</small></span>
            </div>
            <p>0 <br/><small>$0.00</small></p>
          </div>
          <div className="right-card">
            <div>
              <span className="span">IDX <br/><small>Idex</small></span>
            </div>
            <p>0 <br/><small>$0.00</small></p>
          </div>
          <div className="right-card">
            <div>
              <span className="span">TIN <br/><small>Tinyman</small></span>
            </div>
            <p>0 <br/><small>$0.00</small></p>
          </div>
          <div className="right-card">
            <div>
              <b className="span">Total</b>
            </div>
            <p><b>$0.00</b></p>
          </div>
        </Card>
        <Card size="small" title="Pool Token in my wallet" extra={<a href="#">-</a>}>
          <div className="right-card">
            <div>
              <span className="span">ALGO <br/><small>Algorand</small></span>
            </div>
            <p>0 <br/><small>$0.00</small></p>
          </div>
          <div className="right-card">
            <div>
              <span className="span">IDX <br/><small>Idex</small></span>
            </div>
            <p>0 <br/><small>$0.00</small></p>
          </div>
          <div className="right-card">
            <div>
              <span className="span">TIN <br/><small>Tinyman</small></span>
            </div>
            <p>0 <br/><small>$0.00</small></p>
          </div>
          <div className="right-card">
            <div>
              <b className="span">Total</b>
            </div>
            <p><b>$0.00</b></p>
          </div>
        </Card>
      </div>
    </Wrapper>
  )
}

export default CreatePool