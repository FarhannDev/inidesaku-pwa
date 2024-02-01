'use client';

import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type BreadcrumbItemProps = {
  menus: BreadcrumbItem[];
};

export default function BreadcrumbItem({ menus }: BreadcrumbItemProps) {
  const pathname = usePathname();

  return (
    <div className="d-flex justify-content-start py-3">
      <Breadcrumb>
        {menus.map((menu, index) => (
          <Link
            key={index++}
            className={`breadcrumb-item text-decoration-none ${
              pathname === menu.url
                ? 'active fw-medium'
                : 'fw-normal text-secondary'
            }`}
            href={menu.url}
          >
            {menu.name}
          </Link>
        ))}
      </Breadcrumb>
    </div>
  );
}
