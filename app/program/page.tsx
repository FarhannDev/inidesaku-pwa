import ProgramFeaturedList from '@/components/program/ProgramFeaturedList';
import { programFeature } from '@/utils/data/localDataProgramFeature';
import { Col, Container, Row } from 'react-bootstrap';

export default function Program() {
  const filteredProgram = programFeature.filter(
    (program) => program.tag === 'Berita Desa & Edukasi Desa'
  );

  const filteredProgramEkonomi = programFeature.filter(
    (program) => program.tag === 'Ekonomi & Transaksi'
  );

  return (
    <>
      <Container className="position-relative py-5 mt-5">
        <Row className="justify-content-start g-3 py-4">
          <Col>
            <h1 className="heading">Program Berita Desa & Edukasi Desa</h1>
            <ProgramFeaturedList programs={filteredProgram} />
          </Col>
        </Row>
        <Row className="justify-content-start g-3 py-4">
          <Col>
            <h1 className="heading">Program Ekonomi & Transaksi</h1>
            <ProgramFeaturedList programs={filteredProgramEkonomi} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
