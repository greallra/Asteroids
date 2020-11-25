
import React from 'react';
import styled from 'styled-components';

import { BiUpArrowAlt, BiDownArrowAlt } from 'react-icons/bi';

export const Left = styled.div`
    color: ${props => props.active ? "black" : "lightgrey"};
    width: 40px;
    padding: 14px;
    // background: ${props => props.active ? "var(--yellow)" : "none"};
    font-size: 12px;
    font-weight: 900;
    &:hover {
        color: firebrick;
    }
`;
const Right = styled.div`
width: 40px;
padding: 10px;
border-right: 1px solid lightgrey;
display: flex;
align-items: center;

`;
const StyledUpArrow = styled(BiUpArrowAlt)`
  color: black;
  border-color: tomato;
  &:hover {
    color: firebrick;
}
`;
const StyledDownArrow = styled(BiDownArrowAlt)`
  color: tomato;
  border-color: tomato;
  &:hover {
    color: firebrick;
}
`;

function renderArrows(key, sortBy, ascending) {
    if(sortBy !== key){
        return <StyledUpArrow size="1.5rem" color="lightgrey"/>
    }
    return ascending ? <StyledUpArrow size="1.5rem" data-testid="upArrow"/> :<StyledDownArrow size="1.5rem" data-testid="downnArrow"/>
}

export const FilterButton = ({buttonType, sortBy, setSortBy, setAscending, ascending})=>(
    <>
        <Left
            active={buttonType === sortBy}
            onClick={ () => setSortBy(buttonType) }
            style={{borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem'}}
            > {buttonType}
        </Left>
        <Right 
            onClick={setAscending}
            data-testid="right-btn"
            > 
            {renderArrows(buttonType, sortBy, ascending)}
        </Right> 
    </>
)