import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Ubuntu', sans-serif;
        transition: all .3s ease;
    }

    body {
        margin: 0;
        width: 100%;
        background-color: #eee;
    }

    .App {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .error {
        padding: 1rem;
        border-radius: .5rem;
        background-color: rgb(225 46 46 / 76%);
        color: #330909;
    }
`;