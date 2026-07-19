import { useState } from 'react';
import Weapons from '../components/Weapons';
import Protections from '../components/Protections';
import Accessories from '../components/Accessories';
import Explosives from '../components/Explosives';
import OperationalItems from '../components/OperationalItems';
import ParanormalItems from '../components/ParanormalItems';
import CursedItems from '../components/CursedItems';

const Equipment = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    'Armas',
    'Proteções',
    'Acessórios',
    'Explosivos',
    'Itens Operacionais',
    'Itens Paranormais',
    'Itens Amaldiçoados',
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
      {activeTab === 0 && <Weapons />}
      {activeTab === 1 && <Protections />}
      {activeTab === 2 && <Accessories />}
      {activeTab === 3 && <Explosives />}
      {activeTab === 4 && <OperationalItems />}
      {activeTab === 5 && <ParanormalItems />}
      {activeTab === 6 && <CursedItems />}
    </>
  );
};

export default Equipment;
