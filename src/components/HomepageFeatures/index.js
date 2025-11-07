import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('/img/tigre.svg').default,
    description: (
      <>
        Esta pagina es un blog personal sobre la meua vida y les rutines
        que faig dia a dia durant la semana
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('/img/moto.svg').default,
    description: (
      <>
        Començem anmb els entrenaments que per el matí a les 7 o a les 9
        faig un hora o hora i mitja de crossfit
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('/img/uno.svg').default,
    description: (
      <>
        Finamlent despres de estudiar per la vesprada els dies que puc vaig a entrenar
        boxeo en Xativa.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
