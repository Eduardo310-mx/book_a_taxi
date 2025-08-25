import React, { useState } from "react";

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (form.name && form.email && form.message) {
            setSuccess("✅ Your message has been sent!");
            setForm({ name: "", email: "", message: "" });
        } else {
            setSuccess("Please fill out all fields.");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="mb-4">
                Have questions or need help with your ride? Fill out the form below or
                reach us directly at <strong>support@quickride.com</strong>.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Name:</label>
                    <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium">Email:</label>
                    <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium">Message:</label>
                    <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full border p-2 rounded"
                        rows={4}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
                >
                    Send Message
                </button>
            </form>

            {success && <p className="mt-4 text-green-600 font-medium">{success}</p>}
        </div>
    );
}

export default Contact;
