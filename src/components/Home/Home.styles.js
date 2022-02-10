import styled from 'styled-components'

export const Wrapper = styled.div`
    margin-top: 22px;

  @media (max-width: 767px) {
 
  }
`

export const Hero = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;

  @media (max-width: 767px) {
    display: block;
  }
`

export const Intro = styled.h1`
  font-size: 5em;
  font-weight: 900;
  @media (max-width: 767px) {
    font-size: 3em;
  }
`

export const HeroImg = styled.img`
   @media (max-width: 767px) {
    display: none;
  }
    
`

export const Feat = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  text-align: center;
  
   @media (max-width: 767px) {
    display: block;
  }
`

export const FeatImg = styled.img`
    width: 50px;
    margin-bottom: 20px;
`

export const FeatH1 = styled.h1`
    font-weight: 900;
`

export const FeatP = styled.p`
    margin-bottom: 0;
`

export const Investors = styled.div`
  margin: 70px 200px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  //text-align: center;
  
   @media (max-width: 767px) {
    display: block;
  }
`

