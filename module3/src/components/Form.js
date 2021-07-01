import React, { Component } from "react";

import "./Form.css";

// Fetch URL: https://jsonplaceholder.typicode.com/users
class Form extends Component {
  state = {
    toggleMenu: false,
    saving: false,
    users: [],
    priority: ["low", "medium", "high"],
    addCopyfield: 0,
    form: {},
  };

  async componentDidMount() {
    console.log("component is mounted");
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await result.json();
    console.log(users);
    this.setState({ users });
  }

  onSubmitForm = (event) => {
    event.preventDefault();

    this.setState({
      saving: true,
    });

    new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    }).then(() => {
      this.setState({
        saving: false,
      });
    });

    // Store data in an object
    // Mock server call (set time out)
    // Toggle save state
    // Clear the form on succesful
  };

  onHandleCopyfield = () => {
    console.log("add copy field");
    if (this.state.addCopyfield <= 5) {
      this.setState((prevState) => ({
        addCopyfield: prevState.addCopyfield + 1,
      }));
    }
  };

  onHandleFormElement = (event) => {
    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = event.target;
    console.log({ name, value });

    // this.setState({
    //   form: {
    //     [name]: value,
    //   },
    // });

    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  };

  render() {
    console.log(this.state);

    const { addCopyfield, priority, saving } = this.state;
    return (
      <>
        <header>
          <section className="container">
            <h1>Iron Hack Complaints Form</h1>
          </section>
        </header>

        <section className="container">
          <form onSubmit={this.onSubmitForm}>
            <fieldset className="form-legend">
              <h1>Add ticket</h1>
              <legend>Ticket information</legend>
              <label className="form-input">
                <input
                  type="text"
                  required
                  name="title"
                  placeholder="Title"
                  onChange={this.onHandleFormElement}
                />
              </label>

              <label className="form-input">
                <input
                  type="text"
                  name="customerid"
                  placeholder="Case-id of customer"
                  disabled
                  onChange={this.onHandleFormElement}
                />
              </label>

              <label className="form-input">
                <input
                  type="text"
                  required
                  name="copy"
                  placeholder="Send copy to"
                  onChange={this.onHandleFormElement}
                />
              </label>

              {addCopyfield > 0 && (
                <div>
                  {[...Array(addCopyfield)].map((_, index) => {
                    return (
                      <label className="form-input" key={index}>
                        <input
                          type="text"
                          required
                          name={`copy-${index}`}
                          placeholder="Send copy to"
                          onChange={this.onHandleFormElement}
                        />
                      </label>
                    );
                  })}
                </div>
              )}

              <button
                className="btn btn-simple"
                type="button"
                onClick={this.onHandleCopyfield}
              >
                add+
              </button>
            </fieldset>

            <fieldset className="form-legend">
              <legend>Reporter</legend>
              <select name="user" onChange={this.onHandleFormElement}>
                <option value="">--Reporter--</option>
                {this.state.users.length > 0 &&
                  this.state.users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
              </select>
            </fieldset>

            <fieldset className="form-legend">
              <legend>Settings</legend>
              <p>Priority</p>

              <section className="form-radio-group">
                {priority.length > 0 &&
                  priority.map((radioItem) => (
                    <div className="radio-item" key={radioItem}>
                      <input
                        type="radio"
                        name="prio"
                        value={radioItem}
                        id={`radio-item-${radioItem}`}
                        onChange={this.onHandleFormElement}
                      />
                      <label
                        className="form-check-radio"
                        htmlFor={`radio-item-${radioItem}`}
                      >
                        {radioItem}
                      </label>
                    </div>
                  ))}
              </section>
            </fieldset>

            <textarea name="description"></textarea>

            <section>
              <label>receive copy?</label>
              <input
                type="checkbox"
                name="receive-copy"
                onChange={this.onHandleFormElement}
              />
            </section>

            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            <button className="btn btn-secondary" type="button">
              Reset
            </button>
          </form>

          {saving && <p>saving...</p>}
        </section>

        <section className="container">
          <article className="card">
            <div>Ticket: name, date</div>
          </article>
        </section>

        <section className="toaster toaster-success">
          <div className="toaster-close-btn">close</div>
          <p>Succesfully saved</p>
        </section>

        <section className="toaster toaster-error">
          <div className="toaster-close-btn">close</div>
          <p>Something went wrong: [Error message]</p>
        </section>

        <footer>
          <div className="container">&copy; WEB DEV 0321 | Iron Hack</div>
        </footer>
      </>
    );
  }
}

export default Form;
