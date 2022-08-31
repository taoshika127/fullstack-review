import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    {props.repos.map((repo, index) => {
      return (
        <div key={index}>
          <h2>{"Repo " + index}</h2>
          <a href={repo.html_url}>{repo.name}</a>
          <h4>{repo.description + ' ' + repo.watchers_count}</h4>
        </div>
      )
    })}
  </div>
)

export default RepoList;