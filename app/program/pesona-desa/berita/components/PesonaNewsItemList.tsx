import React from 'react';
import PesonaNewsItem from './PesonaNewsItem';
import { Col, Row } from 'react-bootstrap';

type PesonaNewsItemListProps = {
  news: PesonaNewsType[];
};

export default function PesonaNewsItemList({ news }: PesonaNewsItemListProps) {
  return (
    <Row className="justify-content-start g-4 pt-3">
      {news.map((item, idx) => (
        <Col xl={4} lg={6} md={6} key={idx++}>
          <PesonaNewsItem {...item} />
        </Col>
      ))}
    </Row>
  );
}
