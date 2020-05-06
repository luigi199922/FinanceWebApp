import React from 'react'
import Button from '../Button/Button'

const ErrorMessageModal = ({show, closed, message, error}) => {
    const classes =['Modal',show  ? 'ModalOpen' :  'ModalClosed' ]
    return (
        <div className={classes.join(' ')}>
            <h1>{error}</h1>
             <Button btnType="Danger" clicked={closed}>Dismiss</Button>
        </div>
    )
}
export default ErrorMessageModal