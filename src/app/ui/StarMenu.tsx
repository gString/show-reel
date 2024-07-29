"use client"

import Link from "next/link";
import { ProjectButton, CircleButton, Defs, Svg, SVG_HEIGHT, SVG_WIDTH } from "@/app/ui/svgCommon/svgComponents";
import { projects } from "@/app/lib/projects";
import { fetchIds, fetchPlacement, fetchStarMenuData } from "@/app/lib/data";
import { useCallback, useEffect, useState } from "react";
import { Placement, StarButtonData } from "@/app/lib/types";

export default function StarMenu() {
  const [name, setName] = useState<string | null>(null);
  const [menuData, setMenuData] = useState<StarButtonData[] | null>(null)
  // const [ids, setIds] = useState<string[] | null>(null)
  // const [placements, setPlacements] = useState<{ [key: string]: Placement } | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const _menuData = await fetchStarMenuData();
      setMenuData(_menuData);
    }
    fetch();
  }, []);

  const showTitleHandler = (title: string) => () => {
    console.log('title',title);
    setName(title)
  };
  const hideTitleHandler = useCallback(() => {
    setName(null)
  }, []);

  return (
    <Svg width={SVG_WIDTH} height={SVG_HEIGHT}>
      <Defs />
      <text fill="white" x={"50%"} y={20} textAnchor="middle" filter="url(#yellow-glow)">{ name }</text>
      <CircleButton/>
      {menuData
        && menuData.map( ({id, placement, title}) => (
          <Link key={id} href={`/projects/${id}`}>
            <ProjectButton $placement={placement}
                           showTitleHandler={showTitleHandler(title)}
                           hideTitleHandler={hideTitleHandler}
            />
          </Link>
        ))}
    </Svg>
  );
}