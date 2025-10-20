import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: ReactNode;
  linkTo: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Epic Adventures',
    imgSrc: require('@site/static/img/more-adventure.png').default,
    description: (
      <>
        Explore breathtaking trails and discover hidden gems in the great outdoors. From scenic
        mountain passes to challenging desert terrain, every ride is an adventure.
      </>
    ),
    linkTo: '/rides',
  },
  {
    title: 'Community First',
    imgSrc: require('@site/static/img/more-community.png').default,
    description: (
      <>
        Join a growing community of people who share your enthusiasm for motorcycle exploration.
        Share experiences, learn from others, and build lasting friendships on the trail.
      </>
    ),
    linkTo: '/discord',
  },
  {
    title: 'Training & Skills',
    imgSrc: require('@site/static/img/more-training.png').default,
    description: (
      <>
        Enhance your riding skills with our workshops and safety training. Learn proper techniques,
        trail etiquette, and safe riding practices.
      </>
    ),
    linkTo: '/docs/safety',
  },
];

function Feature({ title, imgSrc, description, linkTo }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link to={linkTo}>
          <img src={imgSrc} className={styles.featureImg} alt={title} />
        </Link>
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
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <div className="text--justify">
                <Heading as="h3">Open Source & Community Driven</Heading>
                <p>
                  This site is completely open source and we welcome contributions from the
                  community! Check out the{' '}
                  <Link
                    to="https://github.com/bcdady/ride-more-org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <u>GitHub repository</u>
                  </Link>{' '}
                  to get started with pull requests and code contributions. Whether you want to fix
                  a typo, post your own blog entry, or add a new page for MORE in your local area,
                  your input helps make this resource better for everyone. You can also send your
                  ideas and feedback to{' '}
                  <Link to="mailto:more@ride-more.org">
                    <u>more@ride-more.org</u>
                  </Link>{' '}
                  (please specify "website issue" in the subject). Every suggestion, no matter how
                  small, helps improve the experience for all riders in our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
