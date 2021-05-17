# Devolution Oy development guideline

## Project Master
Project master is responsible for the project. Project master defines tasks, maintains documentation and ensure that the project follows the Devolution's development process.

## Contributor
A contributor is a developer, ux-designer, test-automation engineer, or anything
that produces code into the repository. The contributor is not responsible to contribute to the project. However, all the code he procudes for the repository is owned by Devolution Oy.

## Payments
All payments are based on tasks unless differently agreed on issue.

## Issues (Tasks)
All work are based on implementation issues described on the project's github repository.
The implentation details are specified on design issues or in the implementation issue itself.
Implementation details are not discusses on any other forum than github issues. Implementation ready issues are labeled with 'ready' label. If the contributor notices, that the issue can't be done yet, he shouold open a new dependent task and link it to the issue. Project Master will then check the dependency.

### Design issue
Design issue is a parent level issue, which describe a part of the software.
Design issue could be a View that end user can see, an important class or a user story.
The child issues implements the design issue. The design issue is closed only, if the
feature is removed. The child issue of the design issue is labeled as 'dev', 'ux', 'test-automation' or 'question'.

### Dev issue
Dev issues are a programming tasks that implements the design issues. To close a dev issue, half an hour work is the target. When contributor submit an increment, which closes the issue, he gets paid. Contributor should do as small increments as possible but large enough that advances the task.

### UX issue
UX issues are user interface design tasks. If the UX issue is not code related (css editing), it
may be paid per hours spent. In that case, the issue comment should say so. Contributor may request an hour based payment on issue but project master can deny.

### test-automation issue
Test automation issues are similar to dev issues but deals with test automation. Test automation issues may also cover project infrastructure related tasks.

Infrastructure related tasks may be paid per hours spent. In that case, the issue comment should say so. Contributor may request an hour based payment on issue but project master can deny.

## Questions issues
If something related to the project is not clear, a question issue can be opened. If the question is not answered on normal documentations, project master adds documentation or clarifies the documentation. The question opener gets paid the normal issue price. If the answer to the question is easily available, project master points out the document (issue or project document page). In that case, the question price is not paid.

Question issues may also recommend better architecture, implementation detail or tool sets. However, Project Master decides, if the recommendation is used or not. Project Master is resposible to give reasons for the decision.

### Project-init issues
Project init issues are project setup issues, which are done at the project initialization phase These issues cover setting up the repository and github apps, creating CI/CD pipeline and enabling the normal Devolution process. The project-init issues may be part of project initialization package, which does not follow the normal development process.

## Contribution
A minumal increment contains
1. Unit test
  - Unit test describe what the feature does
  - If unittest is difficult to do, test does need to actually test anything
  - One increment can contain only one unittest. Increments must be small
2. Code that passes the test
3. (TODO flags for next steps towards the design issue goal)

For example Design issue describes a feature where UI view contains a button. Clicking
the button executes a task X. The task X could be for example sending an email to some email address. Developer can start implementing it by following process
1. Create a branch
2. Write a unit test, which test that the view contains a button
3. Write a code that adds the button to the view.
4. Commit changes (linters are run automatically)
5. Add TODO flag for executing the task X on the button click handler
6. Open a pull request
7. (Fix merge review issues)

Once the task is merged, new issues are generated from TODO flags. The developer may now choose any task with issue labeled as 'ready'.

## All contributions should pass unit tests and linters
Linter rules are defined in .eslintrc files on applied folders

## Merge review guide
Reviewer should check if the pull-request
1. Advances the linked issue
2. Contains unit test
3. Contains code that pass the unit test
4. Scan through the changes, if the code is readable and understanble.
5. Reuses existing components or styles, if possible.
6. The code is splitted into small and testable units.
