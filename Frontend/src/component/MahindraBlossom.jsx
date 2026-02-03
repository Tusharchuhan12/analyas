import React from "react";

const MahindraBlossom = () => {
    return (
        <section className="bg-[#f6e9ec] py-12 px-4 md:px-10 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold py-4">
                            <span className="text-red-600 py-4">About</span> Mahindra Blossom
                        </h2>
                        <p className="uppercase tracking-widest text-sm text-gray-600 mt-2">
                            Premium Apartments in Whitefield, Bengaluru
                        </p>

                        <p className="text-gray-700 mt-6 leading-relaxed">
                            Mahindra Blossom is a thoughtfully designed premium residential
                            apartment project in Whitefield, Bangalore, developed by Mahindra
                            Lifespaces, part of the trusted Mahindra Group. Known for quality
                            construction, transparency, and sustainable development, Mahindra
                            Lifespaces has delivered landmark residential communities across
                            India.
                        </p>

                        <p className="text-gray-700 mt-4 leading-relaxed">
                            Strategically located near Hope Farm Junction, Whitefield, Mahindra
                            Blossom offers 2 BHK, 3 BHK, and 4 BHK luxury apartments crafted for
                            modern families, professionals, and long-term investors.
                        </p>

                        <p className="text-gray-700 mt-4 leading-relaxed">
                            With excellent connectivity to ITPL, tech parks, schools,
                            hospitals, shopping hubs, and the operational metro station,
                            Mahindra Blossom ensures everyday comfort with strong appreciation
                            potential.
                        </p>

                        <p className="italic mt-4 text-gray-800 font-medium">
                            Mahindra Blossom is not just a home — it’s a lifestyle upgrade.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                            alt="Garden View"
                            className="rounded-3xl shadow-lg object-cover w-full h-[420px]"
                        />
                    </div>
                </div>

                {/* Features Section */}
                <div className="mt-20">
                    

                    <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
                        {/* Image */}
                        <img
                            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
                            alt="Balcony View"
                            className="rounded-3xl shadow-lg"
                        />
                         
                        {/* Feature List */}
                       
                        <ul className="space-y-6 text-gray-700">
                            <h3 className="text-3xl md:text-4xl  font-semibold">
                                Features & <span className="text-red-600">Highlights</span>
                            </h3>
                            <p className=" uppercase text-sm tracking-widest text-gray-600 mt-2">
                                Why Buy a Home at Mahindra Blossom
                            </p>
                            <li>
                                <h4 className="font-semibold">Prime & Well Connected Location</h4>
                                <p className="text-sm mt-1">
                                    Minutes away from ITPL, tech parks, hospitals, schools, malls
                                    and metro connectivity.
                                </p>
                            </li>

                            <li>
                                <h4 className="font-semibold">Homes Designed for Comfort</h4>
                                <p className="text-sm mt-1">
                                    Spacious 2, 3 & 4 BHK homes with abundant light and ventilation.
                                </p>
                            </li>

                            <li>
                                <h4 className="font-semibold">Green & Calm Living</h4>
                                <p className="text-sm mt-1">
                                    Landscaped gardens, bougainvillea canopies, butterfly park and
                                    open spaces.
                                </p>
                            </li>

                            <li>
                                <h4 className="font-semibold">Resort Style Amenities</h4>
                                <p className="text-sm mt-1">
                                    Swimming pool, clubhouse, sports courts, jogging tracks and
                                    more.
                                </p>
                            </li>

                            <li>
                                <h4 className="font-semibold">Sustainable Living</h4>
                                <p className="text-sm mt-1">
                                    IGBC Gold pre-certified homes with energy efficient design.
                                </p>
                            </li>

                            <li>
                                <h4 className="font-semibold">75+ Years of Mahindra Trust</h4>
                                <p className="text-sm mt-1">
                                    Built by Mahindra Lifespaces with a proven legacy of quality and
                                    transparency.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MahindraBlossom;
