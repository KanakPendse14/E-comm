import React from 'react';

const AboutUsPage = () => {
    return (
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                <p className="mt-3 text-lg text-gray-500">
                    Your trusted partner for all your shopping needs.
                </p>
            </div>

            <div className="space-y-12">
                {/* Our Story Section */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
                    <p className="mt-3 text-gray-600">
                    How a Simple Favor for Our Neighbor Turned Into a Business</p>
                    <p className="mt-3 text-gray-600">
It all started with Mrs. Sharma, our sweet next-door neighbor. One afternoon, she called us, worried because she couldn't go to the grocery store. She wasn't feeling well, and no one was around to help her out. Of course, we were happy to do it. We grabbed her shopping list, ran to the store, and delivered her groceries right to her doorstep. She was so grateful, and it felt amazing to help out.

After that, the word spread faster than we could have imagined. Suddenly, more neighbors were asking for help—whether they were elderly, busy parents, or simply unable to get out and shop. We realized there was a real need for this kind of service, and it wasn’t just about convenience. It was about helping people when they needed it most.

Before we knew it, we had an unofficial "grocery squad," going around the neighborhood with bags of veggies, fruits, and those oddly specific spices no one ever seems to have at home. What started as a small favor turned into a full-fledged service, and soon enough, we had more "customers" than we could handle!

That’s when the idea hit us: why not take this to the next level and build an app that makes it easy for people to get what they need? With a growing number of people who trusted us, it was the natural next step. So, after countless hours of brainstorming, designing, and a few sleepless nights, our e-commerce platform was born.

Now, whether you’re stuck at home or just don’t feel like getting off the couch, we’ve got you covered. And yes, Mrs. Sharma still gets her groceries delivered—first, every time.
                    </p>
                    
                </div>

                {/* Our Mission Section */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
                    <p className="mt-3 text-gray-600">
                    At BuySome, our mission is simple: to make life easier for those who need it most. What began as a small act of kindness for our neighbors has grown into a service that empowers people to get their daily essentials without the hassle. We are committed to delivering convenience, care, and community support, one doorstep at a time.
                    Whether you're under the weather, busy with life, or just looking for a little extra help, we're here to make sure your shopping needs are met quickly and with a smile. We're more than just a delivery service—we're neighbors helping neighbors, and we believe that by supporting each other, we can make everyday life a little brighter for everyone.


                    </p>
                </div>

                {/* Why Choose Us Section */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
                    <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
                        <li>Wide range of products across multiple categories</li>
                        <li>Competitive pricing with great deals and discounts</li>
                        <li>Fast, reliable shipping worldwide</li>
                        <li>Exceptional customer service, available 24/7</li>
                        <li>Secure payments and hassle-free returns</li>
                    </ul>
                </div>

                {/* Our Team Section */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800">Meet Our Team</h2>
                    <p className="mt-3 text-gray-600">
                        We are a passionate team of professionals, committed to delivering the best online shopping experience. 
                        From our developers to our customer service team, everyone works tirelessly to bring you the latest trends 
                        and the best deals on the market.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
