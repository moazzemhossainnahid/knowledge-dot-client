import React, { useRef, useState } from 'react';
import Animation from './Animation';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import swal from 'sweetalert';


const ContectBanner = () => {
    const [pic, setPic] = useState('');


    const imageUrlKey = 'e738f1d16de6b265746b7f82cc157644';

    // handle Update NID Front

    const handlePicUpload = (e) => {
        const image = e.target.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageUrlKey}`;
        console.log(url);
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    console.log(img);
                    setPic(img);
                }
            })

    };


    const [pending, setPending] = useState(false);

    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setPending(true);


        const data = {
            name : e.target.name.value,
            email : e.target.email.value,
            message : e.target.message.value,
            image : pic,
            subject : e.target.subject.value
        }

        // console.log(name, email, message, image, subject);
        // console.log(e.target.image.value);

        emailjs.send('service_isw7suz', 'template_mcak73j', data, '3Ia_oLKOBiLv_2B3T')
            .then((result) => {
                console.log(result);
                if (result?.text) {
                    toast.success("Successfull", "You Send an Email!", "success");
                    e.target.reset();
                    setPic('');
                    setPending(false);
                }
            }, (error) => {
                swal("OPPSS...", "Email not Send!", "error");
                setPending(false);
            });


    };

    return (
        <div>
            <div style={{
                backgroundImage: "url(https://edusphere.radiantthemes.com/wp-content/uploads/2020/08/contact-banner.jpg)"
            }} className="bg-cover  bg-no-repeat lg:h-[500px] h-40 lg:z-0">
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 lg:mx-44 lg:my-24 my-5 p-5'>
                <div>
                    <h4 className=' text-lg uppercase font-bold text-[#015ABD] mb-3'>contact us</h4>
                    <Animation></Animation>
                    <h2 className=' text-4xl font-semibold my-6'>Are You Interested In Online Learning? Contact Us.</h2>
                    <p className='mb-4 w-3/4'>Contact our top-notch educationalist in the UK that has huge expertise in providing futuristic solutions to all aspiring students coming for higher education.</p>

                    <img src="https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Signeture-1.png" alt="" />
                    <h5 className=' font-semibold'>Brayden Backham</h5>
                    <p>Director</p>
                </div>
                <div className=' px-12 pt-10 pb-5 shadow-lg text-[#222222] lg:mt-[-220px] lg:z-40 bg-white'>
                    <h2 className=' text-4xl font-semibold mb-4'>Fill Out For Contact</h2>
                    <p>Fill-in the contact form and get immediate assistance from our educational consultant.</p>
                    <form ref={form} onSubmit={sendEmail} >
                        <input name="name" className=' block w-full h-10 pl-2 border-2 border-[#d8dada] my-5' type="text" id="" placeholder="Your Name" />

                        <input name="email" className=' block w-full h-10 pl-2 border-2 border-[#d8dada] mb-5' type="email" id="" placeholder="Email address" />

                        <input name="subject" className=' block w-full h-10 pl-2 border-2 border-[#d8dada] mb-5' type="text" id="" placeholder="Subject" />

                        <div className="mb-3 w-full lg:w-96">
                            <label className="text-xs">Upload Your Image</label>

                            {
                                pic === '' ?
                                    <div required onChange={handlePicUpload} className="flex justify-start items-center w-full">
                                        <label htmlFor="dropzone-file" className="flex flex-col justify-start ml-0 pl-0 items-center w-2/3 h-fit bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                                <svg aria-hidden="true" className="mb-3 w-10 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">PNG or JPG (MAX. 600x600px)</p>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" />
                                        </label>
                                    </div> :
                                    <div className="w-full h-32 rounded">
                                        <img name="image" value={pic} src={pic} alt="" className="h-full w-2/3 rounded" />
                                    </div>
                            }
                        </div>

                        <textarea name="message" className=' block w-full h-32 resize-none pl-2 border-2 border-[#d8dada] mb-5' type="text" id="" placeholder="Your message" />

                        <input disabled={pending ? true : false} className=' block h-10 px-7 bg-[#015abd] text-white cursor-pointer uppercase my-4' type="submit" value="Send now" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContectBanner;