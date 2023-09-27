import PropTypes from 'prop-types';
import { Link} from "react-router-dom";

const SingleCategory = ({ singleData }) => {
    const { id, img, category, title, cardBgColor, categoryBgColor, TEXTColor } = singleData;
    return (
        <Link to={`/donationDetails/${id}`}>
            <div className="text-left " >
                <div className="card card-compact bg-base-100 shadow-xl " style={{ backgroundColor: cardBgColor }}>
                    <figure>
                        <img className="w-full h-[250px]" src={img} alt="" />
                    </figure>
                    <div className="card-body mt-4">
                        <h3 className="text-base px-2 py-1 rounded-lg  flex max-w-fit font-medium" style={{ backgroundColor: categoryBgColor, color: TEXTColor }}>{category}</h3>
                        <h2 className="font-bold text-2xl mt-3" style={{ color: TEXTColor }}>{title}</h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

SingleCategory.propTypes = {
    singleData: PropTypes.object
};

export default SingleCategory;

