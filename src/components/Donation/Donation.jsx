import { useEffect, useState } from "react";
import { previousLocalStorage } from "../../utilities/LocalStorage";
import DonationPageDesign from "../DonationPageDesign/DonationPageDesign";

const Donation = () => {

    const [noFound, setNoFound] = useState(true)

    const [appliedDonation, setAppliedDonation] = useState([])

    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        const localStoredData = previousLocalStorage()
        if (localStoredData.length > 0) {
            setNoFound(false)
            setAppliedDonation(localStoredData)
        }
        if (localStoredData.length > 4) {
            setIsShow(true)
        }
    }, [])

    return (
        <div className="container mx-auto">
            {
                noFound ? <div className="flex justify-center items-center h-[80vh]"><h1 className="text-2xl font-semibold">Not Found</h1></div>: ""
            }
            
            {
                isShow ? <div className="grid grid-cols-2 gap-8 mt-16">
                    {appliedDonation.slice(0,4).map(donate => <DonationPageDesign key={donate.id} donate={donate}></DonationPageDesign>)}
                </div>
                    :  <div className="grid grid-cols-2 gap-8 mt-16">
                    {appliedDonation.map(donate => <DonationPageDesign key={donate.id} donate={donate}></DonationPageDesign>)}
                </div>
            }

           {
            appliedDonation.length> 4 &&<div className="flex justify-center my-8">
            <button onClick={()=>setIsShow(!isShow)} className="btn bg-[#009444] text-white hover:bg-[#009444]">{isShow ? "See More" : "See Less"}</button>
        </div>  
           }
        </div>
    );
};

export default Donation;









