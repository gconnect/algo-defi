import styled from 'styled-components'


export const Wrapper = styled.div`

  width: 70%;
  margin: 40px auto;
  
  h1 {
    text-align: center;
  }
  
  .bal {
    display: flex;
    justify-content: space-between;
  }
  
  .max {
    display: flex;
    align-content: center;
    
    span {
      padding: 20px;
    }
  }
 
 .from, .to {
    border: 1px solid #c1c0c0;
    border-radius: 5px;
    padding: 40px;
 }
 
 .to {
    display: flex;
    justify-content: space-between;
    height: 250px;
 }

  .apart {
    display: flex;
    justify-content: space-between; 
 
  }
 
 .swap-arrow {
    display: flex;
    justify-content: center;
    margin: 12px 0;
 }
 
 .grey-bg {
    background: #E5E5E5;
    margin-bottom: 20px;
    padding: 30px;
   
 }
 .swap {
    background: rgba(181, 35, 166, 0.22);
    &:hover {
     border: 1px solid rgba(181, 35, 166, 0.22);
     color: #111;
    }
   
 }
 
 .btns {
       width: 300px;
    }
 
  @media (max-width: 767px) {
    
  }
`