import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Epic Adventures',
    Svg: require('@site/static/img/epic-adventures.svg').default,
    description: (
      <>
        Explore breathtaking trails and discover hidden gems in the great outdoors.
        From scenic mountain passes to challenging desert terrain, every ride is an adventure.
      </>
    ),
  },
  {
    title: 'Community First',
    Svg: require('@site/static/img/community-first.svg').default,
    description: (
      <>
        Join a growing community of people who share your enthusiasm for motorcycle exploration.
        Share experiences, learn from others, and build lasting friendships on the trail.
      </>
    ),
  },
  {
    title: 'Safety & Skills',
    Svg: require('@site/static/img/safety-skills.svg').default,
    description: (
      <>
        Enhance your riding skills with our workshops and safety training.
        Learn proper techniques, trail etiquette, and emergency preparedness.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): ReactNode {
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
