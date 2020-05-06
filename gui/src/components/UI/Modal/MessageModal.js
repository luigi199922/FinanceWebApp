import React from 'react'
import Button from '../Button/Button'
import "./Modal.css";
const MessageModal = (props) => {
    const classes =['Modal',props.show  ? 'ModalOpen' :  'ModalClosed' ]
    return (
        <div className={classes.join(' ')}>
            <h1>{props.message}</h1>
             <Button btnType="Danger" clicked={props.closed}>Dismiss</Button>
        </div>
    )
}
export default MessageModal