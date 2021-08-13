import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { lighten, makeStyles } from '@material-ui/core/styles';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Loader from '../../../CommonComponents/Loader';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort, headCells } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    cursor: 'pointer',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(1),
  },
  table: {
    minWidth: 750,
  },
  secondaryText: {
    color: '#9e9e9e',
    fontSize: '12px',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  flightType: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '66px',
    width: '90px',
    padding: '15px',
    textAlign: 'center',
    backgroundColor: '#f1f5f7',
    borderRadius: '10px',
    marginRight: '15px',
  },
  title: {
    flexGrow: 1,
    textTransform: 'capitalize',
  },
  flightName: {
    display: 'flex',
    cursor: 'pointer',
  },
  flightNameDetails: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  tableRow: {
    hover: {
      '&$hover:hover': {
        backgroundColor: '#49bb7b',
      },
    },
  },
  activeStatus: {
    width: "45px",
    height: "16px",
    fontFamily: "Montserrat",
    fontSize: "11px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#009a00",
  },
  deactiveStatus: {
    width: "45px",
    height: "16px",
    fontFamily: "Montserrat",
    fontSize: "11px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#ab1b1b",
  },
}));

export default function EnhancedTable(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  useEffect(() => {
    setRows(props.data);
  }, [props.data, rows]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    props.paginationHandler({ page: newPage, pageSize: rowsPerPage });
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    props.paginationHandler({
      page: page,
      pageSize: parseInt(event.target.value, 10),
    });
  };

  const loaderOn = props.loaderOn;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              headCells={props.headCells}
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length || 0}
            />

            {loaderOn ? (
              <TableBody>
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={7}>
                    {' '}
                    <Loader />{' '}
                  </TableCell>
                </TableRow>
              </TableBody>
            ) : (
                <TableBody>
                  {stableSort(rows, getComparator(order, orderBy)).map(
                    (row, key) => (
                      <TableRow
                        hover={true}
                        className={classes.tableRow}
                        key={`${row.id}-${row.regNo}-${key}`}
                      >
                        <React.Fragment>
                          {props.headCells.map((item, index) => {
                            if (props.headCells[index+1]) {
                              return (
                                <TableCell key={`${item.id}-${index}`}>
                                  {item.id == "flight_status" ? row[item.id] ===1 ? 
                                  <span className={classes.activeStatus}> Active </span> : 
                                  <span className={classes.deactiveStatus}> Deactive </span> : 
                                   <span > {row[item.id] || 'NA'} </span>
                                  }
                                </TableCell>
                              );
                            }
                          })}
                        </React.Fragment>
                        <TableCell component="th" scope="row">
                          <div>
                          <VpnKeyIcon
                            onClick={(event) => props.clicked(row.id)}
                            fontSize="large" color="primary" 
                          />
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              )}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[2, 5, 10, 25]}
          component="div"
          count={props.totalRows || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

