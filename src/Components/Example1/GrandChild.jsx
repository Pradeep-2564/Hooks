import React, { useContext } from 'react'
import { MoviesData } from './Example1'

const GrandChild = () => {
    const {actor} = useContext(MoviesData);

  return (
    <div>
      <table align='center'>
        <caption id='grandChildCaption'>Movie's Poster</caption>
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
            {actor.map((actor,id)=>(
                <tr key={id}>
                    <td id='sl-no'>{ actor.slNo }</td>
                    <td></td>
                    <td id='grand-movie'><span>{ actor.movie }</span></td>
                    <td></td>
                    <td></td>
                    <td><img src={actor.image} alt="" /></td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default GrandChild
