class Schedule extends React.Component {
    createTable = () => {
        let table = [];
        for (let i = 0; i < this.props.events; i++) {
            table.push(<tr><td>{this.props.events[i].name}</td></tr>);
        }
        return table;
    }

    render() {
        return (
            <table>{this.createTable()}</table>
        )
    }
}