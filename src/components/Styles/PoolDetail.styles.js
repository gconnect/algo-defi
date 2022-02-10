import styled from 'styled-components'


export const Wrapper = styled.div`

  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 24px;
  

  .sp {
    font-weight: 900;
    margin-right: 200px;
  }
  .tag {
    font-weight: 900;
    margin: 0 2px;
    padding: 7px 28px;
    width: 110px;
    background: rgba(196, 196, 196, 0.63);
  }
  .cards {
    display: flex;
    justify-content: space-between;
  }
  .right-card {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  
    span {
      position: relative;
    small {
      position: absolute;
      left: 0;
      top: 12px;
     }
    }
     
  }
 
  @media (max-width: 767px) {
    
  }
`