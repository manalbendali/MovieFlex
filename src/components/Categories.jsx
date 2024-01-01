import { useState } from "react"
import { Container, Container_zineb } from "../style/style"
import Carousel from "./Carousel"
import {styled} from 'styled-components'
import { movies } from "../data/movies";


const Categories = () =>{
    const [selectedCategory, setSelectedCategory] = useState('action');
    const moviesSelected = movies.filter(item=>item.category == selectedCategory);
    // const filteredMovie = selectedCategory
    //         ? movies.filter(item => item.category === selectedCategory)
    //         : movies;
    // console.log(filteredMovie);
   
    return(
        <Categorie>
            <h2>Our popular Categories</h2>
            <div className="cat">
                <ul>
                    <li onClick={() => setSelectedCategory('action')}>Action</li>
                    <li onClick={() => setSelectedCategory('horror')}>Horror</li>
                    <li onClick={() => setSelectedCategory('romance')}>Romance</li>
                    <li onClick={() => setSelectedCategory('comedy')}>comedy</li>
                </ul>
            </div>
            <div className="movies">
                <Carousel moviesSelected={moviesSelected} />
                {/* <Carousel /> */}
            </div>
        </Categorie>
    )
}

const Categorie = styled(Container_zineb)`
   
    .cat{
        ul{
            display:flex;
            /* align-items:center; */
            justify-content:center;
            li{
                cursor: pointer;
                font-size:20px;
                font-weight:600;
                margin-right:20px;
                background:#770202;
                padding : 10px 25px;
                border-radius:5px;
            }
        }
    }
`;



export default Categories;