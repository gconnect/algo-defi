import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 32px 80px;
  margin-top: 30px;
  background: #212121;
  
  a {
    display: block;
    color: #f0eeee;
    margin-bottom: 12px;
  }
  
   @media screen and (max-width: 767px) {
     padding: 32px 18px; 
     display: block;  
  }

`

export const FootTitle = styled.p`
  font-weight: 900;
  color: #fefefe;
   @media screen and (max-width: 767px) {
  }
`


export const Icons = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    img {
      flex: 33.33%;
      width: 10px;
    
    }
    
   @media screen and (max-width: 767px) {
    Icons {
      display: block;
      width: 50%;
    }
  }
`



