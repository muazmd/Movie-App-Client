import "./Listitem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState ,useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPlayer from 'react-player'

export default function ListItem({ index,item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie,setMovie] =useState({});
  const isMountedRef = useRef(true)




  useEffect (() => {
    isMountedRef.current = false;
    const getMovies =async () =>{
      try {
        const res = await axios.get("/movies/find/"+item ,  { 
          headers:{
            token: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken
          },
        
        });
      setMovie(res.data)
    // console.log(res.data)
    // console.log(item)
    } catch (err) {
          console.log(err)
        }

    };
    getMovies(); 
  }, [item])

  
  return (
    <Link to={{pathname:'/watch', movie:movie}} className="Link" >
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie.img}
        alt=""
      />
      {isHovered && (
        <>
          <ReactPlayer url={movie.trailor} loop={true} playing={true} />
       
         
            <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              {movie.desc}</div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
      </Link>
  );
  }