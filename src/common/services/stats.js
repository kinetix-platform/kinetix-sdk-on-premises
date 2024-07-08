import moment from "moment";
import momentDurationFormat from 'moment-duration-format';

momentDurationFormat(moment);

const generateErrorMessage = (p) => {
  if (p?.mlReturnCode === 0) {
    return 'success'
  } else if (p?.mlReturnCode === 5) {
    return 'tooMuchCharactersError'
  } else if (p?.mlReturnCode === 6) {
    return 'noCharactersError'
  } else if (p?.mlReturnCode === 7) {
    return 'charactersTooSmallError'
  } else if (p.mlReturnCode) {
    return 'otherMlError'
  } else {
    if (p.step === 'transcode_failed') {
      return 'transcoderError'
    } else if (p.step === 'render_failed') {
      return 'renderError'
    } else if (p.step === 'association_failed') {
      return 'associationError'
    } else if (p.step === 'ml_request_failed') {
      return 'mlRequestError'
    }

    return 'unknownError'
  }
}


export const median = (values) => {
  values.sort((a,b) => a-b)
  
  const half = Math.floor(values.length / 2);
  
  return values.length % 2 ? values[half] : (values[half - 1] + values[half]) / 2.0
}

export const format = (ms) => moment.duration(ms, "milliseconds").format("h [hrs], m [min], s [sec]");

export const processesStats = (totalProcesses) => {
  const success = totalProcesses
    .filter(p => [0, 5, 6, 7].includes(p.mlReturnCode))
  
  const failed = totalProcesses
    .filter(p => ![0, 5, 6, 7].includes(p.mlReturnCode))

  const ventillProcessStats = totalProcesses.reduce((acc, cur) => {
    const codeStr = generateErrorMessage(cur);
    if (codeStr) {
      acc[codeStr] = (acc[codeStr] || 0) + 1;
    }

    return acc;
  }, {});
  
  const totalDiffArray = success.map((cur) => (cur.mlEndedAt - cur.createdAt));
  const totalSum = success.reduce((acc, cur) => (cur.mlEndedAt - cur.createdAt) + acc, 0);
  const totalMin = Math.min(...totalDiffArray);
  const totalMax = Math.max(...totalDiffArray);
  const totalAvg = (totalSum / success.length) || 0;
  const totalMedian = median(totalDiffArray)
  
  const spawnDiffArray = success.map((cur) => (cur.mlStartedAt - cur.createdAt));
  const spawnSum = success.reduce((acc, cur) => (cur.mlStartedAt - cur.createdAt) + acc, 0);
  const spawnAverage = (spawnSum / success.length) || 0;
  const spawnMin = Math.min(...spawnDiffArray);
  const spawnMax = Math.max(...spawnDiffArray);
  const spawnMedian = median(spawnDiffArray)
  
  const processingDiffArray = success.map((cur) => (cur.mlEndedAt - cur.mlStartedAt));
  const processingSum = success.reduce((acc, cur) => (cur.mlEndedAt - cur.mlStartedAt) + acc, 0);
  const processingAverage = (processingSum / success.length) || 0;
  const processingMin = Math.min(...processingDiffArray);
  const processingMax = Math.max(...processingDiffArray);
  const processingMedian = median(processingDiffArray)
  
  return {
    total: totalProcesses.length,
    success: success.length,
    failed: failed.length,
    successRate: totalProcesses.length ? success.length / totalProcesses.length : null,
    ventillProcessStats,
    totalTime: {
      average: {
        ms: totalAvg,
        hr: format(totalAvg)
      },
      median: {
        ms: totalMedian,
        hr: format(totalMedian)
      },
      min: {
        ms: totalMin,
        hr: format(totalMin)
      },
      max: {
        ms: totalMax,
        hr: format(totalMax)
      }
    },
    spawnTime: {
      average: {
        ms: spawnAverage,
        hr: format(spawnAverage)
      },
      median: {
        ms: spawnMedian,
        hr: format(spawnMedian)
      },
      min: {
        ms: spawnMin,
        hr: format(spawnMin)
      },
      max: {
        ms: spawnMax,
        hr: format(spawnMax)
      }
    },
    processingTime: {
      average: {
        ms: processingAverage,
        hr: format(processingAverage)
      },
      median: {
        ms: processingMedian,
        hr: format(processingMedian)
      },
      min: {
        ms: processingMin,
        hr: format(processingMin)
      },
      max: {
        ms: processingMax,
        hr: format(processingMax)
      }
    }
  };
}