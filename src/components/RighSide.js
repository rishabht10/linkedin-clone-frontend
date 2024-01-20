import styled from "styled-components";
import React from 'react'

export default function RightSide(props) {
  return (
    <Container>
      
     <FollowCard>
     <Title>
      <h2>
        Add to your feed
      </h2>
      <img src="/images/feed-icon.svg"></img>
     </Title>

      <FeedList>
      <li>

        <a><Avatar/></a>
        <div>
          <span>#Linkedin</span>
          <button>Follow</button>
        </div>
      </li>

       <li>

        <a><Avatar/></a>
        <div>
          <span>#Video</span>
          <button>Follow</button>
        </div>
      </li>

      </FeedList>

      <Recommendation>
        View all Recommendation
        <img src="/images/right-icon.svg"></img>
      </Recommendation>
      <BannerCard>
        <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"></img>
      </BannerCard>

      </FollowCard> 

      
      </Container>
  )
}
const Container=styled.div`
 grid-area: right;
 @media (min-width: 768px){
   
   width:90%;
  margin-left: 0px;
  margin-right: 100px;
 }
 /* margin-left:20vw; */
 @media (max-width: 768px){
  width: 100%;
  /* margin-left: 0px; */
 }
`;

const FollowCard=styled.div`
/* display: flex; */
align-items: center;
background-color: #fff;
overflow: hidden;
margin-bottom: 8px;
border-radius: 5px;
position:relative;
border:none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0/20%);
padding: 12px;



`;

const Title=styled.div`
display: inline-flex;
align-items:center;
justify-content: space-between;
font-size: 18px;
width: 100%;
color:rgba(0,0,0,0.6);
/* border: 2px solid black; */


`;

const FeedList=styled.ul`
margin-top: 18px;
li{
display: flex;
align-items: center;
margin: 12px 0;
position: relative;
font-size: 15px;

&>div{
  display: flex;
  flex-direction: column;

};

button{
  background: transparent;
  color: rgba(0,0,0,0.6);
  padding: 8px 28px;
  align-items: center;
  border-radius: 14px;
  box-sizing: border-box;
  font-weight: 599;
  display: inline-flex;
  justify-content: center;
  max-width: 48px;
  max-height: 32px;
  text-align: center;
  outline: none;

}
}

`;

const Avatar=styled.div`

background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
background-size: contain;
background-position: center;
background-repeat: no-repeat;
width: 48px;
height:48px;
margin-right:8px;


`;

const Recommendation=styled.a`

color:#0a66c2;


`;

const BannerCard=styled(FollowCard)`


`;