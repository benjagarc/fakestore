"use client";
import Link from "next/link";
import { FC, memo } from "react";
import { Breadcrumb } from "react-bootstrap";
import styles from "./index.module.scss";

type urType = { url: string };

export const BreadCrumbCustom: FC<urType> = ({ url }) => {
  const pathSegments = url.split("/").filter((segment) => segment !== "");
  const adjustedSegments =
    pathSegments[0] === "category" ? pathSegments.slice(1) : pathSegments;
  return (
    <>
      <Breadcrumb
        aria-label="breadcrumb"
        className={`${styles.customBreadcrum}`}
      >
        <Breadcrumb.Item linkAs={Link} href={"/"}>
          Inicio
        </Breadcrumb.Item>

        {adjustedSegments.map((segment, index) => {
          const isLast = index === adjustedSegments.length - 1;
          let displayName = segment.replace(/[-_]/g, " ");
          let href = `/${adjustedSegments.slice(0, index + 1).join("/")}`;

          if (index === 0) {
            href = `/category/${segment.toLowerCase()}`;
            displayName = segment.toLowerCase();
          }
          return (
            <Breadcrumb.Item
              key={segment}
              linkAs={Link}
              href={href}
              active={isLast}
              aria-current={isLast ? "page" : undefined}
            >
              {displayName}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </>
  );
};

export default memo(BreadCrumbCustom);
