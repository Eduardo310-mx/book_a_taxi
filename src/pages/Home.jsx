import React from "react";
import { Link } from "react-router";

function Home() {
    return (
        <div className="text-center mt-20 px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Welcome to Book_A_Taxi
            </h1>
            <p className="text-lg md:text-xl mb-8">
                Fast, reliable, and affordable rides at your fingertips. Wherever you
                need to go, we’ll get you there safely!
            </p>
            <Link
                to="/booking"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg"
            >
                Book a Ride Now
            </Link>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold mb-2">Standard Ride</h2>
                    <p>Affordable rides for everyday travel.</p>
                </div>
                <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold mb-2">Premium Ride</h2>
                    <p>Luxury cars for a more comfortable journey.</p>
                </div>
                <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold mb-2">Shared Ride</h2>
                    <p>Save money by sharing your ride with others.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;

