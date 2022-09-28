import React, {Component} from "react";
import './todo-list-item.css'

export default class TodoListItem extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         done: false,
    //         important: false 
    //     }
    //     // this.onLabelClick = () => {            
    //     //     this.setState((state) => {
    //     //         return {
    //     //             done: !state.done
    //     //         }
    //     //     })
    //     // } 
    //     // this.onMarkImportant = () => {
    //     //     this.setState((state) => {
    //     //         return {
    //     //             important: !state.important
    //     //         }
    //     //     })
    //     // }
    // }
    // // state = {
    // //     done: false
    // // }
    // // onLabelClick = () => {
    // //     console.log(`Done: ${this.props.label}`)
    // // }   
    
    render() {
        const { label,
            onDeleted,
            onToggleImportant,
            onToggleDone,
            important, done } = this.props
        
        let classNames = 'todo-list-item'
        if (done) {
            classNames += ' done'
        }
        if (important) {
            classNames += ' important'
        }
        return (
            <span className={classNames}>
                <span
                className="todo-list-item-label"
                onClick={onToggleDone}>
                    {label}
                </span>
                <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportant}>
                    <i className="fa fa-exclamation" />
                </button>
                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}>                    
                        <i className="fa fa-trash"/>
                </button>                
            </span>
        )
    }
}

// const TodoListItem = (props) => {
//     console.log(props)
//     return <span>{props.label}</span>
// }
//деструктуризация
// const TodoListItemFunc = ({ label, important = false }) => {
//     const style = {
//         color: important ? 'steelblue' : 'black',
//         fontWeight: important ? 'bold' : 'normal'
//     }
//     return (
//         <span className="todo-list-item">
//             <span style={style}>
//                 {label}
//             </span>
//             <button type="button"
//                 className="btn btn-outline-success btn-sm float-right">
//                 <i className="fa fa-exclamation" />
//             </button>
//             <button type="button"
//                 className="btn btn-outline-danger btn-sm float-right">
//                 <i className="fa fa-trash"/>
//             </button>
//         </span>
//     )
// }




