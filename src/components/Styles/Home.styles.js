import styled from 'styled-components'


export const Wrapper = styled.div`

  h1 {
    text-align: center;
    grid-column: 1 / -1;
  }
  
  .stats {
    background: #B523A6;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin: 20px 80px;
    padding: 40px 10px;
  }
  
   .table-heading {
      display: flex;
      justify-content: space-between;
      margin: 50px 0;
    }
 
  @media (max-width: 767px) {
    
  }
`