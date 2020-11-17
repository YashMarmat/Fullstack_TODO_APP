import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

// Note: using the same Form for creating and editing the Todo items
class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cloneData: this.props.cloneData,
    };
  }

  onHandleChange = (e) => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    const cloneData = { ...this.state.cloneData, [name]: value };
    this.setState({ cloneData: cloneData });
  };

  render() {
    const { onSave } = this.props;
    return (
      <div className="card adjust-form2">
        <form onSubmit={() => onSave(this.state.cloneData)}>
          <input
            autoFocus={true}
            placeholder="Add Todo"
            className="form-control"
            type="text"
            name="task"
            value={this.state.cloneData.task}
            onChange={this.onHandleChange}
          />{" "}
          <input
            type="checkbox"
            name="completed"
            checked={this.state.cloneData.completed}
            onChange={this.onHandleChange}
          />{" "}
          Status (complete/incomplete)
          <br />
          <button className="btn btn-sm btn-success" type="submit">
            save
          </button>
        </form>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updation: false,
      cloneID: 0,
      cloneData: {
        task: "",
        completed: false,
      },
      todoList: [],
    };
  }

  componentDidMount() {
    this.onRefreshList();
  }

  onRefreshList = () => {
    axios
      .get("http://localhost:8000/api/todos/")
      .then((res) => this.setState({ todoList: res.data }))
      .catch((err) => console.log(err));
  };

  onRemove = (item) => {
    axios
      .delete(`http://localhost:8000/api/todos/${item.id}/`)
      .then((res) => this.onRefreshList());
  };

  onCreateItem = () => {
    const item = { task: "", completed: false };
    this.setState({ cloneData: item, updation: !this.state.updation });
  };

  onhandleEdits = (itemData) => {
    this.setState({
      updation: !this.state.updation,
      cloneID: itemData.id,
      cloneData: itemData,
    });
  };

  onrenderEdits = () => {
    if (this.state.updation) {
      return (
        <div>
          <Forms
            cloneData={this.state.cloneData}
            onSave={this.onhandleSubmit}
          />
        </div>
      );
    }
  };

  onhandleSubmit = (item) => {
    if (item.id === this.state.cloneID) {
      axios
        .put(`http://localhost:8000/api/todos/${item.id}/`, item)
        .then((res) => this.refreshList());
    } else {
      axios
        .post("http://localhost:8000/api/todos/", item)
        .then((res) => this.refreshList());
    }
  };

  render() {
    return (
      <div className="card-body text-white bg-dark container adjust-card">
        <h2>My Todo List</h2>
        <br />
        {this.onrenderEdits()}
        {this.state.todoList.map((item) => (
          <div key={item.id}>
            <span className={"crossed-line" + (item.completed ? "" : "active")}>
              {item.task}
            </span>
            <span onClick={() => this.onRemove(item)} className="shift">
              <i className="shift fas fa-trash"></i>
            </span>
            <span onClick={() => this.onhandleEdits(item)} className="shift2">
              <i className="fas fa-edit"></i>
            </span>
            <hr className="new1"></hr>
          </div>
        ))}
        <Forms cloneData={this.state.cloneData} onSave={this.onhandleSubmit} />
      </div>
    );
  }
}

export default App;
