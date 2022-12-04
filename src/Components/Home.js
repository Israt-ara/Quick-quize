import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizData from './QuizData';
import './Home.css';

const Home = () => {

    const allQuizData = useLoaderData();
    const quizData = allQuizData.data;

    return (
        <div className='my-4 mx-8'>
            <div className=" relative px-4 pt-16 mx-auto mb-5 lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
                <div className="max-w-xl mx-auto lg:max-w-screen-xl">
                    <div className="mb-16 lg:max-w-lg lg:mb-0">
                        <div className="max-w-xl mb-6">

                            <h3 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                powered by Knowledge Anywhere


                            </h3>
                            <p className="text-base text-gray-700 md:text-lg">
                                Easily create, manage, and deploy quizzes directly through Slack!
                            </p>
                        </div>

                    </div>
                </div>
                <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
                    <img
                        src=" https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDIwXFxcLzA0XFxcLzE4MTkzMDIwXFxcL2lTdG9jay0xMTk3ODMyMDIyLTEwMjR4NjM2LmpwZ1wiLFwid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjozNjAsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL3d3dy5qb2UuaWVcXFwvYXNzZXRzXFxcL2ltYWdlc1xcXC9qb2VcXFwvbm8taW1hZ2UucG5nP2lkPTI2NGEyZGJlMzcwZjJjNjc1ZmNkXCIsXCJvcHRpb25zXCI6W119IiwiaGFzaCI6ImRiYjQzODcyMjcxMjZkNThjODM4ZWU3MDRiZjQ1MjJjN2YxMmNhNDYifQ==/istock-1197832022-1024x636.jpg"
                        className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
                        alt=""
                    />
                </div>
            </div>
            <div className='quiz mt-6'>
                {
                    quizData.map(quiz => <QuizData key={quiz.id} quiz={quiz}></QuizData>)
                }
            </div>
        </div>
    );
};

export default Home;




