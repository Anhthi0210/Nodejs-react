import styled from "styled-components"
import { mobile } from "../responsive";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color:#c4a691 ;
  margin-bottom:20px;
  background-color:  white;
  padding: 1px 3px;
  border: 1px solid #c4a691;
  ${mobile({ fontWeight: 500 })}
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 500;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>MUA NGAY</Button>
      </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem
