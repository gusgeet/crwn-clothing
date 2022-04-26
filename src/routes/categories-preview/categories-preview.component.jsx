import { Link } from "react-router-dom";

import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPrview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <Fragment>
            {Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];
                    return <CategoryPrview key={title} title={title} products={products}/>
                })}
        </Fragment>
    )
}

export default CategoriesPreview