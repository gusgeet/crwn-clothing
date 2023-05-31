import styled from 'styled-components';

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    h2 {
        margin: 10px 0;
    }

    @media screen and (max-width: 950px) {
        display: grid;
        width: 90%;
        margin: 0 auto;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 950px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        Button {
            display: flex;
            margin-bottom: 10px;
            min-width: 200px;
        }
    }
`
