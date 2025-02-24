import React, { useContext } from 'react'
import { MoviesData } from './Example1'
import GrandChild from './GrandChild';

const Child = () => {
    const {actor} = useContext(MoviesData);

  return (
    <div>
      <table align='center'>
        <caption id='childCaption'>Movie's Data</caption>
        <thead>
            <tr>
                <th>SL.No</th>
                <th>Actor</th>
                <th>Movie</th>
                <th>Director</th>
                <th>Year</th>
                <th>Poster</th>
            </tr>
        </thead>
        <tbody>
            {actor.map((actor, id)=>(
                <tr key={id}>
                    <td id='sl-no'>{ actor.slNo }</td>
                    <td id='name'><b>{ actor.name }</b></td>
                    <td>{ actor.movie }</td>
                    <td>{ actor.director }</td>
                    <td  id='year'>{ actor.releaseYear}</td>
                    <td></td>
                </tr>
            ))}
        </tbody>
      </table>
      <GrandChild/>
    </div>
  )
}

export default Child
