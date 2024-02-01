import { Button, Card, Stack } from 'react-bootstrap';
import '@/styles/program-featured.css';
import Image from 'next/image';

type ProgramFeaturedItemProps = ProgramFeature;

export default function ProgramFeaturedItem({
  name,
  description,
  icons,
}: ProgramFeaturedItemProps) {
  return (
    <Card body className="program-featured-item">
      <Image
        src={icons}
        width={60}
        height={60}
        alt=""
        className="img-fluid program-featured__images"
        priority
      />

      <Stack direction="vertical" gap={2}>
        <h3 className="program-featured__title">{name}</h3>
        <div className="program-featured__description">
          {description?.length > 250
            ? `${description?.substring(0, 250)}...`
            : description}
        </div>
      </Stack>

      <Button
        type="button"
        variant="dark"
        className="program-featured__actionbtn"
      >
        Selengkapnya -
      </Button>
    </Card>
  );
}
