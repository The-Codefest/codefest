const data = [
  {
    id: 1,
    label: "Full Name",
    placeholder: "Enter first and last names",
    type: "text",
    required: true,
    name: "name",
  },
  {
    id: 2,
    label: "Email",
    placeholder: "Enter email address",
    type: "email",
    pattern: "^[a-zA-Z0-9*@[a-zA-Z0-9.-]+[a-zA-]*",
    required: true,
    name: "email",
  },
  {
    id: 3,
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    pattern: "/^[a-fA-F0-9 0-9]{8}$/",
    required: true,
    name: "password",
    bottomLabel: "Must be at least 8 characters long",
  },
  {
    id: 4,
    label: "Confirm Password",
    placeholder: "Repeat password",
    type: "password",
    pattern: "/^[a-fA-F0-9 0-9]{8}$/",
    required: true,
    name: "passwordConfirmation",
  },
  {
    id: 5,
    label: "Country",
    required: true,
    name: "country",
  },
];

export default data;
