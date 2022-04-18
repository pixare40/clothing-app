import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectCategories } from '../../store/categories/categories.selector';
import ProductCard from '../product-card/product-card.component';
import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategories)

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