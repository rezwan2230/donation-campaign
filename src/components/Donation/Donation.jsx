import { useState } from "react";
import { previousLocalStorage } from "../../utilities/LocalStorage";
// import DonationPageDesign from "../DonationPageDesign/DonationPageDesign";

const Donation = () => {

     const [noFound, setNoFound] = useState(false)

    const localStoredData = previousLocalStorage()
    if(localStoredData.length > 0){
        setNoFound(true)
    }

    console.log(noFound);
    return (
        <div>
          
        </div>
    );
};

export default Donation;