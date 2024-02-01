import React from 'react';
import { Button } from 'react-bootstrap';
import '@/styles/filtered-button.css';

type Props = {
  item: string;
  setItem: (value: string) => void;
  categories: LayananDesa[];
};

export default function ProgramLayananDesaButtonFiltered({
  item,
  setItem,
  categories,
}: Props) {
  return (
    <>
      <div className="py-3 d-flex justify-content-start">
        <Button
          type="button"
          variant="outline-success"
          className="me-2 rounded"
          value={item}
          onClick={() => setItem('')}
          active={!item}
        >
          semua
        </Button>
        {categories
          .filter(
            (value, index, self) =>
              index ===
              self.findIndex((obj) => obj.categories === value.categories)
          )
          .map((category) => (
            <Button
              key={category.id}
              type="button"
              variant="outline-success"
              className="me-2 rounded"
              value={item}
              onClick={() => setItem(category.categories)}
              active={category.categories === item}
            >
              {category.categories}
            </Button>
          ))}
      </div>
    </>
  );
}
