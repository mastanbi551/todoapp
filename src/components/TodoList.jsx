export default function TodoList({todos}) {
    return (
        <div className="list">
            {
                todos.map(item => (
                    <h3>{item}</h3>
                ))
            }
        </div>
    )
}