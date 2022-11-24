import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import BaseURL from '../Hooks/BaseURL';
import Loading from '../Pages/SharedPages/Loading';
import { useNavigate } from 'react-router-dom';

const useCourses = () => {
    const navigate = useNavigate();
    const [Courses, setCourses] = useState();
    const { data: AllCoursesData, isLoading } = useQuery(["AllCoursesData"], () =>
        BaseURL.get(`/api/v1/courses/?sort=-price`)
    );

    // console.log(AllCoursesData);

    useEffect(() => {

        const data = AllCoursesData && AllCoursesData?.data?.data?.result;
        console.log(data);

        if (window.location.pathname === '/courses/Web%20Design') {
            const othersCourse = data?.filter(courses => courses?.category === "Web Design");
            setCourses(othersCourse);
        }else if (window.location.pathname === '/courses/Web%20Development') {
            const othersCourse = data?.filter(courses => courses?.category === "Web Development");
            setCourses(othersCourse);
        }else if (window.location.pathname === '/courses/Graphics%20Design') {
            const othersCourse = data?.filter(courses => courses?.category === "Graphics Design");
            setCourses(othersCourse);
        }else if (window.location.pathname === '/courses/Spoken%20English') {
            const othersCourse = data?.filter(courses => courses?.category === "Spoken English");
            setCourses(othersCourse);
        }else if (window.location.pathname === '/courses/Others') {
            const othersCourse = data?.filter(courses => courses?.category === "Others");
            setCourses(othersCourse);
        }else if (window.location.pathname === '/courses') {
            const othersCourse = data;
            navigate(1);
            setCourses(othersCourse)
        }else{
            setCourses(data)
        };

        console.log(window.location.pathname);
        
    }, [AllCoursesData, navigate]);

    if (isLoading) {
        return <Loading />;
    };


    // console.log(Courses);

    return { Courses };
};

export default useCourses;