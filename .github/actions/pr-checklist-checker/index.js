const core = require("@actions/core");
const github = require("@actions/github");

const checklistRegex = /(?:^|\n)\s*-\s+\[ \] /g;

async function run() {
  core.info("PR checklist checker action has started");
  try {
    const prBody = github.context.payload.pull_request.body;
    core.debug("Pull request body content:", prBody);

    if (checklistRegex.test(prBody)) {
      core.setFailed("Not all checklist items have been completed");
    }
  } catch (error) {
    core.setFailed(error.message);
  }
  core.info("PR checklist checker action has finished");
}

run();
