import React, { useState, useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";
import "./styles/Dropdown.css";
import DropdownItem from "./DropdownItem";

const MENU_CLOSE_DELAY = 1000;

const Dropdown = ({ items, trigger, triggerOnHover = false }) => {
  const [open, setOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState("right");

  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);
  const leaveTimerRef = useRef(null);

  useOnClickOutside(containerRef, () => setOpen(false));

  const decideMenuPosition = () => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const menuWidth = 200;
    const spaceRight = window.innerWidth - rect.right;
    const spaceLeft = rect.left;

    if (spaceRight < menuWidth && spaceLeft > menuWidth) {
      setMenuPosition("left");
    } else {
      setMenuPosition("right");
    }
  };

  const handleClickTrigger = () => {
    setOpen((prev) => {
      const nextState = !prev;
      if (nextState) {
        decideMenuPosition();
      }
      return nextState;
    });
  };

  const handleMouseEnter = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    if (!open) {
      setOpen(true);
      decideMenuPosition();
    }
  };

  const handleMouseLeave = (e) => {
    const newTarget = e.relatedTarget;

    if (
      !newTarget ||
      !(newTarget instanceof Node) ||
      !containerRef.current.contains(newTarget)
    ) {
      leaveTimerRef.current = setTimeout(
        () => setOpen(false),
        MENU_CLOSE_DELAY
      );
    }
  };

  const containerProps = triggerOnHover
    ? {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      }
    : {};

  const triggerProps = !triggerOnHover ? { onClick: handleClickTrigger } : {};

  const TriggerElement = trigger ? (
    <div
      ref={triggerRef}
      style={{ display: "inline-block", cursor: "pointer" }}
      {...triggerProps}
    >
      {trigger}
    </div>
  ) : (
    <button
      ref={triggerRef}
      className="dropdown-button"
      style={{ cursor: "pointer" }}
      {...triggerProps}
    >
      Open Menu
    </button>
  );

  return (
    <div className="dropdown-container" ref={containerRef} {...containerProps}>
      {TriggerElement}

      <div ref={menuRef}>
        <ul
          className={`dropdown-menu dropdown-${menuPosition} ${
            open ? "open" : ""
          }`}
        >
          {items.map((item, index) => (
            <DropdownItem
              key={index}
              item={item}
              parentPosition={menuPosition}
              level={1}
              menuContainerRef={menuRef}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
