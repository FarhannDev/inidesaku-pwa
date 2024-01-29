import { Accordion } from 'react-bootstrap';
import './custom-accordion.css';

export default function FaqItem({ question, answer }: FaqQuestionType) {
  return (
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{question}</Accordion.Header>
        <Accordion.Body>{answer}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
