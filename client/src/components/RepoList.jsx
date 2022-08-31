import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    {props.repos.map((repo, index) => {
      return (
        <div key={index}>
          <h3>{"Repo " + (index + 1)}</h3>
          <a href={repo.html_url}>{repo.name}</a>
          <h4>{'Username: ' + repo.owner}</h4>
          <h4>{'Description: ' + repo.description}</h4>
          <h4>{'Watchers Count: ' + repo.watchers_count}</h4>
        </div>
      )
    })}
  </div>
)

export default RepoList;