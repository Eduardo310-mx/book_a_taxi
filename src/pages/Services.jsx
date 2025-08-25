import React from "react";

function Services() {
    const services = [
        {
            title: "Standard Ride",
            description: "Affordable rides for everyday travel.",
            price: "$5 base fare",
        },
        {
            title: "Premium Ride",
            description: "Luxury cars for a comfortable and stylish journey.",
            price: "$15 base fare",
        },
        {
            title: "Shared Ride",
            description: "Share your ride and save money while helping the environment.",
            price: "$3 base fare",
        },
    ];

    return (
        <div className="max-w-5xl mx-auto mt-10 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="p-6 border rounded-xl shadow hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                        <p className="mb-2">{service.description}</p>
                        <p className="font-bold">{service.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
