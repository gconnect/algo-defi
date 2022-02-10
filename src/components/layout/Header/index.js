import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Header, Ul, Li, LogoImg, Links, Icons, Button } from './Header.styles'
import { connectBtnReducer } from '../../../redux/connectWallet'

import logo from '../../../assets/img/logo.png'

const AppHeader = ({ appLinks }) => {
  const dispatch = useDispatch()

  return (
    <Header>
      <Links>
        <Link to='/'>
          <LogoImg src={logo} alt="algofinance"/>
        </Link>
      </Links>
      <Icons>
        <Ul>
          {appLinks.map((link, i) => <Li key={i}>
            <Link to={link.link}>{link.title}</Link>
          </Li>)}
        </Ul>
        <Button onClick={() => dispatch(connectBtnReducer())}>Connect Wallet</Button>
      </Icons>
  </Header>
)};

export default AppHeader;
