import { Accordion } from 'react-bootstrap';
import FaqItem from './FaqItem';

type FaqItemListProps = {
  questions: FaqQuestionType[];
};
export default function FaqItemList({ questions }: FaqItemListProps) {
  return questions.map((question, idx) => <FaqItem key={idx} {...question} />);
}
