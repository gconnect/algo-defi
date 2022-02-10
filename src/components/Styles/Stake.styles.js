import styled from 'styled-components'


export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin: 40px auto;
  
  .heading {
    text-align: center;
  }
  
  .modal span {
    margin-left: 10px;
  }
  
  .apart {
     display: flex;
     justify-content: space-between;
  }
  
  .stake, .summary {
    border-radius: 5px;
    border: 1px solid lightgrey;
    padding: 30px;
    width: 80%;
    margin: 20px;
  } 
  
  .summary {
    background: #fbfafa;
  }
  
  .add-border {
     border: 1px solid lightgrey;
     border-radius: 5px;
     padding: 20px;
  }
  
  .one-year, .claim {
     border: 1px solid #B523A6;
     align-self: flex-start;
     padding: 7px 12px;
     border-radius: 5px;
     cursor: pointer;
  }
  
  .p {
    margin-bottom: 0;
    padding: 8px;
    width: 45%;
  }
  
   .stake-btn {
    background: rgba(181, 35, 166, 0.22);
    &:hover {
     border: 1px solid rgba(181, 35, 166, 0.22);
     color: #111;
    }
   
 }
 
 .stake-btn, .opt {
    width: 200px;
 }
 
  
  @media (max-width: 767px) {
    
  }
`