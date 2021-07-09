import React, { Component } from "react";
import Button from "../example/components/Button";
import Toaster from "../example/components/Toaster";
import Container from "../example/components/Container";

import "./Form.css";

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

    this.props.myFormData(this.state.form);

    // this.setState({
    //   saving: true,
    // });

    // new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(true);
    //   }, 3000);
    // }).then(() => {
    //   this.setState({
    //     saving: false,
    //   });
    // });

    // [x] Store data in an object
    // [x] Mock server call (set time out)
    // [x] Toggle save state
    // [] Clear the form on succesful
  };

  onHandleCopyfield = (name) => {
    if (this.state.addCopyfield <= 5) {
      this.setState((prevState) => ({
        addCopyfield: prevState.addCopyfield + 1,
      }));
    }
  };

  onHandleFormElement = (event) => {
    // console.log(event);
    const { name, value } = event.target;

    // this.setState({
    //   form: {
    //     // EVERYTHING IN HERE WIULL BE UPDATED
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
    // console.log(this.state);

    const { addCopyfield, priority, saving } = this.state;
    return (
      <>
        <Container horizontalPadding="1.5rem">
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

              <Button
                btnType="simple"
                buttonClick={() => this.onHandleCopyfield("milo")}
              >
                add+
              </Button>
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

            <Button type="submit">Submit</Button>
            <Button btnType="secondary" type="button">
              Reset
            </Button>
          </form>

          {saving && <p>saving...</p>}
        </Container>

        <Toaster type="error">
          <p>Something went wrong: [Error message]</p>
        </Toaster>

        <Toaster type="success">
          <p>Succesfully saved</p>
        </Toaster>
      </>
    );
  }
}

export default Form;
