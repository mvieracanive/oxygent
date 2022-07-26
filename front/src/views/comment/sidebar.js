import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import React, { useState, useEffect } from 'react'
import { CommentPresenter } from '../../presenters/commentPresenter'
import { Typography } from '@mui/material'

export function SideBar(){
    const [comments, setComments] = useState([])
    const [contentIndex, setContentIndex] = useState(0)
    let presenter = new CommentPresenter({
        setComments 
    })

    useEffect(() => {
        presenter.fetchComments()
    },[]);

    const onLeftPanelClick = (i)=>{setContentIndex(i)}

    return <div className='SideBarComments'>
        <div className='LeftPanel'> <LeftPanel 
            comments={comments} 
            contentIndex={contentIndex}
            clickHandle={onLeftPanelClick}/> </div>
        <div className='CommentInfo'> <Content content={comments?.[contentIndex]} /></div>
    </div>
}
function Content(props){
    const {content} = props
    if (!content){
        return <h1>{'Nothing to show'}</h1>
    }
    
    const {id, comment, date, userId, flightId, tags} = content
    
    return <div>
            <Typography variant="h2" component="h3">
                {`Information about comment with ID ${id}` }
            </Typography>
            <Typography marginLeft={20} align='left' variant="h5" component="h6">
                {`User ID: ${userId ?? 'No user'}` }
            </Typography>
            <Typography marginLeft={20} align='left' variant="h5" component="h6">
                {`Flight ID: ${flightId ?? 'No flight'}`}
            </Typography>
            <br></br>
            <Typography marginLeft={20} align='left' variant="p" component="p" fontStyle={'italic'}>
                {`Date: ${date ?? 'No date'}`}
            </Typography>
            <Typography marginLeft={20} align='left' variant="p" component="p" fontStyle={'italic'}>
                {`Tags: ${tags ?? 'No tags'}` }
            </Typography>
            <br></br>
            <Typography marginLeft={20} align='left' variant="p" component="p">
                {comment ?? 'No comment'}
            </Typography>
        </div>
}
function LeftPanel(props) {
    const {comments, contentIndex, clickHandle} = props

    const chopComment = (comment)=>`${comment.substring(0, 35)}...`

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
            {comments.map((it, index)=>
                <ListItem key={index} disablePadding onClick={()=>{clickHandle(index)}}>
                <ListItemButton selected={contentIndex === index}>
                  <ListItemIcon>
                    <ArrowRightIcon />
                  </ListItemIcon>
                  <ListItemText primary={chopComment(it.comment)} />
                </ListItemButton>
              </ListItem>      
            )}
        </List>
      </nav>
    </Box>
  );
}
