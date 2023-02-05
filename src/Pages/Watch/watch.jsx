import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";
import ReactPlayer from 'react-player'
export default function Watch() {
  const location = useLocation();
  console.log(location);
  const movie = location.movie;
  console.log(movie)
  return (
    <div className="watch">
      {/* <NavBar /> */}
      <Link to="/">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      </Link>
      <ReactPlayer
       url={movie.trailor} 
       playing={false}
       volume={1} 
       controls={true}
       width="100%"
       height="100%"
       playIcon={true}
       progressInterval={true}
       
       />
    </div>
  );
}