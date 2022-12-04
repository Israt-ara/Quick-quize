import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from './Questions';

const Topics = () => {

    const getQuestionData = useLoaderData();
    const getAllTheData = getQuestionData.data;
    const getQuestions = getAllTheData.questions;

    return (
        <div>

            <h2 className='text-2xl text-center mt-4 font-bold'>Topics Name: {getAllTheData.name}</h2>
            <p className='text-center mt-4 font-bold'>Question: {getAllTheData.total}</p>
            {
                getQuestions.map(questions => <Questions key={questions.id} questions={questions}></Questions>)
            }
        </div>
    );
};

export default Topics;
