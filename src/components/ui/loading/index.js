import React from "react";
import styled from "styled-components";
import Octicon from "react-octicon";

const Loading = () => {
  return (
    <LoadingStlyes>
      <Octicon mega spin name="sync" />
    </LoadingStlyes>
  );
};

const LoadingStlyes = styled.div`
  display: flex;
  justify-content: center;
`;

export default Loading;
