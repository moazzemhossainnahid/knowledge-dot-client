import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import BaseURL from "../../Hooks/BaseURL";
import Loading from "../SharedPages/Loading";

const ProfileData = () => {
  const [user] = useAuthState(auth);
  const {
    data: myCourse,
    isLoading,
    refetch,
  } = useQuery(["myCourses", user?.email], () =>
    BaseURL.get(`/mycourse?email=${user?.email}`)
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="card p-6 shadow-2xl h-full bg-base-100">
      <h1 className="text-2xl mb-3">Courses</h1>
      <div className="grid sm:grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {myCourse?.data?.slice(0,3)?.map((allcard) => (
          <Link
            to={"/mycourse"}
            data-tip={allcard?.name}
            className="tooltip tooltip-bottom"
            key={allcard._id}
            allcard={allcard}
          >
            <div className="card w-full mx-auto bg-base-200 border border-neutral">
              <figure className="px-3 pt-3">
                <img
                  src={allcard?.img}
                  alt="Shoes"
                  className="rounded-xl w-full"
                />
              </figure>
              <div className="card-body p-2 items-center text-center">
                <h2>{allcard?.name.slice(0, 18)}...</h2>
                {/* <div className="flex gap-2 items-center">
                <progress className="progress progress-primary w-36" value="10" max="100"></progress><h1>10%</h1>
                </div> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link to={'/mycourse'} className="my-4 w-36 mx-auto btn-primary btn btn-outline">See All Course</Link>
      <h1 className="text-2xl mb-3">Books</h1>
      <div className="grid sm:grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 mb-10">
        <Link to={"/audiobooks"}>
          <div className="card w-full mx-auto bg-base-200 border border-neutral">
            <figure className="px-3 pt-3">
              <img
                src="https://img.freepik.com/premium-vector/neon-icon-audio-book-flat-style-white-background-vector-isometric-design_123447-2345.jpg"
                alt="Shoes"
                className="rounded-xl w-full"
              />
            </figure>
            <div className="card-body p-2 items-center text-center">
              <h2>Audio Books</h2>
            </div>
          </div>
        </Link>
        <Link to={"/ebooks"}>
          <div className="card w-full mx-auto bg-base-200 border border-neutral">
            <figure className="px-3 pt-3">
              <img
                src="https://img.freepik.com/free-vector/ebook-graphic-illustration_24908-54739.jpg?t=st=1661585692~exp=1661586292~hmac=75f956243628066f1af8d468e92cb1d09d85871b549cb6bf7e147002f4f98c9f"
                alt="Shoes"
                className="rounded-xl w-full"
              />
            </figure>
            <div className="card-body p-2 items-center text-center">
              <h2>eBooks</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProfileData;
