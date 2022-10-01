import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import Iconify from '../Iconify';
import SearchNotFound from '../components/SearchNotFound';
import { URTListHead, URTListToolbar, UserMoreMenu } from '../sections/@dashboard/user';
// mock
import USERLIST from '../_mock/user';

// APIs
import { getUsersList } from '../api/api';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'address', label: 'Address', alignRight: false },
  { id: 'email', label: 'Email ID', alignRight: false },
  // { id: 'isVerified', label: 'Verified', alignRight: false },
  // { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

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

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => (_user.firstName.toLowerCase().indexOf(query.toLowerCase()) !== -1) || (_user.lastName.toLowerCase().indexOf(query.toLowerCase()) !== -1));
    // (_user.firstName.toLowerCase().indexOf(query.toLowerCase()) || _user.lastName.toLowerCase().indexOf(query.toLowerCase())) !== -1
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function UserList() {
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [usersList, setUsersList] = useState([]);

  // const [filteredUsers, setFilteredUsers] = useState(null);

  // const [isUserNotFound, setIsUserNotFound] = useState();

  // let filteredUsers = null;
  // let isUserNotFound = null;
  // let usersList = null;
  
  // function assign(temp) {
  //     filteredUsers = applySortFilter(usersList, getComparator(order, orderBy), filterName);
  //     isUserNotFound = filteredUsers.length === 0;
  //     console.log(filteredUsers);
  //     console.log(usersList);
  // }

  let usersListPromise;
  
  useEffect(() => {
    console.log("Hello!");
    usersListPromise = getUsersList();
    console.log(usersListPromise);
    usersListPromise.then((res) => {
      console.log(loading);
      // usersList = res;
      setUsersList(res);
      // assign(usersList);
      // setFilteredUsers(applySortFilter(usersList, getComparator(order, orderBy), filterName));
      // setIsUserNotFound(filteredUsers.length === 0);
      setLoading(false);
      console.log(loading);
    });
  }, [loading]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    console.log(event.target.value);
    setFilterName(event.target.value);
  };

  const emptyRows = loading && page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredUsers.length) : 0;

  const filteredUsers = loading ? null : applySortFilter(usersList, getComparator(order, orderBy), filterName);

  const isUserNotFound = loading ? false : filteredUsers.length === 0;

  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Users
          </Typography>
          <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button>
        </Stack>

          <Card>
            <URTListToolbar placeHolder="Search User..." numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

            <Scrollbar>
              <TableContainer sx={{ minWidth: 800 }}>
                <Table>
                  <URTListHead
                    order={order}
                    orderBy={orderBy}
                    headLabel={TABLE_HEAD}
                    rowCount={loading ? 0 : filteredUsers.length}
                    numSelected={selected.length}
                    onRequestSort={handleRequestSort}
                  />
                  <TableBody>
                    {
                      loading ? <Typography variant="h5" sx = {{ pl: '24px', pt: '16px'}} noWrap>Loading...</Typography> : 
                        filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                        // const name = row.firstName + " " + row.lastName;
                        return (
                          <TableRow
                            hover
                            key={row._id}
                            tabIndex={-1}
                            role="checkbox"
                          >
                            <TableCell component="th" scope="row" sx={{ pl: 3 }}>
                              <Stack direction="row" alignItems="center" spacing={2}>
                                {/* <Avatar alt={name} src={avatarUrl} /> */}
                                <Typography variant="subtitle2" noWrap>
                                  {`${row.firstName} ${row.lastName}`}
                                </Typography>
                              </Stack>
                            </TableCell>
                            <TableCell sx={{ pl: 3 }} align="left">{row.address ? row.address : 'Not Yet Available'}</TableCell>
                            <TableCell sx={{ pl: 3 }} align="left">{row.email}</TableCell>

                            <TableCell align="right">
                              <UserMoreMenu />
                            </TableCell>
                          </TableRow>
                        );
                    })}
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>

                  {isUserNotFound && (
                    <TableBody>
                      <TableRow>
                        <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                          <SearchNotFound searchQuery={filterName} />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  )}
                </Table>
              </TableContainer>
            </Scrollbar>

            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={loading ? 0 : filteredUsers.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Card>
      </Container>
    </Page>
  );
}
