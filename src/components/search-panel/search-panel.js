import React from "react"
export default class SearchPanel extends React.Component {
  constructor() {
    super()
    this.state = {
      keyword: ''
    }
    
    this.onKeywordChange = (e) => {      
      const keyword = e.target.value
      this.setState({
          keyword: keyword
      })
      this.props.onSearchItems(keyword)
    }
  }
  
  render() {
    return (
        <input
          placeholder='type to search'
        onChange={this.onKeywordChange}
        value={this.state.keyword}
        />
    )    
  }

}
