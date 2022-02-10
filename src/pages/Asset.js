import { Table, List, Card } from 'antd'

import asset from '../assets/img/asset.png'
import { Wrapper } from '../components/Styles/Assets.styles'

const lists = [
  {title: 'Total Liquidity',},
  {title: 'Volume (24h)',},
  {title: 'Algo Price (24h)',},
];

const columns = [
  {title: 'ASSET', dataIndex: 'name', render: (text, rec) => rec.name },
  {title: 'TVL', dataIndex: 'tvl',},
  {title: 'VOLUME', dataIndex: 'vol',},
  {title: 'PRICE', dataIndex: 'price',}
]
const data = [
  {
    key: '1',
    name: 'IDX - 678',
    vol: '$24',
    tvl: 'New York No. 1 Lake Park',
    price: '23.6'
  },
  {
    key: '2',
    name: 'IDX - 678',
    vol: '$24',
    tvl: 'London No. 1 Lake Park',
    price: '23.6'
  },
  {
    key: '3',
    name: 'IDX - 678',
    vol: '$24',
    tvl: 'Sidney No. 1 Lake Park',
    price: '23.6'
  },
  {
    key: '4',
    name: 'IDX - 678',
    vol: '$24',
    tvl: 'Sidney No. 1 Lake Park',
    price: '23.6'
  },
  {
    key: '5',
    name: 'IDX - 678',
    vol: '$24',
    tvl: 'Sidney No. 1 Lake Park',
    price: '23.6'
  },
  {
    key: '6',
    name: 'IDX - 678',
    vol: '$24',
    tvl: 'Sidney No. 1 Lake Park',
    price: '23.6'
  },
]


const Asset = () => {



  return (
    <Wrapper className="app-pd">
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={lists}
        renderItem={item => (
          <List.Item>
            <Card title={item.title}>Card content</Card>
          </List.Item>
        )}
      />,
      <Table columns={columns} dataSource={data} size="small" />
    </Wrapper>
  )
}

export default Asset