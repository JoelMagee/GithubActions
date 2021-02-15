const core = require("@actions/core");
const github = require("@actions/github");

const checklistRegex = /- \[ \] /g;

async function run() {
  core.info("PR checklist checker action run");
  try {
    const prBody = github.context.payload.pull_request.body;
    core.debug("Pull request body content:", prBody);

    if (checklistRegex.test(prBody)) {
      core.setFailed("There are some empty checklists");
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
