import styled from "styled-components";
import React from 'react'
import LeftSide from "./LeftSide";
import Main from "./Main";
import RightSide from "./RighSide";

export default function Home(props) {
  return (
    <Container>

      <Section>
        <h5>
          <a>Hiring in a hurry ? -</a>
        </h5>
        <p>&nbsp;Find talented pros in record time with Upwork and keep bussiness moving</p>

      </Section>

      <Layout>

        <LeftSide/>
        <Main/>
        <RightSide/>

      </Layout>

      </Container>
  )
}


const Container=styled.div`
/* border: 2px solid black; */
padding-top: 50px;
@media (min-width: 768px){

  padding-left: 69px;
}

`;

const Section=styled.section`
min-height: 50px;
padding:16px 0;
display: flex;
box-sizing: content-box;
text-align: center;
text-decoration: underline;
justify-content: center;
h5{
  color:#0a66c2;
  font-size: 14px;
  a{
    font-weight: 700;
  }
}

p{
  font-size: 14px;
  color:#434649;
  font-weight: 590;
}

@media (max-width:768px){
flex-direction: column;
padding: 0 5px;

}



`;

const Content=styled.div`

max-width: 1128px;
margin-right: auto;
margin-left: auto;

`;

const Layout=styled.div`


display: grid;
grid-template-areas: "left main right";
grid-template-columns: minmax(0,5fr) minmax(0,12fr) minmax(300, 7fr);
column-gap: 25px;
row-gap: 25px;
margin: 25px 0;
@media(max-width:768px){
display: flex;
flex-direction: column;
/* align-items: center; */
padding: 0 5px;


}

`;