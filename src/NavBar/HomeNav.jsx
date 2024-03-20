import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeNav = () => {
  return (
    <React.Fragment>
      <Navbar>
        <LogoContainer>
          <ImageTag src="/Frame 3.png" alt="Logo" />
          <NavContainer>
            <Link to="/">
              {" "}
              <Homme>
                <Icon src="/Vector (1).png" alt="Home" />
                Home
              </Homme>
            </Link>

            <Link to="/owners">
              {" "}
              <Ownners>
                <Icon src="/Vector (2).png" alt="Owners" />
                Owners
              </Ownners>
            </Link>

            <Link to="/veterniarians">
              {" "}
              <Vet>
                <Icon src="/Vector (3).png" alt="Vet" />
                Veterinarians
              </Vet>
            </Link>
          </NavContainer>
        </LogoContainer>
      </Navbar>
    </React.Fragment>
  );
};

export default HomeNav;

const Navbar = styled.div`
  width: 100vw;
  height: 86px;
  background: #34302d;
  border-bottom: 3px solid #6db33e;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const ImageTag = styled.img`
  margin: 20px;
  width: 100px; /* Adjust according to your design */
  height: auto; /* Maintain aspect ratio */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Icon = styled.img`
  padding-right: 5px;
`;

const Homme = styled.h1`
  color: white;
  padding-right: 32px;
  font-style: normal;
  font-size: 20px;
  line-height: 29px;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const Ownners = styled.h1`
  color: white;
  padding-right: 32px;
  font-style: normal;
  font-size: 20px;
  line-height: 29px;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const Vet = styled.h1`
  color: white;
  padding-right: 32px;
  font-style: normal;
  font-size: 20px;
  line-height: 29px;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;
