import styled from "styled-components";

export const AuthenticationContainer = styled.div`
    display: flex;
    width: 900px;
    justify-content: space-between;
    margin: 0 auto;

    @media screen and (max-width: 950px) {
        display: flex;
        flex-direction: column;
        width: 90%;
    }
`