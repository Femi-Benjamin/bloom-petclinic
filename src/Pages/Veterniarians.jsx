import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import axios from "axios";
import Footer from "../components/Footer";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// function createData(name, address, city, tel) {
//   return { name, address, city, tel };
// }

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  const Ownn = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 46px;
    color: #000000;
    padding-left: 100px;
    padding-top: 46px;
    padding-bottom: 23px;
  `;
  const Headtable = styled.div`
    margin-left: 100px;
    margin-right: 100px;
  `;

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakerapi.it/api/v1/persons?_quantity=20")
      .then((response) => setData(response.data.data));
  }, []);

  return (
    <>
      <Ownn>Veteriniarians</Ownn>
      <Headtable>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Address</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>City</StyledTableCell>
                <StyledTableCell>Tel</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                ? data.map((data, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {data.firstname}, {data.lastname}
                      </StyledTableCell>
                      <StyledTableCell>
                        {data.address.street}, {data.address.streetName}
                      </StyledTableCell>
                      <StyledTableCell>{data.email}</StyledTableCell>
                      <StyledTableCell>
                        {data.address.city}, {data.address.country}
                      </StyledTableCell>
                      <StyledTableCell>{data.phone}</StyledTableCell>
                    </StyledTableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </Headtable>
      <Footer />
    </>
  );
}
