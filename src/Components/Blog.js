import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog-data">
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                    <h2 className="text-xl font-bold accordion-header mb-0" id="flush-headingOne">
                        <button className="accordion-button
relative
flex
items-center
w-full
py-4
px-5
text-base text-gray-800 text-left
bg-white
border-0
rounded-none
transition
focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                            aria-expanded="false" aria-controls="flush-collapseOne">
                            What Is the purpose of React router?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse border-0 collapse show"
                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body py-4 px-5">ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</div>
                    </div>
                </div>
                <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="flush-headingTwo">
                        <button className="text-xl font-bold accordion-button
collapsed
relative
flex
items-center
w-full
py-4
px-5
text-base text-gray-800 text-left
bg-white
border-0
rounded-none
transition
focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                            aria-expanded="false" aria-controls="flush-collapseTwo">
                            How does context API works?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body py-4 px-5">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</div>
                    </div>
                </div>
                <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="flush-headingThree">
                        <button className="font-bold text-xl accordion-button
collapsed
relative
flex
items-center
w-full
py-4
px-5
text-base text-gray-800 text-left
bg-white
border-0
rounded-none
transition
focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                            aria-expanded="false" aria-controls="flush-collapseThree">
                            Whar is useRef()?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body py-4 px-5">The useRef Hook allows you to persist values between renders.

                            It can be used to store a mutable value that does not cause a re-render when updated.

                            It can be used to access a DOM element directly.

                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Blog;
