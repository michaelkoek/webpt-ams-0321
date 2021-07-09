import React, { useState, useEffect } from "react";

import Container from "../components/Container";
import Fieldset from "../components/Form/Fieldset";
import Input from "../components/Form/Input";
import Button from "../components/Button";

function ComplaintsForm() {
  const [priority, setPriority] = useState(0);
  const [saving, setSaving] = useState(false);
  const [users, setUsers] = useState([]);
  const [copyFields, setCopyFields] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await result.json();
      setUsers([...users]);
    };

    fetchUsers();
  }, []);

  const onHandleSubmit = () => {
    console.log("submit");
  };

  const priorities = ["low", "medium", "high"];

  return (
    <Container horizontalPadding="1.5rem">
      <form onSubmit={onHandleSubmit}>
        <Fieldset title="Ticket information">
          <Input name="title" label="Title" placeholder="Title" required />
          <Input
            name="customerid"
            label="Case ID"
            placeholder="Case-id of customer"
            required
          />
          <Input
            name="copy"
            type="email"
            placeholder="Send copy to"
            label="E-mail copy of ticket"
          />

          {copyFields > 0 && (
            <div>
              {[...Array(copyFields)].map((_, index) => (
                <Input
                  key={index}
                  name={`copy-${index}`}
                  type="email"
                  placeholder="Send copy to"
                />
              ))}
            </div>
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
        <Fieldset title="Reporter"></Fieldset>
        <Fieldset title="Settings"></Fieldset>
      </form>
    </Container>
  );
}

export default ComplaintsForm;
