import React, { useState, useRef, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import "./styles/DropdownItem.css";

const SUBMENU_CLOSE_DELAY = 1000;

const DropdownItem = ({
  item,
  parentPosition = "right",
  level = 1,
  menuContainerRef,
}) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuPosition, setSubmenuPosition] = useState(parentPosition);
  const itemRef = useRef(null);
  const submenuRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    if (submenuOpen && itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      const menuWidth = 180;
      const spaceRight = window.innerWidth - rect.right;
      const spaceLeft = rect.left;
      if (spaceRight < menuWidth && spaceLeft > menuWidth) {
        setSubmenuPosition("left");
      } else {
        setSubmenuPosition("right");
      }
    }
  }, [submenuOpen]);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    clearCloseTimeout();
    setSubmenuOpen(true);
  };

  const handleMouseLeave = (e) => {
    clearCloseTimeout();
    const newTarget = e.relatedTarget;
    if (!newTarget || !(newTarget instanceof Node)) {
      closeTimeoutRef.current = setTimeout(() => {
        setSubmenuOpen(false);
      }, SUBMENU_CLOSE_DELAY);
      return;
    }
    if (submenuRef.current && submenuRef.current.contains(newTarget)) {
      return;
    }
    if (
      menuContainerRef?.current &&
      menuContainerRef.current.contains(newTarget)
    ) {
      setSubmenuOpen(false);
      return;
    }
    closeTimeoutRef.current = setTimeout(() => {
      setSubmenuOpen(false);
    }, SUBMENU_CLOSE_DELAY);
  };

  const handleItemClick = (e) => {
    e.stopPropagation();
    if (item.onClick) {
      item.onClick();
    }
  };

  if (item.divider) {
    return <div className="dropdown-divider" />;
  }

  const isTopLevel = level === 1;
  const levelClass = isTopLevel ? "top-level-item" : "submenu-item";
  const openClass = submenuOpen ? "submenu-open" : "";

  return (
    <li
      ref={itemRef}
      className={`dropdown-item ${levelClass} ${openClass} ${
        !item.icon ? "no-icon" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleItemClick}
    >
      <div className="dropdown-item-content">
        {item.icon && <span className="dropdown-icon">{item.icon}</span>}
        <span className="dropdown-label">{item.label}</span>
        {item.submenu && (
          <span className="submenu-arrow">
            <FaChevronRight />
          </span>
        )}
      </div>

      {item.submenu && submenuOpen && (
        <ul
          ref={submenuRef}
          className={`submenu submenu-${submenuPosition} ${
            submenuOpen ? "open" : ""
          }`}
        >
          {item.submenu.map((subItem, idx) => (
            <DropdownItem
              key={idx}
              item={subItem}
              parentPosition={submenuPosition}
              level={level + 1}
              // menuContainerRef={menuRef}
              menuContainerRef={menuContainerRef}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropdownItem;
