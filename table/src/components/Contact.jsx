import React, { useState } from 'react'
import { MdLocationPin } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { PiChatDotsFill } from "react-icons/pi";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
            // Reset form fields after successful submission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <>
            <div className='bg-white mx-auto'>
                <div className="get-in-touch bg-[#004F50] text-white">
                    <div className="title text-center font-bold text-3xl py-8">GET IN TOUCH</div>
                    <div className="options flex-col items-center flex md:flex-row justify-center gap-16 md:items-start pt-4 pb-8 w-[90%] mx-auto">
                        <div className="address flex flex-col gap-1 justify-center items-center text-center">
                            <div className="icon p-2 w-max bg-gray-400 rounded-full">
                                <MdLocationPin size={40} fill='white' />
                            </div>
                            <div className="title uppercase font-bold">address</div>
                            <h3 className='text-md font-semibold'>Welfield Group Contracting</h3>
                            <p>146 young street <br /> Denver CO 80223</p>
                            <h3 className='text-md font-semibold'>Welfield Group Contracting</h3>
                            <p>146 young street <br /> Denver CO 80223</p>
                        </div>
                        <div className="phone flex flex-col gap-1 justify-center items-center text-center">
                            <div className="icon p-2 w-max bg-gray-400 rounded-full">
                                <PiPhoneCallFill size={40} fill='white' />
                            </div>
                            <div className="title uppercase font-bold">phone</div>
                            <h3 className='text-md font-semibold'>Welfield Group Contracting</h3>
                            <p>146 young street <br /> Denver CO 80223</p>
                            <h3 className='text-md font-semibold'>Welfield Group Contracting</h3>
                            <p>146 young street <br /> Denver CO 80223</p>
                            <h3 className='text-md font-semibold'>Employement Opportunities</h3>
                            <p>146 young street <br />careers@welfieldcontracting.com</p>
                        </div>
                        <div className="email flex flex-col gap-1 justify-center items-center text-center">
                            <div className="icon p-2 w-max bg-gray-400 rounded-full">
                                <PiChatDotsFill size={40} fill='white' />
                            </div>
                            <div className="title uppercase font-bold">email</div>
                            <h3 className='text-md font-semibold'>Welfield Group Contracting</h3>
                            <p>146 young street <br /> Denver CO 80223</p>
                            <h3 className='text-md font-semibold'>Employement Opportunities</h3>
                            <p>146 young street <br />careers@welfieldcontracting.com</p>
                        </div>
                    </div>
                </div>

                <div className="message-us flex flex-col md:flex-row justify-center gap-4 w-[90%] mx-auto">
                    <div className="title py-8 w-[100%] md:w-1/2">
                        <h1 className='text-blue-800 font-bold text-4xl pb-2 text-center md:text-start'>Message Us</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab quam, unde placeat, nam laboriosam, ut ipsam iusto molestias numquam provident ipsum veniam. Nemo odio rerum atque at repudiandae dicta corporis minima similique necessitatibus neque, facere, minus reiciendis doloribus doloremque dolore delectus maiores eum accusamus optio quas tempora debitis dolor voluptas? Inventore veritatis qui rerum omnis dolorem a aspernatur, at quia non aliquid dignissimos nostrum quasi cupiditate eaque animi ullam repellat? Laudantium quos natus ducimus nobis, deleniti, reiciendis nostrum odit, aliquid vel consequatur explicabo inventore. Deleniti harum fugiat officia ullam, consequatur, amet rem nobis vel officiis, dignissimos magni itaque eum.</p>
                    </div>
                    <div class="flex justify-center items-center w-[100%] md:w-1/2 bg-white">
                        <form onSubmit={handleSubmit} class="container mx-auto my-4 px-4 lg:px-20">
                            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div>
                                    <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
                                    <input id="firstName" class="name w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" name="firstName" placeholder="First Name*" value={formData.firstName} onChange={handleChange} />
                                </div>
                                <div>
                                    <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input id="lastName" class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" name='lastName' placeholder="Last Name*" value={formData.lastName} onChange={handleChange} />
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                                    <input id="email" class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="email" placeholder="Email*" name="email" value={formData.email} onChange={handleChange} />
                                </div>
                            </div>
                            <div class="my-4">
                                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" placeholder="Message*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" name='message' value={formData.message} onChange={handleChange}></textarea>
                            </div>
                            <div class="my-2 w-1/2 lg:w-1/4">
                                <button type='submit' class="uppercase text-sm font-bold tracking-wide bg-[#D7DF1F] text-gray-100 p-3 rounded-lg w-full 
                                    focus:shadow-outline hover:bg-[#C5D410] hover:text-gray-100">
                                    submit
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact;