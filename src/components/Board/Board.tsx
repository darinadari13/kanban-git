import React from 'react';
import { Col, Row } from 'antd';


interface Issue {
  id: number;
  number: number;
  html_url: string;
}

const Board: React.FC = () => (

  // const issues<Issue[]> = RepoIssues();

  <Row style={{ marginTop: '20px' }}>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
    {/* {issues.map((issue) => (
          <li key={issue.id}>
            <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
              {issue.title}
            </a>
    </li>
    ))} */}
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