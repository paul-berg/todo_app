import React, { Component } from "react";
 import './item-status-filter.css'

const buttonData = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
] 
export default class ItemStatusFilter extends Component {
     

    render() 
    {
        const {filter, onFilterChange} = this.props
        const buttons = buttonData.map(el => {
            const isActive = filter === el.name ? true : false
            const classNameButton = isActive ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button key={el.name}
                    className={`btn ${classNameButton}`}
                    onClick={() => onFilterChange(el.name)}
                >
                    {el.label}
                </button>
            )
        })
        return (<div className="btn-group">            
            {buttons}
        </div>)
    }
    
}

