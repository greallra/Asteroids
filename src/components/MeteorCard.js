
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { Row } from './core/styled'
import Img from '../asteroid.png'
import { ImgWrapper, ButtonBlack } from './core/styled'
import { AiFillCloseCircle } from 'react-icons/ai';

import { useSelector, useDispatch, useStore } from 'react-redux';
import { getData, setSelectedMeteor, resetMeteors } from '../redux/actions'

const Card = styled.div`
    color: black;
    padding: 10px;
    background: #fff;
    border-top: 1px solid #efefef;
    border-left: 1px solid #efefef;
    border-right: 1px solid #efefef;
    @media (max-width: 968px) {
        margin: 0px 12px;
      }
`;

const CloseButton = styled(AiFillCloseCircle)`
    &:hover {
        cursor: pointer;
    }
`;

const Year = styled.div`
    margin: 0 10px;
    color: black;
`;
const Name = styled.div`
    padding: 10px;
    font-weight: 700;
`;
const Weight = styled.div`
    margin: 0 10px;

`;

export function MeteorCard({id, name, mass, year, index}) {
    //Redux data
    const meteors = useSelector(store => store.mainReducer.meteors)
    const isFetching = useSelector(store => store.mainReducer.fetchingMeteors)
    const selectedMeteor = useSelector(store => store.mainReducer.selectedMeteor)
    const dispatch = useDispatch()
    //other
    function handleMeteorSelected() {
        if(!selectedMeteor) {
            dispatch(setSelectedMeteor(meteors[index]))
        }
    }
    if(!selectedMeteor) {
        return <Card key={id}>
        <Row>
            <img src={Img}></img>      
            <Name>{name}</Name>         
        </Row>
        <Row style={{justifyContent: 'space-around'}}>
            <Weight>Mass (g): {Math.round(mass)}</Weight>
            <Year>Year Fell: {moment(year).format(' Do MMMM YYYY')}</Year>
            <Row>
                <ButtonBlack onClick={handleMeteorSelected} style={{marginLeft: 10}} active={!!selectedMeteor}>Show On Map</ButtonBlack>
                {selectedMeteor && selectedMeteor.id === selectedMeteor.id && <CloseButton  style={{marginLeft: 10}} />}
            </Row>        
        </Row>       
    </Card>
    } else {
        return <Card key={selectedMeteor.id}>
        <Row>
            <img src={Img}></img>      
            <Name>{selectedMeteor.name}</Name>         
        </Row>
        <Row style={{justifyContent: 'space-around'}}>
            <Weight>Mass (g): {Math.round(selectedMeteor.mass)}</Weight>
            <Year>Year Fell: {moment(selectedMeteor.year).format(' Do MMMM YYYY')}</Year>
            <Row>
                <ButtonBlack onClick={handleMeteorSelected} style={{marginLeft: 10}} active={!!selectedMeteor}>Show On Map</ButtonBlack>
                {selectedMeteor && selectedMeteor.id === selectedMeteor.id && <CloseButton onClick={ ()=> dispatch(resetMeteors()) } style={{marginLeft: 10}} />}
            </Row>        
        </Row>       
    </Card>
    }
}

