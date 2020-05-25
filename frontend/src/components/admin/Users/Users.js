import React, { Component } from "react";
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";

import usersData from "./UsersData";

function UserRow(props) {
  const user = props.user;

  const getBadge = (status) => {
    return status === "Active"
      ? "success"
      : status === "Inactive"
        ? "secondary"
        : status === "Pending"
          ? "warning"
          : status === "Banned"
            ? "danger"
            : "primary";
  };

  return (
    <tr key={user.id.toString()}>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.registered}</td>
      <td>{user.role}</td>
      <td>
        <Badge color={getBadge(user.status)}>{user.status}</Badge>
      </td>
    </tr>
  );
}

class Users extends Component {
  render() {
    const userList = usersData.filter((user) => user.id < 10);

    return (
      <div className="animated fadeIn">
        <Row className="m-5">
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users{" "}
                <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">registered</th>
                      <th scope="col">role</th>
                      <th scope="col">status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) => (
                      <UserRow key={index} user={user} />
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Users;
