---
sidebar_label: "Code Delivery Metrics"
---

# Code Delivery Metrics

Code delivery metrics focus on the efficiency and speed of the development pipeline, specifically tracking the journey of code from its inception to deployment. These metrics are vital for understanding bottlenecks and optimizing the flow of value delivery through the PR and deployment processes.

## 1. Lead Time for Changes

- **Definition:** Lead Time for Changes measures the total time it takes for a committed code change to go from code committed (e.g., to the main branch or a feature branch intended for release) to successfully running in production.
  - _Source Reference: Often cited as a key DORA metric._
- **Why it Matters:**
  - **Speed to Market:** Directly reflects how quickly new features, improvements, and bug fixes can be delivered to users. A shorter lead time means you can adapt faster to market demands and user feedback.
  - **Predictability:** Consistent lead times allow for more reliable forecasting of when work will be completed and deployed.
  - **Efficiency Indicator:** Longer lead times can indicate bottlenecks in the development pipeline, such as slow testing phases, complex deployment processes, or delays in approvals.
- **How to Measure It:**
  - Typically measured by tracking the timestamp of a code commit (to the main development line or a release branch) and the timestamp of its successful deployment to production.
  - Calculation: `(Timestamp of Production Deployment) - (Timestamp of Code Commit)`.
  - Units: Usually measured in days or hours.
  - Tools: Version control systems (Git), CI/CD pipeline logs, and dedicated value stream management or engineering intelligence platforms.
- **XP/CD Alignment:**
  - **Continuous Delivery:** A core principle of CD is to have a short lead time. This metric is a direct measure of CD effectiveness.
  - **Small Releases (XP):** XP advocates for frequent, small releases, which naturally help reduce lead times.
  - **Short Feedback Loops (XP):** Faster delivery means quicker feedback from users and stakeholders.
- **Maturity Considerations:**
  - **Foundational:** Start tracking this immediately. Focus on understanding the current average lead time and its variability.
  - **Growth:** Actively work to reduce lead time by identifying and addressing the largest contributors to delay (e.g., automating testing, streamlining deployment).
  - **Optimization:** Aim for elite performance (e.g., lead times of less than a day, or even hours for some changes). Maintain low variability and continuously look for micro-optimizations.

---

## 2. Cycle Time

- **Definition:** Cycle Time measures the time it takes for a work item to progress from the moment work actively begins on it (e.g., "In Progress" status on a Kanban board) to the moment it is considered complete (e.g., deployed to production, or ready for deployment if that's the defined endpoint).
  _Note: It's crucial to define the start and end points for Cycle Time clearly and consistently within your team/organization._
- **Why it Matters:**
  - **Process Efficiency:** A direct indicator of how quickly the team can turn ideas or requirements into working software. Shorter cycle times mean a more efficient internal process.
  - **Feedback Loop Speed:** Faster cycle times for features or fixes mean quicker internal feedback (e.g., from QA or product owners) and, subsequently, faster delivery to users.
  - **Identifying Internal Bottlenecks:** Cycle time breakdowns (time spent in each stage of the workflow) can pinpoint specific areas within the active development process that are causing delays (e.g., long code review times, slow testing).
  - **Team Predictability:** Stable and short cycle times contribute to a more predictable delivery cadence.
- **How to Measure It:**
  - Typically measured by tracking the time a work item (task, user story, bug fix) spends in active development stages.
  - Calculation: `(Timestamp of Work Item Completion) - (Timestamp of Work Item Start)`.
  - Units: Usually measured in days or hours.
  - Tools: Agile project management tools (Jira, Trello, Azure DevOps Boards), Kanban boards, Value Stream Management platforms. It's important to have clearly defined workflow stages.
- **XP/CD Alignment:**
  - **Work in Small Batches (XP/CD):** Smaller work items tend to have shorter, more predictable cycle times.
  - **Continuous Flow (Kanban/XP):** Cycle time is a key metric in Kanban systems, often used in conjunction with XP, to optimize flow.
  - **Sustainable Pace (XP):** Understanding and managing cycle time helps ensure the team isn't overburdened and can maintain a consistent pace.
- **Maturity Considerations:**
  - **Foundational:** Define clear start/end points and begin tracking. Visualize cycle time (e.g., using a control chart) to understand distribution and identify outliers.
  - **Growth:** Focus on reducing average cycle time and its variability. Analyze stages contributing most to cycle time and implement improvements (e.g., better test automation, clearer requirements upfront, optimizing code review processes).
  - **Optimization:** Aim for consistently short cycle times. Use cycle time data to fine-tune workflow, manage Work In Progress (WIP) limits effectively, and achieve a highly predictable flow.

---

## 3. First Response Time

- **Definition:** This metric quantifies the time elapsed between a PR's creation and its first review comment or feedback. It is a key indicator of how responsive the team is to incoming changes. First Response Time is a form of wait time, where it's representative of how long someone waited before their PR was acted upon, either to review.
- **EXAMPLE:** If a PR is opened on Tuesday and receives its first review comment on Wednesday, the First Response Time is 1 day.
- **Why it Matters:**
  - **Developer Productivity:** Faster first responses reduce developer wait times and context switching, keeping momentum high.
  - **Collaboration Health:** Indicates active engagement and a healthy review culture within the team.
  - **Faster Feedback Loops:** Quicker feedback helps identify issues earlier in the development cycle.
- **How to Measure It:**
  - Calculation: `(Timestamp of First Review Comment) - (Timestamp of PR Creation)`.
  - Units: Hours or days.
  - Tools: Version control systems (GitHub, GitLab, Bitbucket) analytics features, or specialized engineering intelligence platforms.
- **XP/CD Alignment:**
  - **Communication & Feedback (XP):** Rapid responses to PRs embody these XP values.
  - **Continuous Integration (XP/CD):** While CI is automated, prompt human review is crucial for changes before merging to main.
- **Maturity Considerations:**
  - **Foundational:** Start tracking to understand baseline responsiveness. Encourage prompt acknowledgments or reviews.
  - **Growth:** Set team goals for First Response Time. Identify and address reasons for delays (e.g., reviewer availability, unclear PR descriptions).
  - **Optimization:** Maintain consistently low First Response Times. Foster a culture where PR reviews are a high priority.

---

## 4. First Commit To Open

- **Definition:** The First Commit To Open metric tracks the duration from the very first commit for a feature (on a local or feature branch) until a Pull Request (PR) is opened for that work. This shows how quickly development efforts transition into a formal review process.
- **EXAMPLE:** If work on a feature starts on Monday with the initial commit and a PR is opened on Wednesday, then First Commit To Open is 2 days.
- **Why it Matters:**
  - **Visibility into "Dark Work":** Highlights how long work progresses before it becomes visible to the wider team through a PR.
  - **Integration Frequency:** Shorter times encourage more frequent integration and feedback.
  - **Risk Management:** Long periods between first commit and PR opening can mean larger, riskier changes.
- **How to Measure It:**
  - Calculation: `(Timestamp of PR Creation) - (Timestamp of First Commit Related to the PR Work)`.
  - This requires linking commits to PRs, which is standard in most Git platforms.
  - Units: Days or hours.
  - Tools: Version control systems and engineering intelligence platforms.
- **XP/CD Alignment:**
  - **Continuous Integration (XP/CD):** Encourages frequent integration of small changes. Shorter First Commit to Open times align with this.
  - **Small Releases (XP):** Work should be broken down into small, manageable chunks that can be PR'd quickly.
- **Maturity Considerations:**
  - **Foundational:** Start tracking to understand how long work typically stays "local" before review.
  - **Growth:** Encourage developers to open PRs earlier, even if it's "work in progress" (WIP) PRs, to get early feedback.
  - **Optimization:** Aim for short First Commit To Open times, indicating small batch sizes and frequent integration.

---

## 5. Rework Time

- **Definition:** Rework Time tracks the time spent revising code after receiving review feedback on a PR, before the final approval and merge. It provides insight into the need for improvements or corrections based on review. Rework time starts when any non-approval comment or request for changes is left on the PR and ends when the subsequent commit addressing those comments is pushed.
- **EXAMPLE:** If a PR receives review feedback on Wednesday requiring changes, and the developer pushes the revised commits on Friday, the Rework Time for that cycle is 2 days.
- **Why it Matters:**
  - **Quality of Initial Submissions:** High rework time might indicate issues with initial code quality, unclear requirements, or insufficient self-review before PR submission.
  - **Efficiency of Review Process:** Can also reflect the clarity and actionability of review comments.
  - **Impact on Cycle Time:** Significant rework adds to the overall cycle time of delivering changes.
- **How to Measure It:**
  - Sum of durations between review feedback (requiring changes) and subsequent commits by the PR author addressing that feedback, until PR approval.
  - Units: Hours or days.
  - Tools: Version control systems (by analyzing PR comment and commit timestamps) and engineering intelligence platforms.
- **XP/CD Alignment:**
  - **Test-Driven Development (TDD) & Pair Programming (XP):** These practices aim to improve initial quality and reduce rework.
  - **Collective Code Ownership (XP):** Clear standards and shared understanding can reduce misunderstandings that lead to rework.
- **Maturity Considerations:**
  - **Foundational:** Track rework time to understand its general magnitude.
  - **Growth:** Analyze reasons for high rework. Focus on improving initial code quality, test coverage, and clarity of PR descriptions and review feedback.
  - **Optimization:** Aim to minimize rework time through strong initial quality, effective communication, and shared coding standards.

---

## 6. Merge Time

- **Definition:** Merge Time indicates the duration from when a PR receives final approval until it is actually merged into the target branch (e.g., main). It highlights the final steps and any delays in integrating approved changes. This may also happen if the merge will result in a CI pipeline being triggered, and the team only deploys at a fixed time. This is a form of wait time.
- **EXAMPLE:** If a PR is approved on Wednesday at 5 PM and merged on Friday at 10 AM, the Merge Time is approximately 1.5 business days (or actual elapsed time, depending on calculation preference).
- **Why it Matters:**
  - **Pipeline Efficiency:** Long merge times after approval can indicate bottlenecks in the final integration step or a slow CI/CD handoff.
  - **Delayed Value:** Approved code sitting unmerged means value is not yet integrated or progressing towards deployment.
  - **Stale Code Risk:** The longer approved code waits to be merged, the higher the risk of merge conflicts with other changes.
- **How to Measure It:**
  - Calculation: `(Timestamp of PR Merge) - (Timestamp of Last PR Approval)`.
  - Units: Hours or minutes.
  - Tools: Version control systems and engineering intelligence platforms.
- **XP/CD Alignment:**
  - **Continuous Integration (XP/CD):** Approved changes should be integrated (merged) quickly.
  - **Single Piece Flow (Lean principle often used with XP/CD):** Minimizing queues, including the "ready to merge" queue.
- **Maturity Considerations:**
  - **Foundational:** Track merge time to see if there are significant delays after approval.
  - **Growth:** Automate merge processes where possible (e.g., auto-merge on successful CI checks after approval). Streamline any manual final checks.
  - **Optimization:** Aim for near-zero merge times for approved PRs. Merging should be a quick, automated, or very low-friction step.

---

## 7. Merge To Deploy

- **Definition:** This metric measures the time taken from merging a PR into the main (or release) branch until its code is successfully deployed to production. It reflects the speed and efficiency of the deployment pipeline itself.
- **EXAMPLE:** If a PR is merged at 10:00 AM and the code is deployed to production by 4:00 PM the same day, then Merge To Deploy is 6 hours.
- **Why it Matters:**
  - **Deployment Pipeline Speed:** Directly measures the efficiency of the CI/CD pipeline post-merge.
  - **Release Cadence:** Shorter Merge to Deploy times enable more frequent and responsive releases to View.
  - **Feedback Loop to Production:** Faster deployment means quicker validation of changes in the live environment.
- **How to Measure It:**
  - Calculation: `(Timestamp of Production Deployment for the code in the PR) - (Timestamp of PR Merge)`.
  - Requires linking merged PRs to specific deployments.
  - Units: Hours or minutes.
  - Tools: CI/CD pipeline logs, release management tools, version control systems.
- **XP/CD Alignment:**
  - **Continuous Deployment (CD):** A core goal of CD is to make this time as short as possible, ideally automated and near-instantaneous.
  - **Automated Deployment Pipeline (CD):** This metric directly reflects the performance of this pipeline.
- **Maturity Considerations:**
  - **Foundational:** Track Merge to Deploy time to understand current deployment pipeline speed. Identify major manual steps or delays.
  - **Growth:** Focus on automating and optimizing the deployment pipeline to reduce this time (e.g., faster builds, automated tests, streamlined release processes).
  - **Optimization:** Strive for very short Merge to Deploy times, enabling on-demand releases or multiple deployments per day. The deployment process should be highly automated and reliable.

---

_(This completes the Code Delivery Metrics section. The next section will cover Code & System Quality Metrics.)_
