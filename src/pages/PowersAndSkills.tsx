import { useState } from 'react';
import Origins from '../components/Origins';
import General from '../components/General';
import Combatant from '../components/Combatant';
import Specialist from '../components/Specialist';
import Occultist from '../components/Occultist';
import Survivor from '../components/Survivor';

const PowersAndSkills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    'Origens',
    'Geral',
    'Combatente',
    'Especialista',
    'Ocultista',
    'Sobrevivente',
  ];

  return (
    <>
      <ul className="nav nav-pills">
        {tabs.map((tab, index) => (
          <li className="nav-item" key={index}>
            <a
              className={`nav-link ${activeTab === index ? 'active text-bg-light' : 'text-bg-dark'}`}
              aria-current={activeTab === index ? 'page' : undefined}
              href="#"
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
      {activeTab === 0 && <Origins />}
      {activeTab === 1 && <General />}
      {activeTab === 2 && <Combatant />}
      {activeTab === 3 && <Specialist />}
      {activeTab === 4 && <Occultist />}
      {activeTab === 5 && <Survivor />}
    </>
  );
};

export default PowersAndSkills;
