import styled from "styled-components";
import React from 'react'

export default function LeftSide(props) {
  return (
    <Container>
        <Artcard>

          <UserInfo>
          <CardBackground></CardBackground>
          <a>
            <Photo></Photo>
            <Link>Welcome, there!</Link>
          </a>
          <a>
            <AddPhotoText>Add a Photo</AddPhotoText>
          </a>
          </UserInfo>
          <Widget>
            <a>
              <div>
                <span>Connections</span>
                <span>Grow your Network</span>
              </div>
                <img src="/images/widget-icon.svg"></img>
            </a>

              
          </Widget>
           <Item>
            <span>
           <img src="/images/item-icon.svg"></img>
          &nbsp;My Items

            </span>
           </Item>
        </Artcard>

        <CommunityCard>
          <a><span>Groups</span></a>
          <a>
            <span>
              Events&nbsp;
              <img src="/images/plus-icon.svg"></img>
            </span>
          </a>
          <a>
            <span>
              Follow Hashtags
            </span>
          </a>
          <a>
            <span>Discover More</span>
          </a>
        </CommunityCard>
    </Container>
  )
}
const Container=styled.div`
 grid-area: left;
 /* border: 2px solid black; */
 @media (min-width: 768px){

   width:150%;
 }
 @media (max-width: 768px){
  width: 100%;
 }
 
`;

const Artcard=styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;

transition: box-shadow 83ms;
position: relative;
border:none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0/20%);

`;

const UserInfo=styled.div`
border-bottom: 1px solid rgba(0, 0, 0, 0.15);
padding:12px 12px 16px;
word-wrap: break-word;
word-break: break-word;



`;

const CardBackground=styled.div`
background: url("/images/card-bg.svg");
background-position: center;
background-size: 462px;
height: 54px;
margin:-12px -12px 0;

`;

const Photo=styled.div`
box-shadow: none;
background-image: url("/images/photo.svg");
width:72px;
height: 72px;
background-size: 60%;
background-repeat: no-repeat;
background-position: center;
border: 2.9px solid white;
margin: -38px auto 12px;
border-radius: 50%;
background-clip: content-box;
background-color: #fff;
box-sizing: border-box;


/* background-color: white; */

`;

const Link=styled.div`
font-size: 16px;
line-height: 1.5;
color: rgba(0,0,0,0.9);
font-weight: 600;

`;

const AddPhotoText=styled.div`
color:#0a66c2;
margin-top: 4px;
font-size: 14.55px;
font-weight: 600;
line-height: 1.5;
`;

const Widget=styled.div`
border-bottom: 1px solid rgba(0,0,0,0.15);
padding-top: 12px;
padding-bottom: 12px;
&>a{
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 12px;

}

&:hover{

  background-color:rgba(0,0,0,0.08);


}

div{
  display: flex;
  flex-direction: column;
  text-align: left;
  span{
    font-size: 15px;
    line-height: 1.333;
    &:first-child{
      color:rgba(0,0,0,0.6);
    }
    &:nth-child(2){
      color: rgba(0,0,0,1);
    }
  }
}

svg{
  color: rgba(0,0,0,1);
}

`;

const Item=styled.a`
border-color: rgba(0,0,0,0.08);
text-align: left;
padding: 12px;
font-size: 15px;
display: block;
span{
  display: flex;
  align-items: center;
  color: rgba(0,0,0,1)
  svg{
    color: rgba(0,0,0,0.6);
  }
}

&:hover{

  background-color: rgba(0,0,0,0.08);
}

`;

const CommunityCard=styled(Artcard)`
display: flex;
flex-direction: column;
text-align: left;
padding: 8px 0 0;
a{
  color: black;
  padding: 4px 12px 4px 12px;
  font-size: 15px;
  span{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &:last-child{
    border-top: 1px solid #d6cec2;
    
    text-decoration: none;
    padding: 12px;
    color: rgba(0,0,0,0.6);
    &:hover{
      background-color: rgba(0,0,0,0.08);
      color: rgba(0,0,0,0.6);
    }

  }

}
a:hover{
  color:#0a6cc2;
  cursor: pointer;
}

`;