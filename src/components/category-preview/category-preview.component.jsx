import { Link } from 'react-router-dom';

import {CategoryPreviewContainer, LinkSt, Preview} from './category-preview.styles';

import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({title, products}) => {
  return (
    <CategoryPreviewContainer>
        <h2>
            <LinkSt to={title}>{title.toUpperCase()}</LinkSt>
        </h2>
        <Preview>
            {
                products
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))
            }
        </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview