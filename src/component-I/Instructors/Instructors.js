import React from 'react';

const Instructors = () => {
    return (
        <>
        {/* // <div>
        //     <h5 className=' text-lg uppercase font-bold text-[#015ABD]'>MAPS & DIRECTIONS</h5>
        //     <h2 className=' text-4xl font-semibold my-4'>Find Our Location In Town</h2>
        //     <p className=' lg:w-[420px] mx-auto'>Search for our exact location and office address through this exclusive map listing provided below.</p>

        //     <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            
        //     <div className="card-body items-center text-center">
        //         <h2 className="card-title text-black">{name}</h2>
        //         <p className='text-black'>{position}</p>
        //         <div className="card-actions">
        //         <button  className="btn btn-primary">Buy Now</button>
        //         </div>
        //     </div>
        // </div> */}


       <div class="carousel w-full">
  <div id="item" class="carousel-item">
  <div class="card w-96 bg-base-100 shadow-xl ml-14">
  <figure><img src="https://promo-theme.com/medina-wp/wp-content/uploads/2016/10/t3.jpg" alt="Shoes" /></figure> 
   <div class="card-body">
    <h2 class="card-title"></h2>
    <h3 className='text-start font-bold mb-5'></h3>
    <p className='text-start'>Monday-Friday<span className='pl-32'>8:30-17:00</span></p>
    <p className='text-start'>Saturday   <span className='pl-40'>10:00-16:00</span></p>
    <p className='text-start'>Sunday<span className='pl-44'>12:00-14:00</span></p>
    <div class="card-actions justify-end">
      <button 
      
      class="btn btn-primary mt-5">Read More</button>
    </div>
  </div> 
 </div>
</div>
</div> 


<div class="flex justify-center w-full py-2 gap-2">
  <a href="#item" class="btn btn-xs">1</a> 
</div> 

</>
    );
};

export default Instructors;