import styled from 'styled-components';

export const SignUpContainer  = styled.div`
display: flex;
flex-direction: column;
width: 380px;

h2 {
    margin: 10px 0;
}

@media screen and (max-width: 950px) {
    width: 90%;
    margin: 0 auto;
    
    Button {
        display: flex;
        min-width: 200px;
        margin: 0 auto;
        
    }
}
`
