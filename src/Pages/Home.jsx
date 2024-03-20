import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <MainBody>
        <Body>
          <Content>
            <MiniText>Your Trusted Vet Care @ Bloom</MiniText>
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
  max-width: 100%;
  height: auto;
  background: rgba(109, 179, 62, 0.067);
  border-radius: 30px;
  margin-top: 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Content = styled.div`
  margin-bottom: 20px;
`;

const MiniText = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
  text-align: center;
  margin-bottom: 10px;
`;

const MainText = styled.h1`
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  color: #000000;
  text-align: center;
  margin-bottom: 20px;
`;

const SubText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  text-align: center;
  margin-bottom: 20px;
`;

const PictureDiv = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

// Media queries for responsiveness
const media = {
  mobile: `@media (max-width: 768px)`,
};

// Apply mobile responsive styles
const ResponsiveContent = styled(Content)`
  ${media.mobile} {
    margin-bottom: 10px;
  }
`;

const ResponsiveMiniText = styled(MiniText)`
  ${media.mobile} {
    font-size: 20px;
    line-height: 28px;
  }
`;

const ResponsiveMainText = styled(MainText)`
  ${media.mobile} {
    font-size: 30px;
    line-height: 40px;
  }
`;

const ResponsiveSubText = styled(SubText)`
  ${media.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export {
  ResponsiveContent,
  ResponsiveMiniText,
  ResponsiveMainText,
  ResponsiveSubText,
};
