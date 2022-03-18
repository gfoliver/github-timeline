import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    padding: 2rem 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-bottom: 1rem;
    }

    form {
        display: flex;
        align-items: center;
    }

    input {
        padding: .75rem 1rem;
        border-radius: .5rem;
        border: 1px solid #ccc;
        margin-right: .5rem;
    }

    button {
        padding: .75rem 1rem;
        background-color: #34eb40;
        color: #fff;
        border-radius: .5rem;
        border: 1px solid #34eb40;
        cursor: pointer;
        font-weight: bold;
    }

    .repos-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 2rem;

        background: linear-gradient(90deg, transparent 49%, #fff 49%, #fff 51%, transparent 51%);
    }
`;

export const Repo = styled.a`
    padding: 1.5rem;
    border-radius: .5rem;
    box-shadow: 0px 0px 40px 4px rgba(0,0,0,0.08);
    margin-bottom: 1rem;
    background-color: #fff;
    position: relative;
    text-decoration: none;
    display: block;

    &:nth-child(odd) {
        transform: translateX(calc(-50% - 1rem));
        border-right: 4px solid #34eb40;

        &:hover {
            transform: translateY(-5px) translateX(calc(-50% - 1rem));
        }

        &:after {
            content: '';
            position: absolute;
            top: 50%;
            right: -1rem;
            transform: translateY(-50%);
            background-color: #fff;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 100%;
            border: 4px solid #34eb40;
        }
    }

    &:nth-child(even) {
        transform: translateX(calc(50% + 1rem));
        border-left: 4px solid #34eb40;

        &:hover {
            transform: translateY(-5px) translateX(calc(50% + 1rem));
        }

        &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: -1rem;
            transform: translateY(-50%);
            background-color: #fff;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 100%;
            border: 4px solid #34eb40;
        }
    }

    h2 {
        margin-bottom: 0.5rem;
        color: rgba(0,0,0,0.8);
    }

    .date {
        font-size: .875rem;
        color: rgba(0,0,0,0.6);
    }
`;