import styled from "styled-components";
import React from 'react'

export default function Main(props) {
  return (
    <Container>
      <ShareBox>

        share
       
      <div>
        <img src="/images/user.svg"></img>
        <button>Start a post</button>
      </div>

      <div>
        <button>
          <img src="images/linphoto.png"></img>
          <span>Photo</span>
        </button>

        <button>
          <img src="/images/linvideo.png"></img>
          <span>Video</span>
        </button>

        <button>
          <img src="/images/linevent.png"></img>
          <span>Event</span>
        </button>

        <button>
          <img src="/images/linarticle.png"></img>
          <span>Write article</span>
        </button>
      </div>

      </ShareBox>
      <Article>
        <SharedActor>
          <a>
            <img src="/images/user.svg"></img>
            <div>
              <span>Title</span>
              <span>Info</span>
              <span>Date</span>
            </div>
          </a>
          <button>
            <img src="/images/ellipses.png"></img>
          </button>
        </SharedActor>
        <Description>
          Description
        </Description>
        <SharedImg>
          <a>
            <img src="/images/shared-image.jpg"></img>
          </a>
        </SharedImg>
        <Socialcount>
          <li>
          <button>
          <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb">
          </img>
          <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"></img>
          <span>
            95
          </span>
          </button>
          </li>
          <li>
            <a>
              11 comments
            </a>
          </li>
        </Socialcount>
        <SocialActions>

        <button>
          <img src="/images/like-icon.png"></img>
          <span>Like</span>
        </button>

        <button>
          <img src="/images/comment-icon.png"></img>
          <span>Comment</span>
        </button>

        <button>
          <img src="/images/share-icon.png"></img>
          <span>Share</span>
        </button>

        <button>
          <img src="/images/send-icon.png"></img>
          <span>Send</span>
        </button>
        </SocialActions>

      </Article>
    </Container>
  )
}
const Container=styled.div`
 grid-area: main;
 @media (min-width:768px){
   margin-left: 120px;
   width: 80%;
  }
  

`;

const CommonCard=styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0/20%);



`;

const ShareBox=styled(CommonCard)`
display: flex;
flex-direction: column;
/* align-items: center; */
color: 958b7b;
margin: 0 0 8px;
background: white;
div{
  button{
    outline: none;
   color: rgba(0,0,0,0.6);
   font-size: 15px;
   line-height: 1.5;
   min-height: 48px;
   background: transparent;
   border: none;
   display: flex ;
   align-items: center;
   font-weight: 599;


  }

  &:first-child{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0px 16px 0px 16px;
    img{
      width:48px;
border-radius:50%;
margin-right:8px;  
  }
  button{
    margin: 4px 0;
    flex-grow: 1;
    border-radius: 35px;
    padding-left:16px;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 35px;
    background-color: white;
    text-align: left;
  }
  }

  &:nth-child(2){
display:flex;
justify-content: center;
flex-wrap: wrap;



button{
  transform: scale(0.89);
  /* border: 2px solid black; */
  padding: 0;
  img{

  }
  
  span{
    color:#70b5f9;
    margin-left: -11px;
  }
}


  }

  &:nth-child(2)>button:hover{
    cursor: pointer;
    span{
      color: grey;
    }
  }

}

div>button{
  img{
    transform: scale(0.55);
  

  }
}



`;

const Article=styled(CommonCard)`
padding: 0;
margin: 0 0 8px;
overflow: visible;


`;

const SharedActor=styled.div`
padding-right: 40px;
flex-wrap: nowrap;
padding: 12px 16px 0;
margin-bottom: 8px;
align-items: center;
display: flex;
a{
  margin-right: 12px;
  flex-grow:1;
  overflow: hidden;
  display: flex;
  text-decoration: none;
  img{
    width: 48px;
    height: 48px;
    
  }
  &>div{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    margin-left: 8px;
    overflow: hidden;
    span{
      text-align: left;

      &:first-child{
        font-size: 18px;
        font-weight:bolder;
        color: rgba(0,0,0,0.8);
      }
      &:nth-child(n+1){
        font-size: 12px;
        color: rgba(0,0,0,0.6);

      }
    }
  }
}

button{
  position: absolute;
  right:12px;
  top:0;
  background:transparent;
  border: none;
  outline: none;
  img{
    transform: scale(0.4);
  }

}

`;

const Description=styled.div`
padding: 0 16px;
overflow: hidden;
color: rgba(0,0,0,0.9);
font-size: 15px;
text-align: left;
`;

const SharedImg=styled.div`
margin-top: 8px;
width: 100%;
display: block;
position: relative;
background-color: #f9fafb;
img{
  object-fit: contain;
  width: 100%;
  height: 100%;
}

`;

const Socialcount=styled.ul`
li{
  list-style-type: none;
  margin-right: 5px;
  font-size: 14px;
  button{
    display: flex;
    /* background: transparent;
    border: none; */

  }
}
line-height: 1.3;
display: flex;
align-items: flex-start;
overflow: auto;
margin: 0 18px;
padding: 8px 0;
border-bottom: 1px solid #c9e5df;




`;

const SocialActions=styled.div`
display: flex;
align-items: center;
justify-content:flex-start;
margin: 0;
min-height: 40px;
padding: 4px 8px;



button{
  display:inline-flex;
  align-items: center;
  height: 40px;
  padding:8px;
  color:#0a66c2;
  
  @media (min-width: 768px){

    span{
      margin-left: 8px;
    }
  }

  img{
    transform: scale(0.4);
  }
  span{
    margin-left:-11px
  
  }

}


    
  

  

`;