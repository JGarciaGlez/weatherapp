import React from "react";

export const Header = ({ title }) => {
  return (
    <nav>
      <div>
        <a>{title}</a>
      </div>
    </nav>
  );
};
