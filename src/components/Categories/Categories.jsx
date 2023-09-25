import { useLoaderData } from "react-router-dom";
import SingleCategory from "../SingleCategory/SingleCategory";

const Categories = () => {
    const categories = useLoaderData()
    // console.log(categories);
    return (
        <div className="container mx-auto grid grid-cols-4 gap-8 mt-24 mb-16">
            {
                categories.map(singleData=> <SingleCategory key={singleData.id} singleData={singleData}></SingleCategory>)
            }
        </div>
    );
};

export default Categories;