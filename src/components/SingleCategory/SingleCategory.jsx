import { Link } from "react-router-dom";

const SingleCategory = ({singleData}) => {
    const {id, img, category, title, cardBgColor, categoryBgColor, textColor } = singleData;
    // console.log(singleData);

    return (
        <Link to={`/donationDetails/ ${id}`}>
            <div className="text-left " >
                <div className="card card-compact bg-base-100 shadow-xl " style={{ backgroundColor: cardBgColor }}>
                    <figure>
                        <img className="w-full h-[250px]" src={img} alt="" />
                    </figure>
                    <div className="card-body mt-4">
                        <h3 className="text-base pl-3 py-[2px] rounded-lg mr-[270px] flex" style={{ backgroundColor: categoryBgColor }}>{category}</h3>
                        <h2 className="font-bold text-2xl mt-3" style={{ color: textColor }}>{title}</h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default SingleCategory;