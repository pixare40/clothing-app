import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../product-card/product-card.component';
import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <div className='category-container'>
            {
                products && products.map((prod) => {
                    return <ProductCard key={prod.id} product={prod} />
                })
            }
        </div>
    )
}

export default Category;