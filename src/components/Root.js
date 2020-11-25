import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import styled from 'styled-components';
import { getData, resetMeteors } from '../redux/actions'
import moment from 'moment';
// Icons
import { IoIosRefresh } from 'react-icons/io';
import ClipLoader from "react-spinners/ClipLoader";
// Components
import { PageWrapper, Row } from './core/styled'
import { MeteorCard } from './MeteorCard'
import { SearchInput } from './SearchInput';
import { FilterButton, Left as Clear } from './FilterButton';
import Map from './Map';


const Filters = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 1176px) {
        justify-content: center;
      }
`;
const Buttons = styled.div`
  margin: 10px 0;
  display: flex;
  height: 50px;
  box-sizing: border-box;
  background: var(--white);
  border-radius: .5rem;
  &:hover {
      cursor: pointer;
  }
`;
const Refresh = styled(IoIosRefresh)`
    padding: 6px;
    margin: 6px;
    border-radius: 50%;
    background: var(--white);
    &:hover {
        cursor: pointer;
        color: firebrick;
    }
`;

export default function Root() {
    // Filters in local state
    const [sortBy, setSortBy] = useState('weight');
    const [ascending, setAscending] = useState(true);
    const [searchText, setSearchText] = useState('');
    //Redux data
    const store = useSelector(store => store.mainReducer)
    const meteors = useSelector(store => store.mainReducer.meteors)
    const isFetching = useSelector(store => store.mainReducer.fetchingMeteors)
    const selectedMeteor = useSelector(store => store.mainReducer.selectedMeteor)
    const fetchError = useSelector(store => store.mainReducer.fetchError)
    const dispatch = useDispatch()

    //fetch the nasa data via redux
    useEffect(()=>{
        dispatch(getData())
    }, [])

    // FILTERS
    //sort weight asceding by default
    let meteorsFiltered;

    function applyFilters(array) {
        if(searchText) array = array.filter( ({name}) =>  name.toLowerCase().startsWith(searchText.toLowerCase()))
        if(sortBy === 'weight'){
            let sortAscending = [...array].sort( (a,b)=> Number(a.mass) - Number(b.mass) );
            if(!ascending) return sortAscending.reverse();
            return sortAscending; 
        }
        else if(sortBy === 'name'){
            let sortAscending = [...array].sort((a,b) => {
                    if(a.name < b.name) return -1;
                    else if(a.name > b.name) return 1;
                    else return 0;
                })
            if(!ascending) return sortAscending.reverse();
            return sortAscending;
        }
        else if(sortBy === 'year') {
            let sortAscending = [...array].sort((a,b) => {
                const aYear = moment(a.year).year();
                const bYear = moment(b.year).year();

                if(aYear < bYear) return -1;
                else if(aYear > bYear) return 1;
                else return 0;
            })
            if(!ascending) return sortAscending.reverse();
            return sortAscending;
        }
        return array;
    }

    function handleSortBy(sortBy) {
      setSortBy(sortBy)
    }

    const buttons = ['weight', 'name', 'year',]
   
    meteorsFiltered = applyFilters(meteors);

    return (
    <PageWrapper>
        {/* Map */}
        <Map meteors={meteorsFiltered} />
         {/* Filters */}
        <Filters>
            <SearchInput placeholder="search meteor name" setValue={ (e) => setSearchText(e.target.value) } />
            {/* Refresh data with api call */}
            <Refresh onClick={ ()=> dispatch(getData())}/>
            <Buttons>
                {buttons.map((value,i)=> <FilterButton buttonType={value} sortBy={sortBy} setAscending={ () => setAscending( !ascending )  } setSortBy={handleSortBy} ascending={ascending} key={i}/> )}
                 <Clear onClick={ () => { setSortBy(null); dispatch(resetMeteors()); }} active={true} style={{color: 'firebrick'}}> Clear</Clear> 
            </Buttons> 
        </Filters>

        {/* Loading Meteors */}
        {isFetching && <Row style={{padding: 20}}><ClipLoader size={20} color={"black"} loading={true} /></Row> }

        {/* Meteors cards */}
        {!isFetching && !selectedMeteor && meteorsFiltered.map(({id, name, year, mass}, i) => ( <MeteorCard id={id} name={name} mass={mass} year={year} index={i} key={id}/>))}

        {/* Selected Meteor card */}
        { selectedMeteor && <MeteorCard /> }

         {/* Api Error */}
        {fetchError ? <h1>Sorry Please try again later</h1>: ''}
    </PageWrapper>
    )
}