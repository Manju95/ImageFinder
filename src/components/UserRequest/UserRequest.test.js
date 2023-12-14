import { render, screen } from '@testing-library/react';
import UserRequestForm from './UserRequestForm';
import * as router from 'react-router-dom';
import React, { useState as useStateMock } from 'react';
import userEvent from '@testing-library/user-event';

describe('Renders User form', () => {

    test('renders form', () => {
    render(
        <router.BrowserRouter>
            <UserRequestForm />
        </router.BrowserRouter>
    );
    const userImageForm = screen.getByTitle(/user-image-form/i);
    expect(userImageForm).toBeInTheDocument();
    });

    test('renders first name and surname text boxes', () => {
        render(
        <router.BrowserRouter>
            <UserRequestForm />
        </router.BrowserRouter>
        );
        const firstNameInputBox = screen.getByPlaceholderText(/Jack/i);
        const surnameInputBox = screen.getByPlaceholderText(/Sparrow/i);
        const searchBtn = screen.getByRole(/search-images/i);
        expect(firstNameInputBox).toBeInTheDocument();
        expect(surnameInputBox).toBeInTheDocument();
        expect(searchBtn).toBeInTheDocument();
    });

    test('renders free textarea when other topic selected from dropdown', () => {
        jest.mock('react', () => ({
            ...jest.requireActual('react'),
            useState: jest.fn()
        }))

        render(
        <router.BrowserRouter>
            <UserRequestForm />
        </router.BrowserRouter>
        );
        const topicDropdown = screen.getByTitle(/topic-dropdown/i);
        userEvent.selectOptions(topicDropdown,["Other"]);
        const otherTopicTextAreaBox = screen.getByPlaceholderText(/Preferred topic/i);
        expect(otherTopicTextAreaBox).toBeInTheDocument();
    });

    test('Does not render free textarea when any topic selected apart from OTHER from dropdown', () => {
        jest.mock('react', () => ({
            ...jest.requireActual('react'),
            useState: jest.fn()
        }))

        render(
        <router.BrowserRouter>
            <UserRequestForm />
        </router.BrowserRouter>
        );
        const topicDropdown = screen.getByTitle(/topic-dropdown/i);
        userEvent.selectOptions(topicDropdown,["Wildlife"]);
        const otherTopicTextAreaBox = screen.queryByTitle(/Preferred topic/i);
        expect(otherTopicTextAreaBox).not.toBeInTheDocument();
    });
})