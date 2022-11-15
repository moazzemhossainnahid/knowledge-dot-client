import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faInr, faUser } from '@fortawesome/free-solid-svg-icons';
import useCourses from '../../../Apis/useCourses';

const MoreCourseSec = ({ course }) => {
    const { Courses } = useCourses();
    const matchedCategories = Courses?.filter(crc => crc?.category === course?.category);
    console.log(matchedCategories);
    return (
        <div className='py-10'>
            <h3 className="text-2xl font-bold text-center">More courses you might like</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
                {
                    matchedCategories?.length && matchedCategories?.map(matchCrc => (
                        <div class="card group w-full overflow-hidden bg-base-100 shadow-xl hover:text-white hover:bg-gradient-to-tr from-[#090909bb] to-[#0000008f] bg-cover bg-center duration-300">
                            <div class="card-actions justify-end absolute top-5 right-2">
                                <div class="badge badge-primary px-3 py-2"><FontAwesomeIcon icon={faInr} /> {matchCrc?.price} </div>
                            </div>
                            <figure><img className='group-hover:scale-[4] group-hover:mix-blend-overlay  duration-300' src={matchCrc?.thumbimg} alt="Shoes" /></figure>
                            <div class="card-body bg-cover bg-center z-10">
                                <div className="w-full rounded mx-auto -mt-16 p-3 group-hover:bg-[#18181862] bg-base-100 shadow-lg">
                                    <h2 class="card-title">{matchCrc?.name}</h2>
                                    <p className='flex items-center justify-center gap-2'>
                                        <div class="rating">
                                            <input type="radio" name="rating-2" class="mask w-5 h-5 mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" class="mask w-5 h-5 mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" class="mask w-5 h-5 mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" class="mask w-5 h-5 mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" class="mask w-5 h-5 mask-star-2 bg-orange-400" />
                                        </div>
                                        <span className="text-md"> 4.0 (1 rating) </span>
                                    </p>
                                </div>
                                <div class="card-actions flex-col mx-auto gap-3 justify-center py-7">
                                    <div className="flex items-center justify-center gap-3 group-hover:text-white">
                                        <FontAwesomeIcon icon={faBook} />
                                        <h3 className="text-md">{matchCrc?.files?.length} Lessons</h3>
                                    </div>
                                    <div className="flex items-center justify-center gap-3 group-hover:text-white">
                                        <FontAwesomeIcon icon={faUser} />
                                        <h3 className="text-md">23 Students</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MoreCourseSec;