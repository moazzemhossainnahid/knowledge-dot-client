import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import useCourses from "../../Apis/useCourses";
import Sidebar from "../../Components/Components-Nahid/Sidebars/CoursesSidebar";
import Loading from "../SharedPages/Loading";
import CoursesGrid from "./CoursesGrid";

const Courses = () => {

  const { Courses } = useCourses();
  const [search, setSearch] = useState([]);
  const [checkboxFilter, setCheckboxFilter] = useState([]);
  const [reviewFilter, setReviewFilter] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [err, setErr] = useState(false);


  const [genre, setGenre] = useState([""]);
  const [filteredGenre, setFilteredGenre] = useState([""]);

  // const handleChange = e => {
  //   if (e.target.checked) {
  //     setGenre([...genre, e.target.value]);
  //   } else {
  //     setGenre(genre.filter(id => id !== e.target.value));
  //   }
  // };

  // useEffect(() => {
  //   setFilteredGenre(
  //     movieData.filter(movie =>
  //       genre.some(category => category === movie.genre)
  //     )
  //   );
  // }, [genre]);

  /* ----------------------------------------------------------------*/
  /*                     Filter By Name Search                       */
  /* ----------------------------------------------------------------*/
  const handleSearchResult = (e) => {
    const searchText = e.target.value;
    const result = Courses?.filter((course) =>
      course?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
      course?.category?.toLowerCase().includes(searchText.toLowerCase()) ||
      course?.list?.toLowerCase().includes(searchText.toLowerCase()) ||
      course?.language?.toLowerCase().includes(searchText.toLowerCase())
    );
    setCheckboxFilter([]);
    setCheckboxFilter([]);
    setReviewFilter([]);
    setSearch(result);
  }

  /* ----------------------------------------------------------------*/
  /*                   Filter By Courses Category                    */
  /* ----------------------------------------------------------------*/
  const filterByCategory = (e) => {
    const Category = e.target.value;
    if (Category === "All Courses") {
      setCheckboxFilter(Courses)
    };
    const result = Courses?.filter(course => course?.category === Category);
    setSearch([]);
    setCheckboxFilter([]);
    setReviewFilter([]);
    setCheckboxFilter(result);
  };

  /* ----------------------------------------------------------------*/
  /*                  Filter By Checkbox Category                    */
  /* ----------------------------------------------------------------*/
  const handleFilterByCheckbox = (e) => {
    const Category = e.target.value;

    if (e.target.checked) {
      setSelectedCategory([...selectedCategory, Category])
    } else {
      setSelectedCategory(selectedCategory?.filter(id => id !== e.target.value));
    };

    // console.log(result);
    setSearch([]);
    setReviewFilter([]);
    setCheckboxFilter([]);
  };

  const selectedResult = Courses?.filter(({ category }) => selectedCategory?.includes(category));
  // console.log(selectedCategory);

  /* ----------------------------------------------------------------*/
  /*                       Filter By Ratings                         */
  /* ----------------------------------------------------------------*/
  const handleReviewFilter = (num) => {
    if (num) {
      const filterData = Courses?.filter((cData) => Math.ceil(cData?.rating?.total_rating / cData?.rating?.total_people) === parseInt(num));
      setSearch([]);
      setCheckboxFilter([]);
      setCheckboxFilter([]);
      setReviewFilter(filterData);
    }
  };



  // Load Courses By Filter Type
  let loadCourses;

  if (checkboxFilter?.length > 0) {
    loadCourses = checkboxFilter
  }
  else if (selectedResult?.length > 0) {
    loadCourses = selectedResult
  }
  else if (search?.length > 0) {
    loadCourses = search
  }
  else if (reviewFilter?.length > 0) {
    loadCourses = reviewFilter
  }
  else {
    loadCourses = Courses
  };

  return (
    <div className="">
      <div className="py-3">
        <h3 className="text-4xl font-bold text-center py-4">
          User Interface Courses
        </h3>
        <p className="text-center text-xl">Building the Future</p>
      </div>
      <div className="">
        <div className="bg-base-100">
          <div className="container mx-auto py-10">
            <div className="grid grid-cols-1 relative lg:gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
              <div className="col-span-1">
                <div className="sticky top-20">
                  <aside>
                    <div className="md:mb-3 pb-10">
                      <Sidebar handleSearchResult={handleSearchResult} handleFilterByCheckbox={handleFilterByCheckbox} handleReviewFilter={handleReviewFilter} />
                    </div>
                  </aside>
                </div>
              </div>
              <div className="col-span-3">
                <Outlet />
                <div className="flex flex-col md:flex-row justify-between items-center gap-2 py-5">
                  <h3 className="text-gray-400 font-bold">Showing <span className="text-gray-500">{loadCourses?.length}</span> Total Results.</h3>
                  <div className="flex justify-between items-center gap-2 px-7">
                    <h3 className="text-gray-700 font-bold">Sort By:</h3>
                    <select onChange={filterByCategory} className="select bg-gray-300 max-w-xs">
                      <option disabled selected>Select Course</option>
                      <option>All Courses</option>
                      <option>Web Design</option>
                      <option>Web Development</option>
                      <option>Graphics Design</option>
                      <option>Spoken English</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {loadCourses?.length ?
                    loadCourses?.map((data, index) => (
                      <CoursesGrid course={data} key={index} />
                    )) :
                    <Loading />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
