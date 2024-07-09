import kinetixService from "../services/kinetix.js";
import dynamoService from "../services/dynamo.js";

class ProcessHelper {
  async generateErrorMessage(process) {
    const errorMap = {
      5: "Too much characters detected in the video",
      6: "No character detected in the video",
      7: "Character too small in the video",
    };
    return errorMap[process?.mlReturnCode] || null;
  }

  async enrichProcess(process) {
    let ml;
    let thumbnailUrl;
    const errorMessage = await this.generateErrorMessage(process);

    if (process.video && process.step !== "transcode_failed") {
      const asset = await kinetixService.getAsset(process.video);
      thumbnailUrl = asset?.data?.files?.find(
        (f) => f.name === "thumbnail",
      )?.url;
    }

    return {
      ...process,
      ...(ml && { ml }),
      ...(errorMessage && { errorMessage }),
      ...(thumbnailUrl && { thumbnailUrl }),
    };
  }

  async buildHierarchy(process, enrich = true) {
    // Allow to see the hierarchy / history of the process validation
    // Code looks dirty because I play with references to build the object

    // Iterates over process.parent to find all the parents until root and count it
    let hierarchy = {
      parent: {},
      parents: 0,
      child: {},
      children: 0,
    };
    let parent = hierarchy.parent;
    let currentParent = process;
    while (currentParent.parent) {
      currentParent = await dynamoService.getProcess(currentParent.parent);
      hierarchy.parents += 1;
      parent.uuid = currentParent.uuid;
      parent.parent = currentParent.parent ? {} : undefined;
      parent = parent.parent;
    }

    // Iterate over child processes where parent is process.uuid to find all the children until lastChild and count
    let currentChild = (await dynamoService.getProcessChild(process.uuid))[0];
    let child = hierarchy.child;
    while (currentChild) {
      hierarchy.children += 1;
      child.uuid = currentChild.uuid;
      currentChild = (
        await dynamoService.getProcessChild(currentChild.uuid)
      )[0];
      child.child = currentChild ? {} : undefined;
      child = child.child;
    }

    let richProcess = process;
    if (enrich) {
      richProcess = await this.enrichProcess(process);
      richProcess.hierarchy = hierarchy;
      return richProcess;
    }
    richProcess.hierarchy = hierarchy;
    return richProcess;
  }
}

const service = new ProcessHelper();
export default service;
