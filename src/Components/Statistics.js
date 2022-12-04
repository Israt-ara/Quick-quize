import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    const findAllQuizData = useLoaderData();
    const quizDataValue = findAllQuizData.data;
    // console.log(quizDataValue);

    return (
        <ResponsiveContainer width="95%" height={400}>

            <LineChart width={700} height={300} data={quizDataValue} margin={{ top: 50, right: 20, bottom: 0, left: 0 }}>
                <Line type="monotone" dataKey="total" stroke="red" />
                <CartesianGrid stroke="gray" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>

        </ResponsiveContainer>
    );
};

export default Statistics;




