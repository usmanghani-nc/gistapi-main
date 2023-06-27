import React from "react";
import Gist from "./ui/gist";
import Loading from "./ui/loading";
import moment from "moment";
import { useMainContext } from "../context/context";
import ErrorBox from "./ui/error-box";

const GistList = () => {
  const { state: ctx } = useMainContext();
  const { data, loading, error } = ctx.gistData;

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        data.map((el) => {
          const { avatar_url, login, html_url } = el.owner;
          const filesLen = Object.keys(el.files).length || 0;
          const files = Object.values(el.files);
          const createdAt = moment(el.created_at).format("MM/DD/YYYY");
          const updatedAt = moment(el.updated_at).format("MM/DD/YYYY");

          return (
            <Gist
              key={el.id}
              profileUrl={html_url}
              files={files}
              filesLen={filesLen}
              name={login}
              url={avatar_url}
              createdAt={createdAt}
              updatedAt={updatedAt}
              description={el.description}
              forksUrl={el.forks_url}
              commentsUrl={el.comments_url}
              commitsUrl={el.commits_url}
            />
          );
        })
      )}
    </>
  );
};

export default GistList;
