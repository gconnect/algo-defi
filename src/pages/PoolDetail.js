import {Tag, Card, Table} from 'antd'

import idex from '../assets/img/asset.png'
import algo from '../assets/img/algor.png'
import tin from '../assets/img/tin.png'
import chart from '../assets/img/Chart.svg'

import {Wrapper } from '../components/Styles/PoolDetail.styles'

const columns = [
  {title: 'ASSET', dataIndex: 'name', render: (text, rec) => rec.name },
  {title: 'BALANCE', dataIndex: 'bal',},
  {title: 'VALUE', dataIndex: 'val',},
]
const data = [
  {
    key: '1',
    name: 'IDX - 678',
    bal: '$2400',
    val: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'IDX - 678',
    bal: '$24000',
    val: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: '$24',
    bal: 'Sidney No. 1 Lake Park',
    val: '23.6'
  }
]

const PoolDetail = () => {


  return (

    <Wrapper className="app-pd">
      <div>
        <div className="stable-pool">
          <span className="sp">Stable Pool</span>
          <span>
          <Tag className="tag"><img src={algo} width="20" alt="algofinance"/> ALGO</Tag>
        </span>
          <span>
          <Tag className="tag"><img src={idex} width="20" alt="algofinance"/> IDX</Tag>
        </span>
          <span>
          <Tag className="tag"><img src={tin} width="20" alt="algofinance"/> TIN</Tag>
        </span>
        </div>
        <p>Swap fee currently fixed at 0.002%</p>
        <p>Pool returns 1.2%</p>
        <img src={chart} alt=""/>
        <div className="cards">
          <Card size="small" style={{width: '100%', marginRight: '20px'}}>
            <p>Pool Value</p>
            <b>$44,315,423</b>
          </Card>
          <Card size="small" style={{width: '100%', marginRight: '20px'}}>
            <p>Volume (24)</p>
            <b>$44,313</b>
          </Card>
          <Card size="small" style={{width: '100%', marginRight: '20px'}}>
            <p>APR</p>
            <b>3.38%</b>
          </Card>
        </div>
        <h2 style={{marginTop: '30px'}}>Pool Composition</h2>
        <Table columns={columns} dataSource={data} size="small" />
      </div>
      <div>
        <Card size="small" title="My Pool Balance" extra={<a href="#">-</a>}>
          <div className="right-card">
            <div>
              <img src={algo} alt="algofinance"/>
              <span className="span">ALGO <br/><small>Algorand</small></span>
            </div>
            <p>0 <br/><small>$0.00</small></p>
          </div>
          <div className="right-card">
            <div>
              <img src={idex} alt="algofinance"/>
              <span className="span">IDX <br/><small>Idex</small></span>
            </div>
            <p>0 <br/><small>$0.00</small></p>
          </div>
          <div className="right-card">
            <div>
              <img src={tin} alt="algofinance"/>
              <span className="span">TIN <br/><small>Tinyman</small></span>
            </div>
            <p>0 <br/><small>$0.00</small></p>
          </div>
        </Card>
      </div>
    </Wrapper>

  )
}

export default PoolDetail
