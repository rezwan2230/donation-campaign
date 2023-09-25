import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationDetails = () => {
    const details = useLoaderData()
    const {donationId} = useParams()
    const singleData = details.find(data=> data.id==donationId)
    console.log(singleData); 
    const {img2, title, price, description, textColor } = singleData

    const handleToast = ()=>{
        toast("Donation Successfull")
    }

    return (
        <div className="container mx-auto mt-16 text-left">
            <div>
                <img className="w-full h-[650px] relative" src={img2} alt=""/>
                <p className="bg-[#0B0B0B7F] w-full -mt-[120px] absolute h-[120px] text-left flex items-center"><button onClick={handleToast} className="p-3 btn ml-8 text-xl text-white font-medium" style={{backgroundColor:textColor}}>Donate <span>${price}</span></button></p>
            </div>

            <div>
                <h2 className="text-4xl font-bold mt-12">{title}</h2>
                <p className="mt-6 mb-16">{description}</p>
            </div>

            <ToastContainer />
        </div>
    );
};

export default DonationDetails;