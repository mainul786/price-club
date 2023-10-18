import axios from 'axios';
import React, { useState } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const BarPhone = () => {
    const [phones, setPhones] = useState([]);

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;

            const loadedPhone = phoneData.map(phone => {
                console.log(phone)
                const phoneSlug = phone.slug.split('-');
                const phonePrice = parseInt(phoneSlug[1]);
                const singlePhone = {
                    name: phone.phone_name,
                    price: phonePrice
                }
                return singlePhone;
            })
            console.log(loadedPhone)
            setPhones(loadedPhone);
        })

    return (
        <BarChart width={730} height={250} data={phones}>

            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
    );
};

export default BarPhone;