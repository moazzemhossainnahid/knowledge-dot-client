import { faFacebook, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Overview = () => {
    return (
        <div className='text-left'>
            <div className="">
            <h3 className="text-2xl lg:text-3xl font-bold">Course Description</h3>
            <p className="py-5">See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket.</p>
            </div>
            <div className="">
            <h3 className="text-2xl lg:text-3xl font-bold">Certification</h3>
            <p className="py-5">Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design slingback strap mid kitten heel this ladylike design.</p>
            </div>
            <div className="">
            <h3 className="text-2xl lg:text-3xl font-bold">Who this course is for</h3>
            <p className="py-5"><li circle>Anyone interested in learning about business (only practical concepts that you can use and no boring theory + we won’t cover business topics that are common sense).</li></p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 my-5 mx-auto">
            <div className="flex gap-5 justify-start px-5 bg-[#1877F2] items-center text-white cursor-pointer rounded py-2">
            <FontAwesomeIcon icon={faFacebook}/>
            <span className="">Share</span>
            </div>
            <div className="flex gap-5 justify-start px-5 bg-[#1DA1F2] items-center text-white cursor-pointer rounded py-2">
            <FontAwesomeIcon icon={faTwitter}/>
            <span className="">Tweet</span>
            </div>
            <div className="flex gap-5 justify-start px-5 bg-[#BD081C] items-center text-white cursor-pointer rounded py-2">
            <FontAwesomeIcon icon={faPinterest}/>
            <span className="">Pin</span>
            </div>
            <div className="flex gap-5 justify-start px-5 bg-[#0A66C2] items-center text-white cursor-pointer rounded py-2">
            <FontAwesomeIcon icon={faLinkedin}/>
            <span className="">Linkedin</span>
            </div>
        </div>
        </div>
    );
};

export default Overview;