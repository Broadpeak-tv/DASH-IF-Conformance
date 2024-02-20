(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.DashParser = factory());
})(this, (function () { 'use strict';

    /**
     * The copyright in this software is being made available under the BSD License,
     * included below. This software may be subject to other third party and contributor
     * rights, including patent rights, and no such rights are granted under this license.
     *
     * Copyright (c) 2013, Dash Industry Forum.
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without modification,
     * are permitted provided that the following conditions are met:
     *  * Redistributions of source code must retain the above copyright notice, this
     *  list of conditions and the following disclaimer.
     *  * Redistributions in binary form must reproduce the above copyright notice,
     *  this list of conditions and the following disclaimer in the documentation and/or
     *  other materials provided with the distribution.
     *  * Neither the name of Dash Industry Forum nor the names of its
     *  contributors may be used to endorse or promote products derived from this software
     *  without specific prior written permission.
     *
     *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
     *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
     *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
     *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
     *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
     *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, LOSS OF USE, DATA, OR
     *  PROFITS, OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
     *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
     *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
     *  POSSIBILITY OF SUCH DAMAGE.
     */

    /**
     * Dash constants declaration
     * @ignore
     */
    var DashConstants = {
        ACCESSIBILITY: 'Accessibility',
        ADAPTATION_SET: 'AdaptationSet',
        ADAPTATION_SET_SWITCHING_SCHEME_ID_URI: 'urn:mpeg:dash:adaptation-set-switching:2016',
        ADD: 'add',
        ASSET_IDENTIFIER: 'AssetIdentifier',
        AUDIO_CHANNEL_CONFIGURATION: 'AudioChannelConfiguration',
        AUDIO_SAMPLING_RATE: 'audioSamplingRate',
        AVAILABILITY_END_TIME: 'availabilityEndTime',
        AVAILABILITY_START_TIME: 'availabilityStartTime',
        AVAILABILITY_TIME_COMPLETE: 'availabilityTimeComplete',
        AVAILABILITY_TIME_OFFSET: 'availabilityTimeOffset',
        BANDWITH: 'bandwidth',
        BASE_URL: 'BaseURL',
        BITSTREAM_SWITCHING: 'BitstreamSwitching',
        BITSTREAM_SWITCHING_MINUS: 'bitstreamSwitching',
        BYTE_RANGE: 'byteRange',
        CENC_DEFAULT_KID: 'cenc:default_KID',
        CLIENT_REQUIREMENT: 'clientRequirement',
        CODECS: 'codecs',
        CODEC_PRIVATE_DATA: 'codecPrivateData',
        CODING_DEPENDENCY: 'codingDependency',
        CONTENT_COMPONENT: 'ContentComponent',
        CONTENT_PROTECTION: 'ContentProtection',
        CONTENT_STEERING: 'ContentSteering',
        CONTENT_STEERING_RESPONSE: {
            VERSION: 'VERSION',
            TTL: 'TTL',
            RELOAD_URI: 'RELOAD-URI',
            PATHWAY_PRIORITY: 'PATHWAY-PRIORITY',
            PATHWAY_CLONES: 'PATHWAY-CLONES',
            BASE_ID: 'BASE-ID',
            ID: 'ID',
            URI_REPLACEMENT: 'URI-REPLACEMENT',
            HOST: 'HOST',
            PARAMS: 'PARAMS'
        },
        CONTENT_TYPE: 'contentType',
        DEFAULT_SERVICE_LOCATION: 'defaultServiceLocation',
        DEPENDENCY_ID: 'dependencyId',
        DURATION: 'duration',
        DVB_PRIORITY: 'dvb:priority',
        DVB_WEIGHT: 'dvb:weight',
        DYNAMIC: 'dynamic',
        ESSENTIAL_PROPERTY: 'EssentialProperty',
        EVENT: 'Event',
        EVENT_STREAM: 'EventStream',
        FRAMERATE: 'frameRate',
        FRAME_PACKING: 'FramePacking',
        GROUP_LABEL: 'GroupLabel',
        HEIGHT: 'height',
        ID: 'id',
        INBAND: 'inband',
        INBAND_EVENT_STREAM: 'InbandEventStream',
        INDEX: 'index',
        INDEX_RANGE: 'indexRange',
        INDEX_RANGE_EXACT: 'indexRangeExact',
        INITIALIZATION: 'Initialization',
        INITIALIZATION_MINUS: 'initialization',
        LABEL: 'Label',
        LANG: 'lang',
        LOCATION: 'Location',
        MAIN: 'main',
        MAXIMUM_SAP_PERIOD: 'maximumSAPPeriod',
        MAX_FRAMERATE: 'maxFrameRate',
        MAX_PLAYOUT_RATE: 'maxPlayoutRate',
        MAX_SEGMENT_DURATION: 'maxSegmentDuration',
        MAX_SUBSEGMENT_DURATION: 'maxSubsegmentDuration',
        MEDIA: 'media',
        MEDIA_PRESENTATION_DURATION: 'mediaPresentationDuration',
        MEDIA_RANGE: 'mediaRange',
        MEDIA_STREAM_STRUCTURE_ID: 'mediaStreamStructureId',
        METRICS: 'Metrics',
        METRICS_MINUS: 'metrics',
        MIME_TYPE: 'mimeType',
        MINIMUM_UPDATE_PERIOD: 'minimumUpdatePeriod',
        MIN_BUFFER_TIME: 'minBufferTime',
        MPD: 'MPD',
        ORIGINAL_MPD_ID: 'mpdId',
        ORIGINAL_PUBLISH_TIME: 'originalPublishTime',
        PATCH_LOCATION: 'PatchLocation',
        PERIOD: 'Period',
        PRESENTATION_TIME: 'presentationTime',
        PRESENTATION_TIME_OFFSET: 'presentationTimeOffset',
        PRODUCER_REFERENCE_TIME: 'ProducerReferenceTime',
        PRODUCER_REFERENCE_TIME_TYPE: {
            ENCODER: 'encoder',
            CAPTURED: 'captured',
            APPLICATION: 'application'
        },
        PROFILES: 'profiles',
        PUBLISH_TIME: 'publishTime',
        QUALITY_RANKING : 'qualityRanking',
        QUERY_BEFORE_START: 'queryBeforeStart',
        RANGE: 'range',
        RATING: 'Rating',
        REMOVE: 'remove',
        REPLACE: 'replace',
        REPORTING: 'Reporting',
        REPRESENTATION: 'Representation',
        REPRESENTATION_INDEX: 'RepresentationIndex',
        ROLE: 'Role',
        S: 'S',
        SAR: 'sar',
        SCAN_TYPE: 'scanType',
        SEGMENT_ALIGNMENT: 'segmentAlignment',
        SEGMENT_BASE: 'SegmentBase',
        SEGMENT_LIST: 'SegmentList',
        SEGMENT_PROFILES: 'segmentProfiles',
        SEGMENT_TEMPLATE: 'SegmentTemplate',
        SEGMENT_TIMELINE: 'SegmentTimeline',
        SEGMENT_URL: 'SegmentURL',
        SERVICE_DESCRIPTION: 'ServiceDescription',
        SERVICE_DESCRIPTION_LATENCY: 'Latency',
        SERVICE_DESCRIPTION_OPERATING_BANDWIDTH: 'OperatingBandwidth',
        SERVICE_DESCRIPTION_OPERATING_QUALITY: 'OperatingQuality',
        SERVICE_DESCRIPTION_PLAYBACK_RATE: 'PlaybackRate',
        SERVICE_DESCRIPTION_SCOPE: 'Scope',
        SERVICE_LOCATION: 'serviceLocation',
        SOURCE_URL: 'sourceURL',
        START: 'start',
        START_NUMBER: 'startNumber',
        START_TIME: 'starttime',
        START_WITH_SAP: 'startWithSAP',
        STATIC: 'static',
        SUBSET: 'Subset',
        SUB_REPRESENTATION: 'SubRepresentation',
        SUB_SEGMENT_ALIGNMENT: 'subsegmentAlignment',
        SUGGESTED_PRESENTATION_DELAY: 'suggestedPresentationDelay',
        SUPPLEMENTAL_PROPERTY: 'SupplementalProperty',
        TIMESCALE: 'timescale',
        TIMESHIFT_BUFFER_DEPTH: 'timeShiftBufferDepth',
        TTL: 'ttl',
        TYPE: 'type',
        UTC_TIMING: 'UTCTiming',
        VALUE: 'value',
        VIEWPOINT: 'Viewpoint',
        WALL_CLOCK_TIME: 'wallClockTime',
        WIDTH: 'width',
    };

    /**
     * The copyright in this software is being made available under the BSD License,
     * included below. This software may be subject to other third party and contributor
     * rights, including patent rights, and no such rights are granted under this license.
     *
     * Copyright (c) 2013, Dash Industry Forum.
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without modification,
     * are permitted provided that the following conditions are met:
     *  * Redistributions of source code must retain the above copyright notice, this
     *  list of conditions and the following disclaimer.
     *  * Redistributions in binary form must reproduce the above copyright notice,
     *  this list of conditions and the following disclaimer in the documentation and/or
     *  other materials provided with the distribution.
     *  * Neither the name of Dash Industry Forum nor the names of its
     *  contributors may be used to endorse or promote products derived from this software
     *  without specific prior written permission.
     *
     *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
     *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
     *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
     *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
     *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
     *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
     *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
     *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
     *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
     *  POSSIBILITY OF SUCH DAMAGE.
     */


    /**
     * @classdesc a base type for matching and converting types in manifest to
     * something more useful
     * @ignore
     */
    class BaseMatcher {
        constructor(test, converter) {
            this._test = test;
            this._converter = converter;
        }

        get test() {
            return this._test
        }

        get converter() {
            return this._converter
        }
    }

    /**
     * The copyright in this software is being made available under the BSD License,
     * included below. This software may be subject to other third party and contributor
     * rights, including patent rights, and no such rights are granted under this license.
     *
     * Copyright (c) 2013, Dash Industry Forum.
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without modification,
     * are permitted provided that the following conditions are met:
     *  * Redistributions of source code must retain the above copyright notice, this
     *  list of conditions and the following disclaimer.
     *  * Redistributions in binary form must reproduce the above copyright notice,
     *  this list of conditions and the following disclaimer in the documentation and/or
     *  other materials provided with the distribution.
     *  * Neither the name of Dash Industry Forum nor the names of its
     *  contributors may be used to endorse or promote products derived from this software
     *  without specific prior written permission.
     *
     *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
     *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
     *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
     *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
     *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
     *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES LOSS OF USE, DATA, OR
     *  PROFITS OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
     *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
     *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
     *  POSSIBILITY OF SUCH DAMAGE.
     */

    const durationRegex = /^([-])?P(([\d.]*)Y)?(([\d.]*)M)?(([\d.]*)D)?T?(([\d.]*)H)?(([\d.]*)M)?(([\d.]*)S)?/;

    const SECONDS_IN_YEAR = 365 * 24 * 60 * 60;
    const SECONDS_IN_MONTH = 30 * 24 * 60 * 60;
    const SECONDS_IN_DAY = 24 * 60 * 60;
    const SECONDS_IN_HOUR = 60 * 60;
    const SECONDS_IN_MIN$1 = 60;

    const DurationAttributes = [
        DashConstants.DURATION,
        DashConstants.MAX_SEGMENT_DURATION,
        DashConstants.MAX_SUBSEGMENT_DURATION,
        DashConstants.MEDIA_PRESENTATION_DURATION,
        DashConstants.MIN_BUFFER_TIME,
        DashConstants.TIMESHIFT_BUFFER_DEPTH,
        DashConstants.START,
        DashConstants.START_TIME,
        DashConstants.SUGGESTED_PRESENTATION_DELAY,
        DashConstants.MINIMUM_UPDATE_PERIOD,
    ];

    class DurationMatcher extends BaseMatcher {
        constructor() {
            super(
                (tagName, attrName, value) => DurationAttributes.includes(attrName) && durationRegex.test(value),
                value => {
                    //value = "P10Y10M10DT10H10M10.1S";
                    const match = durationRegex.exec(value);
                    let result = (parseFloat(match[3] || 0) * SECONDS_IN_YEAR +
                        parseFloat(match[5] || 0) * SECONDS_IN_MONTH +
                        parseFloat(match[7] || 0) * SECONDS_IN_DAY +
                        parseFloat(match[9] || 0) * SECONDS_IN_HOUR +
                        parseFloat(match[11] || 0) * SECONDS_IN_MIN$1 +
                        parseFloat(match[13] || 0));

                    if (match[1] !== undefined) {
                        result = -result;
                    }

                    return result
                }
            );
        }
    }

    /**
     * The copyright in this software is being made available under the BSD License,
     * included below. This software may be subject to other third party and contributor
     * rights, including patent rights, and no such rights are granted under this license.
     *
     * Copyright (c) 2013, Dash Industry Forum.
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without modification,
     * are permitted provided that the following conditions are met:
     *  * Redistributions of source code must retain the above copyright notice, this
     *  list of conditions and the following disclaimer.
     *  * Redistributions in binary form must reproduce the above copyright notice,
     *  this list of conditions and the following disclaimer in the documentation and/or
     *  other materials provided with the distribution.
     *  * Neither the name of Dash Industry Forum nor the names of its
     *  contributors may be used to endorse or promote products derived from this software
     *  without specific prior written permission.
     *
     *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
     *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
     *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
     *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
     *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
     *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
     *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
     *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
     *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
     *  POSSIBILITY OF SUCH DAMAGE.
     */

    const SECONDS_IN_MIN = 60;
    const MINUTES_IN_HOUR = 60;
    const MILLISECONDS_IN_SECONDS = 1000;

    const datetimeRegex = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})(?::([0-9]*)(\.[0-9]*)?)?(?:([+-])([0-9]{2})(?::?)([0-9]{2}))?/;

    const DateTimeAttributes = [
        DashConstants.AVAILABILITY_START_TIME,
        DashConstants.AVAILABILITY_END_TIME,
        DashConstants.PUBLISH_TIME,
    ];

    class DateTimeMatcher extends BaseMatcher {
        constructor() {
            super(
                (tagName, attrName, value) => DateTimeAttributes.includes(attrName),
                value => {
                    const match = datetimeRegex.exec(value);
                    let utcDate;

                    // If the string does not contain a timezone offset different browsers can interpret it either
                    // as UTC or as a local time so we have to parse the string manually to normalize the given date value for
                    // all browsers
                    utcDate = Date.UTC(
                        parseInt(match[1], 10),
                        parseInt(match[2], 10) - 1, // months start from zero
                        parseInt(match[3], 10),
                        parseInt(match[4], 10),
                        parseInt(match[5], 10),
                        (match[6] && parseInt(match[6], 10) || 0),
                        (match[7] && parseFloat(match[7]) * MILLISECONDS_IN_SECONDS) || 0);

                    // If the date has timezone offset take it into account as well
                    if (match[9] && match[10]) {
                        const timezoneOffset = parseInt(match[9], 10) * MINUTES_IN_HOUR + parseInt(match[10], 10);
                        utcDate += (match[8] === '+' ? -1 : +1) * timezoneOffset * SECONDS_IN_MIN * MILLISECONDS_IN_SECONDS;
                    }

                    return new Date(utcDate)
                }
            );
        }
    }

    /**
     * The copyright in this software is being made available under the BSD License,
     * included below. This software may be subject to other third party and contributor
     * rights, including patent rights, and no such rights are granted under this license.
     *
     * Copyright (c) 2013, Dash Industry Forum.
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without modification,
     * are permitted provided that the following conditions are met:
     *  * Redistributions of source code must retain the above copyright notice, this
     *  list of conditions and the following disclaimer.
     *  * Redistributions in binary form must reproduce the above copyright notice,
     *  this list of conditions and the following disclaimer in the documentation and/or
     *  other materials provided with the distribution.
     *  * Neither the name of Dash Industry Forum nor the names of its
     *  contributors may be used to endorse or promote products derived from this software
     *  without specific prior written permission.
     *
     *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
     *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
     *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
     *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
     *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
     *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
     *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
     *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
     *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
     *  POSSIBILITY OF SUCH DAMAGE.
     */

    const numericRegex = /^[-+]?[0-9]+[.]?[0-9]*([eE][-+]?[0-9]+)?$/;

    const AttributesAsString = [
        DashConstants.FRAMERATE,
        DashConstants.ID,
        DashConstants.MAX_FRAMERATE,
        DashConstants.MEDIA_STREAM_STRUCTURE_ID,
        DashConstants.REFERENCE_ID,
        DashConstants.VALUE,
    ];

    class NumericMatcher extends BaseMatcher {
        constructor() {
            super(
                (tagName, attrName, value) => numericRegex.test(value) && !AttributesAsString.includes(attrName),
                str => parseFloat(str)
            );
        }
    }

    /**
     * The copyright in this software is being made available under the BSD License,
     * included below. This software may be subject to other third party and contributor
     * rights, including patent rights, and no such rights are granted under this license.
     *
     * Copyright (c) 2013, Dash Industry Forum.
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without modification,
     * are permitted provided that the following conditions are met:
     *  * Redistributions of source code must retain the above copyright notice, this
     *  list of conditions and the following disclaimer.
     *  * Redistributions in binary form must reproduce the above copyright notice,
     *  this list of conditions and the following disclaimer in the documentation and/or
     *  other materials provided with the distribution.
     *  * Neither the name of Dash Industry Forum nor the names of its
     *  contributors may be used to endorse or promote products derived from this software
     *  without specific prior written permission.
     *
     *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
     *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
     *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
     *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
     *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
     *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
     *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
     *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
     *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
     *  POSSIBILITY OF SUCH DAMAGE.
     */

    const BooleanAttributes = [
        DashConstants.AVAILABILITY_TIME_COMPLETE,
        DashConstants.BITSTREAM_SWITCHING,
        DashConstants.CODING_DEPENDENCY,
        DashConstants.INBAND,
        DashConstants.INDEX_RANGE_EXACT,
        DashConstants.SEGMENT_ALIGNMENT,
        DashConstants.SUB_SEGMENT_ALIGNMENT,
    ];

    class BooleanMatcher extends BaseMatcher {
        constructor() {
            super(
                (tagName, attrName, value) => BooleanAttributes.includes(attrName),
                value => value === 'true' || value === '1'
            );
        }
    }

    // ==ClosureCompiler==
    // @output_file_name default.js
    // @compilation_level SIMPLE_OPTIMIZATIONS
    // ==/ClosureCompiler==
    // module.exports = {
    //     parse: parse,
    //     simplify: simplify,
    //     simplifyLostLess: simplifyLostLess,
    //     filter: filter,
    //     stringify: stringify,
    //     toContentString: toContentString,
    //     getElementById: getElementById,
    //     getElementsByClassName: getElementsByClassName,
    //     transformStream: transformStream,
    // };

    /**
     * @author: Tobias Nickel
     * @created: 06.04.2015
     * I needed a small xmlparser chat can be used in a worker.
     */

    /**
     * @typedef tNode
     * @property {string} tagName
     * @property {object} attributes
     * @property {(tNode|string)[]} children
     **/

    /**
     * @typedef TParseOptions
     * @property {number} [pos]
     * @property {string[]} [noChildNodes]
     * @property {boolean} [setPos]
     * @property {boolean} [keepComments]
     * @property {boolean} [keepWhitespace]
     * @property {boolean} [simplify]
     * @property {(a: tNode, b: tNode) => boolean} [filter]
     */

    /**
     * parseXML / html into a DOM Object. with no validation and some failur tolerance
     * @param {string} S your XML to parse
     * @param {TParseOptions} [options]  all other options:
     * @return {(tNode | string)[]}
     */
     function parse(S, options) {
        "txml";
        options = options || {};

        var pos = options.pos || 0;
        var keepComments = !!options.keepComments;
        var keepWhitespace = !!options.keepWhitespace;
        // dash.js - BEGIN
        // Attributes matchers to post-process attributes (for ex to transform from xs:duration format to number of seconds)
        var attrMatchers = options.attrMatchers || [];
        // List od node names that must be stored as array within their parent
        var nodesAsArray = options.nodesAsArray || [];
        // dash.js - END

        var openBracket = "<";
        var openBracketCC = "<".charCodeAt(0);
        var closeBracket = ">";
        var closeBracketCC = ">".charCodeAt(0);
        var minusCC = "-".charCodeAt(0);
        var slashCC = "/".charCodeAt(0);
        var exclamationCC = '!'.charCodeAt(0);
        var singleQuoteCC = "'".charCodeAt(0);
        var doubleQuoteCC = '"'.charCodeAt(0);
        var openCornerBracketCC = '['.charCodeAt(0);
        var closeCornerBracketCC = ']'.charCodeAt(0);


        /**
         * parsing a list of entries
         */
        function parseChildren(tagName, parent) {
            var children = [];
            while (S[pos]) {
                if (S.charCodeAt(pos) == openBracketCC) {
                    if (S.charCodeAt(pos + 1) === slashCC) {
                        var closeStart = pos + 2;
                        pos = S.indexOf(closeBracket, pos);

                        var closeTag = S.substring(closeStart, pos);
                        if (closeTag.indexOf(tagName) == -1) {
                            var parsedText = S.substring(0, pos).split('\n');
                            throw new Error(
                                'Unexpected close tag\nLine: ' + (parsedText.length - 1) +
                                '\nColumn: ' + (parsedText[parsedText.length - 1].length + 1) +
                                '\nChar: ' + S[pos]
                            );
                        }

                        if (pos + 1) pos += 1;

                        return children;
                    } else if (S.charCodeAt(pos + 1) === exclamationCC) {
                        if (S.charCodeAt(pos + 2) == minusCC) {
                            //comment support
                            const startCommentPos = pos;
                            while (pos !== -1 && !(S.charCodeAt(pos) === closeBracketCC && S.charCodeAt(pos - 1) == minusCC && S.charCodeAt(pos - 2) == minusCC && pos != -1)) {
                                pos = S.indexOf(closeBracket, pos + 1);
                            }
                            if (pos === -1) {
                                pos = S.length;
                            }
                            if (keepComments) {
                                children.push(S.substring(startCommentPos, pos + 1));
                            }
                        } else if (
                            S.charCodeAt(pos + 2) === openCornerBracketCC &&
                            S.charCodeAt(pos + 8) === openCornerBracketCC &&
                            S.substr(pos + 3, 5).toLowerCase() === 'cdata'
                        ) {
                            // cdata
                            var cdataEndIndex = S.indexOf(']]>', pos);
                            if (cdataEndIndex == -1) {
                                children.push(S.substr(pos + 9));
                                pos = S.length;
                            } else {
                                children.push(S.substring(pos + 9, cdataEndIndex));
                                pos = cdataEndIndex + 3;
                            }
                            continue;
                        } else {
                            // doctypesupport
                            const startDoctype = pos + 1;
                            pos += 2;
                            var encapsuled = false;
                            while ((S.charCodeAt(pos) !== closeBracketCC || encapsuled === true) && S[pos]) {
                                if (S.charCodeAt(pos) === openCornerBracketCC) {
                                    encapsuled = true;
                                } else if (encapsuled === true && S.charCodeAt(pos) === closeCornerBracketCC) {
                                    encapsuled = false;
                                }
                                pos++;
                            }
                            children.push(S.substring(startDoctype, pos));
                        }
                        pos++;
                        continue;
                    }
                    var node = parseNode();
                    children.push(node);

                    if (node.tagName[0] === '?') {
                        children.push(...node.children);
                        node.children = [];
                    }

                    // dash.js - BEGIN
                    // Transform/process on the fly child nodes to add them to their parent as an array or an object
                    if (parent) {
                        let tagName = node.tagName;
                        delete node.tagName;
                        if (nodesAsArray.indexOf(tagName) !== -1) {
                            if (!parent[tagName]) {
                                parent[tagName] = [];
                            }
                            parent[tagName].push(node);
                        } else {
                            parent[tagName] = node;
                        }
                    }
                    // dash.js - END
                } else {
                    var text = parseText();
                    if (!keepWhitespace) {
                        text = text.trim();
                    }
                    // dash.js - BEGIN
                    // Transform/process on the fly text values to add them to their parent as its "_text" property
                    if (parent) {
                        parent.__text = text;
                    } else {
                        children.push(text);
                    }
                    // dash.js - END
                    pos++;
                }
            }
            return children;
        }

        // dash.js - BEGIN
        // Add function processAttr() used to process node attributes on the fly when parsing nodes (see parseNode()))
        function processAttr(tagName, attrName, value) {
            // Specific use case for SegmentTimeline <S> tag
            if (tagName === 'S') {
                return parseInt(value);
            }

            let attrValue = value;
            attrMatchers.forEach(matcher => {
                if (matcher.test(tagName, attrName, value)) {
                    attrValue = matcher.converter(value);
                }
            });
            return attrValue;
        }
        // dash.js - END

        /**
         *    returns the text outside of texts until the first '<'
         */
        function parseText() {
            var start = pos;
            pos = S.indexOf(openBracket, pos) - 1;
            if (pos === -2)
                pos = S.length;
            return S.slice(start, pos + 1);
        }
        /**
         *    returns text until the first nonAlphabetic letter
         */
        var nameSpacer = '\r\n\t>/= ';

        function parseName() {
            var start = pos;
            while (nameSpacer.indexOf(S[pos]) === -1 && S[pos]) {
                pos++;
            }
            return S.slice(start, pos);
        }
        /**
         *    is parsing a node, including tagName, Attributes and its children,
         * to parse children it uses the parseChildren again, that makes the parsing recursive
         */
        var NoChildNodes = options.noChildNodes || ['img', 'br', 'input', 'meta', 'link', 'hr'];

        function parseNode() {
            pos++;
            const tagName = parseName();
            let node = {
                tagName: tagName
            };

            // Support tag namespace
            let p = node.tagName.indexOf(':');
            if (p !== -1) {
                node.__prefix = node.tagName.substr(0, p);
                node.tagName = node.tagName.substr(p + 1);
            }
            // dash.js - END

            // parsing attributes
            while (S.charCodeAt(pos) !== closeBracketCC && S[pos]) {
                var c = S.charCodeAt(pos);
                if ((c > 64 && c < 91) || (c > 96 && c < 123)) {
                    //if('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(S[pos])!==-1 ){
                    var name = parseName();
                    // search beginning of the string
                    var code = S.charCodeAt(pos);
                    while (code && code !== singleQuoteCC && code !== doubleQuoteCC && !((code > 64 && code < 91) || (code > 96 && code < 123)) && code !== closeBracketCC) {
                        pos++;
                        code = S.charCodeAt(pos);
                    }
                    if (code === singleQuoteCC || code === doubleQuoteCC) {
                        var value = parseString();
                        if (pos === -1) {
                            return node;
                        }
                    } else {
                        value = null;
                        pos--;
                    }
                    // dash.js - BEGIN
                    // Process attributes and add them as node properties which names are the attributes names
                    value = processAttr(node.tagName, name, value);
                    node[name] = value;
                    // dash.js - END
                }
                pos++;
            }
            // optional parsing of children
            if (S.charCodeAt(pos - 1) !== slashCC) {
                if (tagName == "script") {
                    var start = pos + 1;
                    pos = S.indexOf('</script>', pos);
                    [S.slice(start, pos)];
                    pos += 9;
                } else if (tagName == "style") {
                    var start = pos + 1;
                    pos = S.indexOf('</style>', pos);
                    [S.slice(start, pos)];
                    pos += 8;
                } else if (NoChildNodes.indexOf(tagName) === -1) {
                    pos++;
                    // dash.js - BEGIN
                    // Add parent to parseChildren()
                    parseChildren(tagName, node);
                    // dash.js - END
                } else {
                    pos++;
                }
            } else {
                pos++;
            }
            // dash.js - BEGIN
            return node;
            // dash.js - END
        }

        /**
         *    is parsing a string, that starts with a char and with the same usually  ' or "
         */

        function parseString() {
            var startChar = S[pos];
            var startpos = pos + 1;
            pos = S.indexOf(startChar, startpos);
            return S.slice(startpos, pos);
        }

        /**
         *
         */
        function findElements() {
            var r = new RegExp('\\s' + options.attrName + '\\s*=[\'"]' + options.attrValue + '[\'"]').exec(S);
            if (r) {
                return r.index;
            } else {
                return -1;
            }
        }

        var out = null;
        if (options.attrValue !== undefined) {
            options.attrName = options.attrName || 'id';
            var out = [];

            while ((pos = findElements()) !== -1) {
                pos = S.lastIndexOf('<', pos);
                if (pos !== -1) {
                    out.push(parseNode());
                }
                S = S.substr(pos);
                pos = 0;
            }
        } else if (options.parseNode) {
            out = parseNode();
        } else {
            out = parseChildren('');
        }

        if (options.filter) {
            out = filter(out, options.filter);
        }

        if (options.simplify) {
            return simplify(Array.isArray(out) ? out : [out]);
        }

        if (options.setPos) {
            out.pos = pos;
        }

        return out;
    }

    /**
     * transform the DomObject to an object that is like the object of PHP`s simple_xmp_load_*() methods.
     * this format helps you to write that is more likely to keep your program working, even if there a small changes in the XML schema.
     * be aware, that it is not possible to reproduce the original xml from a simplified version, because the order of elements is not saved.
     * therefore your program will be more flexible and easier to read.
     *
     * @param {tNode[]} children the childrenList
     */
    function simplify(children) {
        var out = {};
        if (!children.length) {
            return '';
        }

        if (children.length === 1 && typeof children[0] == 'string') {
            return children[0];
        }
        // map each object
        children.forEach(function(child) {
            if (typeof child !== 'object') {
                return;
            }
            if (!out[child.tagName])
                out[child.tagName] = [];
            var kids = simplify(child.children);
            out[child.tagName].push(kids);
            if (Object.keys(child.attributes).length && typeof kids !== 'string') {
                kids._attributes = child.attributes;
            }
        });

        for (var i in out) {
            if (out[i].length == 1) {
                out[i] = out[i][0];
            }
        }

        return out;
    }
    /**
     * behaves the same way as Array.filter, if the filter method return true, the element is in the resultList
     * @params children{Array} the children of a node
     * @param f{function} the filter method
     */
    function filter(children, f, dept = 0, path = '') {
        var out = [];
        children.forEach(function(child, i) {
            if (typeof(child) === 'object' && f(child, i, dept, path)) out.push(child);
            if (child.children) {
                var kids = filter(child.children, f, dept + 1, (path ? path + '.' : '') + i + '.' + child.tagName);
                out = out.concat(kids);
            }
        });
        return out;
    }

    /*
     Copyright 2011-2013 Abdulla Abdurakhmanov
     Original sources are available at https://code.google.com/p/x2js/

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
     */

    /*
      Further modified for dashjs to:
      - keep track of children nodes in order in attribute __children.
      - add type conversion matchers
      - re-add ignoreRoot
      - allow zero-length attributePrefix
      - don't add white-space text nodes
      - remove explicit RequireJS support
    */

    function X2JS(config) {

        var VERSION = "1.2.0";

        config = config || {};
        initConfigDefaults();

        function initConfigDefaults() {
            if(config.escapeMode === undefined) {
                config.escapeMode = true;
            }

            if (config.attributePrefix === undefined) {
                config.attributePrefix = "_";
            }

            config.arrayAccessForm = config.arrayAccessForm || "none";
            config.emptyNodeForm = config.emptyNodeForm || "text";

            if(config.enableToStringFunc === undefined) {
                config.enableToStringFunc = true;
            }
            config.arrayAccessFormPaths = config.arrayAccessFormPaths || [];
            if(config.skipEmptyTextNodesForObj === undefined) {
                config.skipEmptyTextNodesForObj = true;
            }
            if(config.stripWhitespaces === undefined) {
                config.stripWhitespaces = true;
            }
            config.datetimeAccessFormPaths = config.datetimeAccessFormPaths || [];

            if(config.useDoubleQuotes === undefined) {
                config.useDoubleQuotes = false;
            }

            config.xmlElementsFilter = config.xmlElementsFilter || [];
            config.jsonPropertiesFilter = config.jsonPropertiesFilter || [];

            if(config.keepCData === undefined) {
                config.keepCData = false;
            }

            if (config.ignoreRoot === undefined) {
                config.ignoreRoot = false;
            }
        }

        var DOMNodeTypes = {
            ELEMENT_NODE 	   : 1,
            TEXT_NODE    	   : 3,
            CDATA_SECTION_NODE : 4,
            COMMENT_NODE	   : 8,
            DOCUMENT_NODE 	   : 9
        };

        function getNodeLocalName( node ) {
            var nodeLocalName = node.localName;
            if(nodeLocalName == null) // Yeah, this is IE!!
                nodeLocalName = node.baseName;
            if(nodeLocalName == null || nodeLocalName=="") // =="" is IE too
                nodeLocalName = node.nodeName;
            return nodeLocalName;
        }

        function getNodePrefix(node) {
            return node.prefix;
        }

        function escapeXmlChars(str) {
            if(typeof(str) == "string")
                return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
            else
                return str;
        }

        function checkInStdFiltersArrayForm(stdFiltersArrayForm, obj, name, path) {
            var idx = 0;
            for(; idx < stdFiltersArrayForm.length; idx++) {
                var filterPath = stdFiltersArrayForm[idx];
                if( typeof filterPath === "string" ) {
                    if(filterPath == path)
                        break;
                }
                else
                if( filterPath instanceof RegExp) {
                    if(filterPath.test(path))
                        break;
                }
                else
                if( typeof filterPath === "function") {
                    if(filterPath(obj, name, path))
                        break;
                }
            }
            return idx!=stdFiltersArrayForm.length;
        }

        function toArrayAccessForm(obj, childName, path) {
            switch(config.arrayAccessForm) {
                case "property":
                    if(!(obj[childName] instanceof Array))
                        obj[childName+"_asArray"] = [obj[childName]];
                    else
                        obj[childName+"_asArray"] = obj[childName];
                    break;
                /*case "none":
                    break;*/
            }

            if(!(obj[childName] instanceof Array) && config.arrayAccessFormPaths.length > 0) {
                if(checkInStdFiltersArrayForm(config.arrayAccessFormPaths, obj, childName, path)) {
                    obj[childName] = [obj[childName]];
                }
            }
        }

        function fromXmlDateTime(prop) {
            // Implementation based up on http://stackoverflow.com/questions/8178598/xml-datetime-to-javascript-date-object
            // Improved to support full spec and optional parts
            var bits = prop.split(/[-T:+Z]/g);

            var d = new Date(bits[0], bits[1]-1, bits[2]);
            var secondBits = bits[5].split("\.");
            d.setHours(bits[3], bits[4], secondBits[0]);
            if(secondBits.length>1)
                d.setMilliseconds(secondBits[1]);

            // Get supplied time zone offset in minutes
            if(bits[6] && bits[7]) {
                var offsetMinutes = bits[6] * 60 + Number(bits[7]);
                var sign = /\d\d-\d\d:\d\d$/.test(prop)? '-' : '+';

                // Apply the sign
                offsetMinutes = 0 + (sign == '-'? -1 * offsetMinutes : offsetMinutes);

                // Apply offset and local timezone
                d.setMinutes(d.getMinutes() - offsetMinutes - d.getTimezoneOffset());
            }
            else
                if(prop.indexOf("Z", prop.length - 1) !== -1) {
                    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()));
                }

            // d is now a local time equivalent to the supplied time
            return d;
        }

        function checkFromXmlDateTimePaths(value, childName, fullPath) {
            if(config.datetimeAccessFormPaths.length > 0) {
                var path = fullPath.split("\.#")[0];
                if(checkInStdFiltersArrayForm(config.datetimeAccessFormPaths, value, childName, path)) {
                    return fromXmlDateTime(value);
                }
                else
                    return value;
            }
            else
                return value;
        }

        function checkXmlElementsFilter(obj, childType, childName, childPath) {
            if( childType == DOMNodeTypes.ELEMENT_NODE && config.xmlElementsFilter.length > 0) {
                return checkInStdFiltersArrayForm(config.xmlElementsFilter, obj, childName, childPath);
            }
            else
                return true;
        }

        function parseDOMChildren( node, path ) {
            if(node.nodeType == DOMNodeTypes.DOCUMENT_NODE) {
                var result = new Object;
                var nodeChildren = node.childNodes;
                // Alternative for firstElementChild which is not supported in some environments
                for(var cidx=0; cidx <nodeChildren.length; cidx++) {
                    var child = nodeChildren[cidx];
                    if(child.nodeType == DOMNodeTypes.ELEMENT_NODE) {
                        if (config.ignoreRoot) {
                            result = parseDOMChildren(child);
                        } else {
                            result = {};
                            var childName = getNodeLocalName(child);
                            result[childName] = parseDOMChildren(child);
                        }
                    }
                }
                return result;
            }
            else
            if(node.nodeType == DOMNodeTypes.ELEMENT_NODE) {
                var result = new Object;
                result.__cnt=0;

                var children = [];
                var nodeChildren = node.childNodes;

                // Children nodes
                for(var cidx=0; cidx <nodeChildren.length; cidx++) {
                    var child = nodeChildren[cidx];
                    var childName = getNodeLocalName(child);

                    if(child.nodeType!= DOMNodeTypes.COMMENT_NODE) {
                        var childPath = path+"."+childName;
                        if (checkXmlElementsFilter(result,child.nodeType,childName,childPath)) {
                            result.__cnt++;
                            if(result[childName] == null) {
                                var c = parseDOMChildren(child, childPath);
                                if (childName != "#text" || /[^\s]/.test(c)) {
                                    var o = {};
                                    o[childName] = c;
                                    children.push(o);
                                }
                                result[childName] = c;
                                toArrayAccessForm(result, childName, childPath);
                            }
                            else {
                                if(result[childName] != null) {
                                    if( !(result[childName] instanceof Array)) {
                                        result[childName] = [result[childName]];
                                        toArrayAccessForm(result, childName, childPath);
                                    }
                                }

                                var c = parseDOMChildren(child, childPath);
                                if (childName != "#text" || /[^\s]/.test(c)) { // Don't add white-space text nodes
                                    var o = {};
                                    o[childName] = c;
                                    children.push( o );
                                }
                                (result[childName])[result[childName].length] = c;
                            }
                        }
                    }
                }

                result.__children = children;

                // Attributes
                var nodeLocalName = getNodeLocalName(node);
                for(var aidx=0; aidx <node.attributes.length; aidx++) {
                    var attr = node.attributes[aidx];
                    result.__cnt++;

                    var value2 = attr.value;
                    for(var m=0, ml=config.matchers.length; m < ml; m++) {
                        var matchobj = config.matchers[m];
                        if (matchobj.test(attr, nodeLocalName))
                            value2 = matchobj.converter(attr.value);
                    }

                    result[config.attributePrefix+attr.name]=value2;
                }

                // Node namespace prefix
                var nodePrefix = getNodePrefix(node);
                if(nodePrefix!=null && nodePrefix!="") {
                    result.__cnt++;
                    result.__prefix=nodePrefix;
                }

                if(result["#text"]!=null) {
                    result.__text = result["#text"];
                    if(result.__text instanceof Array) {
                        result.__text = result.__text.join("\n");
                    }
                    //if(config.escapeMode)
                    //	result.__text = unescapeXmlChars(result.__text);
                    if(config.stripWhitespaces)
                        result.__text = result.__text.trim();
                    delete result["#text"];
                    if(config.arrayAccessForm=="property")
                        delete result["#text_asArray"];
                    result.__text = checkFromXmlDateTimePaths(result.__text, childName, path+"."+childName);
                }
                if(result["#cdata-section"]!=null) {
                    result.__cdata = result["#cdata-section"];
                    delete result["#cdata-section"];
                    if(config.arrayAccessForm=="property")
                        delete result["#cdata-section_asArray"];
                }

                if( result.__cnt == 0 && config.emptyNodeForm=="text" ) {
                    result = '';
                }
                else
                if( result.__cnt == 1 && result.__text!=null  ) {
                    result = result.__text;
                }
                else
                if( result.__cnt == 1 && result.__cdata!=null && !config.keepCData  ) {
                    result = result.__cdata;
                }
                else
                if ( result.__cnt > 1 && result.__text!=null && config.skipEmptyTextNodesForObj) {
                    if( (config.stripWhitespaces && result.__text=="") || (result.__text.trim()=="")) {
                        delete result.__text;
                    }
                }
                delete result.__cnt;

                if( config.enableToStringFunc && (result.__text!=null || result.__cdata!=null )) {
                    result.toString = function() {
                        return (this.__text!=null? this.__text:'')+( this.__cdata!=null ? this.__cdata:'');
                    };
                }

                return result;
            }
            else
            if(node.nodeType == DOMNodeTypes.TEXT_NODE || node.nodeType == DOMNodeTypes.CDATA_SECTION_NODE) {
                return node.nodeValue;
            }
        }

        function startTag(jsonObj, element, attrList, closed) {
            var resultStr = "<"+ ( (jsonObj!=null && jsonObj.__prefix!=null)? (jsonObj.__prefix+":"):"") + element;
            if(attrList!=null) {
                for(var aidx = 0; aidx < attrList.length; aidx++) {
                    var attrName = attrList[aidx];
                    var attrVal = jsonObj[attrName];
                    if(config.escapeMode)
                        attrVal=escapeXmlChars(attrVal);
                    resultStr+=" "+attrName.substr(config.attributePrefix.length)+"=";
                    if(config.useDoubleQuotes)
                        resultStr+='"'+attrVal+'"';
                    else
                        resultStr+="'"+attrVal+"'";
                }
            }
            if(!closed)
                resultStr+=">";
            else
                resultStr+="/>";
            return resultStr;
        }

        function endTag(jsonObj,elementName) {
            return "</"+ (jsonObj.__prefix!=null? (jsonObj.__prefix+":"):"")+elementName+">";
        }

        function endsWith(str, suffix) {
            return str.indexOf(suffix, str.length - suffix.length) !== -1;
        }

        function jsonXmlSpecialElem ( jsonObj, jsonObjField ) {
            if((config.arrayAccessForm=="property" && endsWith(jsonObjField.toString(),("_asArray")))
                    || jsonObjField.toString().indexOf(config.attributePrefix)==0
                    || jsonObjField.toString().indexOf("__")==0
                    || (jsonObj[jsonObjField] instanceof Function) )
                return true;
            else
                return false;
        }

        function jsonXmlElemCount ( jsonObj ) {
            var elementsCnt = 0;
            if(jsonObj instanceof Object ) {
                for( var it in jsonObj  ) {
                    if(jsonXmlSpecialElem ( jsonObj, it) )
                        continue;
                    elementsCnt++;
                }
            }
            return elementsCnt;
        }

        function checkJsonObjPropertiesFilter(jsonObj, propertyName, jsonObjPath) {
            return config.jsonPropertiesFilter.length == 0
                || jsonObjPath==""
                || checkInStdFiltersArrayForm(config.jsonPropertiesFilter, jsonObj, propertyName, jsonObjPath);
        }

        function parseJSONAttributes ( jsonObj ) {
            var attrList = [];
            if(jsonObj instanceof Object ) {
                for( var ait in jsonObj  ) {
                    if(ait.toString().indexOf("__")== -1 && ait.toString().indexOf(config.attributePrefix)==0) {
                        attrList.push(ait);
                    }
                }
            }
            return attrList;
        }

        function parseJSONTextAttrs ( jsonTxtObj ) {
            var result ="";

            if(jsonTxtObj.__cdata!=null) {
                result+="<![CDATA["+jsonTxtObj.__cdata+"]]>";
            }

            if(jsonTxtObj.__text!=null) {
                if(config.escapeMode)
                    result+=escapeXmlChars(jsonTxtObj.__text);
                else
                    result+=jsonTxtObj.__text;
            }
            return result;
        }

        function parseJSONTextObject ( jsonTxtObj ) {
            var result ="";

            if( jsonTxtObj instanceof Object ) {
                result+=parseJSONTextAttrs ( jsonTxtObj );
            }
            else
                if(jsonTxtObj!=null) {
                    if(config.escapeMode)
                        result+=escapeXmlChars(jsonTxtObj);
                    else
                        result+=jsonTxtObj;
                }

            return result;
        }

        function getJsonPropertyPath(jsonObjPath, jsonPropName) {
            if (jsonObjPath==="") {
                return jsonPropName;
            }
            else
                return jsonObjPath+"."+jsonPropName;
        }

        function parseJSONArray ( jsonArrRoot, jsonArrObj, attrList, jsonObjPath ) {
            var result = "";
            if(jsonArrRoot.length == 0) {
                result+=startTag(jsonArrRoot, jsonArrObj, attrList, true);
            }
            else {
                for(var arIdx = 0; arIdx < jsonArrRoot.length; arIdx++) {
                    result+=startTag(jsonArrRoot[arIdx], jsonArrObj, parseJSONAttributes(jsonArrRoot[arIdx]), false);
                    result+=parseJSONObject(jsonArrRoot[arIdx], getJsonPropertyPath(jsonObjPath,jsonArrObj));
                    result+=endTag(jsonArrRoot[arIdx],jsonArrObj);
                }
            }
            return result;
        }

        function parseJSONObject ( jsonObj, jsonObjPath ) {
            var result = "";

            var elementsCnt = jsonXmlElemCount ( jsonObj );

            if(elementsCnt > 0) {
                for( var it in jsonObj ) {

                    if(jsonXmlSpecialElem ( jsonObj, it) || (jsonObjPath!="" && !checkJsonObjPropertiesFilter(jsonObj, it, getJsonPropertyPath(jsonObjPath,it))) )
                        continue;

                    var subObj = jsonObj[it];

                    var attrList = parseJSONAttributes( subObj );

                    if(subObj == null || subObj == undefined) {
                        result+=startTag(subObj, it, attrList, true);
                    }
                    else
                    if(subObj instanceof Object) {

                        if(subObj instanceof Array) {
                            result+=parseJSONArray( subObj, it, attrList, jsonObjPath );
                        }
                        else if(subObj instanceof Date) {
                            result+=startTag(subObj, it, attrList, false);
                            result+=subObj.toISOString();
                            result+=endTag(subObj,it);
                        }
                        else {
                            var subObjElementsCnt = jsonXmlElemCount ( subObj );
                            if(subObjElementsCnt > 0 || subObj.__text!=null || subObj.__cdata!=null) {
                                result+=startTag(subObj, it, attrList, false);
                                result+=parseJSONObject(subObj, getJsonPropertyPath(jsonObjPath,it));
                                result+=endTag(subObj,it);
                            }
                            else {
                                result+=startTag(subObj, it, attrList, true);
                            }
                        }
                    }
                    else {
                        result+=startTag(subObj, it, attrList, false);
                        result+=parseJSONTextObject(subObj);
                        result+=endTag(subObj,it);
                    }
                }
            }
            result+=parseJSONTextObject(jsonObj);

            return result;
        }

        this.parseXmlString = function(xmlDocStr) {
            if (xmlDocStr === undefined) {
                return null;
            }
            var xmlDoc;
            if (window.DOMParser) {
                var parser=new window.DOMParser();
                try {
                    xmlDoc = parser.parseFromString( xmlDocStr, "text/xml" );
                    if(xmlDoc.getElementsByTagNameNS("*", "parsererror").length > 0) {
                        xmlDoc = null;
                    }
                }
                catch(err) {
                    xmlDoc = null;
                }
            }
            else {
                // IE :(
                if(xmlDocStr.indexOf("<?")==0) {
                    xmlDocStr = xmlDocStr.substr( xmlDocStr.indexOf("?>") + 2 );
                }
                xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
                xmlDoc.async="false";
                xmlDoc.loadXML(xmlDocStr);
            }
            return xmlDoc;
        };

        this.asArray = function(prop) {
            if (prop === undefined || prop == null)
                return [];
            else
            if(prop instanceof Array)
                return prop;
            else
                return [prop];
        };

        this.toXmlDateTime = function(dt) {
            if(dt instanceof Date)
                return dt.toISOString();
            else
            if(typeof(dt) === 'number' )
                return new Date(dt).toISOString();
            else
                return null;
        };

        this.asDateTime = function(prop) {
            if(typeof(prop) == "string") {
                return fromXmlDateTime(prop);
            }
            else
                return prop;
        };

        this.xml2json = function (xmlDoc) {
            return parseDOMChildren ( xmlDoc );
        };

        this.xml_str2json = function (xmlDocStr) {
            var xmlDoc = this.parseXmlString(xmlDocStr);
            if(xmlDoc!=null)
                return this.xml2json(xmlDoc);
            else
                return null;
        };

        this.json2xml_str = function (jsonObj) {
            return parseJSONObject ( jsonObj, "" );
        };

        this.json2xml = function (jsonObj) {
            var xmlDocStr = this.json2xml_str (jsonObj);
            return this.parseXmlString(xmlDocStr);
        };

        this.getVersion = function () {
            return VERSION;
        };
    }

    /**
     * The copyright in this software is being made available under the BSD License,
     * included below. This software may be subject to other third party and contributor
     * rights, including patent rights, and no such rights are granted under this license.
     *
     * Copyright (c) 2013, Dash Industry Forum.
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without modification,
     * are permitted provided that the following conditions are met:
     *  * Redistributions of source code must retain the above copyright notice, this
     *  list of conditions and the following disclaimer.
     *  * Redistributions in binary form must reproduce the above copyright notice,
     *  this list of conditions and the following disclaimer in the documentation and/or
     *  other materials provided with the distribution.
     *  * Neither the name of Dash Industry Forum nor the names of its
     *  contributors may be used to endorse or promote products derived from this software
     *  without specific prior written permission.
     *
     *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
     *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
     *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
     *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
     *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
     *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
     *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
     *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
     *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
     *  POSSIBILITY OF SUCH DAMAGE.
     */


    // List of node that shall be represented as arrays
    const arrayNodes = [
      DashConstants.PERIOD,
      DashConstants.BASE_URL,
      DashConstants.ADAPTATION_SET,
      DashConstants.REPRESENTATION,
      DashConstants.CONTENT_PROTECTION,
      DashConstants.ROLE,
      DashConstants.ACCESSIBILITY,
      DashConstants.AUDIO_CHANNEL_CONFIGURATION,
      DashConstants.CONTENT_COMPONENT,
      DashConstants.ESSENTIAL_PROPERTY,
      DashConstants.LABEL,
      DashConstants.S,
      DashConstants.SEGMENT_URL,
      DashConstants.EVENT,
      DashConstants.EVENT_STREAM,
      DashConstants.LOCATION,
      DashConstants.SERVICE_DESCRIPTION,
      DashConstants.SUPPLEMENTAL_PROPERTY,
      DashConstants.METRICS,
      DashConstants.REPORTING,
      DashConstants.PATCH_LOCATION,
      DashConstants.REPLACE,
      DashConstants.ADD,
      DashConstants.REMOVE,
      DashConstants.UTC_TIMING,
      DashConstants.INBAND_EVENT_STREAM,
      DashConstants.PRODUCER_REFERENCE_TIME,
      DashConstants.CONTENT_STEERING
    ];

    class DashParser {

      constructor() {
        this.attrMatchers = [
          new BooleanMatcher(),
          new DateTimeMatcher(),
          new DurationMatcher(),
          new NumericMatcher(),
        ];
      }

      parse(data) {
        try {
          let root = parse(data, {
            parseNode: true,
            attrMatchers: this.attrMatchers,
            nodesAsArray: arrayNodes
          });
          let ret = {};
          // If root element is xml node, then get first child node as root
          if (root.tagName.toLowerCase().indexOf('xml') !== -1) {
            for (let key in root) {
              if (Array.isArray(root[key])) {
                ret[key] = root[key][0];
                break
              } else if (typeof root[key] === 'object') {
                ret[key] = root[key];
                break
              }
            }
          } else {
            ret[root.tagName] = root;
            delete root.tagName;
          }
          return ret
        } catch (e) {
          return null
        }
      }

      xml2json(data) {
        const converter = new X2JS({
          escapeMode: false,
          attributePrefix: '',
          arrayAccessForm: 'property',
          emptyNodeForm: 'object',
          stripWhitespaces: false,
          enableToStringFunc: true,
          ignoreRoot: false,
          matchers: this.attrMatchers
        });

        converter.xml_str2json(data);
      }
    }

    return DashParser;

}));
//# sourceMappingURL=dash-parser.js.map
