
import styled from 'styled-components';

export const PageWrapper = styled.div`
    min-height: 100vh;
    background: var(--lightgrey);
    color: black;
    display: flex;
    flex-direction: column;
    padding: 20px 200px;
    @media (max-width: 968px) {
        padding: 0;
      }
`;

export const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ButtonWhite = styled.div`
    padding: 10px 16px;
    border-radius: .5rem;
    font-size: 14px;
    font-weight: 700;
    border: 1px solid var(--dark);
    background-color: var(--white);
    color: var(--dark);
    &:hover {
        cursor: pointer;
    }
`
export const ButtonBlack = styled.div`
    padding: 5px 8px;
    border-radius: .5rem;
    font-size: 14px;
    font-weight: 700;
    border: 1px solid var(--light-black);
    background-color: rgba(0,0,0,0.5);
    color: ${props => props.active ? 'var(--grey)' : 'var(--yellow)'};
    opacity: ${props => props.active ? "20%" : "100%"};
    &:hover {
        cursor: pointer;
        color: firebrick;
    }
    &:active {
        background: rgba(0,0,0,0.8);
    }
`
export const Button = styled.div`
    padding: 6px;
    background: #FFE39A;
    color: black;
    display: flex;
    margin: 10px;
    border: 1px solid black;
    border-radius: .5rem;
`;

export const ImgWrapper = styled.div`
    padding: 8px;
    border-radius: 50%;
    background: rgba(0,0,0,0.5);
    box-shadow: 3px 3px 3px grey;
    &:hover {
        background: rgba(0,0,0,0.8);
        cursor: pointer;
    }   
`
