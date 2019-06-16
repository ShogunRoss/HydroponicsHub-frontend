import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "../CustomButton/CustomButton";
import classNames from "classnames";
// core components
import tableStyle from "./tableStyles";

const CustomTable = ({ ...props }) => {
  const { classes, tableHead, tableData, tableHeaderColor } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classNames(
                      classes.tableCell,
                      classes.tableHeadCell
                    )}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
              <TableCell
                className={classNames(classes.tableCell, classes.tableHeadCell)}
                key="actions"
                align="right"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData
            ? tableData.map((prop, key) => {
                return (
                  <TableRow key={key} id={key}>
                    {prop.map((prop, key) => {
                      return (
                        <TableCell className={classes.tableCell} key={key}>
                          {prop}
                        </TableCell>
                      );
                    })}
                    <TableCell
                      className={classes.tableCell}
                      align="right"
                      key="actions"
                    >
                      <Button color="info" onClick={props.handleEditClick}>
                        <EditIcon /> Edit
                      </Button>
                      <Button
                        color="danger"
                        marginLeft
                        onClick={props.handleDeleteClick}
                      >
                        <DeleteIcon /> Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            : null}
        </TableBody>
      </Table>
    </div>
  );
};

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
  handleEditClick: PropTypes.func,
  handleDeleteClick: PropTypes.func,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string || PropTypes.number)
  )
};

export default withStyles(tableStyle)(CustomTable);
