import { Col, Row } from 'react-bootstrap';
import ProgramFeaturedItem from './ProgramFeaturedItem';

type ProgramFeaturedListProps = { programs: ProgramFeatureType[] };

export default function ProgramFeaturedList({
  programs,
}: ProgramFeaturedListProps) {
  return (
    <Row className="justify-content-start g-4 pt-4">
      {programs.map((program) => (
        <Col xl={4} lg={6} md={6} key={program.id}>
          <ProgramFeaturedItem {...program} />
        </Col>
      ))}
    </Row>
  );
}
