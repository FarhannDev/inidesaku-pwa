import Image from 'next/image';
import Link from 'next/link';
import { Card, Stack } from 'react-bootstrap';
import { HiArrowUpRight } from 'react-icons/hi2';
import '@/styles/program-featured.css';

type ProgramFeaturedItemProps = ProgramFeatureType;

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

      <Link href="/" className="program-featured__actionbtn">
        Selengkapnya <HiArrowUpRight fontSize={22} color="#fff" />
      </Link>
    </Card>
  );
}
