import React from "react";
import './add-item-panel.css'

export default class AddItemPanel extends React.Component {
    
    constructor() {
        super()

        this.state = {
            label: ''
        }

        this.onLabelChange = (e) => {
            this.setState({
                label: e.target.value
            })
        }
        this.onSubmit = (e) => {
            e.preventDefault()
            this.props.onAddItem(this.state.label)
            this.setState({
                label: ''
            })
        }
    }

    render() {
        return (
            <form className="add-item-panel d-flex"
            onSubmit={this.onSubmit}>
                <input type='text'
                    className='form-control'
                    onChange={this.onLabelChange}
                    placeholder='What needs to be done'
                    value={this.state.label}
                />
                <button type='submit'
                    className='btn btn-outline-secondary'
                >
                Add item
                </button>
            </form>

        )
    }
}
