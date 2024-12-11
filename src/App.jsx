import React, { useState } from "react";

import Storepage from "./components/StorePage";

function App() {
  const [activeMenu, setActiveMenu] = useState("STORE");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div classNameNameName="App">
      {activeMenu === "STORE" && (
        <Storepage handleMenuClick={handleMenuClick} />
      )}
      {activeMenu === "NEWS" && <div>News Section</div>}
      {activeMenu === "FAQ" && <div>FAQ Section</div>}
      {activeMenu === "HELP" && <div>Help Section</div>}
    </div>
  );
}

export default App;
