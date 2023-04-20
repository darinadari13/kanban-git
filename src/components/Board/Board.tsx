import React from 'react';
import { Col, Row } from 'antd';

const Board: React.FC = () => (
  <Row style={{ marginTop: '20px' }}>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      ToDo
    </Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      In Progress
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Done
    </Col>
  </Row>
);

export default Board;