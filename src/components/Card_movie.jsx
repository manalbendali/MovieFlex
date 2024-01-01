import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Card_movie = ({id,title,price,like,image,days_left,salle}) => {
  return (
    <Link style={{color:'white'}} to={"/description/"+id}>
      <Card>
        <div className="img">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>{title}</h3>
          <div className="info">
            <p>Price : </p>
            <p>{price} ETH</p>
          </div>
          <div className="info">
            <p>
              <ion-icon name="time-outline"></ion-icon>{days_left} days left :
            </p>
            <p>
              <ion-icon name="heart"></ion-icon>
              {like}
            </p>
          </div>
          <div className="info">
            <p>Salle:</p>
            <p>{salle}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

const Card = styled.div`
  
   .content{
        padding: 20px 15px;
        h3{
            font-size: 17px;
            font-weight:lighter;
            margin-bottom: 10px;
        }
        .info{
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            padding-bottom: 10px;
            p{
                font-size: 14px;
                ion-icon{
                    padding-right: 5px;
                }
            }
        }
    }
`;

export default Card_movie;