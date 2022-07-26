import React, { useState, useEffect } from 'react'
import ClearIcon from '@mui/icons-material/Clear'
import { CommentPresenter } from '../../presenters/commentPresenter'

export function Comments(){    
    const [comments, setComments] = useState([])
    let presenter =  new CommentPresenter({
        setComments 
    })

    useEffect(() => {
        presenter.fetchComments()
    },[]);

    return <div className='CommentsTable'>
            {comments.map(it => renderComment( it))}
           </div>
}

function renderComment({id, comment, date, userId, flightId, tags}){

    return <div key={id}>
        <div className='RowcellMin DelIcon'><ClearIcon/></div>
        <div className='RowcellMin'>{ id }</div>
        <div className='Rowcell'>{ comment }</div>
        <div className='Rowcell'>{ date }</div>
        <div className='RowcellMin'>{ userId }</div>
        <div className='RowcellMin'>{ flightId }</div>
        <div className='Rowcell'>{ tags }</div>
    </div>
}