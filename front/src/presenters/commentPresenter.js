import { commentService } from '../services/comment'

export class CommentPresenter{
    constructor (stateHandlers={}, state={}){
        this.stateHandlers = stateHandlers
        this.state = state
    }

    calculateValidForm (errors) {
        const noRegisteredError = Object.values(errors).every(it => it === '') 
        const allRequiredKeys = errors.comment === '' && errors.userId === '' && errors.flightId === ''
        return noRegisteredError && allRequiredKeys
    }

    handleChange(value, field) {
        const data = {...(this.state.formData)}
        const isRequiredFieldError = ()=>{
            if ((field === 'comment' || field === 'userId' || field === 'flightId') 
                && value.length === 0) { return true }
            return false
        }

        const errors = {...(this.state.fieldError)}
        errors[field] = ''

        const parseIntValue = ()=>{
            if (isNaN(parseInt(value)) && value === ''){
                return ''
            }
            
            if (isNaN(parseInt(value))){
                return data[field]
            } 
            return parseInt(value)
        }

        switch (field) {
            case 'date':
                data[field] = new Date(value)
            break
            case 'userId':
            case 'flightId': 
                data[field] = parseIntValue()
                break
            default:
                data[field] = value
        }

        if (isRequiredFieldError()){
            errors[field] = 'Required field error'                
        }
        this.stateHandlers.setFormData(data)
        this.stateHandlers.setFieldError(errors)
        this.stateHandlers.setValidForm(this.calculateValidForm(errors))
    }  

    submit(){        
        this.stateHandlers.setFormData({})
        this.stateHandlers.setFieldError({})
        this.stateHandlers.setValidForm(false)
        commentService.createComments(this.state.formData).then(result => {                        
            window.location.reload(false)
        })    
        
    }

    async fetchComments(){
        const data = await commentService.getComments()
        this.stateHandlers.setComments(data)
    }
}
