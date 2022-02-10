import styled from 'styled-components'


export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin: 40px auto;
  
  .heading {
    text-align: center;
  }
  
  .stake, .summary {
    border-radius: 5px;
    border: 1px solid lightgrey;
    padding: 30px;
    width: 80%;
    margin: 20px;
  } 
  
  .summary {
    background: lightgrey;
  }
 
  
  @media (max-width: 767px) {
    
  }
`