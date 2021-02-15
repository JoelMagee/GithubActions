const core = require("@actions/core");
const github = require("@actions/github");

const checklistRegex = /- \[ \] /g;

async function run() {
  try {
    const prBody = github.context.payload.pull_request.body;

    if (!checklistRegex.test(prBody)) {
      core.setFailed(error.message);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
