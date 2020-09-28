import React from 'react';
import { Typography } from 'antd';

import type { ReactElement } from 'react';

const { Title } = Typography;

function Home(): ReactElement {
  return <Title>Todo List</Title>;
}

export default Home;
