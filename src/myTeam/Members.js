import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const Members = () => (
  <Table style={{ backgroundColor: 'transparent' }} bodyStyle={{ color: '#4A88A0' }}>
    <TableBody displayRowCheckbox={false}>
      <TableRow style={{ color: 'white' }}>
        <TableRowColumn>ID</TableRowColumn>
        <TableRowColumn>Pseudo</TableRowColumn>
        <TableRowColumn>Pays</TableRowColumn>
      </TableRow>
      <TableRow style={{ color: '#4A88A0', backgroundColor: '#272F33', fontWeight: 'bold' }}>
        <TableRowColumn>#84365</TableRowColumn>
        <TableRowColumn>Joith</TableRowColumn>
        <TableRowColumn>France</TableRowColumn>
      </TableRow>
      <TableRow style={{ color: '#FF9600', backgroundColor: '#342A1B', fontWeight: 'bold' }}>
        <TableRowColumn>#22617</TableRowColumn>
        <TableRowColumn>Randahite</TableRowColumn>
        <TableRowColumn>France</TableRowColumn>
      </TableRow>
      <TableRow style={{ color: '#4A88A0', backgroundColor: '#272F33', fontWeight: 'bold' }}>
        <TableRowColumn>#44512</TableRowColumn>
        <TableRowColumn>Stehders</TableRowColumn>
        <TableRowColumn>France</TableRowColumn>
      </TableRow>
      <TableRow style={{ color: '#FF9600', backgroundColor: '#342A1B', fontWeight: 'bold' }}>
        <TableRowColumn>#12012</TableRowColumn>
        <TableRowColumn>Steown</TableRowColumn>
        <TableRowColumn>France</TableRowColumn>
      </TableRow>
      <TableRow style={{ color: '#4A88A0', backgroundColor: '#272F33', fontWeight: 'bold' }}>
        <TableRowColumn>#56421</TableRowColumn>
        <TableRowColumn>Nolan</TableRowColumn>
        <TableRowColumn>France</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default Members;
