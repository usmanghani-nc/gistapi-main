import React from "react";
import styled from "styled-components";
import Octicon from "react-octicon";

const ErrorBox = ({ message }) => {
  return (
    <CardWrapper>
      <Octicon name="alert" />
      <Message>{message}</Message>
    </CardWrapper>
  );
};

const Message = styled.p`
  font-size: 18px;
  padding: 10px 0;
  font-weight: bold;
`;

const CardWrapper = styled.div`
  background-color: #f6f8fa;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default ErrorBox;
