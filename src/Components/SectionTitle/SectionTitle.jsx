
const SectionTitle = ({ subHeading, Heading }) => {
    return (
        <div className="relative md:w-[424px] mx-auto text-center mb-12">
            <p className="text-[#D99904] italic md:text-lg border-b-2 pb-4 mb-4">---{subHeading}---</p>
            <p className="uppercase text-lg md:text-4xl border-b-2 pb-4 mb-4 drop-shadow-lg">{Heading}</p>
        </div>
    );
};

export default SectionTitle;