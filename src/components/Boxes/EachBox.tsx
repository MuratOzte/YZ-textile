const EachBox = ({ left = false }) => {
    return <div className="absolute left-32 bg-black ">{left.valueOf()}</div>;
};

export default EachBox;
