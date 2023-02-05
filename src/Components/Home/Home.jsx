
import { useContext, useEffect, useState } from 'react'
import Featured from '../featured/Featured'
import List from '../Lists/List'
import NavBar from '../Navbar/NavBar.jsx'  ///home/mapmd/Desktop/Movie_App/movie-app/src/Components/Navbar/NavBar.jsx
import './home.scss';
import axios from "axios";
const Home = ({type}) => {
    const [lists, setLists]= useState([]);
    const [genre, setGenre]= useState(null);
    



   useEffect(() => {
    const getRandomLists= async () => {
        try {
            const res = await axios.get(
                `lists${type ? "?type="+ type: ""}${genre ?"&genre="+genre:"" }`
                ,
                { 
                    headers:{
                        token: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken

                    }
                })
            
                
       setLists(res.data);
       
            } catch (err) {
            console.log(err);
            
        }
    };
    getRandomLists();
   },[genre,type])



    return (
        <div className="home">
            < NavBar />
            <Featured type = {type} setGenre={setGenre} />
            {lists.map((list)=>(
                <List list={list} key={list._id}/>)

            )}
            
            
        </div>
        
    )
}

export default Home
