import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="hero -mt-40 md:-mt-28 h-[620px]" style={{ backgroundImage: 'url(https://i.ibb.co/B4VDsTg/Banner.jpg)' }}>
                <div className="hero-overlay bg-white bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-8 mt-24 md:mt-0 text-6xl font-bold text-black">I Grow By Helping People In Need</h1>
                        <input className='inputField w-[270px] md:w-[470px] text-black' type="text" name="" id="" placeholder="search here" />
                        <button className='search-btn text-white'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;