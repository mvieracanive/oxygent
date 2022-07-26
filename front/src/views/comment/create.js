import { FormControl, TextField, Button, Box } from '@mui/material'
import React, { useState } from 'react'
import { CommentPresenter } from '../../presenters/commentPresenter'

export function NewComment(){
    const [fieldError, setFieldError] = useState({})
    const [newCommentAlerts, setNewCommentAlerts] = useState([])
    const [formData, setFormData] = useState({})
    const [validForm, setValidForm] = useState(false)
    const [submitError, setSubmitError] = useState([])
    const dateInput = React.useRef(null)
    const presenter = new CommentPresenter({
            setFieldError,
            setNewCommentAlerts,
            setFormData,
            setValidForm,
            setSubmitError
        },
        {
            fieldError,
            newCommentAlerts,
            formData,
            validForm,
            submitError
        }
    )
    
    const submit = ()=>{
         presenter.submit()
    }

    return <><form style={{marginTop: 20}}>
            <FormControl style={{margin: '10px'}}>
                <TextField                  
                    value={formData['comment'] ?? ''}
                    id="comment" 
                    multiline
                    maxRows={4}
                    error={fieldError.comment || false}
                    helperText={fieldError.comment}                   
                    placeholder='Comment'
                    onChange={(e)=>presenter.handleChange(e.target.value, 'comment')} 
                    variant="standard"/>                       
            </FormControl>
            <FormControl style={{margin: '10px'}}>
                <TextField 
                    inputRef={dateInput}
                    id='date'
                    placeholder='Date'
                    type="date"
                    onChange={(e)=>presenter.handleChange(e.target.value, 'date')}
                    variant="standard"/>
            </FormControl>
            <FormControl style={{margin: '10px'}}>                
                <TextField 
                    id='userId'                     
                    value={formData['userId'] ?? ''}
                    placeholder='Id of User'
                    error={fieldError.userId || false}
                    helperText={fieldError.userId}
                    onChange={(e)=>presenter.handleChange(e.target.value, 'userId')}
                    variant="standard"/>
            </FormControl >
            <FormControl style={{margin: '10px'}}>
                <TextField 
                    id='flightId' 
                    value={formData['flightId'] ?? ''}
                    placeholder='Id of Flight'
                    helperText={fieldError.flightId}
                    error={fieldError.flightId || false}
                    onChange={(e)=>presenter.handleChange(e.target.value, 'flightId')}
                    variant="standard"/>            
            </FormControl>
            <Box style={{marginTop: 20}}>
                <Button disabled={!validForm} variant="contained" onClick={ submit }>Submit</Button>
            </Box>
        </form>
        </> 
}
