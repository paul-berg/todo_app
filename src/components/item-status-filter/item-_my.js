// import React, { Component } from "react";
// import FilterButton from "../filter-button";
// import './item-status-filter.css'

// export default class ItemStatusFilter extends Component {
//     render() {
//         const { filter, onClickActive, onClickAll, onClickDone } = this.props
//         const buttons = filter.map(el => {
//             return (
//                 <span key={el.id}>
//                     <FilterButton type="button"
//                         label={el.label}                        
//                         active={el.active}                        
//                         onClickActive={() => onClickActive(el.id)}
//                         onClickAll={() => onClickAll(el.id)}
//                         onClickDone={() => onClickDone(el.id)}
//             />
//                 </span>
//                    )                
//                 })
//         return (
//             <div>
//                 {buttons}
//             </div>            
//         )
//     }
// }

