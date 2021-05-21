import { Row, Col } from 'antd';
import React from 'react';
import { StyledCard, StyledImage } from './style';

const { Meta } = StyledCard;

export type CardType = {
  key: number;
  name: string;
  value: string;
  description?: string;
};

export const Card = (props: CardType) => {
  const { value, key, name, description = '' } = props;
  return (
    <StyledCard hoverable cover={<StyledImage alt={String(key)} src={value} />}>
      <Meta title={name} description={description} />
    </StyledCard>
  );
};
