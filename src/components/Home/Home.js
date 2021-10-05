import React, { useEffect, useState } from 'react';
import { Container, Form, FormControl, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {
    //state 
    const [univesities, setUniversities] = useState([]);
    const [matchUniversitys, setMatchUniversity] = useState([]);


    useEffect(() => {

        fetch('/university.json')
            .then(res => res.json())
            .then(data => {
                setUniversities(data)
                setMatchUniversity(data)
            });
    }, []);

    return (
        <div className="all-university">
            {/* banner */}
            <Banner></Banner>

            <h1 className="top">World University Rankings - Full Time MBA: United States</h1>

            <Table responsive="sm" className="my-5 colorStyle">
                <thead>
                    <tr>
                        <th>World Ranking</th>


                        <th>University Name</th>
                        <th>University Location</th>
                        <th>University Image</th>

                        <th>University Details</th>



                    </tr>
                </thead>
                <tbody>

                    {
                        matchUniversitys.map(univeristy => (
                            <tr className="table-list">
                                <td className="table-list">{univeristy?.ranking}</td>
                                <td className="style">{univeristy?.university}</td>
                                <td className="style">{univeristy?.location}</td>

                                <th><img className="rounded-circle w-25" src={univeristy?.image} alt="" /> </th>
                                <td className="style">
                                    <NavLink
                                        to={`/home/${univeristy?.ranking}`}
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "red"
                                        }}
                                    >
                                        details
                                    </NavLink>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>


            <Footer></Footer>
        </div>
    );
};

export default Home;