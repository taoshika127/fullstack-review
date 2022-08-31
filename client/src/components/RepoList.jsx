import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    {props.repos.map((repo, index) => {
      return (
        <div key={index}>
          <h4>{repo.name + ' ' + repo.description + ' ' + repo.watchers_count}</h4>
        </div>
      )

    })}
  </div>
)

export default RepoList;