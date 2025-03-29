import { TableRow, TableCell } from '@mui/material';
import React from 'react';

const Customer = ({ id, image, name, birthday, gender, job }) => {
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>
        <img src={image} alt="profile" width="50" />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{birthday}</TableCell>
      <TableCell>{gender}</TableCell>
      <TableCell>{job}</TableCell>
    </TableRow>
  );
};

export default Customer;
