import React, { createContext } from 'react'
import Child from './Child';
import './Style.css'


const MoviesData = createContext();
const Example1 = () => {

    const Actors = [
        {slNo: "1", name: "Mahesh Babu", movie: "Maharshi",  director: "Vamshi Paidipally", releaseYear: "2019", image: "/Images/Maharshi.jpg", id:1},
        {slNo: "2", name: "N.T.R", movie: "Devara",  director: "Koratala Siva", releaseYear: "2024", image: "/Images/Devara.jpg", id:2},
        {slNo: "3", name: "Allu Arjun", movie: "Pushpa 2:The Rule",  director: "Sukumar", releaseYear: "2024", image: "/Images/Pushpa_2.jpg", id:3},
        {slNo: "4", name: "Nani", movie: "Jersey",  director: "Gowtam Tinnanuri", releaseYear: "2022", image: "/Images/Jersey.jpg", id:4},
        {slNo: "5", name: "Nani", movie: "Hi Nanna",  director: "Shouryuv", releaseYear: "2023", image: "/Images/Hi_Nanna.jpg", id:5},
        {slNo: "6", name: "Ram Charan", movie: "Rangasthalam",  director: "Sukumar", releaseYear: "2018", image: "/Images/Rangasthalam.jpg", id:6},
        {slNo: "7", name: "Prabhas", movie: "Salaar: Part 1 – Ceasefire",  director: "Prashanth Neel", releaseYear: "2023", image: "/Images/Salaar.jpg", id:7},
        {slNo: "8", name: "Prabhas", movie: "Kalki 2898 AD",  director: "Nag Ashwin", releaseYear: "2024", image: "/Images/Kalki.jpg", id:8},
        {slNo: "9", name: "Yash", movie: "KGF: Chapter 2",  director: "Prasanth Neel", releaseYear: "2022", image: "/Images/KGF2.jpg", id:9},
        {slNo: "10", name: "Ravi Teja", movie: "Krack",  director: "Gopichand Malineni", releaseYear: "2021", image: "/Images/Krack.jpg", id:10},
    ]
  return (
    <div>
      <MoviesData.Provider value={{actor:Actors}}>
        <Child/>
      </MoviesData.Provider>
    </div>
  )
}

export default Example1
export {MoviesData}
