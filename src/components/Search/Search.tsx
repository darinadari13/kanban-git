import React from 'react';
import { Button, Input, Space } from 'antd';

const Search: React.FC = () => (
    <Space.Compact style={{ width: '100%' }}>
      <Input defaultValue="Enter repo URL" />
      <Button type="primary">Submit</Button>
    </Space.Compact>
    
);

export default Search;