import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <MainBody>
        <Body>
          <Content>
            <MiniText>your trusted vet care @ Bloom</MiniText>
            <MainText>
              The kind of care
              <br /> your pets deserve
            </MainText>
            <SubText>
              Our veterniarians and nurses all share
              <br /> a genuine love of animals and each pet
              <br /> is treated as an individual.
            </SubText>
          </Content>
          <PictureDiv>
            <img src="/pic.png" alt="Pic" />
          </PictureDiv>
        </Body>
      </MainBody>
      <Footer />
    </React.Fragment>
  );
};

export default Home;

const MainBody = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 64px;
`;

const Body = styled.div`
  width: 1240px;
  height: 604px;
  background: rgba(109, 179, 62, 0.067);
  border-radius: 30px;
  margin-top: 62px;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  margin-left: 30px;
  padding-right: 60.75px;
`;

const MiniText = styled.p`
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;
  color: #000000;
`;

const MainText = styled.h1`
  font-weight: 700;
  font-size: 60px;
  line-height: 70px;
  color: #000000;
`;

const SubText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;
  color: #000000;
`;

const PictureDiv = styled.div``;
