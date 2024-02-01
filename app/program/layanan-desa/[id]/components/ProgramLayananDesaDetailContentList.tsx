import React from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import { contentDetail } from '@/utils/data/localDataLayananDesa';
import ProgramLayananDesaDetailContent from './ProgramLayananDesaDetailContent';

export default function ProgramLayananDesaDetailContentList() {
  return (
    <Row className="justify-content-start g-3 pt-5">
      <Col>
        <Stack direction="vertical" gap={4}>
          {contentDetail.map((content, index) => (
            <ProgramLayananDesaDetailContent key={index} {...content} />
          ))}
        </Stack>
      </Col>
    </Row>
  );
}
