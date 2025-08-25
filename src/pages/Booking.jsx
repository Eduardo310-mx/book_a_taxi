import React, { useState } from "react";

function Booking() {
    const [form, setForm] = useState({
        name: "",
        pickup: "",
        drop: "",
        service: "",
        datetime: "",
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    const validate = () => {
        let newErrors = {};
        if (!form.name) newErrors.name = "Name is required";
        if (!form.pickup) newErrors.pickup = "Pickup location is required";
        if (!form.drop) newErrors.drop = "Drop-off location is required";
        if (!form.service) newErrors.service = "Service type is required";
        if (!form.datetime) newErrors.datetime = "Date & time is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSuccess("✅ Booking successful! A driver will contact you shortly.");
            setForm({ name: "", pickup: "", drop: "", service: "", datetime: "" });
            setErrors({});
        } else {
            setSuccess("");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Book a Ride</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <label className="block font-medium">Name:</label>
                    <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border p-2 rounded"
                        required
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                {/* Pickup */}
                <div>
                    <label className="block font-medium">Pickup Location:</label>
                    <input
                        type="text"
                        value={form.pickup}
                        onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                        className="w-full border p-2 rounded"
                        required
                    />
                    {errors.pickup && <p className="text-red-500 text-sm">{errors.pickup}</p>}
                </div>

                {/* Drop-off */}
                <div>
                    <label className="block font-medium">Drop-off Location:</label>
                    <input
                        type="text"
                        value={form.drop}
                        onChange={(e) => setForm({ ...form, drop: e.target.value })}
                        className="w-full border p-2 rounded"
                        required
                    />
                    {errors.drop && <p className="text-red-500 text-sm">{errors.drop}</p>}
                </div>

                {/* Service Type */}
                <div>
                    <label className="block font-medium">Service Type:</label>
                    <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full border p-2 rounded"
                        required
                    >
                        <option value="">-- Select --</option>
                        <option value="Standard">Standard</option>
                        <option value="Premium">Premium</option>
                        <option value="Shared">Shared</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
                </div>

                {/* Date & Time */}
                <div>
                    <label className="block font-medium">Pickup Date & Time:</label>
                    <input
                        type="datetime-local"
                        value={form.datetime}
                        onChange={(e) => setForm({ ...form, datetime: e.target.value })}
                        className="w-full border p-2 rounded"
                        required
                    />
                    {errors.datetime && <p className="text-red-500 text-sm">{errors.datetime}</p>}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded"
                >
                    Book Ride
                </button>
            </form>

            {/* Success Message */}
            {success && <p className="mt-4 text-green-600 font-medium">{success}</p>}
        </div>
    );
}

export default Booking;
