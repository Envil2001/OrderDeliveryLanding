import { SectionTitle } from "../SectionTitle";

export const CustomizedSolutions = () => {

    const data = [
        {
            title: 'By Land',
            cost: 'From $2.5 per lbs',
            weight: 'Up to 44,000 lbs',
        },
        {
            title: 'By Air',
            cost: 'From $9 per lbs',
            weight: 'Up to 20,000 lbs',
        },
        {
            title: 'By Sea',
            cost: 'From $2.5 per lbs',
            weight: 'Up to 90,000 lbs',
        },
        // Добавьте другие объекты данных по аналогии
    ];
    return (
        <div className="container p-5 relative" data-scroll-section> 
            <div className="grid grid-cols-2 mb-20" data-scroll data-scroll-speed="0.2">
                <div className="col-span-1">
                    <SectionTitle title="Customized solutions for your business" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-5 space-x-0 gap-10 md:gap-0" data-scroll data-scroll-speed="0.2">
                {data.map((item, index) => (
                    <div key={index} className="rounded-xl border p-4 pt-10 border-customBorder relative w-full">
                        <h3 className="absolute top-0 -translate-y-2/4 px-2 bg-customGray-100 tracking-2 text-white font-semibold text-5xl">
                            {item.title}
                        </h3>
                        <div className="space-y-5">
                            <div className="px-2.5">
                                <h4 className="uppercase text-curstomText font-bold text-sm tracking-2 mb-1">Cost</h4>
                                <p className="tracking-2 text-customBlack text-xl font-extrabold">{item.cost}</p>
                            </div>
                            <div className="px-2.5">
                                <h4 className="uppercase text-curstomText font-bold text-sm tracking-2 mb-1">Weight</h4>
                                <p className="tracking-2 text-customBlack text-xl font-extrabold">{item.weight}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

