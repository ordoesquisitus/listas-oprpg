import { Fragment } from 'react';
import weaponsData from '../data/weapons.json';
import modificationsData from '../data/weapon-modifications.json';

type WeaponMunition = {
  name: string;
  tier: string;
  weight: number;
};

type Weapon = {
  name: string;
  description: string;
  tier: string;
  category: string;
  combatType: string;
  wieldType: string;
  damage: string;
  critical: string;
  range: string;
  damageType: string;
  weight: number;
  munition?: WeaponMunition;
};

type Modification = {
  name: string;
  effect: string;
  description: string;
};

type ModificationGroup = {
  target: string;
  modifications: Modification[];
};

const sectionTitles: Record<string, string> = {
  Simples: 'Armas Simples',
  Tática: 'Armas Táticas',
  Pesada: 'Armas Pesadas',
};

const Weapons = () => {
  const weapons = weaponsData as Weapon[];
  const categories = ['Simples', 'Tática', 'Pesada'] as const;

  const groupedWeapons = categories.map(category => {
    const categoryItems = weapons.filter(
      weapon => weapon.category === category
    );
    const groupedByType = new Map<string, Weapon[]>();

    categoryItems.forEach(weapon => {
      const key = `${weapon.combatType} - ${weapon.wieldType}`;
      const currentGroup = groupedByType.get(key) ?? [];
      currentGroup.push(weapon);
      groupedByType.set(key, currentGroup);
    });

    return {
      category,
      title: sectionTitles[category],
      groups: Array.from(groupedByType.entries()).map(([label, items]) => ({
        label,
        items,
      })),
    };
  });

  const modificationGroups = modificationsData as ModificationGroup[];

  const allModsWithTarget = modificationGroups.flatMap(group =>
    group.modifications.map(mod => ({ ...mod, target: group.target }))
  );

  const uniqueModsMap = new Map<string, Modification & { target: string }>();
  allModsWithTarget.forEach(mod => {
    if (!uniqueModsMap.has(mod.name)) uniqueModsMap.set(mod.name, mod);
  });

  const uniqueMods = Array.from(uniqueModsMap.values()).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="mt-3">
      <div className="accordion" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed text-bg-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Armas
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse text-bg-dark"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="table-responsive">
                <table className="table table-sm align-middle">
                  <thead className="table-dark">
                    <tr className="text-uppercase">
                      <th scope="col">Arma</th>
                      <th scope="col" className="text-center">
                        Categoria
                      </th>
                      <th scope="col" className="text-center">
                        Dano
                      </th>
                      <th scope="col" className="text-center">
                        Crítico
                      </th>
                      <th scope="col" className="text-center">
                        Alcance
                      </th>
                      <th scope="col" className="text-center">
                        Tipo
                      </th>
                      <th scope="col" className="text-center">
                        Espaços
                      </th>
                    </tr>
                  </thead>
                  <tbody className="table-dark">
                    <tr className="border-top border-white">
                      <td colSpan={7} className="p-0"></td>
                    </tr>
                    {groupedWeapons.map(({ title, groups }) => (
                      <>
                        <tr key={title} className="table-secondary-bg">
                          <td
                            colSpan={7}
                            className="fw-bold text-white fst-italic"
                          >
                            {title}
                          </td>
                        </tr>
                        <tr className="border-top border-white">
                          <td colSpan={7} className="p-0"></td>
                        </tr>
                        {groups.map(({ label, items }) => (
                          <>
                            <tr
                              key={`${title}-${label}`}
                              className="table-tertiary-bg"
                            >
                              <td
                                colSpan={7}
                                className="fw-semibold text-white fst-italic"
                              >
                                {label}
                              </td>
                            </tr>
                            {items.map(weapon => (
                              <>
                                <tr key={`${title}-${label}-${weapon.name}`}>
                                  <td>{weapon.name}</td>
                                  <td className="text-center">{weapon.tier}</td>
                                  <td className="text-center">
                                    {weapon.damage}
                                  </td>
                                  <td className="text-center">
                                    {weapon.critical}
                                  </td>
                                  <td className="text-center">
                                    {weapon.range}
                                  </td>
                                  <td className="text-center">
                                    {weapon.damageType}
                                  </td>
                                  <td className="text-center">
                                    {weapon.weight}
                                  </td>
                                </tr>
                                {weapon.munition ? (
                                  <tr
                                    key={`${title}-${label}-${weapon.name}-munition`}
                                  >
                                    <td className="ps-5">
                                      <small className="text-white">
                                        {weapon.munition.name}
                                      </small>
                                    </td>
                                    <td className="text-center">
                                      <small className="text-white">
                                        {weapon.munition.tier}
                                      </small>
                                    </td>
                                    <td className="text-center">
                                      <small className="text-white">-</small>
                                    </td>
                                    <td className="text-center">
                                      <small className="text-white">-</small>
                                    </td>
                                    <td className="text-center">
                                      <small className="text-white">-</small>
                                    </td>
                                    <td className="text-center">
                                      <small className="text-white">-</small>
                                    </td>
                                    <td className="text-center">
                                      <small className="text-white">
                                        {weapon.munition.weight}
                                      </small>
                                    </td>
                                  </tr>
                                ) : null}
                              </>
                            ))}
                          </>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="row">
                {weapons
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((weapon, index) => (
                    <div key={index} className="col-lg-6 col-md-12 mb-3">
                      <div className="card h-100 text-bg-dark text-light border-light">
                        <div className="card-body">
                          <h5 className="card-title">{weapon.name}</h5>
                          <span
                            className="card-text"
                            dangerouslySetInnerHTML={{
                              __html: weapon.description,
                            }}
                          ></span>
                          <br />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed text-bg-dark border-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Modificações para Armas
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse text-bg-dark collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="table-responsive">
                <table className="table table-sm align-middle">
                  <thead className="table-dark">
                    <tr className="text-uppercase">
                      <th scope="col">Modificação</th>
                      <th scope="col">Efeito</th>
                    </tr>
                  </thead>
                  <tbody className="table-dark">
                    <tr className="border-top border-white">
                      <td colSpan={3} className="p-0"></td>
                    </tr>
                    {modificationGroups.map(group => (
                      <Fragment key={group.target}>
                        <tr className="table-secondary-bg">
                          <td
                            colSpan={3}
                            className="fw-bold text-white fst-italic"
                          >
                            Modificações para {group.target}
                          </td>
                        </tr>
                        <tr className="border-top border-white">
                          <td colSpan={3} className="p-0"></td>
                        </tr>
                        {group.modifications.map(mod => (
                          <tr key={`${group.target}-${mod.name}`}>
                            <td>{mod.name}</td>
                            <td>{mod.effect}</td>
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="row">
                {uniqueMods.map((mod, index) => (
                  <div key={index} className="col-lg-6 col-md-12 mb-3">
                    <div className="card h-100 text-bg-dark text-light border-light">
                      <div className="card-body">
                        <h5 className="card-title">{mod.name}</h5>
                        <p
                          className="card-text"
                          dangerouslySetInnerHTML={{ __html: mod.description }}
                        ></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weapons;
