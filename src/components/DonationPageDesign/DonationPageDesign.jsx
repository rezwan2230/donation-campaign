import { useState } from "react";

const DonationPageDesign = ({ donate }) => {

    // const [noFound, setNoFound] = useState(false)

    console.log(donate);
    return (
        <div>
            { donate ? <p>Found</p> : <p>No data Found</p> }
        </div>
        
    );
};

export default DonationPageDesign;