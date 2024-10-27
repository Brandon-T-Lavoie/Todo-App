import {TodoCard} from "./TodoCard"
export function TodoList(props){
    const { todos, selectedTab } = props
    const filterTodosList = selectedTab === 'All' ?
    todos:
    selectedTab === 'Completed' ?
        todos.filter(val => val.complete):
        todos.filter(val => !val.complete)
    return(
        <>
            {filterTodosList.map((todo, todoIndex) => {
                // {...props} gives everythig the parent is getting and must be last in the list of maps
                return(   
                    <TodoCard 
                    key={todoIndex}
                    todoIndex={todos.findIndex(val => val.input == todo.input)}
                    {...props}
                    todo={todo}/>
                )
            })}
        </>
    )
}