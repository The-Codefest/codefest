import React, { useEffect, useState } from "react";
import { Box, FormControl, IconButton } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ClearIcon from "@mui/icons-material/Clear";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { API } from "services/api";
import { useDispatch } from "react-redux";
import { showAlert } from "store/features/alertSlice";

export default function useUserList() {
  const [rows, setRows] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [userRow, setUserRow] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await API.get("/dashboard/user/");
        setRows(response?.data?.data);
        setIsLoading(false);
        console.log(response?.data);
      } catch (error) {}
    };
    fetchUsers();
  }, []);

  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  };

  useEffect(() => {
    setUserRow(rows);

    if (searchItem) {
      setUserRow(
        rows?.filter(
          (filter) =>
            filter.firstName.toLowerCase().includes(searchItem.toLowerCase()) ||
            filter.lastName.toLowerCase().includes(searchItem.toLowerCase()) ||
            filter.emailAddress
              .toLowerCase()
              .includes(searchItem.toLowerCase()) ||
            filter.role.toLowerCase().includes(searchItem.toLowerCase())
        )
      );
    }
  }, [rows, searchItem]);

  const handleDelete = async (id) => {
    await API.delete(`/dashboard/user/delete/${id}/`);
    const newUsers = userRow?.filter((item) => item.id !== id);
    setUserRow(newUsers);
    const user = userRow.find((user) => user.id === id);
    dispatch(
      showAlert(["info", `You have blocked ${user.firstName} ${user.lastName}`])
    );
  };

  function DropCell({ row }) {
    const [selectedRole, setSelectedRole] = useState(row.role);

    const handleChange = (event) => {
      setSelectedRole(event.target.value);

      try {
        const role = event.target.value;

        API.patch("/dashboard/user/update_role/", { userId: row.id });

        const user = userRow?.find((user) => user.id === row.id);
        dispatch(showAlert(["info", `${user.firstName} is now ${role}`]));
      } catch (error) {}
    };

    return (
      <Box sx={{ m: "0 auto", borderRadius: "4px", width: "100%" }}>
        <FormControl variant="standard" sx={{ m: 1, width: "100%" }}>
          <Select
            value={selectedRole}
            onChange={handleChange}
            sx={{
              border: "none",
            }}
          >
            <MenuItem value="User">
              <IconButton sx={{ color: "grey" }}>
                <AccountCircleIcon />
              </IconButton>
              user
            </MenuItem>
            <MenuItem value="Admin">
              <IconButton sx={{ color: "green" }}>
                <AdminPanelSettingsIcon />
              </IconButton>
              admin
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }

  function DeleteCell(props) {
    return (
      <IconButton onClick={() => handleDelete(props.id)} sx={{ color: "red" }}>
        <ClearIcon />
      </IconButton>
    );
  }

  const columns = [
    { id: 1, field: "id", headerName: "ID" },
    {
      id: 2,
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: (user) => {
        return (
          <Box sx={{ width: "100%" }}>
            <p>{`${user.row.firstName} ${user.row.lastName}`}</p>
          </Box>
        );
      },
    },

    {
      id: 3,
      field: "verified",
      headerName: "Verification",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        if (params.row.verified === true) {
          return (
            <IconButton sx={{ color: "green" }}>
              <CheckCircleIcon />
            </IconButton>
          );
        } else {
          return (
            <IconButton sx={{ color: "red" }}>
              <CancelIcon />
            </IconButton>
          );
        }
      },
    },
    {
      id: 4,
      field: "emailAddress",
      headerName: "Email",
      flex: 1,
      align: "left",
      headerAlign: "left",
    },

    {
      id: 6,
      field: "Role",
      //   headerName: "",
      flex: 0.6,
      headerAlign: "right",
      align: "right",
      renderCell: DropCell,
    },

    {
      id: 7,
      field: "last_logged_in",
      headerName: "Last Logged In",
      type: "number",
      align: "center",
      headerAlign: "center",
      flex: 1,
      renderCell: (item) => {
        const logedIn = item.row.last_login;
        const date = logedIn?.slice(0, 10);
        const time = logedIn?.slice(11, 19);
        return <div>{`${time} on ${date}`}</div>;
      },
    },
    {
      id: 8,
      field: "delete",
      headerName: "Delete",
      flex: 0.4,
      renderCell: DeleteCell,
    },
  ];
  return {
    rows,
    handleDelete,
    userRow,
    handleSearch,
    searchItem,
    columns,
    isLoading,
  };
}
