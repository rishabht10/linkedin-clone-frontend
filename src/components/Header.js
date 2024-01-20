import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <Container>
        <Content>
            <Logo>
            <a href='/home'><img src="/images/home-logo.svg"></img></a>
            </Logo>

            <Search>
              <div>
                <input type="text" placeholder="Search" />
              </div>
              <SearchIcon>
              <img src="/images/search-icon.svg"></img>
              </SearchIcon>

            </Search>
            <Nav>
              <NavListWrap>
              <NavList className='active'>
              <a>

                <img src="/images/nav-home.svg"></img>
                <span>Home</span>
              </a>

              </NavList>

              <NavList>
              <a>

                <img src="/images/nav-network.svg"></img>
                <span>My Network</span>
              </a>

              </NavList>
              <NavList>
              <a>

                <img src="/images/nav-jobs.svg"></img>
                <span>Jobs</span>
              </a>

              </NavList>
              <NavList>
              <a>

                <img src="/images/nav-messaging.svg"></img>
                <span>Messaging</span>
              </a>

              </NavList>
              <NavList>
              <a>

                <img src="/images/nav-notifications.svg"></img>
                <span>Notifs</span>
              </a>

              </NavList>

              <User>
              <a>

                <img className="navlogo" src="/images/user.svg"></img>
                <span>Profile <img src="images/down-icon.svg"></img></span>
                
              </a>
              <Signout>Sign Out</Signout>
                
              </User>

              <Work>

                <a>

                <img className="navlogo" src="/images/nav-work.svg"></img>
                <span>Work <img src="images/down-icon.svg"></img></span>
                
              </a>
              </Work>
              </NavListWrap>


              </Nav>
        </Content>
    </Container>
  )

}
const Container=styled.div`
/* border: 2px solid red; */
background-color:#fff;
border-bottom: 1 px solid rgba(0,0,0,0.08);
left:0;
padding: 0 24px;
position: Fixed;
top: 0px;
width:100vw;
z-index: 100;

`;

const Content=styled.div`

display: flex;
align-items: center;
margin: 0 auto;
min-height:100% ;
max-width: 1128px;

`;

const Logo=styled.div`  
margin-right: 8px;
font-size:0px;
`;

const Search=styled.div`
opacity: 1;
flex-grow: 1;
position: relative;
& > div{
  max-width: 288px;
  input{
    border: none;
    box-shadow: none;
    background-color: #eef3f8;
    border-radius: 2px;
    color: rgba(0,0,0,0.9);
    width: 218px;
    padding:0 8px 0 40px;
    line-height: 1.75;
    font-weight:400;
    font-size: 14px;
    height: 34px ;
    /* border-color:#dce6f1; */
    border: none;
    vertical-align: text-top;
    &:active{
      border: 2px solid #0a6cc2;
      background-color: #dce6f1;
    }
  }
}

`;

const SearchIcon=styled.div`
width: 40px;
position: absolute;
z-index: 1;
top:10px;
left: 2px;
margin: 0px;
pointer-events: none;

`;

const Nav=styled.nav`
margin-left:auto;
display: block;
@media(max-width:768px){
  position: fixed;
  left:0;
  bottom: 0;
  background-color: white;
  width: 100%;

}

`;

const  NavListWrap=styled.ul`
display: flex;
flex-wrap: nowrap;
list-style-type: none;
padding: 4px;

.active{
  span:after{
    content:"";
    transform: scaleX(0.9);
    border-bottom: 2px solid var(--white,#fff);
    bottom:0;
    left:0;
    position: absolute;
    transition: transform 0.2s ease-in-out;
    width:100%;
    border-color: rgba(0,0,0,0.9);

  }
}

`;

const NavList=styled.li`
display: flex;
align-items: center;
a{
  display: flex;
  align-items: center;
  cursor: pointer;
  background:transparent;
  flex-direction: column;
  font-size: 12px;
  font-weight: 400;
  justify-content: center;
  line-height: 1.5;
  min-height: 42px;
  min-width: 80px;
  position: relative;
  text-decoration: none;
  span{
    color:rgba(0,0,0,0,6);
    display: flex;
    align-items: center;

  }

  @media (max-width:768px){
    min-width: 70px;

  }
}

  &:hover,
  &:active{
    a{
      span{
        color:royalblue;
      }
    }
  }

`;

const Signout=styled.div`
position: absolute;
top:45px;
background: white;
border-radius: 0 0 5px 5px;
width: 100px;
height: 40px;
font-size: 16px;
transition-duration:168ms ;
text-align: center;
display: none;



`;

const User=styled(NavList)`
 a>.navlogo{
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  span{
    display: flex;
    align-items:center;

  }

  &:hover{
    ${Signout}{
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
 


`;

const Work=styled(NavList)`
border-left: 1px solid rgba(0,0,0,0.19);


`;



