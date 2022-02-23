import Frontend from "../templates/Frontend/";

import Product from "../assets/product.png";

import * as S from "./styles";
import ButtonProduct from "../atoms/ButtonProduct/index";

function Main() {
  return (
    <Frontend>
      <S.Container>
        <div>
          <h1>Design driven development of your web product</h1>
          <h3>We are a full service digital agency that builds immesive user experience.</h3>

          <ButtonProduct />
        </div>
        <S.ColumnImage>
          <img src={Product} alt="Product image" />
        </S.ColumnImage>
      </S.Container>
    </Frontend>
  );
}

export default Main;
