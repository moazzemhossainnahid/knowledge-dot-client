import React from 'react';

const Reviews = () => {
    return (
        <div className='container text-left'>
            <div className="flex flex-col md:flex-row items-center gap-5 justify-center">
                <div className="w-full md:w-1/5 flex flex-row md:flex-col items-center gap-3 justify-center">
                    <h3 className="text-4xl md:text-6xl font-bold">5.0</h3>
                    <div class="rating py-3">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <p className="font-semibold text-xl">Course Rating</p>
                </div>
                <div className="w-full md:w-4/5">
                    <div className="flex items-center justify-center gap-3">
                        <progress class="progress h-5 w-full" value="100" max="100"></progress>
                        <div class="rating py-3">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        </div>
                        <h3 className="text-xl ">100%</h3>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <progress class="progress h-5 w-full" value="70" max="100"></progress>
                        <div class="rating py-3">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h3 className="text-xl ">70%</h3>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <progress class="progress h-5 w-full" value="50" max="100"></progress>
                        <div class="rating py-3">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h3 className="text-xl ">50%</h3>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <progress class="progress h-5 w-full" value="30" max="100"></progress>
                        <div class="rating py-3">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h3 className="text-xl ">30%</h3>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <progress class="progress h-5 w-full" value="0" max="100"></progress>
                        <div class="rating py-3">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h3 className="text-xl ">10%</h3>
                    </div>
                </div>
            </div>

            <hr className='my-10' />

            <div className="w-full flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-2/5 flex items-center justify-center gap-3">
                    <img className='rounded-full' src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/04/creative-female-artist-painting-new-picture-45NBEJP-100x100.jpg" alt="" />
                    <div className="">
                        <h3 className="text-gray-400 font-semibold">3 years ago</h3>
                        <h3 className="text-xl font-bold">Florian Zaugg</h3>
                    </div>
                </div>
                <div className="w-full md:w-3/5">
                <div class="rating py-3">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <h3 className="font-bold text-xl py-5">Teaching which is awesome</h3>
                    <p className="">I cant express my happiness or felling in words why because that much happy im after finishing this course i earned and learned so much main thing is Teaching which is awesome.</p>
                </div>
            </div>

        </div>
    );
};

export default Reviews;