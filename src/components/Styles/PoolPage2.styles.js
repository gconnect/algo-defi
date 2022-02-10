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
    
    .pp {
      background: #1E0EE9;
      border: 1px solid #1E0EE9;
    }
  }
  
  .card-pad img{
    padding: 40px;
  }
  
  
  .add-asset {
    border: 1px solid #1E0EE9;
  }
  
  
  .right-card {
      display: flex;
      justify-content: space-between;
    }
  
 
  @media (max-width: 767px) {
    
  }
`