import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import "./shop.styles.scss";
import { setCategories } from "../../../store/categories/categories.action";
import { getCategoriesDocuments } from "../../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCategoriesDocuments();
      dispatch(setCategories(categories));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
