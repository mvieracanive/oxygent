
import React, { useState } from 'react';
import {SideBar} from './comment/sidebar'
import {Comments} from './comment/list'
import { NewComment } from './comment/create'
import './style.scss'

export function Container() {
  const [content, setContent] = useState('comments');

  const renderContent = () => {
    switch(content){        
        case 'sidebar': return <SideBar />
        case 'newComment': return <NewComment />
        default: return <Comments />
    }
  }

  return (
    <div className="Container">
      <div className='Menu'>
        <div className='MenuItem' onClick={ () => setContent('comments') }>List Comments</div>
        <div className='MenuItem' onClick={ () => setContent('newComment') }>New Comment</div>
        <div className='MenuItem' onClick={ () => setContent('sidebar') }>View Comment</div>
      </div>
      <div id='contentContainer'>
        { renderContent() }
      </div>      
    </div>
  );
}

