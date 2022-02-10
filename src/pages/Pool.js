import {Table, Button} from 'antd'

import { Wrapper } from '../components/Styles/Home.styles'

const columns = [
  {title: 'Asset Composition', dataIndex: 'name'},
  {title: 'Pool Value', dataIndex: 'comp'},
  {title: 'Volume(24h)', dataIndex: 'vol'},
  {title: 'Current Price', dataIndex: 'bal'},
  {title: 'APR', dataIndex: 'apr'}
]

const data = [
  {
    key: '1',
    name: 'IDX - 678',
    comp: 'TM/YLD',
    bal: 20,
    vol: '$2000',
    apr: '23.6%'
  },
  {
    key: '2',
    name: 'IDX - 678',
    comp: 'TM/YLD',
    bal: 20,
    vol: '$2000',
    apr: '23.6%'
  },
  {
    key: '3',
    name: 'IDX - 678',
    comp: 'TM/YLD',
    bal: 20,
    vol: '$2000',
    apr: '23.6%'
  },
  {
    key: '4',
    name: 'IDX - 678',
    comp: 'TM/YLD',
    bal: 20,
    vol: '$2000',
    apr: '23.6%'
  },
  {
    key: '5',
    name: 'IDX - 678',
    comp: 'TM/YLD',
    bal: 20,
    vol: '$2000',
    apr: '23.6%'
  },
  {
    key: '6',
    name: 'IDX - 678',
    comp: 'TM/YLD',
    bal: 20,
    vol: '$2000',
    apr: '23.6%'
  },
  {
    key: '7',
    name: 'IDX - 678',
    comp: 'TM/YLD',
    bal: 20,
    vol: '$2000',
    apr: '23.6%'
  },
]

const Home = () => {


  return (
    <Wrapper>
      <div className="table-heading app-pd">
        <h2>My Pools</h2>
        <Button className="app-btn">Create a Pool</Button>
      </div>
      <Table className="app-pd" columns={columns} dataSource={data} size="small" />

    </Wrapper>
  )
}

export default Home