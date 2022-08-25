<?php

global $mpd_features, $profiles, $logger;

$periods = $mpd_features['Period'];
foreach ($periods as $periodIndex => $period) {
    $adaptationSets = $period['AdaptationSet'];
    foreach ($adaptationSets as $adaptationSetIndex => $adaptationSet) {
        $representations = $adaptationSet['Representation'];
        foreach ($representations as $representationIndex => $representation) {
            $representationProfiles = $profiles[$periodIndex][$adaptationSetIndex][$representationIndex];
            if (strpos($representationProfiles, 'http://dashif.org/guidelines/dash-if-ondemand') !== false) {
                $segmentTemplate = DASHIF\Utility\getSegmentAccess(
                    $segmentTemplate,
                    $representation['SegmentTemplate']
                );
                $logger->test(
                    "DASH-IF IOP 4.3",
                    "Section 3.10.3",
                    "SegmentTemplate@indexRange attribute SHALL be present",
                    $segmentTemplate != null && $segmentTemplate['indexRange'] != null,
                    "FAIL",
                    "SegmentTemplate@indexRange found for period $periodIndex, adaptation $adaptationSetIndex, " .
                    "representation $representationIndex",
                    "SegmentTemplate@indexRange not found for period $periodIndex, adaptation $adaptationSetIndex, " .
                    "representation $representationIndex"
                );
            }
        }
    }
}