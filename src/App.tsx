import { useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router";
import HorseRacing from "./pages/HorseRacing/HorseRacing.tsx";
import GreyHoundRacing from "./pages/GreyHoundRacing/GreyHoundRacing.tsx";
import { AppContext } from "./context/AppContext/AppContext.tsx";
import { TABS_KEYS } from "./utils/common.type.ts";

const App = () => {
  const [activeTab, setActiveTab] = useState(TABS_KEYS.HORSE_RACING);

  return (
    <AppContext.Provider value={{ activeTab, setActiveTab }}>
      <HashRouter>
        <Routes>
          <Route path="/horseRacing" element={<HorseRacing />} />
          <Route path="/greyHoundRacing" element={<GreyHoundRacing />} />
          <Route path="*" element={<Navigate to="/horseRacing" />} />
        </Routes>
      </HashRouter>
    </AppContext.Provider>
  );
};

export default App;
