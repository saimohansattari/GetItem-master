import { Link } from 'react-router-dom';
import { Div, ProductCard, StyledDiv1, ProductImg, ProductText, ProductName, ProductWeight, ProductPrice, OfferText } from '../../components/components.styled';
import { girlswear } from '../constant';




function GirlsWear() {
  return (
    <Div>
    <StyledDiv1>
      {girlswear.map((Item) => (
        <Link id='text_Dec_none' to={`/SingleProduct/${Item.id}`} >
        <ProductCard key={Item.id}>
        <ProductImg src={Item.Proimg} alt="Grocery" />
        <ProductText>
          <ProductName>{Item.ProName}</ProductName>
          <ProductWeight>𓍝&nbsp;{Item.ProWeight}kg</ProductWeight>
          <ProductPrice>₹&nbsp;{Item.ProPrice} /-</ProductPrice>
          <form className="rating">
            <label>
              <input type="radio" name="stars" value="1" />
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="2" />
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="3" />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>   
            </label>
            <label>
              <input type="radio" name="stars" value="4" />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
            <label>
              <input type="radio" name="stars" value="5" />
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
              <span className="icon">★</span>
            </label>
          </form>
          <OfferText>Buy 3 get Extra 3% Disscount</OfferText>
        </ProductText>
      </ProductCard>
      </Link>
      ))}

    </StyledDiv1>

  </Div>  
  )
}

export default GirlsWear