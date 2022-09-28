import React from 'react';
import AppHeader from '../app-header'
import ItemStatusFilter from "../item-status-filter";
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import AddItemPanel from '../add-item-panel';
import './app.css'

export default class App extends React.Component {
  maxId = 100
  buttonId = 200

  constructor() {
    super()
    this.state = {
      todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have A Lunch')
      ],
      term: '',
      filter: 'all' //active, all, done
    }
  } 
  createTodoItem(text) {
    return {
        label: `${text}`,
        important: false,
        done: false,
        id: this.maxId++,       
      } 
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const index = todoData.findIndex((el) => el.id === id)
      const before = todoData.slice(0, index)      
      const after = todoData.slice(index + 1)
      const newTodoData = before.concat(after)
      return {
        todoData: newTodoData
      }
    })
  }
  addItem = (text) => {
        // generate id
    const newTodo = this.createTodoItem(text)
    this.setState(({ todoData }) => {  
      // let newTodoData = todoData
      // newTodoData.push(newTodo)
      const newTodoData = [...todoData, newTodo]
      return {
        todoData: newTodoData
      }
      // console.log(newTodoData)
    })
  }
  toggleProperty(arr, id, propName) {
    const ind = arr.findIndex(el => el.id === id)
    const oldItem = arr[ind]
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    }
    const newArr = [
      ...arr.slice(0, ind),
      newItem,
      ...arr.slice(ind + 1)
    ]
    return newArr    
  }
  onClickAll = (id) => {    
    this.setState(({ filter }) => {
      return {
        filter: this.makeButtonPressed(id, filter)
      }
    })
    return this.state.todoData
  }
  makeButtonPressed = (id, arr) => {
    const ind = arr.findIndex(el => el.id === id)
    let oldEl = arr[ind]
    let newArr = []
    arr.forEach(el => {
      let nonActiveEl = { ...el, active: false }
      newArr.push(nonActiveEl)
    })
    let newEl = { ...oldEl, active: !oldEl.active }    
    newArr[ind] = newEl
    return newArr
  }
  onClickActive = (id) => { 
    this.setState(({ filter }) => {
      return {
        filter: this.makeButtonPressed(id, filter)
      }
    })    
  }
  onClickDone = (id) => {    
    this.setState(({ filter }) => {
      return {
        filter: this.makeButtonPressed(id, filter)
      }
    })
    return this.filterIsDone(this.state.todoData, true)
  }
  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      } 
    })
  }
  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }
  search = (items, term) => {
    if (term.length === 0) {
      return items
    }
    return items.filter(el => el.label.toLowerCase().includes(term.toLowerCase()) === true) 
  }
  filter = (items, filter) => {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter(el => !el.done)
      case 'done':
        return items.filter(el => el.done)
      default: 
        return items
    }
  }
  onSearchItems = (text) => {    
    this.setState({ 
        term: text
    })
  }

  onFilterChange = (text) => {
    this.setState({
      filter : text
    })
  }

  render() {
    const { todoData, term, filter } = this.state
    const visibleItems = this.filter(this.search(todoData, term), filter)
    const leftCount = todoData.filter(el => el.done === false).length
    const doneCount = todoData.filter(el => el.done === true).length
    return (
      <div className='todo-app'>
        <AppHeader done={doneCount} toDo={leftCount} />
        <div className='d-flex justify-content-between'>
          <SearchPanel
            onSearchItems={this.onSearchItems}
            className='top-panel d-flex' />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>  
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddItemPanel
        onAddItem = {this.addItem} />
      </div>
    )
  }
}
 
