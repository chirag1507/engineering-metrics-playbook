---
sidebar_label: "Metrics Categorization"
---

# Metrics Categorization

To effectively leverage engineering metrics, it's crucial to understand their varying levels of granularity and the primary areas or teams that influence them. For Avesta Technologies and its clients, we propose a categorization that distinguishes between day-to-day operational insights and broader strategic outcomes. This approach helps in selecting the right metrics for the right audience and purpose, and clarifies how different roles (Engineering, Product Management) contribute to and benefit from them.

## I. Tactical Metrics: Optimizing Internal Workflows & Team Effectiveness

**Focus:** These metrics provide insights into the day-to-day operations of the engineering teams and the efficiency of their immediate development processes. They are typically more granular and directly influenced by team practices, engineering discipline, and local workflow management. These are often considered lower-level metrics that teams can monitor and act upon frequently.

1.  **Sprint & Iteration Flow (Engineering Team Operations):**

    - **Purpose:** To understand the predictability, efficiency, and management of work within sprint or iteration cycles.
    - **Influenced by:** Engineering team's planning, execution, and impediment management.
    - _Metrics in this category are detailed in the "Project Flow Metrics" section and include:_
      - Deployment Frequency
      - Throughput
      - Planned Tickets %
      - Previous Tickets % (Carryover)
      - Adhoc Tickets % (including Adhoc Enhancements % and Adhoc Bugs %)
      - Completed Tickets %
      - Dropped Tickets %
      - Spillover Tickets %
      - Sprint Adherence %

2.  **Code Development & PR Pipeline (Engineering Process Efficiency):**

    - **Purpose:** To assess the speed and efficiency of the code creation, review, and integration pipeline before deployment.
    - **Influenced by:** Engineering team practices, review culture, and CI processes.
    - _Metrics in this category are detailed in the "Code Delivery Metrics" section and include:_
      - First Response Time
      - First Commit To Open
      - Rework Time
      - Merge Time

3.  **Internal Quality Signals (Engineering Pre-Release Focus):**

    - **Purpose:** To gauge the thoroughness of testing and adherence to quality practices during development.
    - **Influenced by:** Engineering team's testing discipline and development practices.
    - _Metrics in this category are detailed in the "Code Quality Metrics" section and include:_
      - Code Coverage

4.  **Team Health & Collaboration (Engineering Environment):**
    - **Purpose:** To understand the well-being, engagement, and collaborative effectiveness of the engineering team.
    - **Influenced by:** Team leadership, culture, and interpersonal dynamics.
    - _Metrics in this category are detailed in the "Team Health Metrics" section and include:_
      - Developer Satisfaction & Team Morale
      - Pull Request (PR) Interaction Times (also an efficiency indicator)
      - Knowledge Silo Indicators

## II. Strategic Metrics: Measuring End-to-End Value Delivery & Product Success

**Focus:** These metrics offer a higher-level view of the engineering organization's ability to deliver value to its users and the business, and the overall health and impact of the product. They are influenced by broader strategies encompassing engineering, product management, and overall business goals. These are often considered higher-level metrics that indicate overall system performance and strategic alignment.

1.  **Overall Delivery Performance (DORA & Related):**

    - **Purpose:** To measure the organization's holistic capability to deliver software quickly and reliably. These are key indicators of high-performing technology organizations.
    - **Influenced by:** Overall engineering systems, processes, automation, and collaboration between Engineering and Product.
    - _Metrics in this category are detailed in the "Code Delivery Metrics" and "Code Quality Metrics" sections and include:_
      - Lead Time for Changes (DORA)
      - Cycle Time (End-to-end for features/initiatives)
      - Deployment Frequency (DORA - also listed as a tactical metric due to its dual nature)
      - Change Failure Rate (CFR) (DORA)
      - Mean Time to Recovery (MTTR) (DORA)
      - Merge To Deploy

2.  **Product Value & User Impact (Product Management & Business Focus):**

    - **Purpose:** To understand how the product is used, perceived, and valued by the client's customers.
    - **Influenced by:** Product Management strategy, feature prioritization, UX design, and market fit, with Engineering enabling measurement and delivery.
    - _Metrics in this category are detailed in the "Product Impact Metrics" section and include:_
      - Feature Usage Rate
      - User Adoption Rate
      - Customer Satisfaction (CSAT) & Net Promoter Score (NPS)
      - Task Completion Rate (TCR)

3.  **Production System Quality & Reliability (Overall Stability Focus):**
    - **Purpose:** To assess the quality and stability of the product as experienced by users in the production environment.
    - **Influenced by:** Overall engineering quality practices, testing effectiveness, and operational stability.
    - _Metrics in this category are detailed in the "Code Quality Metrics" section and include:_
      - Defect Escape Rate (Post-release)

This categorization aims to provide a clearer lens for Avesta Technologies and its clients to discuss, prioritize, and act upon metrics, aligning them with both operational excellence and strategic business objectives.
