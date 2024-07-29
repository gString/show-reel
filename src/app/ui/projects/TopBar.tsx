"use client"

import styles from "../css/projects.module.css";
import Link from "next/link";
import BackButton from "@/app/ui/projects/BackButton";
import { Footer } from "@/app/ui/projects/Footer";
import { Info } from "@/app/lib/types";
import BarButton from "@/app/ui/projects/BarButton";
import { Circle, TCircle } from "@/app/ui/svgCommon/svgComponents";
import { BackBtnSVG, CodeBtnSVG, InfoBtnSVG, OpenBtnSVG } from "@/app/ui/projects/buttonVisuals";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProjectInfo } from "@/app/lib/data";
import { createPortal } from "react-dom";
import InfoModal from "@/app/ui/projects/InfoModal";

const backPlacement = {x: 0, y: 0, angle: 0,}

export default function TopBar({info}: { info: Info }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen && e.key === "Escape" ) {
        setIsModalOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <header className={styles.bar}>
      <Link href="/">
        <BarButton isFirst={true} text="Back to main" shape={BackBtnSVG} />
      </Link>
      <div onClick={() => setIsModalOpen(true)} className={styles.hoverCursor}>
        <BarButton text="More info" shape={InfoBtnSVG} />
      </div>
      <a href={info?.link} target="_blank" rel="noopener noreferrer">
        <BarButton text="Open in a new tab" shape={OpenBtnSVG} />
      </a>
      <a href={info?.repoLink} target="_blank" rel="noopener noreferrer">
        <BarButton text="View code" shape={CodeBtnSVG} />
      </a>
      {
        info && isModalOpen && createPortal(
          <InfoModal
            info={info}
            closeHandler={() => setIsModalOpen(false)}
          />,
          document.body
        )
      }
    </header>
  );
}