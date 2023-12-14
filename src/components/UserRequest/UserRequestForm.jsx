import React, { useContext, useState } from 'react';
import './UserRequest.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { context } from '../context';
import { topicDropdownOptions } from '../../Data/data';

function UserRequestForm() {
    const topics = topicDropdownOptions;
    const [topic,setTopic] = useState();
    const { register, handleSubmit, formState: { errors }} = useForm();
    var navigate = useNavigate();
    var contextData = useContext(context)

    const topicOptions = topics.map((t,id) => <option key={id} id={id} value={t}>{t}</option>)

    const handleSelect = (event) => {
        setTopic(event.target.value);
    }

    const handleFormSubmit = (data) => {
        var searchKey = topic !== undefined && topic === 'Other' ? topic.othertopic : topic;
        contextData[0].topic = searchKey;
        contextData[0].userData = data;
        navigate('/image');
    }

    return (
            <form title='user-image-form' className='user-form' onSubmit={handleSubmit(handleFormSubmit)}>
                <div className='row'>
                    <div className='col-sm-4'>
                        <label>First Name</label>
                    </div>
                    <div className='col-sm-8'>
                        <input id='firstname' placeholder='Jack' {...register('firstname', {required:true,pattern:"^[a-zA-Z]+$"})} type='text' />
                        {errors.firstname?.type === "required" && (
                            <p className='error' role="alert">First name is required</p>
                        )}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <label>Surname</label>
                    </div>
                    <div className='col-sm-8'>
                        <input id='surname' placeholder='Sparrow' {...register('surname', {required:true})} type='text' />
                        {errors.surname?.type === "required" && (
                            <p role="alert">Surname is required</p>
                        )}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <label>Topic</label>
                    </div>
                    <div className='col-sm-8'>
                        <select title='topic-dropdown' className='select' {...register('topic', {required:true})} onChange={handleSelect}>
                            <option value="" >Select Topic</option>
                            {topicOptions}
                        </select>
                        {errors.topic?.type === "required" && (
                            <p role="alert">Topic is required</p>
                        )}
                    </div>
                </div>
                {topic !== undefined && topic === 'Other' &&
                    <div className='row'>
                        <div className='col-sm-4'>
                            <label>Preferred Topic</label>
                        </div>
                        <div className='col-sm-8'>
                            <textarea placeholder='Preferred topic' {...register('othertopic', {required:true})} rows={2} cols={20} />
                            {errors.othertopic?.type === "required" && (
                                <p role="alert">Topic is required</p>
                            )}
                        </div>
                    </div>
                }
                <div className='col-sm-12'>
                    <input role='search-images' className='search-btn' type='submit' name='Search' />
                </div>
            </form>
    );
}

export default UserRequestForm;