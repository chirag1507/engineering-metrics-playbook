import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Project Flow Metrics",
    description: (
      <>
        Understand how work moves through your system from idea to delivery. Key metrics include Lead Time and Cycle
        Time.
      </>
    ),
    link: "/docs/project-flow-metrics",
  },
  {
    title: "Code Delivery Metrics",
    description: <>Assess the speed and efficiency of the code creation, review, and integration pipeline.</>,
    link: "/docs/code-delivery-metrics",
  },
  {
    title: "Code Quality Metrics",
    description: (
      <>
        Measure the quality of your codebase and the effectiveness of your development process. Track Change Failure
        Rate and MTTR.
      </>
    ),
    link: "/docs/code-quality-metrics",
  },
  {
    title: "Team Health Metrics",
    description: (
      <>
        Gauge the well-being and productivity of your engineering team with metrics like Developer Satisfaction and PR
        size.
      </>
    ),
    link: "/docs/team-health-metrics",
  },
  {
    title: "Product Impact Metrics",
    description: <>Understand how the product is used, perceived, and valued by your customers.</>,
    link: "/docs/product-impact-metrics",
  },
];

function Feature({ title, description, link }: FeatureItem) {
  return (
    <div className="col col--4" style={{ marginBottom: "2rem" }}>
      <div className="card">
        <div className="card__header">
          <Heading as="h3">{title}</Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link className="button button--secondary button--block" to={link}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
