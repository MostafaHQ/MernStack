import { Link } from '@reach/router';
import React from 'react'
import Playerata from '../components/Playerata';
import Nav from '../components/Nav';

const PlayersStatus = (props) => {

  return (
    <div>
    <Nav/>
    <Link to={'/game/status/1'}>game1</Link>
    <Link to={'/game/status/2'}>game2</Link>
    <Link to={'/game/status/3'}>game3</Link>
     <Playerata mid={props.id}/>

    </div>
  )
}

export default PlayersStatus;
