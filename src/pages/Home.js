import {Table, Button} from 'antd'

import { Wrapper } from '../components/Styles/Home.styles'

const columns = [
{title: 'ASSET', dataIndex: 'name', render: (text, rec) => <a href="#">yieldy</a>  },
{title: 'Composition', dataIndex: 'comp'},
{title: 'My Balance', dataIndex: 'bal'},
{title: 'Pool Value', dataIndex: 'pool'},
{title: 'Volume(24h)', dataIndex: 'vol'},
{title: 'APR', dataIndex: 'apr'}
]
const stakeCols = [
  {title: 'Asset', dataIndex: 'name'},
  {title: 'Total Staked', dataIndex: 'asset'},
  {title: 'Claimable Rewards', dataIndex: 'claimable'},
  {title: 'Stake Duration', dataIndex: 'duration'},
  {title: 'CreatePool Power', dataIndex: 'voting'}
]
const data = [
  {
    key: '1',
    name: 'IDX - 678',
    comp: 'TM/YLD',
    bal: 20,
    pool: '$23.6',
    vol: '$2000',
    apr: '23.6%'
  }
]
const stakes = [
  {
    key: '1',
    name: 'sDAO',
    asset: 2,
    claimable: '3.6',
    duration: '1 Month',
    voting: '3.6%'
  }
]

const Home = () => {


  return (
    <Wrapper>
      <div className="stats">
        <h1>My Investments</h1>
        <div>
          <h2>$20.00</h2>
          <p>Pools</p>
        </div>
        <div>
          <h2>$20.00</h2>
          <p>Stakes</p>
        </div>
      </div>
      <div className="table-heading app-pd">
        <h2>My Pools</h2>
        <Button className="app-btn">Create a Pool</Button>
      </div>
      <Table className="app-pd" columns={columns} dataSource={data} size="small" />
      <div className="table-heading app-pd">
        <h2>My Stakes</h2>
        <Button className="app-btn">Stake</Button>
      </div>
      <Table className="app-pd" columns={stakeCols} dataSource={stakes} size="small" />
    </Wrapper>
  )
}

export default Home