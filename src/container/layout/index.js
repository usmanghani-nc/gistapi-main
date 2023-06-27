import React from "react";
import styled from "styled-components";
import GistList from "../../components/GistList";

function Layout() {
  return (
    <Section>
      <GistList />
    </Section>
  );
}

const Section = styled.section`
  max-width: 1080px;
  padding: 20px 10px;
  margin: 30px auto;
`;

export default Layout;
