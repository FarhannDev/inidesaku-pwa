import React from 'react';
import TvccItemThumbnail from './tvccItemThumbnail';
import TvccHeading from './TvccHeading';

type TvccItemThumbnailListProps = { items: Tvcc[] };

const TvccItemThumbnailList = ({ items }: TvccItemThumbnailListProps) => {
  return (
    <div className="row justify-content-start g-3 py-4">
      <div className="col">
        <TvccHeading title="Daftar TVCC" />
        <div className="row row-cols-2 row-cols-lg-3 row-cols-xl-3 justify-content-start g-3 py-3">
          {items.map((item) => (
            <div className="col" key={item.id}>
              <TvccItemThumbnail {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvccItemThumbnailList;
