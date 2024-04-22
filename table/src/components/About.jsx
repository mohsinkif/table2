import React from 'react'
import { IoBookOutline } from "react-icons/io5";
import { TiPencil } from "react-icons/ti";

const About = () => {
    return (
        <div className='about-us w-[90%] mx-auto'>
            <div className="title text-4xl font-bold text-center py-8">Our Story</div>
            <div className="content py-8">
                <div className="who-we-are">
                    <div className="title">
                        <h1 className='text-center text-2xl font-semibold'>Who We Are</h1>
                        <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae culpa dicta non, repudiandae nihil exercitationem placeat, architecto veniam magnam voluptas excepturi qui. Aliquid magnam, delectus non debitis ut hic quidem rem voluptatibus consequatur, accusantium reiciendis nostrum iure numquam provident repudiandae deserunt deleniti. Nihil, modi necessitatibus. Necessitatibus tempore quas hic aliquid voluptate, eveniet alias aspernatur? Dicta ex cupiditate, aliquam, totam iste doloremque tempora quaerat sapiente debitis facere animi ipsum illo, a omnis qui similique officia obcaecati accusamus cum ea soluta voluptatem est. Molestiae dicta laboriosam, dolor quae deserunt quis id expedita fuga sunt accusamus. Illo placeat natus earum suscipit ipsum beatae.</p>
                    </div>
                    <div className="horizontal-line-with-icon py-8">
                        <IoBookOutline size={40} color='#6DCDE2' className='mx-2' />
                    </div>
                </div>
                <div className="who-we-are">
                    <div className="title">
                        <h1 className='text-center text-2xl font-semibold'>What We Do</h1>
                        <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae culpa dicta non, repudiandae nihil exercitationem placeat, architecto veniam magnam voluptas excepturi qui. Aliquid magnam, delectus non debitis ut hic quidem rem voluptatibus consequatur, accusantium reiciendis nostrum iure numquam provident repudiandae deserunt deleniti. Nihil, modi necessitatibus. Necessitatibus tempore quas hic aliquid voluptate, eveniet alias aspernatur? Dicta ex cupiditate, aliquam, totam iste doloremque tempora quaerat sapiente debitis facere animi ipsum illo, a omnis qui similique officia obcaecati accusamus cum ea soluta voluptatem est. Molestiae dicta laboriosam, dolor quae deserunt quis id expedita fuga sunt accusamus. Illo placeat natus earum suscipit ipsum beatae.</p>
                    </div>
                    <div className="horizontal-line-with-icon py-8">
                        <TiPencil size={40} color='#6DCDE2' className='mx-2' />
                    </div>
                </div>
                <div className="who-we-are">
                    <div className="title">
                        <h1 className='text-center text-2xl font-semibold'>Where We Do It</h1>
                        <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae culpa dicta non, repudiandae nihil exercitationem placeat, architecto veniam magnam voluptas excepturi qui. Aliquid magnam, delectus non debitis ut hic quidem rem voluptatibus consequatur, accusantium reiciendis nostrum iure numquam provident repudiandae deserunt deleniti. Nihil, modi necessitatibus. Necessitatibus tempore quas hic aliquid voluptate, eveniet alias aspernatur? Dicta ex cupiditate, aliquam, totam iste doloremque tempora quaerat sapiente debitis facere animi ipsum illo, a omnis qui similique officia obcaecati accusamus cum ea soluta voluptatem est. Molestiae dicta laboriosam, dolor quae deserunt quis id expedita fuga sunt accusamus. Illo placeat natus earum suscipit ipsum beatae.</p>
                    </div>
                    <div className="horizontal-line-with-icon py-8">
                        <IoBookOutline size={40} color='#6DCDE2' className='mx-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
