import styled from "styled-components"
import cinema from "../assets/cinema.jpg"
import { Container_zineb } from "../style/style";


const Header = () =>{
    return (
        <>
            <HeaderStyle>
                <Content>
                    <h1>Lorem ipsum sit</h1>
                    <p>Lorem ipsum dolor sit. Vero eligendi temporibus voluptatum necessitatibus nobis eaque rerum facere? Ullam rerum quidem, nemo culpa laboriosam nostrum reprehenderit eum voluptatibus ipsa, voluptas eligendi.</p>
                    <a href="#movies">
                        <button className="reserve">Reserve now</button>
                    </a>
                </Content>
            </HeaderStyle>
        </>
    )
}

const HeaderStyle = styled.div`
    background-color:blue;
    min-height:100vh;
    width:100vw;
    background: linear-gradient(to right, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0.5)), url(${cinema});
    background-size:cover;
    margin-bottom: 2em;
    
`;
const Content = styled(Container_zineb)`
    max-width: 50%;
    background:linear-gradient(to right, rgb(0, 0, 0), rgba(0, 0, 0, 0.691));
    min-height : 100vh;
    color : white;
    display:flex;
    flex-direction:column;
    align-items:baseline;
    justify-content:center;
    h1{
        font-size:3.2em;
        font-weight:bold;
        margin-bottom:20px;
    }
    p{
        opacity:.8;
        padding: 2em 0;
        font-weight:lighter;
    }
    .reserve{
        font-size:18px;
        background-color:red;
        padding:12px 30px;
        color:white;
        font-weight:bold;
        /* background:#9B0304; */
        background:linear-gradient(to right,rgba(0, 0, 0, 0.909), #770202 );
        border: none;
        border-radius:20px;
        border : 2px solid black;
        &:hover{
            background:transparent;
            border : 4px solid transparent;
        }
    }
`;

export default Header;