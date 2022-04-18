import './categories-preview.styles.scss';
import CategoryPreview from "../../category-preview/category-preview.component";
import { useSelector } from 'react-redux';
import { selectCategories } from '../../../store/categories/categories.selector';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategories);

    return (
        <>
            {categoriesMap && Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview key={title} title={title} products={products} />
                );
            })}
        </>
    );
};

export default CategoriesPreview;
