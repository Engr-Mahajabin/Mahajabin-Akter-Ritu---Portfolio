import React, { useState } from 'react';
import SectionTitles from "../../Components/SectionTitles/SectionTitles";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const data = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        };

        try {
            const response = await fetch("https://formspree.io/f/mnnvyane", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                form.reset();
            } else {
                setStatus('Failed to send message. Try again.');
            }
        } catch (error) {
            setStatus('Something went wrong!');
        }

        setTimeout(() => setStatus(''), 4000);
    };

    return (
        <div className="bg-black text-white py-12" id="contact">
            <SectionTitles heading="Get In Touch" subHeading="Feel free to contact me anytime" />

            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                
                {/* Contact Form */}
                <div className="bg-black p-8 rounded-lg shadow-md border border-gray-800">
                    <h3 className="text-xl font-semibold mb-6 text-blue-400">Message Me</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full text-gray-400 bg-gray-800" required />
                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full text-gray-400 bg-gray-800" required />
                        <textarea name="message" placeholder="Your Message" className="textarea textarea-bordered w-full text-gray-400 bg-gray-800" rows="5" required></textarea>
                        <button type="submit" className="btn btn-info w-full">Send Message</button>
                    </form>

                    {/* Alert Message */}
                    {status && (
                        <div className="mt-4 text-blue-400 font-medium">
                            {status}
                        </div>
                    )}
                </div>

                {/* Contact Info */}
                <div className="bg-black p-8 rounded-lg shadow-md border border-gray-800">
                    <h3 className="text-xl font-semibold mb-6 text-blue-400">Contact Info</h3>
                    <p className="text-white mb-6">
                        Always available for freelance work if the right project comes along. Feel free to contact me!
                    </p>
                    <p><span className="text-white mb-2">Name: <br /></span> Mahajabin Akter Ritu</p>
                    <p><span className="text-white">Location: <br /></span> Wari, Dhaka, Bangladesh</p>
                    <p><span className="text-white">Email: <br /></span> mahajabin.ritu98@gmail.com</p>
                    <p><span className="text-white">Phone: <br /></span> +8801632942393</p>

                    {/* Social Icons */}
                    <div className="flex gap-6 text-2xl mt-8">
                        <a href="mailto:mahajabin.ritu98@gmail.com" target="_blank" rel="noreferrer">
                            <FaEnvelope className="hover:text-blue-400" />
                        </a>
                        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                            <FaGithub className="hover:text-blue-400" />
                        </a>
                        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
                            <FaLinkedin className="hover:text-blue-400" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
