import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Footerr>
        <Logo src="/Group 1.png" alt="" />
        <Text>Bloom</Text>
      </Footerr>
    </div>
  );
};

export default Footer;

const Footerr = styled.div`
  display: flex;
  padding: 34px;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

const Text = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 46px;
  color: #34302d;
`;
