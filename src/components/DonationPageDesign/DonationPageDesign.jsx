import PropTypes from 'prop-types';

import { useNavigate } from "react-router-dom";

const DonationPageDesign = ({ donate }) => {

    const { id, img, title, category, price, cardBgColor, categoryBgColor, TEXTColor } = donate

    const navigate = useNavigate()

    const handledetails = () => {
        navigate(`/donationDetails/ ${id}`)
    }
    return (
        <div>
            <div className="container mx-auto">
                <div className="relative flex h-[250px] w-full max-w-[48rem] flex-row rounded-lg bg-white bg-clip-border text-gray-700 shadow-md" style={{ backgroundColor: cardBgColor, color: TEXTColor }}>
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={img}
                            alt="image"
                            className="h-[300px] w-full object-cover"
                        />
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                        <span className="mb-4 px-2 rounded-lg max-w-fit block font-sans text-base font-semibold uppercase leading-relaxed" style={{ backgroundColor: categoryBgColor }}>
                            {category}
                        </span>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-black antialiased">
                            {title}
                        </h4>
                        <p className="mb-8 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                            <span className="font-semibold" style={{ color: TEXTColor }}>${price}</span>
                        </p>
                        <button onClick={() => handledetails()} className="btn w-32 text-white font-semibold" style={{ backgroundColor: TEXTColor }}>See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

DonationPageDesign.propTypes = {
    donate: PropTypes.object
};


export default DonationPageDesign;