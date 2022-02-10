import {Button, Card, Tag} from 'antd'

import deleteBtn from '../assets/img/delete.png'
import piechart from '../assets/img/piechart.png'

import { Wrapper } from '../components/Styles/PoolPage2.styles.js'

const CreatePool2 = () => {

  return (
    <Wrapper className="app-pd">
      <div>
        <p>Algorand TestNet</p>
        <h2>Choose token & weights</h2>
        <Card
          size="small"
          extra="Weight"
          title="Assets"
          headStyle={{background: '#f5f4f4'}}
        >
          <div className="items">
            <div className="apart">
              <Button className="app-btn pp">Select asset</Button>
              <div>50% <img src={deleteBtn} alt=""/></div>
            </div>
          </div>
          <div className="items">
            <div className="apart">
              <Button className="app-btn pp">Select asset</Button>
              <div>50% <img src={deleteBtn} alt=""/></div>
            </div>
          </div>
          <Button className="add-asset">Add asset</Button>
          <div className="apart mt">
            <b>Total allocated</b>
            <b>0.00%</b>
          </div>
        </Card>
        <Card>
          <h2>Set Pool fees</h2>
          <b>Initial swap fee</b>
          <p>0.30% is best for most weighted pools with estimated <assets className=""></assets></p>
          <div>
            <Tag>0.1%</Tag>
            <Tag>0.3%</Tag>
            <Tag>1.0%</Tag>
            <Tag>2.4%</Tag>
          </div>
        </Card>
        <Button className="app-btn">Connect wallet</Button>
      </div>
      <div>
        <Card size="small" title="Pool Summary" className="card-pad">
          <img src={piechart} alt=""/>
        </Card>
        <Card size="small" title="Token Prices">

        </Card>
      </div>
    </Wrapper>
  )
}

export default CreatePool2