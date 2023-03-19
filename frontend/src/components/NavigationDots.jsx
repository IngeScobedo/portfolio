import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["inicio", "sobre mi", "trabajo", "habilidades", "testimonios", "contacto"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313BAC" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
