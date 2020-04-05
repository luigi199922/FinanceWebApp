import React from 'react'
import RowTable from '../../components/Row/RowTable'
import TableHeader from '../../components/TableHeader/TableHeader'

const OptionTable = props =>{
    let callrows = null
    if (props.data.options){
        callrows = props.data.options.PUT.map((option,key) =>{
            return <RowTable option={option} key={key}></RowTable>
        })
    }
    let putrows = null
    if (props.data.options){
        putrows = props.data.options.CALL.map((option,key) =>{
            return <RowTable option={option} key={key}></RowTable>
        })
    }
    return(
    <div>
       <table style={{width: "100%"}}>
           <thead>
            <tr>
                <th colSpan="10">{props.name} {props.data.expirationDate} Calls</th>
            </tr>
           </thead>
            <TableHeader/>
            {callrows}
        </table>
        <hr></hr>
        <table style={{width: "100%"}}>
            <thead>
                <tr>
                    <th colSpan="10">{props.name} {props.data.expirationDate} Puts</th>
                </tr>
            </thead>
            <TableHeader/>
            
            {putrows}
        </table>
         
    </div>
            
        
    )
}
export default OptionTable