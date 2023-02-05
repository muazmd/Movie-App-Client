import { ArrowBackIosOutlined ,ArrowForwardIosOutlined} from '@material-ui/icons';
import { useRef, useState } from 'react';
import ListItem from '../ListItems/ListItem';
import './list.scss';

 const List = ({list}) => {
     const listref = useRef();
     const [ismoved, setIsMoved] = useState(false);
     const [slideNo, setSlidNo] = useState(0);
     const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

       
     const handleClick =(direction) =>{
         setIsMoved(true);
        let distance = listref.current.getBoundingClientRect().x -50;
        if ( direction === "left" && slideNo>0) {
            setSlidNo(slideNo-1)
            listref.current.style.transform = `translateX(${230 +distance}px)`;
            setTimeout(1000);
        }
         if ( direction === "right" && slideNo< 10-clickLimit) {
             setSlidNo(slideNo+1)
            listref.current.style.transform = `translateX(${-230 +distance}px)`;
            setTimeout(1000);
        }
         console.log(distance);
     }

    return (
        <div className="list">
            <span className="ListTitle"> {list.title}</span>
            <div className="Wrapper">
            <ArrowBackIosOutlined 
            className="sliderarrow left"
            onClick={()=>handleClick('left')}
            style={{display: !ismoved && "none"}}/>

           <div 
           className="container" 
           ref={listref}> 
        {list.content.map((item,i) =>(
            <ListItem index={i} item={item} />

        ))} 
       
           
           </div>
            <ArrowForwardIosOutlined 
            className="sliderarrow right"  
            onClick={()=>handleClick('right')}/> 

            </div>
            
        </div>
    )
}

export default List;