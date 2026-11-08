"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLenis } from "lenis/react";
import { navItems } from "@/data/nav";

type DesktopSidebarProps = {
  positionClass?: string;
};

export function DesktopSidebar({
  positionClass = "pst-v1",
}: DesktopSidebarProps = {}) {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const lenis = useLenis();

  const goTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`sidebar-tools ${positionClass}`}>
      <div className="nav-top">
        <div
          className={`tf-btn-icon toggle-switch-mode${
            mounted && theme === "dark" ? " active" : ""
          }`}
          onClick={handleToggle}
        >
          <i className="icon icon-light" />
        </div>
      </div>

      <ul className="nav-list">
        {navItems.map((item, i) => (
          <li key={item.href + i} className="nav-item">
            <a href={item.href} className="item-link scroll-link">
              <i className={`icon ${item.icon}`} />
              <p className="tool-tip text-caption">{item.label}</p>
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-bottom">
        <a href="#" className="tf-btn-icon go-top" onClick={goTop}>
          <i className="icon icon-arrow-top" />
        </a>
      </div>
    </div>
  );
}