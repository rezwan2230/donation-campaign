import SingleCategory from "../SingleCategory/SingleCategory";
import { useEffect, useState } from "react";

const Categories = () => {
    const [details, setDetails] = useState([])

        useEffect(() => {
            fetch('donation.json')
                .then(res => res.json())
                .then(data => setDetails(data))
        }, [])
    
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 mb-16">
            {
                details.map((singleData, index)=> <SingleCategory key={index} singleData={singleData}></SingleCategory>)
            }
        </div>
    );
};
export default Categories;
