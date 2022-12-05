import Table from 'react-bootstrap/Table';
import {  Button, Container } from "react-bootstrap"

function MonUser() {
  return (
    <Container>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Kandidat</th>
          <th>Nama Perusahaan</th>
          <th>Posisi</th>
          <th>Penempatan</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Agung Lucky Herdian</td>
          <td>Bank BJB</td>
          <td>Pro Gamers</td>
          <td>Bandung</td>
          <td>Apply</td>
          <td colSpan={2}>
            <Button>edit</Button>
            <Button>delete</Button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Roy</td>
          <td>Baso Anang</td>
          <td>Waiters</td>
          <td>Bandung</td>
          <td>Reject</td>
          <td colSpan={2}>
            <Button>edit</Button>
            <Button>delete</Button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>made</td>
          <td>Bank Indonesia</td>
          <td>Security</td>
          <td>Bandung</td>
          <td>Interview</td>
          <td colSpan={2}>
            <Button>edit</Button>
            <Button>delete</Button>
          </td>
        </tr>
      </tbody>
    </Table>
    </Container>
    
  );
}

export default MonUser;