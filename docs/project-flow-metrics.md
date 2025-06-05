---
sidebar_label: "Project Flow Metrics"
---

# Project Flow Metrics

Project Flow Metrics provide insights into the efficiency, predictability, and health of the development team's workflow within defined iteration cycles (like Sprints). These metrics help Avesta Technologies and its clients understand how work moves through the system, identify potential bottlenecks, and assess the effectiveness of planning and execution.

## 1. Deployment Frequency

- **Definition:** Deployment Frequency measures how often code is successfully deployed to production (or a production-like environment).
  _Source Reference: A key DORA metric, indicative of delivery performance._

- **Why it Matters:**

  - **Faster Value Delivery:** More frequent deployments mean new features and bug fixes reach users sooner, allowing you to realize value more quickly.
  - **Reduced Risk:** Deploying smaller changes more frequently is generally less risky than large, infrequent deployments. If issues arise, they are often easier to identify and resolve.
  - **Increased Responsiveness:** Enables quicker responses to user feedback and market changes.
  - **Validates Delivery Pipeline:** A high deployment frequency is a sign of a healthy, automated, and reliable CI/CD pipeline.

- **How to Measure It:**

  - Count the number of successful deployments to production over a specific period (e.g., per day, per week, per sprint).
  - Units: Deployments per day/week/month.
  - Tools: CI/CD pipeline logs (e.g., Jenkins, GitLab CI, GitHub Actions, Azure Pipelines), release management tools.

- **EXAMPLE:**
  If the team deploys to production on Monday, Wednesday, and Friday in a given week, then the Deployment Frequency is 3 deployments per week.

- **XP/CD Alignment:**

  - **Continuous Delivery/Deployment:** The ultimate goal of CD is to be able to deploy on demand, leading to high deployment frequency.
  - **Small Releases (XP):** XP promotes releasing small increments frequently.
  - **Short Feedback Loops (XP):** Frequent deployments allow for more rapid feedback cycles with users.

- **Maturity Considerations:**

  - **Foundational:** Start by tracking the current frequency. Even if it's low (e.g., monthly or bi-weekly), establishing a baseline is important. Identify manual steps or major hurdles preventing more frequent deployments.
  - **Growth:** Aim to increase frequency (e.g., to weekly, then daily, or multiple times a day for some services). Focus on automating the deployment pipeline and improving test automation to build confidence.
  - **Optimization:** Strive for on-demand deployments or multiple deployments per day. At this stage, the deployment process should be a non-event, fully automated, and highly reliable. Elite teams often deploy multiple times per day.

---

## 2. Throughput

- **Definition:** Throughput measures the number of completed work items (e.g., user stories, tasks, bug fixes) delivered in a given time period.
  _Note: It's important to define what constitutes a "work item" and "completed" consistently. Sizing of work items can also affect throughput interpretation._

- **Why it Matters:**

  - **Delivery Cadence:** Provides an understanding of the team's capacity to deliver value over time.
  - **Predictability & Forecasting:** Historical throughput data (especially when item sizes are relatively consistent) can be used for future projections (e.g., how many items can be completed in an upcoming iteration or release).
  - **Impact of Process Changes:** Can help assess whether process improvements are leading to an increase in the amount of value delivered.
  - **Team Capacity Insight:** Helps you understand the volume of work the team can sustainably handle.

- **How to Measure It:**

  - Count the number of work items moved to a "completed" or "done" state (e.g., deployed, released, accepted by Product Owner) within a specific timeframe (e.g., per week, per sprint/iteration).
  - Units: Work items per week/sprint.
  - Tools: Agile project management tools (Jira, Trello, Azure DevOps Boards) are commonly used to track work item status and completion.

- **EXAMPLE:**
  If a team completes 5 user stories and 3 bug fixes in a one-week sprint, their Throughput for that sprint is 8 work items.

- **XP/CD Alignment:**

  - **Working Software (XP):** Throughput focuses on the delivery of completed, valuable software increments.
  - **Sustainable Pace (XP):** Tracking throughput helps in understanding and maintaining a sustainable pace. A sudden, unsustainable spike or a consistent drop might indicate issues.
  - **Iteration Planning (XP):** Past throughput (often referred to as velocity in some XP contexts, though velocity often involves story points) is a key input for planning how much work to take into an iteration.

- **Maturity Considerations:**

  - **Foundational:** Define "work item" and "done" clearly. Start tracking throughput per iteration or week. Focus on consistency rather than just raw numbers.
  - **Growth:** Analyze trends in throughput. Look for ways to improve flow and reduce blockers to increase sustainable throughput. Consider the impact of work item size variability.
  - **Optimization:** Use throughput data for more reliable forecasting. Combine with cycle time data to understand flow efficiency. Aim for a predictable and high rate of value delivery. Be cautious about comparing throughput between different teams or when work item types/sizes change significantly.

---

## 3. Planned Tickets %

- **Definition:** Planned Tickets % measures the fraction of tickets that were worked on by the team that were planned before the sprint or iteration started. This indicates disciplined planning and helps identify planned work versus unexpected additions. It typically excludes tickets carried over or added ad-hoc after the sprint kickoff.
- **EXAMPLE:**
  If a sprint has 50 tickets and 40 of those were planned in advance (with the remaining 10 being either carried over or added adhoc mid-sprint), then Planned Tickets % = (40/50) \* 100 = 80%.
- **Why it Matters:**
  - **Predictability:** A high percentage of planned tickets suggests the team can reliably plan and commit to a scope of work, improving predictability.
  - **Scope Stability:** Indicates how well the sprint scope is protected from unplanned disruptions, allowing the team to focus.
  - **Planning Effectiveness:** Reflects the ability to anticipate work and capacity during sprint planning.
- **How to Measure It:**
  - Calculation: `(Number of Planned Tickets Completed or In Progress / Total Number of Tickets Worked On in Sprint) * 100%`.
  - "Planned tickets" are those identified and committed to during sprint planning. "Total tickets worked on" includes planned, carry-over, and ad-hoc tickets addressed during the sprint.
  - Units: Percentage (%).
  - Tools: Agile project management tools (Jira, Trello, Azure DevOps Boards) where sprint commitments are tracked.
- **XP/CD Alignment:**
  - While XP focuses on continuous flow and adaptable planning (like Yesterday's Weather for iteration planning), this metric can be relevant if fixed iterations are used. High rates of unplanned work can disrupt flow and sustainable pace.
  - CD practices benefit from stable, predictable work streams, which good planning supports.
- **Maturity Considerations:**
  - **Foundational:** Start tracking to understand the ratio of planned vs. unplanned work. Identify reasons for significant unplanned work.
  - **Growth:** Aim for a higher, more consistent Planned Tickets %. Improve planning processes and address sources of ad-hoc work.
  - **Optimization:** Maintain a high percentage, allowing for some flexibility. Use data to refine planning accuracy and team capacity understanding.

---

## 4. Previous Tickets % (Carryover)

- **Definition:** Previous Tickets % (or Carryover %) indicates the proportion of tickets that were not completed during their originally planned sprint and have been carried over into a subsequent sprint. It sheds light on backlog accumulation and potential challenges with planning or execution.
- **EXAMPLE:**
  If a sprint has 50 tickets and 10 tickets from a previous sprint continue into the current sprint, then Previous Tickets % = (10/50) \* 100 = 20%.
- **Why it Matters:**
  - **Delivery Predictability:** High carryover can make sprint outcomes less predictable, as unfinished work pushes out new planned features.
  - **Issue Identification:** Can highlight issues like overcommitment, unclear requirements, unresolved dependencies, or systemic underestimation.
  - **Team Morale:** Consistently high carryover can be demoralizing for the team.
- **How to Measure It:**
  - Calculation: `(Number of Carryover Tickets in Current Sprint / Total Number of Tickets in Current Sprint) * 100%`.
  - Units: Percentage (%).
  - Tools: Agile project management tools that track sprint commitments and ticket status across sprints.
- **XP/CD Alignment:**
  - XP emphasizes completing work within an iteration (if iterations are used) and maintaining a sustainable pace. High carryover can indicate issues with either.
  - Focus on finishing work ("Stop Starting, Start Finishing") aligns with reducing carryover.
- **Maturity Considerations:**
  - **Foundational:** Track carryover to understand its current level. Discuss reasons for carryover in retrospectives.
  - **Growth:** Actively work to reduce carryover by improving estimation, breaking down stories into smaller tasks, and addressing impediments promptly.
  - **Optimization:** Aim for minimal carryover. Use historical data to inform realistic sprint commitments. Ensure "Definition of Done" is clear to prevent partially completed work from being considered "almost done."

---

## 5. Adhoc Tickets %

- **Definition:** Adhoc Tickets % quantifies tasks that were not initially planned in the sprint backlog but were added and worked on during the sprint. These tasks—such as urgent bug fixes, unexpected support requests, or sudden requirement changes—reflect deviations from the original plan and can affect sprint predictability.
- **EXAMPLE:**
  During a sprint with 60 tickets, if 6 tickets are added after the sprint begins because of emerging issues, then Adhoc Tickets % = (6/60) \* 100 = 10%.
- **Why it Matters:**
  - **Sprint Goal Impact:** High levels of adhoc work can jeopardize sprint goals and delay planned feature delivery.
  - **Team Focus & Productivity:** Frequent adhoc requests can lead to context switching and reduced overall productivity.
  - **Process Improvement Insight:** Analyzing the nature of adhoc tickets can reveal areas for process improvement (e.g., better bug prevention, clearer initial requirements).
- **How to Measure It:**
  - Calculation: `(Number of Adhoc Tickets Added and Worked On During Sprint / Total Number of Tickets Worked On in Sprint) * 100%`.
  - Adhoc tickets are those not included in the initial sprint plan.
  - Units: Percentage (%).
  - Tools: Agile project management tools, by tracking tickets added to a sprint after its commencement.
- **XP/CD Alignment:**
  - XP values responding to change, but unplanned work should ideally be managed by re-prioritizing the backlog for the next iteration/flow of work, rather than constant disruption. If iterations are used, the iteration backlog should be somewhat stable.
  - High adhoc work can impact sustainable pace and flow.
- **Maturity Considerations:**
  - **Foundational:** Track the percentage of adhoc tickets to understand their frequency and impact.
  - **Growth:** Analyze the sources of adhoc work. Implement strategies to reduce unexpected tasks, such as dedicating capacity for urgent issues or improving upstream quality.
  - **Optimization:** Maintain a low and manageable level of adhoc work. Have clear processes for triaging and incorporating urgent unplanned tasks without derailing committed work.

---

## 6. Adhoc Enhancements %

- **Definition:** Adhoc Enhancements % specifically measures unscheduled improvements or feature upgrades implemented during the sprint. It highlights instances where creative or functional enhancements are introduced outside of the planned scope. Adhoc enhancements are a part of Adhoc tickets.
- **EXAMPLE:**
  If there's 50 tasks in the sprint, of which 40 are planned, and 10 are adhoc with a breakdown of 6 bugs and 4 enhancements, then the adhoc enhancement percentage is 4/50 = 8%. This percentage is ultimately presented relative to the whole number of tickets in the sprints.
- **Why it Matters:**
  - **Scope Creep:** Unplanned enhancements can lead to scope creep, potentially delaying committed features.
  - **Opportunity vs. Distraction:** While some adhoc enhancements can be valuable opportunities, frequent unplanned ones can distract from strategic goals.
  - **Resource Allocation:** Helps understand how much effort is diverted to unplanned improvements.
- **How to Measure It:**
  - Calculation: `(Number of Adhoc Enhancement Tickets / Total Number of Tickets Worked On in Sprint) * 100%`.
  - Alternatively, as a percentage of all Adhoc Tickets: `(Number of Adhoc Enhancement Tickets / Total Number of Adhoc Tickets) * 100%`.
  - Requires classifying adhoc tickets by type (bug, enhancement, task).
  - Units: Percentage (%).
  - Tools: Agile project management tools with ticket typing/labeling.
- **XP/CD Alignment:**
  - Responding to customer feedback and incorporating valuable changes is key in XP. However, this should ideally be a planned part of the iterative cycle, not constant, disruptive adhoc additions to an in-progress iteration.
  - Small, valuable enhancements might be good, but a high volume indicates planning or prioritization issues.
- **Maturity Considerations:**
  - **Foundational:** Start by categorizing adhoc work to identify enhancements. Understand the current rate.
  - **Growth:** Evaluate the value and urgency of adhoc enhancements. Implement a process for assessing and prioritizing them against planned work.
  - **Optimization:** Manage adhoc enhancements strategically. Ensure they align with product goals and don't consistently derail planned commitments. Foster an environment where good ideas can be captured and planned for future iterations.

---

## 7. Adhoc Bugs %

- **Definition:** Adhoc Bugs % tracks the proportion of unplanned bug fixes carried out during the sprint. It provides insight into quality issues that emerge unexpectedly and require immediate attention. Adhoc bugs are a part of Adhoc tickets.
- **EXAMPLE:**
  If there's 50 tasks in the sprint, of which 40 are planned, and 10 are adhoc with a breakdown of 6 bugs and 4 enhancements, then the adhoc bugs percentage is 6/50 = 12%. This percentage is ultimately presented relative to the whole number of tickets in the sprints.
- **Why it Matters for View:**
  - **Impact on Planned Work:** A high percentage of adhoc bugs diverts effort from planned features, affecting delivery timelines for View.
  - **Underlying Quality Issues:** Can indicate problems in testing, development practices, or technical debt that lead to frequent emergent bugs.
  - **User Impact:** Frequent urgent bugs can negatively affect the user experience.
- **How to Measure It:**
  - Calculation: `(Number of Adhoc Bug Tickets / Total Number of Tickets Worked On in Sprint) * 100%`.
  - Alternatively, as a percentage of all Adhoc Tickets: `(Number of Adhoc Bug Tickets / Total Number of Adhoc Tickets) * 100%`.
  - Requires classifying adhoc tickets by type.
  - Units: Percentage (%).
  - Tools: Agile project management tools with ticket typing/labeling.
- **XP/CD Alignment:**
  - XP emphasizes building quality in (e.g., via TDD, pair programming) to minimize bugs. A high Adhoc Bugs % signals that these practices may need strengthening.
  - Continuous Integration and automated testing aim to catch bugs before they disrupt planned work.
- **Maturity Considerations:**
  - **Foundational:** Track adhoc bugs to understand their volume and severity.
  - **Growth:** Investigate root causes of recurring adhoc bugs. Improve testing practices and address technical debt to reduce their occurrence.
  - **Optimization:** Aim for a very low percentage of adhoc bugs. Focus on proactive bug prevention and robust automated testing.

---

## 8. Completed Tickets %

- **Definition:** Completed Tickets % represents the percentage of all tickets (planned, carryover, and adhoc) that were actually completed by the end of the sprint. It is an indicator of overall sprint productivity and task closure.
- **EXAMPLE:**
  If a sprint has 60 tickets and 55 are completed by the end, then Completed Tickets % = (55/60) \* 100 = 90%.
- **Why it Matters for View:**
  - **Delivery Achievement:** Directly shows how much of the undertaken work was successfully delivered, impacting View's expectations.
  - **Team Performance:** Reflects the team's ability to finish what they start within an iteration.
  - **Predictability:** Consistent completion rates contribute to more predictable delivery.
- **How to Measure It:**
  - Calculation: `(Number of Tickets Completed in Sprint / Total Number of Tickets Worked On in Sprint) * 100%`.
  - "Completed" must align with the team's Definition of Done.
  - Units: Percentage (%).
  - Tools: Agile project management tools.
- **XP/CD Alignment:**
  - XP values "Working Software" and completing stories. This metric aligns well with the goal of finishing work.
  - Sustainable pace is supported by consistently completing a manageable amount of work.
- **Maturity Considerations:**
  - **Foundational:** Track completion rates to understand current performance. Ensure a clear Definition of Done.
  - **Growth:** Aim for high and consistent completion rates. Analyze reasons for uncompleted tickets (e.g., overcommitment, impediments, scope changes).
  - **Optimization:** Maintain very high completion rates. Use this metric in conjunction with Sprint Adherence and Throughput for a holistic view of delivery effectiveness.

---

## 9. Dropped Tickets %

- **Definition:** Dropped Tickets % tracks the tickets that were originally planned for the sprint but were not completed and not carried over into a subsequent sprint; instead, they were removed from the active sprint scope or de-prioritized mid-sprint. This helps gauge changes in priorities or scope adjustments during execution.
- **EXAMPLE:**
  If 5 out of 50 planned tickets are dropped, then Dropped Tickets % = (5/50) \* 100 = 10%.
- **Why it Matters for View:**
  - **Priority Volatility:** High dropped rates might indicate unstable priorities or frequent changes in direction, impacting View's planning.
  - **Wasted Effort:** Work started on dropped tickets might represent wasted effort if not properly managed.
  - **Planning Insight:** Can highlight issues with initial planning or understanding of requirements if tickets are frequently deemed irrelevant mid-sprint.
- **How to Measure It:**
  - Calculation: `(Number of Planned Tickets Dropped During Sprint / Total Number of Tickets Planned for Sprint) * 100%`.
  - "Dropped" means removed from the sprint without completion and not marked as carryover.
  - Units: Percentage (%).
  - Tools: Agile project management tools, requiring clear status for dropped/de-scoped items.
- **XP/CD Alignment:**
  - XP iterations ideally have a stable goal. Frequent dropping of planned work can be disruptive. However, XP also values responding to change; if a ticket is genuinely no longer valuable, dropping it might be the right decision, but this should be transparent.
- **Maturity Considerations:**
  - **Foundational:** Track if tickets are being dropped and why. Understand the impact on sprint goals.
  - **Growth:** Aim to minimize dropped tickets by improving upfront requirement clarity and prioritization. Have a clear process for handling scope changes.
  - **Optimization:** Dropped tickets should be rare and occur only for significant, well-understood reasons. Focus on stable sprint goals and robust backlog refinement.

---

## 10. Spillover Tickets %

- **Definition:** Spillover Tickets % denotes the fraction of tickets that were not completed in the current sprint and are carried over to the next. It highlights potential issues in workload estimation or execution delays. This is essentially the same as "Previous Tickets %" or "Carryover %" but viewed from the perspective of the sprint _producing_ the spillover, rather than the sprint _receiving_ it.
- **EXAMPLE:**
  If 8 out of 50 planned tickets are left unfinished and carried over, then Spillover Tickets % = (8/50) \* 100 = 16%.
- **Why it Matters for View:**
  - **Predictability:** High spillover affects the predictability of when View can expect features, as it impacts the capacity for the next sprint.
  - **Planning Accuracy:** Consistent spillover suggests issues with estimation, capacity planning, or unforeseen impediments.
  - **Team Overcommitment:** Can be a sign that the team is taking on too much work.
- **How to Measure It:**
  - Calculation: `(Number of Tickets Not Completed and Carried Over from Current Sprint / Total Number of Tickets Committed to in Current Sprint) * 100%`.
  - Units: Percentage (%).
  - Tools: Agile project management tools.
- **XP/CD Alignment:**
  - XP's "Yesterday's Weather" for iteration planning aims to take on a realistic amount of work to minimize spillover.
  - Focus on completing work and maintaining a sustainable pace helps reduce spillover.
- **Maturity Considerations:**
  - **Foundational:** Track spillover to understand its magnitude. Discuss causes in retrospectives.
  - **Growth:** Focus on reducing spillover by improving estimation, task breakdown, and proactive impediment removal.
  - **Optimization:** Aim for minimal and predictable spillover. The team should have a good sense of its capacity.

---

## 11. Sprint Adherence %

- **Definition:** Sprint Adherence % reflects how closely the team's completed work aligns with what was originally planned and committed to at the start of the sprint. High adherence suggests stable planning and execution, whereas low adherence may indicate frequent scope changes or estimation issues.
  The specific formula is often `Completed Planned Tickets / (Completed Planned Tickets + Spillover of Planned Tickets + Dropped Planned Tickets + Adhoc Tickets affecting planned work)`. It primarily focuses on the execution of the _initial_ commitment.
- **EXAMPLE:**
  If a sprint has 50 tickets, 40 are completed, 5 spillover, and 5 are dropped, then Sprint Adherence % = 40 / (40 + 5 + 5) = 80%.
- **Why it Matters for View:**
  - **Reliability:** High adherence builds confidence for View that the team delivers on its commitments.
  - **Predictable Delivery:** Essential for forecasting and roadmap planning.
  - **Planning Effectiveness:** Validates the team's ability to plan and execute effectively.
- **How to Measure It:**
  - Calculation: `(Number of Planned Tickets Completed / Total Number of Tickets Originally Planned and Committed To) * 100%`.
  - This definition focuses strictly on the original commitment. Some teams might use more complex formulas to account for the impact of high-priority adhoc work on planned items.
  - Units: Percentage (%).
  - Tools: Agile project management tools.
- **XP/CD Alignment:**
  - If iterations are used in XP, committing to a realistic scope and delivering it aligns with Sprint Adherence. "Yesterday's Weather" helps in making realistic commitments.
  - The goal is predictable delivery of value.
- **Maturity Considerations:**
  - **Foundational:** Track adherence to the initial sprint plan. Understand deviations.
  - **Growth:** Improve adherence by refining planning, estimation, and managing scope changes effectively. Address causes for deviation.
  - **Optimization:** Maintain high and consistent sprint adherence. The team reliably delivers what it commits to, fostering trust and predictability.

---

_(This completes the Project Flow & Delivery Efficiency Metrics section. The next section will cover Code Delivery Metrics.)_
