import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveLocalStorage } from "../../utilities/LocalStorage";

const DonationDetails = () => {
    const details = useLoaderData()
    const { donationId } = useParams()
    const singleData = details.find(data => data.id == donationId)
    // console.log(singleData);
    const { img2, title, price, description, TEXTColor } = singleData

    const handleToast = () => {
        saveLocalStorage(singleData)
        toast("Donation Successfull")
    }
    return (

        <div className="container mx-auto mt-16 text-left relative">
            <div>
                <img className="w-full h-[600px]" src={img2} alt="" />
                <div className="w-full h-[120px] absolute bottom-0 left-0">
                    <p className="bg-[#0B0B0B7F] -mt-[350px] md:-mt-[255px]  lg:-mt-[184px] w-full h-full text-left flex items-center">
                        <button onClick={()=>handleToast()} className="p-3 btn ml-8 text-xl text-white font-medium"
                            style={{ backgroundColor: TEXTColor }}>Donate <span>${price}</span></button>
                    </p>
                </div>
            </div>
            <div className="container">
                <h2 className="text-4xl font-bold mt-12 px-4 md:px-0">{title}</h2>
                <p className="mt-6 mb-16 px-4 md:px-0">{description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DonationDetails;










// import { useParams } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { saveLocalStorage } from "../../utilities/LocalStorage";
// import { useEffect, useState } from "react";

// const DonationDetails = () => {
//     const { donationId } = useParams()
//     const [details, setDetails] = useState([])


//     useEffect(() => {
//         fetch('donation.json')
//             .then(res => res.json())
//             .then(data => setDetails(data))
//     }, [])


//     console.log(details);


//     const singleData = details.find(data => data.id == donationId)
//     // console.log(singleData);
//     const { img2, title, price, description, TEXTColor } = singleData

//     const handleToast = () => {
//         saveLocalStorage(singleData)
//         toast("Donation Successfull")
//     }
//     return (

//         <div className="container mx-auto mt-16 text-left relative">
//             <div>
//                 <img className="w-full h-[600px]" src={img2} alt="" />
//                 <div className="w-full h-[120px] absolute bottom-0 left-0">
//                     <p className="bg-[#0B0B0B7F] -mt-[350px] md:-mt-[255px]  lg:-mt-[184px] w-full h-full text-left flex items-center">
//                         <button onClick={() => handleToast()} className="p-3 btn ml-8 text-xl text-white font-medium"
//                             style={{ backgroundColor: TEXTColor }}>Donate <span>${price}</span></button>
//                     </p>
//                 </div>
//             </div>
//             <div className="container">
//                 <h2 className="text-4xl font-bold mt-12 px-4 md:px-0">{title}</h2>
//                 <p className="mt-6 mb-16 px-4 md:px-0">{description}</p>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// };

// export default DonationDetails;



