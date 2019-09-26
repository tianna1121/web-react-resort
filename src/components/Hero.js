import React from "react";

export default function Hero({ children, herocss }) {
  return <header className={herocss}>{children}</header>;
}

Hero.defaultProps = {
  herocss: "defaultHero"
};
