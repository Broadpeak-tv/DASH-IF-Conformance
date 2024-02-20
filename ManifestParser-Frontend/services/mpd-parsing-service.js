
const { wait } = Tools;

const NB_CYCLES = 50
const PROTO_FILE = './services/dash-mpd.proto'

const MpdParsingService = (function () {

  const modules = []

  let dashParser = null
  let MpdProtoMessage = null


  async function validateContentByUrl({ mpdUrl }) {
    // console.log("Parse mpd from url:", mpdUrl)
    const resp = await fetch(mpdUrl)
    const mpdText = await resp.text()
    doParse(mpdText)
  }

  async function validateContentByText({ mpdText }) {
    // mpdText = encodeURIComponent(mpdText);
    // console.log("Parse mpd from text:", mpdText)
    doParse(mpdText)
  }

  async function validateContentByFile({ mpdFile, activeModules }) {
    return new Promise((resolve, reject) => {
      // console.log("Parse mpd from file:", mpdFile)
      const reader = new FileReader()
  
      reader.onload = async function() {
        const mpdText = reader.result
        // console.log("Parse mpd from file:", mpdText)
  
        await doParse(mpdText)
        resolve()
      }
      reader.readAsText(mpdFile)    
    })
  }

  async function doParse(manifest) {

    // PATCH manifest
    manifest = manifest.replace(/segmentAlignment=\"0\"/gi, 'segmentAlignment=\"false\"')

    mpdXml = manifest
    
    dashParser = new DashParser()
    MpdProtoMessage = await loadProtoMessage(PROTO_FILE)

    const mpd = dashParser.parse(mpdXml)
    
    const mpdJsonFormatted = JSON.stringify(mpd, null, '  ')
    const mpdJson = JSON.stringify(mpd)
    
    const mpdProto = encodeProto(MpdProtoMessage, mpd)

    let duration
    log('Do parsing for ' + NB_CYCLES + ' cycles and get average computation time...')

    log('================================')
    log('XML size: ' + Intl.NumberFormat('fr-FR').format(mpdXml.length) + 'B')
    duration = loopParse(parseXmlDOM, mpdXml)
    log('XML parsing (dash.js - xml2json/DOMParser): ' + duration.toPrecision(3) + 'ms')
    duration = loopParse(parseXml, mpdXml)
    log('XML parsing (dash.js-v5 - tXml): ' + duration.toPrecision(3) + 'ms')

    await timeout(1000)

    log('================================')
    log('JSON size (formatted): ' + Intl.NumberFormat('fr-FR').format(mpdJsonFormatted.length) + 'B')
    log('JSON size: ' + Intl.NumberFormat('fr-FR').format(mpdJson.length) + 'B')
    duration = loopParse(parseJson, mpdJson)
    log('JSON parsing: ' + duration.toPrecision(3) + 'ms')

    await timeout(1000)

    log('================================')
    log('Protobuf size: ' + Intl.NumberFormat('fr-FR').format(mpdProto.length) + 'B')
    duration = loopParse(parseProto, MpdProtoMessage, mpdProto)
    log('Protobuf parsing: ' + duration.toPrecision(3) + 'ms')

  }

  function loopParse(parseFn, ...args) {
    const arr = []
    let startTime, endTime
    for (let i = 0; i < NB_CYCLES; i++) {
      startTime = window.performance.now()
      parseFn(...args)
      endTime = window.performance.now()
      arr.push(endTime - startTime)
    }
    const average = arr.reduce((a, b) => a + b, 0) / arr.length
    return  average
  }

  function parseXmlDOM(manifest) {
    dashParser.xml2json(manifest)
  }

  function parseXml(manifest) {
    dashParser.parse(manifest)
  }

  function parseJson(manifest) {
    JSON.parse(manifest)
  }

  async function loadProtoMessage(protoFile) {
    return new Promise((resolve, reject) => {
      protobuf.load(protoFile, (err, root) => {
        if (err) {
          reject(err)
        }
        const message = root.lookupType('dash.MPD')
        resolve(message)
      })
    })
  }

  function encodeProto(MpdMessage, mpd) {
    const message = MpdMessage.create(mpd.MPD)
    const buffer = MpdMessage.encode(message).finish()
    return buffer
  }

  function parseProto(MpdMessage, manifest) {
    const message = MpdMessage.decode(manifest)
    const _mpd = MpdMessage.toObject(message)
  }

  function log(message) {
    console.log(message)
    const logger = UI.getElement('log-output')
    logger.value += message + '\n'
  }

  async function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  let instance = {
    validateContentByUrl,
    validateContentByText,
    validateContentByFile,
  };
  return instance;
})();
