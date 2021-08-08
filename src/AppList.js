import React from 'react'

const AppList = ({profiles, users, movies}) => {
  return(
    <div>
      <ul>
    	{profiles.map(profile => {
          const userName = users[profile.userID].name;
          const favouriteMovie = movies[profile.favoriteMovieID].name;
          return(
            <li key = {profile.id}>
              <p>{`${userName}'s favorite movie is "${favouriteMovie}."`}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AppList