import styled from 'styled-components'


export const Wrapper = styled.div`

  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 24px;
  
  .items {
    margin: 40px 0;
  }

  .apart {
    display: flex;
    justify-content: space-between; 
    
    img {
      margin-left: 10px;
    }
  }
  
  
  .right-card {
      display: flex;
      justify-content: space-between;
    }
  
 
  @media (max-width: 767px) {
    
  }
`