import React, { useState, useEffect } from "react";

import AxiosApi from "../utils/AxiosApi";

import Container from "../components/Container";
import Fieldset from "../components/Form/Fieldset";
import Input from "../components/Form/Input";
import DropDown from "../components/Form/DropDown";
import TextArea from "../components/Form/TextArea";
import RadioGroup from "../components/Form/RadioGroup";
import Button from "../components/Button";

function ComplaintsForm() {
  const [saving, setSaving] = useState(false);
  const [users, setUsers] = useState([]);
  const [copyFields, setCopyFields] = useState(0);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await result.json();
      setUsers([...users]);
    };

    fetchUsers();
  }, []);

  const onHandleSubmit = async (event) => {
    event.preventDefault();
    console.log("submit");
    setSaving(true);

    try {
      const res = await AxiosApi.post("users", {
        form: formData,
      });
      const response = await res.json();
      console.log({ response });
    } catch (err) {
      console.log("err", err);
    }

    setSaving(false);
  };

  const onHandleInput = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const priorities = ["low", "medium", "high"];

  console.log(formData);

  return (
    <Container horizontalPadding="1.5rem">
      <form onSubmit={onHandleSubmit}>
        <Fieldset title="Ticket information">
          <Input
            name="title"
            label="Title"
            placeholder="Title"
            required
            onChange={onHandleInput}
          />
          <Input
            name="customerid"
            label="Case ID"
            placeholder="Case-id of customer"
            required
            onChange={onHandleInput}
          />
          <Input
            name="copy"
            type="email"
            placeholder="Send copy to"
            label="E-mail copy of ticket"
          />

          {copyFields > 0 && (
            <section>
              {[...Array(copyFields)].map((_, index) => (
                <Input
                  key={index}
                  name={`copy-${index}`}
                  type="email"
                  placeholder="Send copy to"
                  onChange={onHandleInput}
                />
              ))}
            </section>
          )}

          <Button
            btnType="simple"
            buttonClick={() => setCopyFields((prevState) => prevState + 1)}
          >
            add+
          </Button>

          {copyFields > 0 && (
            <Button
              btnType="simple"
              buttonClick={() => setCopyFields((prevState) => prevState - 1)}
            >
              remove
            </Button>
          )}
        </Fieldset>
        <Fieldset title="Description">
          <TextArea onChange={onHandleInput} name="description"></TextArea>
        </Fieldset>
        <Fieldset title="Reporter">
          <DropDown
            name="reporter"
            onChange={onHandleInput}
            disabled={users.length <= 0}
          >
            <option>--select user--</option>
            {users.length > 0 &&
              users.map((user) => (
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              ))}
          </DropDown>
        </Fieldset>
        <Fieldset title="Priority">
          <RadioGroup
            values={priorities}
            name="prio"
            onChange={onHandleInput}
          />
        </Fieldset>

        <Fieldset>
          <Button type="submit" disabled={saving}>
            {saving ? "saving...." : "Submit"}
          </Button>
        </Fieldset>
      </form>
    </Container>
  );
}

export default ComplaintsForm;
