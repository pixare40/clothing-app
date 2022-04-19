import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/categories.selector";
import ProductCard from "../product-card/product-card.component";
import Spinner from "../spinner/spinner.component";
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((prod) => {
              return <ProductCard key={prod.id} product={prod} />;
            })}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
