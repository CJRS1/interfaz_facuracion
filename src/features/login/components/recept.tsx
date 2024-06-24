import * as React from "react";
import { useState } from "react";
import "~/styles/user.css";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { esES } from "@mui/x-data-grid/locales";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import SavedSearchIcon from "@mui/icons-material/SavedSearch";

export default function Recept() {
  const [age, setAge] = useState("");
  const [age2, setAge2] = useState("");
  const [age3, setAge3] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleChange = (event: SelectChangeEvent) => setAge(event.target.value);
  const handleDateChange = (date: Date) => setSelectedDate(date);

  return (
    <div className="sale_card">
      <div className="sale_container_left">
        <div className="sale_card_left">
          <TextField label="Emisor" fullWidth focused required />
          <TextField label="Comprobante" fullWidth focused required />
        </div>
        <div className="sale_card_left">
          <FormControl sx={{ m: 1, minWidth: 120 }} focused>
            <InputLabel id="document-select-label">Moneda</InputLabel>
            <Select
              labelId="document-select-label"
              id="document-select"
              value={age2}
              label="Moneda"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} focused>
            <InputLabel id="document-select-label">Serie</InputLabel>
            <Select
              labelId="document-select-label"
              id="document-select"
              value={age3}
              label="Serie"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="sale_card_left">
          <TextField label="Fecha de Emisión" fullWidth focused required />
          <TextField label="Correlativo" fullWidth focused required />
        </div>
      </div>
      <div className="vertical-line"></div>
      <div className="sale_container_right">
        <div className="client_info_container">
          <FormControl sx={{ m: 1, minWidth: 120 }} focused>
            <InputLabel id="document-select-label">
              Documento de Identidad
            </InputLabel>
            <Select
              labelId="document-select-label"
              id="document-select"
              value={age}
              label="Documento de Identidad"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="client_info_container">
          <TextField label="Número de Documento" fullWidth focused required />
          <button className="icon_container">
            <SavedSearchIcon sx={{ fontSize: 30 }} />
          </button>
        </div>
        <div className="client_info_container">
          <TextField label="Razón Social" fullWidth focused required />
          <TextField label="Dirección" fullWidth focused required />
        </div>
      </div>
    </div>
  );
}
