import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Source Code Pro', monospace,sans-serif;
        background-image: linear-gradient(to right bottom, #A681EB , #00705B );
        background-repeat: no-repeat;
        display: grid;
        place-items: center;
        height: 100vh;
    }
`;
