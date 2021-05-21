import { Row, Col } from 'antd';
import React from 'react';
import { Card } from '../Card';

export type ContentType = {
  key: number;
  name: string;
  value: string;
};

type CardLayoutType = {
  contentList: ContentType[];
};

export const CardLayout = (props: CardLayoutType) => {
  const { contentList } = props;
  return (
    <Row>
      {contentList.map(content => (
        <Col xs={24} xl={8} key={content.key}>
          <Card key={content.key} name={content.name} value={content.value} />
        </Col>
      ))}
    </Row>
  );
};
