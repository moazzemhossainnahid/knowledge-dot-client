import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import CountUp from 'react-countup';


const Instructors = () => {
  return (
    <div className='w-full mx-auto py-20  text-slate-800 mb-20'>
      <div className="text-center mb-20">
        <div>
          <h1 className='te mb-5 text-4xl md:text-5xl font-bold'>The Best Tutors</h1>
          <p className="mb-5 text-2xl lg:w-[820px] mx-auto">Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque, facilisis vel mollis vitae, mollis nec ante. Quisque aliquam dictum condim.</p>
        </div>
      </div>

      <div class="carousel w-full mb-20">
        <div data-aos="fade-up" class="card w-96 m-auto">
          <figure><img src="https://esmarts.qodeinteractive.com/wp-content/uploads/2017/10/instructor-img-2.jpg" alt="Shoes" /></figure>
          <div class="card-body flex items-center">
            <h2 class="font-bold text-2xl text-center"> Jacke Masitos</h2>
            <h3 className='text-center  mb-5'>Special Assistant</h3>
            <p className='text-center'>Donec iaculis mi eget tempus lobortis. Maecenas vitae velit neque. Pellentesque suscipit facilisis sapien. Suspen auctor…</p>
            <div className="flex items-center gap-4 text-gray-500 mt-5 text-xl">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faPinterest} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>

        </div>
        <div data-aos="fade-up" class="card w-96 m-auto">
          <figure><img src="https://esmarts.qodeinteractive.com/wp-content/uploads/2017/10/instructor-img-3.jpg" alt="Shoes" /></figure>
          <div class="card-body flex items-center">
            <h2 class="font-bold text-2xl text-center"> Richard Dune</h2>
            <h3 className='text-center  mb-5'>Special Assistant</h3>
            <p className='text-center'>Donec iaculis mi eget tempus lobortis. Maecenas vitae velit neque. Pellentesque suscipit facilisis sapien. Suspen auctor…</p>
            <div className="flex items-center gap-4 text-gray-500 mt-5 text-xl">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faPinterest} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
        <div data-aos="fade-up" class="card w-96 m-auto">
          <figure><img src="https://esmarts.qodeinteractive.com/wp-content/uploads/2017/10/instructor-img-4.jpg" alt="Shoes" /></figure>
          <div class="card-body flex items-center">
            <h2 class="font-bold text-2xl text-center"> Glen Anders</h2>
            <h3 className='text-center  mb-5'>Special Assistant</h3>
            <p className='text-center'>Donec iaculis mi eget tempus lobortis. Maecenas vitae velit neque. Pellentesque suscipit facilisis sapien. Suspen auctor…</p>
            <div className="flex items-center gap-4 text-gray-500 mt-5 text-xl">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faPinterest} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>

          </div>
        </div>
      </div>

      <div className="text-center mb-20">
        <h1 className='text-slate-800 mb-5 text-4xl md:text-5xl font-bold lg:w-[820px] mx-auto'>A world class education for anyone,
          anywhere. 100% free</h1>
      </div>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 sm:gap-16 md:gap-8 my-12 text-center">
        <div className="p-10 rounden dark:text-slate-200">
          <div className='h-40 w-40 m-auto'>
            <img src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/09/icon_plan_course.png?" />
          </div>
          <div>
            <h1 className="text-xl font-bold">1. Plan your course</h1>
            <p className="text-sm  my-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </div>
        <div className="p-10 rounden dark:text-slate-200">
          <div className='h-40 w-40 m-auto'>
            <img src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/09/icon_record_video.png?" />
          </div>
          <div>
            <h1 className="text-xl font-bold">2. Record your video</h1>
            <p className="text-sm  my-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </div>
        <div className="p-10 rounden dark:text-slate-200">
          <div className='h-40 w-40 m-auto'>
            <img src="https://themes-themegoods.b-cdn.net/coursector/wp-content/uploads/2019/09/icon_community.png?" />
          </div>
          <div>
            <h1 className="text-xl font-bold">3. Build your community</h1>
            <p className="text-sm  my-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </div>
      </div>

      <div class="divider"></div>


      <div className="hero text-center font-thin mt-16 mb-20">
        <div class="flex lg:flex-row sm:flex-col md:flex-row w-full">
          <div class="stat justify-items-center">
            <div className='flex flex-row'>
              <CountUp className="text-6xl font-bold" end={40} />
              <h1 className='text-6xl font-bold'>M</h1>
            </div>
            <div class="stat-desc text-2xl">Students</div>
          </div>
          <div class="stat justify-items-center">
            <div className='flex flex-row'>
              <CountUp className="text-6xl font-bold" end={130} />
              <h1 className='text-6xl font-bold'>K</h1>
            </div>
            <div class="stat-desc  text-2xl">Courses</div>
          </div>
          <div class="stat justify-items-center">
            <div className='flex flex-row'>
              <CountUp className="text-6xl font-bold" end={50} />
              <h1 className='text-6xl font-bold'>K</h1>
            </div>
            <div class="stat-desc  text-2xl">Instructors</div>
          </div>
          <div class="stat justify-items-center">
            <div className='flex flex-row'>
              <CountUp className="text-6xl font-bold" end={65} />
              <h1 className='text-6xl font-bold'>M</h1>
            </div>
            <div class="stat-desc  text-2xl">Course Enrolments</div>
          </div>
          <div class="stat justify-items-center">
            <div className='flex flex-row'>
              <CountUp className="text-6xl font-bold" end={30} />
              <h1 className='text-6xl font-bold'>+</h1>
            </div>
            <div class="stat-desc  text-2xl">Languages</div>
          </div>
        </div>
      </div>

      <div className="hero" style={{ backgroundImage: "url(https://esmarts.qodeinteractive.com/wp-content/uploads/2017/09/testimonials-background-1.jpg)", height: '420px', width: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div class="carousel w-full">
          <div id="item1" class="carousel-item w-full flex flex-col justify-center ">
            <div className="p-10 rounden dark:text-slate-200 text-white">
              <div className='h-40 w-40 m-auto'>
                <img src="https://esmarts.qodeinteractive.com/wp-content/uploads/2017/10/h1-t6.png?" />
              </div>
              <div>
                <h1 className="text-center text-xl font-bold">Anniy Page </h1>
                <h2 className='text-center'>Student</h2>
                <p className="text-sm  my-4 text-center">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore edolore magna aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </div>
          </div>
          <div id="item2" class="carousel-item w-full flex flex-col justify-center ">
            <div className="p-10 rounden dark:text-slate-200 text-white">
              <div className='h-40 w-40 m-auto'>
                <img src="https://esmarts.qodeinteractive.com/wp-content/uploads/2017/10/h1-t5-150x150.png?" />
              </div>
              <div>
              <h1 className="text-center text-xl font-bold">John Evan</h1>
                <h2 className='text-center'>Student</h2>
                <p className="text-sm  my-4 text-center">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore edolore magna aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </div>
          </div>
          <div id="item3" class="carousel-item w-full flex flex-col justify-center ">
            <div className="p-10 rounden dark:text-slate-200 text-white">
              <div className='h-40 w-40 m-auto'>
                <img src="https://esmarts.qodeinteractive.com/wp-content/uploads/2017/10/h1-t4-150x150.png?" />
              </div>
              <div>
              <h1 className="text-center text-xl font-bold">Barbara Mori</h1>
                <h2 className='text-center'>Student</h2>
                <p className="text-sm  my-4 text-center">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore edolore magna aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center w-full py-2 gap-2 mt-96">
          <a href="#item1" class="btn btn-circle bg-white h-[50]"></a>
          <a href="#item2" class="btn btn-circle bg-white"></a>
          <a href="#item3" class="btn btn-circle bg-white"></a>
        </div>
      </div>




      <div className="mt-28 ml-10">
        <h3 className="text-4xl md:text-5xl font-bold text-left ">Meet Professionals</h3>
        <div className='w-[100px] h-[4px] bg-[#f82525] relative mt-5'>
          <div className='radiant bg-[#FFFFFF]'></div>
          <p className="mb-5 text-2xl lg:w-[820px] mx-auto">Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum neque, facilisis vel mollis vitae, mollis nec ante. Quisque aliquam dictum condim.</p>
        </div>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 sm:gap-16 md:gap-8 my-12 mt-20 ">
          <div className="p-10 rounden dark:text-slate-200 flex justify-evenly items-center">
            <div className='h-40 w-40'>
              <img src="https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-team-big-1.jpg?" />
            </div>
            <div className=''>
              <h1 className="text-xl font-bold">Mark Hook</h1>
              <p className="text-sm  my-4">Teacher </p>
              <div className="flex items-center gap-4 text-gray-500 mt-5 text-xl">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faPinterest} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>
          <div className="p-10 rounden dark:text-slate-200 flex justify-evenly items-center">
            <div className='h-40 w-40'>
              <img src="https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-team-big-4.jpg?" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Tom Ander</h1>
              <p className="text-sm  my-4">
                Teacher
              </p>
              <div className="flex items-center gap-4 text-gray-500 mt-5 text-xl">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faPinterest} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>

          </div>
          <div className="p-10 rounden dark:text-slate-200 flex justify-evenly items-center">
            <div className='h-40 w-40'>
              <img src="https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-team-big-5.jpg?" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Neil Falynn</h1>
              <p className="text-sm  my-4">
                Teacher
              </p>
              <div className="flex items-center gap-4 text-gray-500 mt-5 text-xl">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faPinterest} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>
          <div className="p-10 rounden dark:text-slate-200 flex justify-evenly items-center">
            <div className='h-40 w-40'>
              <img src="https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-team-big-2.jpg?" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Neil Falynn</h1>
              <p className="text-sm  my-4">
                Teacher
              </p>
              <div className="flex items-center gap-4 text-gray-500 mt-5 text-xl">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faPinterest} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>
          <div className="p-10 rounden dark:text-slate-200 flex justify-evenly items-center">
            <div className='h-40 w-40'>
              <img src="https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-team-big-3.jpg?" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Neil Falynn</h1>
              <p className="text-sm  my-4">
                Teacher
              </p>
              <div className="flex items-center gap-4 text-gray-500 mt-5 text-xl">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faPinterest} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>
          <div className="p-10 rounden dark:text-slate-200 flex justify-evenly items-center">
            <div className='h-40 w-40'>
              <img src="https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-team-big-6.jpg?" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Neil Falynn</h1>
              <p className="text-sm  my-4">
                Teacher
              </p>
              <div className="flex items-center gap-4 text-gray-500 mt-5 text-xl">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faPinterest} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>
          <div className="p-10 rounden dark:text-slate-200 flex justify-evenly items-center">
            <div className='h-40 w-40'>
              <img src="https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-team-big-7.jpg?" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Neil Falynn</h1>
              <p className="text-sm  my-4">
                Teacher
              </p>
              <div className="flex items-center gap-4 text-gray-500 mt-5 text-xl">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faPinterest} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>
          <div className="p-10 rounden dark:text-slate-200 flex justify-evenly items-center">
            <div className='h-40 w-40'>
              <img src="https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-team-big-8.jpg?" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Neil Falynn</h1>
              <p className="text-sm  my-4">
                Teacher
              </p>
              <div className="flex items-center gap-4 text-gray-500 mt-5 text-xl">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faPinterest} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>
          <div className="p-10 rounden dark:text-slate-200 flex justify-evenly items-center">
            <div className='h-40 w-40'>
              <img src="https://academist.qodeinteractive.com/wp-content/uploads/2018/06/main-home-team-big-9.jpg?" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Neil Falynn</h1>
              <p className="text-sm  my-4">
                Teacher
              </p>
              <div className="flex items-center gap-4 text-gray-500 mt-5 text-xl">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faPinterest} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero" style={{ backgroundImage: "url(https://edubee.radiantthemes.com/wp-content/uploads/2021/05/become-inst-img-1.jpg)", height: '420px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div class="card-body ml-[700px]">
            <h2 className='text-primary font-semibold'>Upskill Your Team With World-Class Learning </h2>
            <h2 class="card-title">Become An Instructor Today!</h2>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan. Risus commp commodo lora viverra adipiscing elit. Ut elit tellus,</p>
            <div class="card-actions mt-5">
              <button class="btn btn-primary">Join Us for free</button>
            </div>
          </div>
        
      </div>

    </div>



  );
};

export default Instructors;