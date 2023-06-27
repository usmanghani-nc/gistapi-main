import React from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import PropTypes from "prop-types";

const Gist = ({
  url,
  profileUrl,
  name,
  files,
  filesLen,
  createdAt,
  updatedAt,
  description,
  forksUrl,
  commentsUrl,
  commitsUrl,
}) => {
  return (
    <CardWrapper>
      <CardHeader>
        <HeaderLeft href={profileUrl} target="blank">
          <Avatar src={url} />
          <UserName>{name}</UserName>
        </HeaderLeft>

        <HeaderRight>
          <Icon margin>
            <Octicon name="code" />
            <IconText>{filesLen}</IconText>
            <span>files</span>
          </Icon>
          <Icon href={forksUrl} margin target="blank">
            <Octicon name="repo-forked" /> <IconText>Forks</IconText>
          </Icon>
          <Icon href={commentsUrl} margin target="blank">
            <Octicon name="comment" /> <IconText>Comments</IconText>
          </Icon>
          <Icon href={commitsUrl} target="blank">
            <Octicon name="star" /> <IconText>Stars</IconText>
          </Icon>
        </HeaderRight>
      </CardHeader>

      <CardBody>
        <Description>{description ? description : "----"}</Description>
      </CardBody>

      <Files>
        {files.map((el) => {
          return (
            <File href={el.raw_url} key={el.filename}>
              <Octicon name="file" />
              <span>{el.filename}</span>
            </File>
          );
        })}
      </Files>

      <DateWrapper>
        <Date>
          <span style={{ marginRight: 10 }}>Created at: {createdAt}</span>
          <span>Last Updated: {updatedAt}</span>
        </Date>
      </DateWrapper>
    </CardWrapper>
  );
};

const Description = styled.p`
  font-size: 15px;
  padding: 20px 0;
  margin-bottom: 20px;
`;

const CardWrapper = styled.div`
  background-color: #f6f8fa;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 15px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  margin-right: 10px;
`;

const UserName = styled.h2`
  font-size: 14.5px;
  color: #539bf5;
`;

const HeaderLeft = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.a`
  margin-right: ${(props) => (props.margin ? 35 : 0)}px;
  color: #539bf5;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const IconText = styled.div`
  margin: 0 3.5px 0 2px;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  font-size: 13.3px;
  color: #afafaf;
`;

const CardBody = styled.div``;

const Files = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: warpper;
`;

const File = styled.a`
  text-decoration: none;
  margin-right: 20px;
`;

Gist.propTypes = {
  url: PropTypes.string,
  profileUrl: PropTypes.string,
  name: PropTypes.string,
  files: PropTypes.array,
  filesLen: PropTypes.number,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  description: PropTypes.string,
  forksUrl: PropTypes.string,
  commentsUrl: PropTypes.string,
  commitsUrl: PropTypes.string,
};

export default Gist;
