export const data = {
    "name": "ns1:timeSeriesResponseType",
    "declaredType": "org.cuahsi.waterml.TimeSeriesResponseType",
    "scope": "javax.xml.bind.JAXBElement$GlobalScope",
    "value": {
        "queryInfo": {
            "queryURL": "http://nwis.waterservices.usgs.gov/nwis/iv/sites=05427718&agencyCd=USGS&parameterCd=00060&startDT=2019-03-12T00:00:00.000-05:00&endDT=2019-03-20T23:59:59.999-05:00&siteStatus=all&format=json",
            "criteria": {
                "locationParam": "[USGS:05427718]",
                "variableParam": "[00060]",
                "timeParam": {
                    "beginDateTime": "2019-03-12T05:00:00.000",
                    "endDateTime": "2019-03-21T04:59:59.999"
                },
                "parameter": []
            },
            "note": [
                {
                    "value": "[USGS:05427718]",
                    "title": "filter:sites"
                },
                {
                    "value": "[USGS]",
                    "title": "filter:agencyCd"
                },
                {
                    "value": "[mode=RANGE, modifiedSince=null] interval={INTERVAL[2019-03-12T05:00:00.000Z/2019-03-21T04:59:59.999Z]}",
                    "title": "filter:timeRange"
                },
                {
                    "value": "methodIds=[ALL]",
                    "title": "filter:methodId"
                },
                {
                    "value": "2024-05-05T23:10:38.045Z",
                    "title": "requestDT"
                },
                {
                    "value": "af6261c0-0b34-11ef-8d83-4cd98f86fad9",
                    "title": "requestId"
                },
                {
                    "value": "Provisional data are subject to revision. Go to http://waterdata.usgs.gov/nwis/help/?provisional for more information.",
                    "title": "disclaimer"
                },
                {
                    "value": "nadww02",
                    "title": "server"
                }
            ]
        },
        "timeSeries": [
            {
                "sourceInfo": {
                    "siteName": "YAHARA RIVER AT WINDSOR, WI",
                    "siteCode": [
                        {
                            "value": "05427718",
                            "network": "NWIS",
                            "agencyCode": "USGS"
                        }
                    ],
                    "timeZoneInfo": {
                        "defaultTimeZone": {
                            "zoneOffset": "-06:00",
                            "zoneAbbreviation": "CST"
                        },
                        "daylightSavingsTimeZone": {
                            "zoneOffset": "-05:00",
                            "zoneAbbreviation": "CDT"
                        },
                        "siteUsesDaylightSavingsTime": true
                    },
                    "geoLocation": {
                        "geogLocation": {
                            "srs": "EPSG:4326",
                            "latitude": 43.20888889,
                            "longitude": -89.3525
                        },
                        "localSiteXY": []
                    },
                    "note": [],
                    "siteType": [],
                    "siteProperty": [
                        {
                            "value": "ST",
                            "name": "siteTypeCd"
                        },
                        {
                            "value": "07090001",
                            "name": "hucCd"
                        },
                        {
                            "value": "55",
                            "name": "stateCd"
                        },
                        {
                            "value": "55025",
                            "name": "countyCd"
                        }
                    ]
                },
                "variable": {
                    "variableCode": [
                        {
                            "value": "00060",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45807197,
                            "default": true
                        }
                    ],
                    "variableName": "Streamflow, ft&#179;/s",
                    "variableDescription": "Discharge, cubic feet per second",
                    "valueType": "Derived Value",
                    "unit": {
                        "unitCode": "ft3/s"
                    },
                    "options": {
                        "option": [
                            {
                                "name": "Statistic",
                                "optionCode": "00000"
                            }
                        ]
                    },
                    "note": [],
                    "noDataValue": -999999.0,
                    "variableProperty": [],
                    "oid": "45807197"
                },
                "values": [
                    {
                        "value": [
                            {
                                "value": "33.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T00:00:00.000-05:00"
                            },
                            {
                                "value": "33.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T00:15:00.000-05:00"
                            },
                            {
                                "value": "33.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T00:30:00.000-05:00"
                            },
                            {
                                "value": "33.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T00:45:00.000-05:00"
                            },
                            {
                                "value": "33.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T01:00:00.000-05:00"
                            },
                            {
                                "value": "33.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T01:15:00.000-05:00"
                            },
                            {
                                "value": "33.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T01:30:00.000-05:00"
                            },
                            {
                                "value": "33.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T01:45:00.000-05:00"
                            },
                            {
                                "value": "33.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T02:00:00.000-05:00"
                            },
                            {
                                "value": "33.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T02:15:00.000-05:00"
                            },
                            {
                                "value": "33.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T02:30:00.000-05:00"
                            },
                            {
                                "value": "33.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T02:45:00.000-05:00"
                            },
                            {
                                "value": "33.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T03:00:00.000-05:00"
                            },
                            {
                                "value": "33.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T03:15:00.000-05:00"
                            },
                            {
                                "value": "33.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T03:30:00.000-05:00"
                            },
                            {
                                "value": "32.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T03:45:00.000-05:00"
                            },
                            {
                                "value": "32.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T04:00:00.000-05:00"
                            },
                            {
                                "value": "33.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T04:15:00.000-05:00"
                            },
                            {
                                "value": "32.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T04:30:00.000-05:00"
                            },
                            {
                                "value": "32.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T04:45:00.000-05:00"
                            },
                            {
                                "value": "32.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T05:00:00.000-05:00"
                            },
                            {
                                "value": "32.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T05:15:00.000-05:00"
                            },
                            {
                                "value": "32.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T05:30:00.000-05:00"
                            },
                            {
                                "value": "32.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T05:45:00.000-05:00"
                            },
                            {
                                "value": "32.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T06:00:00.000-05:00"
                            },
                            {
                                "value": "32.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T06:15:00.000-05:00"
                            },
                            {
                                "value": "32.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T06:30:00.000-05:00"
                            },
                            {
                                "value": "32.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T06:45:00.000-05:00"
                            },
                            {
                                "value": "32.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T07:00:00.000-05:00"
                            },
                            {
                                "value": "32.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T07:15:00.000-05:00"
                            },
                            {
                                "value": "32.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T07:30:00.000-05:00"
                            },
                            {
                                "value": "31.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T07:45:00.000-05:00"
                            },
                            {
                                "value": "32.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T08:00:00.000-05:00"
                            },
                            {
                                "value": "31.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T08:15:00.000-05:00"
                            },
                            {
                                "value": "32.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T08:30:00.000-05:00"
                            },
                            {
                                "value": "31.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T08:45:00.000-05:00"
                            },
                            {
                                "value": "31.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T09:00:00.000-05:00"
                            },
                            {
                                "value": "31.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T09:15:00.000-05:00"
                            },
                            {
                                "value": "31.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T09:30:00.000-05:00"
                            },
                            {
                                "value": "31.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T09:45:00.000-05:00"
                            },
                            {
                                "value": "31.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T10:00:00.000-05:00"
                            },
                            {
                                "value": "31.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T10:15:00.000-05:00"
                            },
                            {
                                "value": "31.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T10:30:00.000-05:00"
                            },
                            {
                                "value": "31.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T10:35:00.000-05:00"
                            },
                            {
                                "value": "31.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T10:45:00.000-05:00"
                            },
                            {
                                "value": "31.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T11:00:00.000-05:00"
                            },
                            {
                                "value": "31.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T11:15:00.000-05:00"
                            },
                            {
                                "value": "31.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T11:30:00.000-05:00"
                            },
                            {
                                "value": "31.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T11:45:00.000-05:00"
                            },
                            {
                                "value": "32.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T12:00:00.000-05:00"
                            },
                            {
                                "value": "31.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T12:15:00.000-05:00"
                            },
                            {
                                "value": "32.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T12:30:00.000-05:00"
                            },
                            {
                                "value": "31.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T12:45:00.000-05:00"
                            },
                            {
                                "value": "31.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T13:00:00.000-05:00"
                            },
                            {
                                "value": "31.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T13:15:00.000-05:00"
                            },
                            {
                                "value": "31.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T13:30:00.000-05:00"
                            },
                            {
                                "value": "31.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T13:45:00.000-05:00"
                            },
                            {
                                "value": "31.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T14:00:00.000-05:00"
                            },
                            {
                                "value": "31.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T14:15:00.000-05:00"
                            },
                            {
                                "value": "31.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T14:30:00.000-05:00"
                            },
                            {
                                "value": "32.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T14:45:00.000-05:00"
                            },
                            {
                                "value": "33.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T15:00:00.000-05:00"
                            },
                            {
                                "value": "33.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T15:15:00.000-05:00"
                            },
                            {
                                "value": "34.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T15:30:00.000-05:00"
                            },
                            {
                                "value": "34.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T15:45:00.000-05:00"
                            },
                            {
                                "value": "35.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T16:00:00.000-05:00"
                            },
                            {
                                "value": "35.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T16:15:00.000-05:00"
                            },
                            {
                                "value": "35.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T16:30:00.000-05:00"
                            },
                            {
                                "value": "36.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T16:45:00.000-05:00"
                            },
                            {
                                "value": "35.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T17:00:00.000-05:00"
                            },
                            {
                                "value": "36.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T17:15:00.000-05:00"
                            },
                            {
                                "value": "36.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T17:30:00.000-05:00"
                            },
                            {
                                "value": "36.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T17:45:00.000-05:00"
                            },
                            {
                                "value": "36.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T18:00:00.000-05:00"
                            },
                            {
                                "value": "37.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T18:15:00.000-05:00"
                            },
                            {
                                "value": "37.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T18:20:00.000-05:00"
                            },
                            {
                                "value": "37.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T18:30:00.000-05:00"
                            },
                            {
                                "value": "38.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T18:40:00.000-05:00"
                            },
                            {
                                "value": "38.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T18:45:00.000-05:00"
                            },
                            {
                                "value": "38.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T18:55:00.000-05:00"
                            },
                            {
                                "value": "38.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T19:00:00.000-05:00"
                            },
                            {
                                "value": "38.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T19:15:00.000-05:00"
                            },
                            {
                                "value": "39.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T19:30:00.000-05:00"
                            },
                            {
                                "value": "39.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T19:45:00.000-05:00"
                            },
                            {
                                "value": "40.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T20:00:00.000-05:00"
                            },
                            {
                                "value": "41.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T20:15:00.000-05:00"
                            },
                            {
                                "value": "41.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T20:25:00.000-05:00"
                            },
                            {
                                "value": "41.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T20:30:00.000-05:00"
                            },
                            {
                                "value": "41.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T20:35:00.000-05:00"
                            },
                            {
                                "value": "41.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T20:40:00.000-05:00"
                            },
                            {
                                "value": "41.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T20:45:00.000-05:00"
                            },
                            {
                                "value": "42.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T20:50:00.000-05:00"
                            },
                            {
                                "value": "42.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T20:55:00.000-05:00"
                            },
                            {
                                "value": "42.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T21:00:00.000-05:00"
                            },
                            {
                                "value": "43.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T21:05:00.000-05:00"
                            },
                            {
                                "value": "42.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T21:10:00.000-05:00"
                            },
                            {
                                "value": "43.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T21:15:00.000-05:00"
                            },
                            {
                                "value": "43.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T21:20:00.000-05:00"
                            },
                            {
                                "value": "43.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T21:25:00.000-05:00"
                            },
                            {
                                "value": "43.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T21:30:00.000-05:00"
                            },
                            {
                                "value": "44.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T21:35:00.000-05:00"
                            },
                            {
                                "value": "44.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T21:40:00.000-05:00"
                            },
                            {
                                "value": "44.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T21:45:00.000-05:00"
                            },
                            {
                                "value": "44.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T21:50:00.000-05:00"
                            },
                            {
                                "value": "45.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T21:55:00.000-05:00"
                            },
                            {
                                "value": "45.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T22:00:00.000-05:00"
                            },
                            {
                                "value": "46.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T22:05:00.000-05:00"
                            },
                            {
                                "value": "45.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T22:10:00.000-05:00"
                            },
                            {
                                "value": "46.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T22:15:00.000-05:00"
                            },
                            {
                                "value": "47.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T22:20:00.000-05:00"
                            },
                            {
                                "value": "47.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T22:25:00.000-05:00"
                            },
                            {
                                "value": "47.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T22:30:00.000-05:00"
                            },
                            {
                                "value": "48.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T22:35:00.000-05:00"
                            },
                            {
                                "value": "48.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T22:40:00.000-05:00"
                            },
                            {
                                "value": "48.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T22:45:00.000-05:00"
                            },
                            {
                                "value": "48.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T22:50:00.000-05:00"
                            },
                            {
                                "value": "49.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T22:55:00.000-05:00"
                            },
                            {
                                "value": "50.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T23:00:00.000-05:00"
                            },
                            {
                                "value": "50.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T23:05:00.000-05:00"
                            },
                            {
                                "value": "50.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T23:10:00.000-05:00"
                            },
                            {
                                "value": "51.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T23:15:00.000-05:00"
                            },
                            {
                                "value": "50.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T23:20:00.000-05:00"
                            },
                            {
                                "value": "51.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T23:25:00.000-05:00"
                            },
                            {
                                "value": "52.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T23:30:00.000-05:00"
                            },
                            {
                                "value": "51.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T23:35:00.000-05:00"
                            },
                            {
                                "value": "52.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T23:40:00.000-05:00"
                            },
                            {
                                "value": "53.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T23:45:00.000-05:00"
                            },
                            {
                                "value": "53.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T23:50:00.000-05:00"
                            },
                            {
                                "value": "53.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-12T23:55:00.000-05:00"
                            },
                            {
                                "value": "53.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T00:00:00.000-05:00"
                            },
                            {
                                "value": "53.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T00:05:00.000-05:00"
                            },
                            {
                                "value": "54.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T00:10:00.000-05:00"
                            },
                            {
                                "value": "54.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T00:15:00.000-05:00"
                            },
                            {
                                "value": "54.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T00:20:00.000-05:00"
                            },
                            {
                                "value": "55.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T00:25:00.000-05:00"
                            },
                            {
                                "value": "56.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T00:30:00.000-05:00"
                            },
                            {
                                "value": "56.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T00:35:00.000-05:00"
                            },
                            {
                                "value": "56.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T00:40:00.000-05:00"
                            },
                            {
                                "value": "56.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T00:45:00.000-05:00"
                            },
                            {
                                "value": "56.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T00:50:00.000-05:00"
                            },
                            {
                                "value": "57.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T00:55:00.000-05:00"
                            },
                            {
                                "value": "58.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T01:00:00.000-05:00"
                            },
                            {
                                "value": "58.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T01:05:00.000-05:00"
                            },
                            {
                                "value": "58.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T01:10:00.000-05:00"
                            },
                            {
                                "value": "59.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T01:15:00.000-05:00"
                            },
                            {
                                "value": "60.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T01:20:00.000-05:00"
                            },
                            {
                                "value": "60.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T01:25:00.000-05:00"
                            },
                            {
                                "value": "60.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T01:30:00.000-05:00"
                            },
                            {
                                "value": "61.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T01:35:00.000-05:00"
                            },
                            {
                                "value": "62.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T01:40:00.000-05:00"
                            },
                            {
                                "value": "62.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T01:45:00.000-05:00"
                            },
                            {
                                "value": "62.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T01:50:00.000-05:00"
                            },
                            {
                                "value": "63.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T01:55:00.000-05:00"
                            },
                            {
                                "value": "64.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T02:00:00.000-05:00"
                            },
                            {
                                "value": "64.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T02:05:00.000-05:00"
                            },
                            {
                                "value": "65.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T02:10:00.000-05:00"
                            },
                            {
                                "value": "66.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T02:15:00.000-05:00"
                            },
                            {
                                "value": "67.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T02:20:00.000-05:00"
                            },
                            {
                                "value": "67.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T02:25:00.000-05:00"
                            },
                            {
                                "value": "68.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T02:30:00.000-05:00"
                            },
                            {
                                "value": "68.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T02:35:00.000-05:00"
                            },
                            {
                                "value": "69.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T02:40:00.000-05:00"
                            },
                            {
                                "value": "70.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T02:45:00.000-05:00"
                            },
                            {
                                "value": "70.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T02:50:00.000-05:00"
                            },
                            {
                                "value": "73.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T02:55:00.000-05:00"
                            },
                            {
                                "value": "73.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T03:00:00.000-05:00"
                            },
                            {
                                "value": "74.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T03:05:00.000-05:00"
                            },
                            {
                                "value": "74.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T03:10:00.000-05:00"
                            },
                            {
                                "value": "75.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T03:15:00.000-05:00"
                            },
                            {
                                "value": "76.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T03:20:00.000-05:00"
                            },
                            {
                                "value": "77.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T03:25:00.000-05:00"
                            },
                            {
                                "value": "79.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T03:30:00.000-05:00"
                            },
                            {
                                "value": "80.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T03:35:00.000-05:00"
                            },
                            {
                                "value": "81.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T03:40:00.000-05:00"
                            },
                            {
                                "value": "83.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T03:45:00.000-05:00"
                            },
                            {
                                "value": "84.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T03:50:00.000-05:00"
                            },
                            {
                                "value": "85.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T03:55:00.000-05:00"
                            },
                            {
                                "value": "87.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T04:00:00.000-05:00"
                            },
                            {
                                "value": "89.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T04:05:00.000-05:00"
                            },
                            {
                                "value": "92.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T04:10:00.000-05:00"
                            },
                            {
                                "value": "94.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T04:15:00.000-05:00"
                            },
                            {
                                "value": "97.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T04:20:00.000-05:00"
                            },
                            {
                                "value": "100",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T04:25:00.000-05:00"
                            },
                            {
                                "value": "104",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T04:30:00.000-05:00"
                            },
                            {
                                "value": "108",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T04:35:00.000-05:00"
                            },
                            {
                                "value": "111",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T04:40:00.000-05:00"
                            },
                            {
                                "value": "114",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T04:45:00.000-05:00"
                            },
                            {
                                "value": "118",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T04:50:00.000-05:00"
                            },
                            {
                                "value": "123",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T04:55:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T05:00:00.000-05:00"
                            },
                            {
                                "value": "131",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T05:05:00.000-05:00"
                            },
                            {
                                "value": "135",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T05:10:00.000-05:00"
                            },
                            {
                                "value": "139",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T05:15:00.000-05:00"
                            },
                            {
                                "value": "142",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T05:20:00.000-05:00"
                            },
                            {
                                "value": "148",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T05:25:00.000-05:00"
                            },
                            {
                                "value": "152",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T05:30:00.000-05:00"
                            },
                            {
                                "value": "155",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T05:35:00.000-05:00"
                            },
                            {
                                "value": "158",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T05:40:00.000-05:00"
                            },
                            {
                                "value": "162",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T05:45:00.000-05:00"
                            },
                            {
                                "value": "167",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T05:50:00.000-05:00"
                            },
                            {
                                "value": "169",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T05:55:00.000-05:00"
                            },
                            {
                                "value": "174",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T06:00:00.000-05:00"
                            },
                            {
                                "value": "178",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T06:05:00.000-05:00"
                            },
                            {
                                "value": "181",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T06:10:00.000-05:00"
                            },
                            {
                                "value": "184",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T06:15:00.000-05:00"
                            },
                            {
                                "value": "187",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T06:20:00.000-05:00"
                            },
                            {
                                "value": "191",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T06:25:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T06:30:00.000-05:00"
                            },
                            {
                                "value": "198",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T06:35:00.000-05:00"
                            },
                            {
                                "value": "201",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T06:40:00.000-05:00"
                            },
                            {
                                "value": "205",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T06:45:00.000-05:00"
                            },
                            {
                                "value": "208",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T06:50:00.000-05:00"
                            },
                            {
                                "value": "210",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T06:55:00.000-05:00"
                            },
                            {
                                "value": "213",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T07:00:00.000-05:00"
                            },
                            {
                                "value": "218",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T07:05:00.000-05:00"
                            },
                            {
                                "value": "222",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T07:10:00.000-05:00"
                            },
                            {
                                "value": "226",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T07:15:00.000-05:00"
                            },
                            {
                                "value": "228",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T07:20:00.000-05:00"
                            },
                            {
                                "value": "233",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T07:25:00.000-05:00"
                            },
                            {
                                "value": "235",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T07:30:00.000-05:00"
                            },
                            {
                                "value": "241",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T07:35:00.000-05:00"
                            },
                            {
                                "value": "244",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T07:40:00.000-05:00"
                            },
                            {
                                "value": "246",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T07:45:00.000-05:00"
                            },
                            {
                                "value": "249",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T07:50:00.000-05:00"
                            },
                            {
                                "value": "252",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T07:55:00.000-05:00"
                            },
                            {
                                "value": "256",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T08:00:00.000-05:00"
                            },
                            {
                                "value": "260",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T08:05:00.000-05:00"
                            },
                            {
                                "value": "263",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T08:10:00.000-05:00"
                            },
                            {
                                "value": "265",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T08:15:00.000-05:00"
                            },
                            {
                                "value": "267",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T08:20:00.000-05:00"
                            },
                            {
                                "value": "270",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T08:25:00.000-05:00"
                            },
                            {
                                "value": "274",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T08:30:00.000-05:00"
                            },
                            {
                                "value": "274",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T08:35:00.000-05:00"
                            },
                            {
                                "value": "275",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T08:40:00.000-05:00"
                            },
                            {
                                "value": "279",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T08:45:00.000-05:00"
                            },
                            {
                                "value": "281",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T08:50:00.000-05:00"
                            },
                            {
                                "value": "284",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T08:55:00.000-05:00"
                            },
                            {
                                "value": "289",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T09:00:00.000-05:00"
                            },
                            {
                                "value": "296",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T09:05:00.000-05:00"
                            },
                            {
                                "value": "299",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T09:10:00.000-05:00"
                            },
                            {
                                "value": "310",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T09:15:00.000-05:00"
                            },
                            {
                                "value": "310",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T09:20:00.000-05:00"
                            },
                            {
                                "value": "313",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T09:25:00.000-05:00"
                            },
                            {
                                "value": "320",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T09:30:00.000-05:00"
                            },
                            {
                                "value": "322",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T09:35:00.000-05:00"
                            },
                            {
                                "value": "326",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T09:40:00.000-05:00"
                            },
                            {
                                "value": "330",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T09:45:00.000-05:00"
                            },
                            {
                                "value": "336",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T09:50:00.000-05:00"
                            },
                            {
                                "value": "335",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T09:55:00.000-05:00"
                            },
                            {
                                "value": "339",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T10:00:00.000-05:00"
                            },
                            {
                                "value": "343",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T10:05:00.000-05:00"
                            },
                            {
                                "value": "336",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T10:10:00.000-05:00"
                            },
                            {
                                "value": "347",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T10:15:00.000-05:00"
                            },
                            {
                                "value": "350",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T10:20:00.000-05:00"
                            },
                            {
                                "value": "351",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T10:25:00.000-05:00"
                            },
                            {
                                "value": "347",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T10:30:00.000-05:00"
                            },
                            {
                                "value": "349",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T10:35:00.000-05:00"
                            },
                            {
                                "value": "357",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T10:40:00.000-05:00"
                            },
                            {
                                "value": "361",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T10:45:00.000-05:00"
                            },
                            {
                                "value": "360",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T10:50:00.000-05:00"
                            },
                            {
                                "value": "365",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T10:55:00.000-05:00"
                            },
                            {
                                "value": "373",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T11:00:00.000-05:00"
                            },
                            {
                                "value": "366",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T11:05:00.000-05:00"
                            },
                            {
                                "value": "367",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T11:10:00.000-05:00"
                            },
                            {
                                "value": "373",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T11:15:00.000-05:00"
                            },
                            {
                                "value": "380",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T11:20:00.000-05:00"
                            },
                            {
                                "value": "380",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T11:25:00.000-05:00"
                            },
                            {
                                "value": "374",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T11:30:00.000-05:00"
                            },
                            {
                                "value": "376",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T11:35:00.000-05:00"
                            },
                            {
                                "value": "378",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T11:40:00.000-05:00"
                            },
                            {
                                "value": "376",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T11:45:00.000-05:00"
                            },
                            {
                                "value": "396",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T11:50:00.000-05:00"
                            },
                            {
                                "value": "378",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T11:55:00.000-05:00"
                            },
                            {
                                "value": "393",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T12:00:00.000-05:00"
                            },
                            {
                                "value": "388",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T12:05:00.000-05:00"
                            },
                            {
                                "value": "377",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T12:10:00.000-05:00"
                            },
                            {
                                "value": "399",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T12:15:00.000-05:00"
                            },
                            {
                                "value": "407",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T12:20:00.000-05:00"
                            },
                            {
                                "value": "410",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T12:25:00.000-05:00"
                            },
                            {
                                "value": "396",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T12:30:00.000-05:00"
                            },
                            {
                                "value": "398",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T12:35:00.000-05:00"
                            },
                            {
                                "value": "410",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T12:40:00.000-05:00"
                            },
                            {
                                "value": "415",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T12:45:00.000-05:00"
                            },
                            {
                                "value": "442",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T12:50:00.000-05:00"
                            },
                            {
                                "value": "422",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T12:55:00.000-05:00"
                            },
                            {
                                "value": "426",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T13:00:00.000-05:00"
                            },
                            {
                                "value": "429",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T13:05:00.000-05:00"
                            },
                            {
                                "value": "425",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T13:10:00.000-05:00"
                            },
                            {
                                "value": "439",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T13:15:00.000-05:00"
                            },
                            {
                                "value": "420",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T13:20:00.000-05:00"
                            },
                            {
                                "value": "431",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T13:25:00.000-05:00"
                            },
                            {
                                "value": "422",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T13:30:00.000-05:00"
                            },
                            {
                                "value": "425",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T13:35:00.000-05:00"
                            },
                            {
                                "value": "457",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T13:40:00.000-05:00"
                            },
                            {
                                "value": "444",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T13:45:00.000-05:00"
                            },
                            {
                                "value": "449",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T13:50:00.000-05:00"
                            },
                            {
                                "value": "448",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T13:55:00.000-05:00"
                            },
                            {
                                "value": "478",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T14:00:00.000-05:00"
                            },
                            {
                                "value": "478",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T14:05:00.000-05:00"
                            },
                            {
                                "value": "466",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T14:10:00.000-05:00"
                            },
                            {
                                "value": "487",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T14:15:00.000-05:00"
                            },
                            {
                                "value": "480",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T14:20:00.000-05:00"
                            },
                            {
                                "value": "502",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T14:25:00.000-05:00"
                            },
                            {
                                "value": "485",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T14:30:00.000-05:00"
                            },
                            {
                                "value": "512",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T14:35:00.000-05:00"
                            },
                            {
                                "value": "491",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T14:40:00.000-05:00"
                            },
                            {
                                "value": "516",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T14:45:00.000-05:00"
                            },
                            {
                                "value": "503",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T14:50:00.000-05:00"
                            },
                            {
                                "value": "525",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T14:55:00.000-05:00"
                            },
                            {
                                "value": "519",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T15:00:00.000-05:00"
                            },
                            {
                                "value": "540",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T15:05:00.000-05:00"
                            },
                            {
                                "value": "544",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T15:10:00.000-05:00"
                            },
                            {
                                "value": "495",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T15:15:00.000-05:00"
                            },
                            {
                                "value": "531",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T15:20:00.000-05:00"
                            },
                            {
                                "value": "565",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T15:25:00.000-05:00"
                            },
                            {
                                "value": "555",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T15:30:00.000-05:00"
                            },
                            {
                                "value": "561",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T15:35:00.000-05:00"
                            },
                            {
                                "value": "606",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T15:40:00.000-05:00"
                            },
                            {
                                "value": "609",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T15:45:00.000-05:00"
                            },
                            {
                                "value": "618",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T15:50:00.000-05:00"
                            },
                            {
                                "value": "623",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T15:55:00.000-05:00"
                            },
                            {
                                "value": "609",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T16:00:00.000-05:00"
                            },
                            {
                                "value": "613",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T16:05:00.000-05:00"
                            },
                            {
                                "value": "642",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T16:10:00.000-05:00"
                            },
                            {
                                "value": "634",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T16:15:00.000-05:00"
                            },
                            {
                                "value": "655",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T16:20:00.000-05:00"
                            },
                            {
                                "value": "639",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T16:25:00.000-05:00"
                            },
                            {
                                "value": "610",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T16:30:00.000-05:00"
                            },
                            {
                                "value": "674",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T16:35:00.000-05:00"
                            },
                            {
                                "value": "661",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T16:40:00.000-05:00"
                            },
                            {
                                "value": "634",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T16:45:00.000-05:00"
                            },
                            {
                                "value": "645",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T16:50:00.000-05:00"
                            },
                            {
                                "value": "669",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T16:55:00.000-05:00"
                            },
                            {
                                "value": "716",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T17:00:00.000-05:00"
                            },
                            {
                                "value": "649",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T17:05:00.000-05:00"
                            },
                            {
                                "value": "685",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T17:10:00.000-05:00"
                            },
                            {
                                "value": "658",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T17:15:00.000-05:00"
                            },
                            {
                                "value": "582",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T17:20:00.000-05:00"
                            },
                            {
                                "value": "626",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T17:25:00.000-05:00"
                            },
                            {
                                "value": "629",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T17:30:00.000-05:00"
                            },
                            {
                                "value": "680",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T17:35:00.000-05:00"
                            },
                            {
                                "value": "672",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T17:40:00.000-05:00"
                            },
                            {
                                "value": "637",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T17:45:00.000-05:00"
                            },
                            {
                                "value": "672",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T17:50:00.000-05:00"
                            },
                            {
                                "value": "690",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T17:55:00.000-05:00"
                            },
                            {
                                "value": "690",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T18:00:00.000-05:00"
                            },
                            {
                                "value": "686",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T18:05:00.000-05:00"
                            },
                            {
                                "value": "700",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T18:10:00.000-05:00"
                            },
                            {
                                "value": "721",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T18:15:00.000-05:00"
                            },
                            {
                                "value": "669",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T18:20:00.000-05:00"
                            },
                            {
                                "value": "741",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T18:25:00.000-05:00"
                            },
                            {
                                "value": "747",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T18:30:00.000-05:00"
                            },
                            {
                                "value": "741",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T18:35:00.000-05:00"
                            },
                            {
                                "value": "723",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T18:40:00.000-05:00"
                            },
                            {
                                "value": "738",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T18:45:00.000-05:00"
                            },
                            {
                                "value": "705",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T18:50:00.000-05:00"
                            },
                            {
                                "value": "750",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T18:55:00.000-05:00"
                            },
                            {
                                "value": "707",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T19:00:00.000-05:00"
                            },
                            {
                                "value": "727",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T19:05:00.000-05:00"
                            },
                            {
                                "value": "689",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T19:10:00.000-05:00"
                            },
                            {
                                "value": "754",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T19:15:00.000-05:00"
                            },
                            {
                                "value": "685",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T19:20:00.000-05:00"
                            },
                            {
                                "value": "674",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T19:25:00.000-05:00"
                            },
                            {
                                "value": "676",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T19:30:00.000-05:00"
                            },
                            {
                                "value": "678",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T19:35:00.000-05:00"
                            },
                            {
                                "value": "726",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T19:40:00.000-05:00"
                            },
                            {
                                "value": "689",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T19:45:00.000-05:00"
                            },
                            {
                                "value": "769",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T19:50:00.000-05:00"
                            },
                            {
                                "value": "746",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T19:55:00.000-05:00"
                            },
                            {
                                "value": "737",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T20:00:00.000-05:00"
                            },
                            {
                                "value": "753",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T20:05:00.000-05:00"
                            },
                            {
                                "value": "672",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T20:10:00.000-05:00"
                            },
                            {
                                "value": "738",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T20:15:00.000-05:00"
                            },
                            {
                                "value": "741",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T20:20:00.000-05:00"
                            },
                            {
                                "value": "700",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T20:25:00.000-05:00"
                            },
                            {
                                "value": "724",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T20:30:00.000-05:00"
                            },
                            {
                                "value": "722",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T20:35:00.000-05:00"
                            },
                            {
                                "value": "806",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T20:40:00.000-05:00"
                            },
                            {
                                "value": "738",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T20:45:00.000-05:00"
                            },
                            {
                                "value": "787",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T20:50:00.000-05:00"
                            },
                            {
                                "value": "731",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T20:55:00.000-05:00"
                            },
                            {
                                "value": "760",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T21:00:00.000-05:00"
                            },
                            {
                                "value": "731",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T21:05:00.000-05:00"
                            },
                            {
                                "value": "741",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T21:10:00.000-05:00"
                            },
                            {
                                "value": "778",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T21:15:00.000-05:00"
                            },
                            {
                                "value": "757",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T21:20:00.000-05:00"
                            },
                            {
                                "value": "749",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T21:25:00.000-05:00"
                            },
                            {
                                "value": "727",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T21:30:00.000-05:00"
                            },
                            {
                                "value": "808",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T21:35:00.000-05:00"
                            },
                            {
                                "value": "758",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T21:40:00.000-05:00"
                            },
                            {
                                "value": "733",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T21:45:00.000-05:00"
                            },
                            {
                                "value": "822",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T21:50:00.000-05:00"
                            },
                            {
                                "value": "771",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T21:55:00.000-05:00"
                            },
                            {
                                "value": "704",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T22:00:00.000-05:00"
                            },
                            {
                                "value": "764",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T22:05:00.000-05:00"
                            },
                            {
                                "value": "789",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T22:10:00.000-05:00"
                            },
                            {
                                "value": "827",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T22:15:00.000-05:00"
                            },
                            {
                                "value": "788",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T22:20:00.000-05:00"
                            },
                            {
                                "value": "700",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T22:25:00.000-05:00"
                            },
                            {
                                "value": "747",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T22:30:00.000-05:00"
                            },
                            {
                                "value": "808",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T22:35:00.000-05:00"
                            },
                            {
                                "value": "749",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T22:40:00.000-05:00"
                            },
                            {
                                "value": "725",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T22:45:00.000-05:00"
                            },
                            {
                                "value": "747",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T22:50:00.000-05:00"
                            },
                            {
                                "value": "757",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T22:55:00.000-05:00"
                            },
                            {
                                "value": "711",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T23:00:00.000-05:00"
                            },
                            {
                                "value": "726",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T23:05:00.000-05:00"
                            },
                            {
                                "value": "730",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T23:10:00.000-05:00"
                            },
                            {
                                "value": "735",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T23:15:00.000-05:00"
                            },
                            {
                                "value": "748",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T23:20:00.000-05:00"
                            },
                            {
                                "value": "691",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T23:25:00.000-05:00"
                            },
                            {
                                "value": "724",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T23:30:00.000-05:00"
                            },
                            {
                                "value": "786",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T23:35:00.000-05:00"
                            },
                            {
                                "value": "767",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T23:40:00.000-05:00"
                            },
                            {
                                "value": "748",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T23:45:00.000-05:00"
                            },
                            {
                                "value": "788",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T23:50:00.000-05:00"
                            },
                            {
                                "value": "779",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-13T23:55:00.000-05:00"
                            },
                            {
                                "value": "684",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T00:00:00.000-05:00"
                            },
                            {
                                "value": "669",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T00:05:00.000-05:00"
                            },
                            {
                                "value": "718",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T00:10:00.000-05:00"
                            },
                            {
                                "value": "734",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T00:15:00.000-05:00"
                            },
                            {
                                "value": "707",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T00:20:00.000-05:00"
                            },
                            {
                                "value": "750",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T00:25:00.000-05:00"
                            },
                            {
                                "value": "688",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T00:30:00.000-05:00"
                            },
                            {
                                "value": "716",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T00:35:00.000-05:00"
                            },
                            {
                                "value": "657",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T00:40:00.000-05:00"
                            },
                            {
                                "value": "748",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T00:45:00.000-05:00"
                            },
                            {
                                "value": "726",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T00:50:00.000-05:00"
                            },
                            {
                                "value": "669",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T00:55:00.000-05:00"
                            },
                            {
                                "value": "724",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T01:00:00.000-05:00"
                            },
                            {
                                "value": "608",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T01:05:00.000-05:00"
                            },
                            {
                                "value": "631",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T01:10:00.000-05:00"
                            },
                            {
                                "value": "756",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T01:15:00.000-05:00"
                            },
                            {
                                "value": "685",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T01:20:00.000-05:00"
                            },
                            {
                                "value": "708",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T01:25:00.000-05:00"
                            },
                            {
                                "value": "749",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T01:30:00.000-05:00"
                            },
                            {
                                "value": "566",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T01:35:00.000-05:00"
                            },
                            {
                                "value": "591",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T01:40:00.000-05:00"
                            },
                            {
                                "value": "564",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T01:45:00.000-05:00"
                            },
                            {
                                "value": "581",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T01:50:00.000-05:00"
                            },
                            {
                                "value": "674",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T01:55:00.000-05:00"
                            },
                            {
                                "value": "591",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T02:00:00.000-05:00"
                            },
                            {
                                "value": "668",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T02:05:00.000-05:00"
                            },
                            {
                                "value": "627",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T02:10:00.000-05:00"
                            },
                            {
                                "value": "677",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T02:15:00.000-05:00"
                            },
                            {
                                "value": "652",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T02:20:00.000-05:00"
                            },
                            {
                                "value": "645",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T02:25:00.000-05:00"
                            },
                            {
                                "value": "531",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T02:30:00.000-05:00"
                            },
                            {
                                "value": "744",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T02:35:00.000-05:00"
                            },
                            {
                                "value": "712",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T02:40:00.000-05:00"
                            },
                            {
                                "value": "715",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T02:45:00.000-05:00"
                            },
                            {
                                "value": "693",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T02:50:00.000-05:00"
                            },
                            {
                                "value": "576",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T02:55:00.000-05:00"
                            },
                            {
                                "value": "737",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T03:00:00.000-05:00"
                            },
                            {
                                "value": "722",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T03:05:00.000-05:00"
                            },
                            {
                                "value": "707",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T03:10:00.000-05:00"
                            },
                            {
                                "value": "694",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T03:15:00.000-05:00"
                            },
                            {
                                "value": "644",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T03:20:00.000-05:00"
                            },
                            {
                                "value": "708",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T03:25:00.000-05:00"
                            },
                            {
                                "value": "786",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T03:30:00.000-05:00"
                            },
                            {
                                "value": "672",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T03:35:00.000-05:00"
                            },
                            {
                                "value": "692",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T03:40:00.000-05:00"
                            },
                            {
                                "value": "750",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T03:45:00.000-05:00"
                            },
                            {
                                "value": "658",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T03:50:00.000-05:00"
                            },
                            {
                                "value": "726",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T03:55:00.000-05:00"
                            },
                            {
                                "value": "744",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T04:00:00.000-05:00"
                            },
                            {
                                "value": "698",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T04:05:00.000-05:00"
                            },
                            {
                                "value": "702",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T04:10:00.000-05:00"
                            },
                            {
                                "value": "683",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T04:15:00.000-05:00"
                            },
                            {
                                "value": "707",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T04:20:00.000-05:00"
                            },
                            {
                                "value": "667",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T04:25:00.000-05:00"
                            },
                            {
                                "value": "673",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T04:30:00.000-05:00"
                            },
                            {
                                "value": "637",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T04:35:00.000-05:00"
                            },
                            {
                                "value": "629",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T04:40:00.000-05:00"
                            },
                            {
                                "value": "698",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T04:45:00.000-05:00"
                            },
                            {
                                "value": "689",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T04:50:00.000-05:00"
                            },
                            {
                                "value": "860",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T04:55:00.000-05:00"
                            },
                            {
                                "value": "745",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T05:00:00.000-05:00"
                            },
                            {
                                "value": "775",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T05:05:00.000-05:00"
                            },
                            {
                                "value": "718",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T05:10:00.000-05:00"
                            },
                            {
                                "value": "662",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T05:15:00.000-05:00"
                            },
                            {
                                "value": "690",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T05:20:00.000-05:00"
                            },
                            {
                                "value": "563",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T05:25:00.000-05:00"
                            },
                            {
                                "value": "713",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T05:30:00.000-05:00"
                            },
                            {
                                "value": "646",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T05:35:00.000-05:00"
                            },
                            {
                                "value": "682",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T05:40:00.000-05:00"
                            },
                            {
                                "value": "750",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T05:45:00.000-05:00"
                            },
                            {
                                "value": "658",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T05:50:00.000-05:00"
                            },
                            {
                                "value": "776",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T05:55:00.000-05:00"
                            },
                            {
                                "value": "656",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T06:00:00.000-05:00"
                            },
                            {
                                "value": "689",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T06:05:00.000-05:00"
                            },
                            {
                                "value": "759",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T06:10:00.000-05:00"
                            },
                            {
                                "value": "584",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T06:15:00.000-05:00"
                            },
                            {
                                "value": "579",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T06:20:00.000-05:00"
                            },
                            {
                                "value": "692",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T06:25:00.000-05:00"
                            },
                            {
                                "value": "748",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T06:30:00.000-05:00"
                            },
                            {
                                "value": "660",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T06:35:00.000-05:00"
                            },
                            {
                                "value": "713",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T06:40:00.000-05:00"
                            },
                            {
                                "value": "737",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T06:45:00.000-05:00"
                            },
                            {
                                "value": "730",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T06:50:00.000-05:00"
                            },
                            {
                                "value": "704",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T06:55:00.000-05:00"
                            },
                            {
                                "value": "672",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T07:00:00.000-05:00"
                            },
                            {
                                "value": "697",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T07:05:00.000-05:00"
                            },
                            {
                                "value": "717",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T07:10:00.000-05:00"
                            },
                            {
                                "value": "698",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T07:15:00.000-05:00"
                            },
                            {
                                "value": "683",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T07:20:00.000-05:00"
                            },
                            {
                                "value": "674",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T07:25:00.000-05:00"
                            },
                            {
                                "value": "720",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T07:30:00.000-05:00"
                            },
                            {
                                "value": "702",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T07:35:00.000-05:00"
                            },
                            {
                                "value": "704",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T07:40:00.000-05:00"
                            },
                            {
                                "value": "724",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T07:45:00.000-05:00"
                            },
                            {
                                "value": "750",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T07:50:00.000-05:00"
                            },
                            {
                                "value": "711",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T07:55:00.000-05:00"
                            },
                            {
                                "value": "627",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T08:00:00.000-05:00"
                            },
                            {
                                "value": "717",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T08:05:00.000-05:00"
                            },
                            {
                                "value": "703",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T08:10:00.000-05:00"
                            },
                            {
                                "value": "717",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T08:15:00.000-05:00"
                            },
                            {
                                "value": "649",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T08:20:00.000-05:00"
                            },
                            {
                                "value": "785",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T08:25:00.000-05:00"
                            },
                            {
                                "value": "732",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T08:30:00.000-05:00"
                            },
                            {
                                "value": "720",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T08:35:00.000-05:00"
                            },
                            {
                                "value": "622",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T08:40:00.000-05:00"
                            },
                            {
                                "value": "748",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T08:45:00.000-05:00"
                            },
                            {
                                "value": "680",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T08:50:00.000-05:00"
                            },
                            {
                                "value": "713",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T08:55:00.000-05:00"
                            },
                            {
                                "value": "765",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T09:00:00.000-05:00"
                            },
                            {
                                "value": "752",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T09:05:00.000-05:00"
                            },
                            {
                                "value": "709",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T09:10:00.000-05:00"
                            },
                            {
                                "value": "744",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T09:15:00.000-05:00"
                            },
                            {
                                "value": "638",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T09:20:00.000-05:00"
                            },
                            {
                                "value": "759",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T09:25:00.000-05:00"
                            },
                            {
                                "value": "777",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T09:30:00.000-05:00"
                            },
                            {
                                "value": "611",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T09:35:00.000-05:00"
                            },
                            {
                                "value": "730",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T09:40:00.000-05:00"
                            },
                            {
                                "value": "684",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T09:45:00.000-05:00"
                            },
                            {
                                "value": "642",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T09:50:00.000-05:00"
                            },
                            {
                                "value": "624",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T09:55:00.000-05:00"
                            },
                            {
                                "value": "679",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T10:00:00.000-05:00"
                            },
                            {
                                "value": "644",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T10:05:00.000-05:00"
                            },
                            {
                                "value": "694",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T10:10:00.000-05:00"
                            },
                            {
                                "value": "660",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T10:15:00.000-05:00"
                            },
                            {
                                "value": "657",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T10:20:00.000-05:00"
                            },
                            {
                                "value": "672",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T10:25:00.000-05:00"
                            },
                            {
                                "value": "648",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T10:30:00.000-05:00"
                            },
                            {
                                "value": "703",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T10:35:00.000-05:00"
                            },
                            {
                                "value": "637",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T10:40:00.000-05:00"
                            },
                            {
                                "value": "746",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T10:45:00.000-05:00"
                            },
                            {
                                "value": "578",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T10:50:00.000-05:00"
                            },
                            {
                                "value": "763",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T10:55:00.000-05:00"
                            },
                            {
                                "value": "676",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T11:00:00.000-05:00"
                            },
                            {
                                "value": "753",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T11:05:00.000-05:00"
                            },
                            {
                                "value": "628",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T11:10:00.000-05:00"
                            },
                            {
                                "value": "702",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T11:15:00.000-05:00"
                            },
                            {
                                "value": "522",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T11:20:00.000-05:00"
                            },
                            {
                                "value": "587",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T11:25:00.000-05:00"
                            },
                            {
                                "value": "711",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T11:30:00.000-05:00"
                            },
                            {
                                "value": "663",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T11:35:00.000-05:00"
                            },
                            {
                                "value": "719",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T11:40:00.000-05:00"
                            },
                            {
                                "value": "665",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T11:45:00.000-05:00"
                            },
                            {
                                "value": "656",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T11:50:00.000-05:00"
                            },
                            {
                                "value": "644",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T11:55:00.000-05:00"
                            },
                            {
                                "value": "568",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T12:00:00.000-05:00"
                            },
                            {
                                "value": "568",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T12:05:00.000-05:00"
                            },
                            {
                                "value": "666",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T12:10:00.000-05:00"
                            },
                            {
                                "value": "725",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T12:15:00.000-05:00"
                            },
                            {
                                "value": "734",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T12:20:00.000-05:00"
                            },
                            {
                                "value": "649",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T12:25:00.000-05:00"
                            },
                            {
                                "value": "623",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T12:30:00.000-05:00"
                            },
                            {
                                "value": "728",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T12:35:00.000-05:00"
                            },
                            {
                                "value": "768",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T12:40:00.000-05:00"
                            },
                            {
                                "value": "777",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T12:45:00.000-05:00"
                            },
                            {
                                "value": "636",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T12:50:00.000-05:00"
                            },
                            {
                                "value": "667",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T12:55:00.000-05:00"
                            },
                            {
                                "value": "740",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T13:00:00.000-05:00"
                            },
                            {
                                "value": "812",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T13:05:00.000-05:00"
                            },
                            {
                                "value": "878",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T13:10:00.000-05:00"
                            },
                            {
                                "value": "693",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T13:15:00.000-05:00"
                            },
                            {
                                "value": "863",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T13:20:00.000-05:00"
                            },
                            {
                                "value": "795",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T13:25:00.000-05:00"
                            },
                            {
                                "value": "871",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T13:30:00.000-05:00"
                            },
                            {
                                "value": "791",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T13:35:00.000-05:00"
                            },
                            {
                                "value": "936",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T13:40:00.000-05:00"
                            },
                            {
                                "value": "1120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T13:45:00.000-05:00"
                            },
                            {
                                "value": "1200",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T13:50:00.000-05:00"
                            },
                            {
                                "value": "1120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T13:55:00.000-05:00"
                            },
                            {
                                "value": "1210",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T14:00:00.000-05:00"
                            },
                            {
                                "value": "1070",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T14:05:00.000-05:00"
                            },
                            {
                                "value": "1080",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T14:10:00.000-05:00"
                            },
                            {
                                "value": "1250",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T14:15:00.000-05:00"
                            },
                            {
                                "value": "1210",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T14:20:00.000-05:00"
                            },
                            {
                                "value": "1420",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T14:25:00.000-05:00"
                            },
                            {
                                "value": "1490",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T14:30:00.000-05:00"
                            },
                            {
                                "value": "1420",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T14:35:00.000-05:00"
                            },
                            {
                                "value": "1530",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T14:40:00.000-05:00"
                            },
                            {
                                "value": "1440",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T14:45:00.000-05:00"
                            },
                            {
                                "value": "1500",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T14:50:00.000-05:00"
                            },
                            {
                                "value": "1480",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T14:55:00.000-05:00"
                            },
                            {
                                "value": "1580",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T15:00:00.000-05:00"
                            },
                            {
                                "value": "1630",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T15:05:00.000-05:00"
                            },
                            {
                                "value": "1530",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T15:10:00.000-05:00"
                            },
                            {
                                "value": "1560",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T15:15:00.000-05:00"
                            },
                            {
                                "value": "1590",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T15:20:00.000-05:00"
                            },
                            {
                                "value": "1710",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T15:25:00.000-05:00"
                            },
                            {
                                "value": "1800",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T15:30:00.000-05:00"
                            },
                            {
                                "value": "1800",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T15:35:00.000-05:00"
                            },
                            {
                                "value": "1770",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T15:40:00.000-05:00"
                            },
                            {
                                "value": "1680",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T15:45:00.000-05:00"
                            },
                            {
                                "value": "1710",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T15:50:00.000-05:00"
                            },
                            {
                                "value": "1690",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T15:55:00.000-05:00"
                            },
                            {
                                "value": "1700",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T16:00:00.000-05:00"
                            },
                            {
                                "value": "1800",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T16:05:00.000-05:00"
                            },
                            {
                                "value": "1670",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T16:10:00.000-05:00"
                            },
                            {
                                "value": "1720",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T16:15:00.000-05:00"
                            },
                            {
                                "value": "1750",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T16:20:00.000-05:00"
                            },
                            {
                                "value": "1650",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T16:25:00.000-05:00"
                            },
                            {
                                "value": "1710",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T16:30:00.000-05:00"
                            },
                            {
                                "value": "1850",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T16:35:00.000-05:00"
                            },
                            {
                                "value": "1690",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T16:40:00.000-05:00"
                            },
                            {
                                "value": "1790",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T16:45:00.000-05:00"
                            },
                            {
                                "value": "1770",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T16:50:00.000-05:00"
                            },
                            {
                                "value": "1750",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T16:55:00.000-05:00"
                            },
                            {
                                "value": "1710",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T17:00:00.000-05:00"
                            },
                            {
                                "value": "1720",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T17:05:00.000-05:00"
                            },
                            {
                                "value": "1790",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T17:10:00.000-05:00"
                            },
                            {
                                "value": "1730",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T17:15:00.000-05:00"
                            },
                            {
                                "value": "1820",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T17:20:00.000-05:00"
                            },
                            {
                                "value": "1770",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T17:25:00.000-05:00"
                            },
                            {
                                "value": "1830",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T17:30:00.000-05:00"
                            },
                            {
                                "value": "1720",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T17:35:00.000-05:00"
                            },
                            {
                                "value": "1810",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T17:40:00.000-05:00"
                            },
                            {
                                "value": "1700",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T17:45:00.000-05:00"
                            },
                            {
                                "value": "1870",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T17:50:00.000-05:00"
                            },
                            {
                                "value": "1870",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T17:52:00.000-05:00"
                            },
                            {
                                "value": "1860",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T17:55:00.000-05:00"
                            },
                            {
                                "value": "1750",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T18:00:00.000-05:00"
                            },
                            {
                                "value": "1700",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T18:05:00.000-05:00"
                            },
                            {
                                "value": "1690",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T18:10:00.000-05:00"
                            },
                            {
                                "value": "1720",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T18:15:00.000-05:00"
                            },
                            {
                                "value": "1810",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T18:20:00.000-05:00"
                            },
                            {
                                "value": "1690",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T18:25:00.000-05:00"
                            },
                            {
                                "value": "1730",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T18:30:00.000-05:00"
                            },
                            {
                                "value": "1700",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T18:35:00.000-05:00"
                            },
                            {
                                "value": "1570",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T18:40:00.000-05:00"
                            },
                            {
                                "value": "1700",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T18:45:00.000-05:00"
                            },
                            {
                                "value": "1550",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T18:50:00.000-05:00"
                            },
                            {
                                "value": "1600",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T18:55:00.000-05:00"
                            },
                            {
                                "value": "1630",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T19:00:00.000-05:00"
                            },
                            {
                                "value": "1670",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T19:05:00.000-05:00"
                            },
                            {
                                "value": "1600",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T19:10:00.000-05:00"
                            },
                            {
                                "value": "1550",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T19:15:00.000-05:00"
                            },
                            {
                                "value": "1520",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T19:20:00.000-05:00"
                            },
                            {
                                "value": "1540",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T19:25:00.000-05:00"
                            },
                            {
                                "value": "1550",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T19:30:00.000-05:00"
                            },
                            {
                                "value": "1500",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T19:35:00.000-05:00"
                            },
                            {
                                "value": "1490",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T19:40:00.000-05:00"
                            },
                            {
                                "value": "1420",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T19:45:00.000-05:00"
                            },
                            {
                                "value": "1470",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T19:50:00.000-05:00"
                            },
                            {
                                "value": "1490",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T19:55:00.000-05:00"
                            },
                            {
                                "value": "1320",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T20:00:00.000-05:00"
                            },
                            {
                                "value": "1220",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T20:05:00.000-05:00"
                            },
                            {
                                "value": "1210",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T20:10:00.000-05:00"
                            },
                            {
                                "value": "1420",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T20:15:00.000-05:00"
                            },
                            {
                                "value": "1200",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T20:20:00.000-05:00"
                            },
                            {
                                "value": "1200",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T20:25:00.000-05:00"
                            },
                            {
                                "value": "1240",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T20:30:00.000-05:00"
                            },
                            {
                                "value": "1280",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T20:35:00.000-05:00"
                            },
                            {
                                "value": "1190",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T20:40:00.000-05:00"
                            },
                            {
                                "value": "970",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T20:45:00.000-05:00"
                            },
                            {
                                "value": "1190",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T20:50:00.000-05:00"
                            },
                            {
                                "value": "996",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T20:55:00.000-05:00"
                            },
                            {
                                "value": "1200",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T21:00:00.000-05:00"
                            },
                            {
                                "value": "945",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T21:05:00.000-05:00"
                            },
                            {
                                "value": "1270",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T21:10:00.000-05:00"
                            },
                            {
                                "value": "1200",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T21:15:00.000-05:00"
                            },
                            {
                                "value": "1080",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T21:20:00.000-05:00"
                            },
                            {
                                "value": "1140",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T21:25:00.000-05:00"
                            },
                            {
                                "value": "1120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T21:30:00.000-05:00"
                            },
                            {
                                "value": "1110",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T21:35:00.000-05:00"
                            },
                            {
                                "value": "1100",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T21:40:00.000-05:00"
                            },
                            {
                                "value": "1020",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T21:45:00.000-05:00"
                            },
                            {
                                "value": "956",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T21:50:00.000-05:00"
                            },
                            {
                                "value": "943",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T21:55:00.000-05:00"
                            },
                            {
                                "value": "1110",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T22:00:00.000-05:00"
                            },
                            {
                                "value": "1180",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T22:05:00.000-05:00"
                            },
                            {
                                "value": "1010",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T22:10:00.000-05:00"
                            },
                            {
                                "value": "1020",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T22:15:00.000-05:00"
                            },
                            {
                                "value": "933",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T22:20:00.000-05:00"
                            },
                            {
                                "value": "1070",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T22:25:00.000-05:00"
                            },
                            {
                                "value": "999",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T22:30:00.000-05:00"
                            },
                            {
                                "value": "1060",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T22:35:00.000-05:00"
                            },
                            {
                                "value": "991",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T22:40:00.000-05:00"
                            },
                            {
                                "value": "1100",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T22:45:00.000-05:00"
                            },
                            {
                                "value": "1150",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T22:50:00.000-05:00"
                            },
                            {
                                "value": "1030",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T22:55:00.000-05:00"
                            },
                            {
                                "value": "1070",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T23:00:00.000-05:00"
                            },
                            {
                                "value": "992",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T23:05:00.000-05:00"
                            },
                            {
                                "value": "928",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T23:10:00.000-05:00"
                            },
                            {
                                "value": "1140",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T23:15:00.000-05:00"
                            },
                            {
                                "value": "1010",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T23:20:00.000-05:00"
                            },
                            {
                                "value": "943",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T23:25:00.000-05:00"
                            },
                            {
                                "value": "962",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T23:30:00.000-05:00"
                            },
                            {
                                "value": "1050",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T23:35:00.000-05:00"
                            },
                            {
                                "value": "962",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T23:40:00.000-05:00"
                            },
                            {
                                "value": "1020",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T23:45:00.000-05:00"
                            },
                            {
                                "value": "906",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T23:50:00.000-05:00"
                            },
                            {
                                "value": "856",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-14T23:55:00.000-05:00"
                            },
                            {
                                "value": "998",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T00:00:00.000-05:00"
                            },
                            {
                                "value": "922",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T00:05:00.000-05:00"
                            },
                            {
                                "value": "994",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T00:10:00.000-05:00"
                            },
                            {
                                "value": "987",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T00:15:00.000-05:00"
                            },
                            {
                                "value": "1010",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T00:20:00.000-05:00"
                            },
                            {
                                "value": "871",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T00:25:00.000-05:00"
                            },
                            {
                                "value": "987",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T00:30:00.000-05:00"
                            },
                            {
                                "value": "1010",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T00:35:00.000-05:00"
                            },
                            {
                                "value": "824",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T00:40:00.000-05:00"
                            },
                            {
                                "value": "987",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T00:45:00.000-05:00"
                            },
                            {
                                "value": "1040",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T00:50:00.000-05:00"
                            },
                            {
                                "value": "1020",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T00:55:00.000-05:00"
                            },
                            {
                                "value": "952",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T01:00:00.000-05:00"
                            },
                            {
                                "value": "896",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T01:05:00.000-05:00"
                            },
                            {
                                "value": "910",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T01:10:00.000-05:00"
                            },
                            {
                                "value": "899",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T01:15:00.000-05:00"
                            },
                            {
                                "value": "962",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T01:20:00.000-05:00"
                            },
                            {
                                "value": "891",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T01:25:00.000-05:00"
                            },
                            {
                                "value": "984",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T01:30:00.000-05:00"
                            },
                            {
                                "value": "948",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T01:35:00.000-05:00"
                            },
                            {
                                "value": "935",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T01:40:00.000-05:00"
                            },
                            {
                                "value": "907",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T01:45:00.000-05:00"
                            },
                            {
                                "value": "880",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T01:50:00.000-05:00"
                            },
                            {
                                "value": "899",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T01:55:00.000-05:00"
                            },
                            {
                                "value": "927",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T02:00:00.000-05:00"
                            },
                            {
                                "value": "952",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T02:05:00.000-05:00"
                            },
                            {
                                "value": "1010",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T02:10:00.000-05:00"
                            },
                            {
                                "value": "979",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T02:15:00.000-05:00"
                            },
                            {
                                "value": "1010",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T02:20:00.000-05:00"
                            },
                            {
                                "value": "980",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T02:25:00.000-05:00"
                            },
                            {
                                "value": "909",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T02:30:00.000-05:00"
                            },
                            {
                                "value": "1020",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T02:35:00.000-05:00"
                            },
                            {
                                "value": "1010",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T02:40:00.000-05:00"
                            },
                            {
                                "value": "863",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T02:45:00.000-05:00"
                            },
                            {
                                "value": "879",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T02:50:00.000-05:00"
                            },
                            {
                                "value": "974",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T02:55:00.000-05:00"
                            },
                            {
                                "value": "968",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T03:00:00.000-05:00"
                            },
                            {
                                "value": "873",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T03:05:00.000-05:00"
                            },
                            {
                                "value": "1030",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T03:10:00.000-05:00"
                            },
                            {
                                "value": "906",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T03:15:00.000-05:00"
                            },
                            {
                                "value": "1000",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T03:20:00.000-05:00"
                            },
                            {
                                "value": "970",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T03:25:00.000-05:00"
                            },
                            {
                                "value": "1060",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T03:30:00.000-05:00"
                            },
                            {
                                "value": "1040",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T03:35:00.000-05:00"
                            },
                            {
                                "value": "888",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T03:40:00.000-05:00"
                            },
                            {
                                "value": "1020",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T03:45:00.000-05:00"
                            },
                            {
                                "value": "873",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T03:50:00.000-05:00"
                            },
                            {
                                "value": "1060",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T03:55:00.000-05:00"
                            },
                            {
                                "value": "998",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T04:00:00.000-05:00"
                            },
                            {
                                "value": "982",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T04:05:00.000-05:00"
                            },
                            {
                                "value": "968",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T04:10:00.000-05:00"
                            },
                            {
                                "value": "952",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T04:15:00.000-05:00"
                            },
                            {
                                "value": "877",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T04:20:00.000-05:00"
                            },
                            {
                                "value": "970",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T04:25:00.000-05:00"
                            },
                            {
                                "value": "980",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T04:30:00.000-05:00"
                            },
                            {
                                "value": "952",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T04:35:00.000-05:00"
                            },
                            {
                                "value": "1010",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T04:40:00.000-05:00"
                            },
                            {
                                "value": "996",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T04:45:00.000-05:00"
                            },
                            {
                                "value": "920",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T04:50:00.000-05:00"
                            },
                            {
                                "value": "1000",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T04:55:00.000-05:00"
                            },
                            {
                                "value": "984",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T05:00:00.000-05:00"
                            },
                            {
                                "value": "1020",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T05:05:00.000-05:00"
                            },
                            {
                                "value": "880",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T05:10:00.000-05:00"
                            },
                            {
                                "value": "1020",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T05:15:00.000-05:00"
                            },
                            {
                                "value": "919",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T05:20:00.000-05:00"
                            },
                            {
                                "value": "1040",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T05:25:00.000-05:00"
                            },
                            {
                                "value": "1090",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T05:30:00.000-05:00"
                            },
                            {
                                "value": "1010",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T05:35:00.000-05:00"
                            },
                            {
                                "value": "984",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T05:40:00.000-05:00"
                            },
                            {
                                "value": "998",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T05:45:00.000-05:00"
                            },
                            {
                                "value": "1060",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T05:50:00.000-05:00"
                            },
                            {
                                "value": "998",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T05:55:00.000-05:00"
                            },
                            {
                                "value": "1010",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T06:00:00.000-05:00"
                            },
                            {
                                "value": "974",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T06:05:00.000-05:00"
                            },
                            {
                                "value": "1040",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T06:10:00.000-05:00"
                            },
                            {
                                "value": "879",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T06:15:00.000-05:00"
                            },
                            {
                                "value": "1040",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T06:20:00.000-05:00"
                            },
                            {
                                "value": "1080",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T06:25:00.000-05:00"
                            },
                            {
                                "value": "903",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T06:30:00.000-05:00"
                            },
                            {
                                "value": "1060",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T06:35:00.000-05:00"
                            },
                            {
                                "value": "880",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T06:40:00.000-05:00"
                            },
                            {
                                "value": "1020",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T06:45:00.000-05:00"
                            },
                            {
                                "value": "1070",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T06:50:00.000-05:00"
                            },
                            {
                                "value": "1000",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T06:55:00.000-05:00"
                            },
                            {
                                "value": "893",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T07:00:00.000-05:00"
                            },
                            {
                                "value": "948",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T07:05:00.000-05:00"
                            },
                            {
                                "value": "832",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T07:10:00.000-05:00"
                            },
                            {
                                "value": "860",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T07:15:00.000-05:00"
                            },
                            {
                                "value": "981",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T07:20:00.000-05:00"
                            },
                            {
                                "value": "1020",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T07:25:00.000-05:00"
                            },
                            {
                                "value": "938",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T07:30:00.000-05:00"
                            },
                            {
                                "value": "877",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T07:35:00.000-05:00"
                            },
                            {
                                "value": "969",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T07:40:00.000-05:00"
                            },
                            {
                                "value": "1020",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T07:45:00.000-05:00"
                            },
                            {
                                "value": "977",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T07:50:00.000-05:00"
                            },
                            {
                                "value": "1070",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T07:55:00.000-05:00"
                            },
                            {
                                "value": "945",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T08:00:00.000-05:00"
                            },
                            {
                                "value": "1030",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T08:05:00.000-05:00"
                            },
                            {
                                "value": "838",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T08:10:00.000-05:00"
                            },
                            {
                                "value": "986",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T08:15:00.000-05:00"
                            },
                            {
                                "value": "943",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T08:20:00.000-05:00"
                            },
                            {
                                "value": "984",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T08:25:00.000-05:00"
                            },
                            {
                                "value": "1060",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T08:30:00.000-05:00"
                            },
                            {
                                "value": "965",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T08:35:00.000-05:00"
                            },
                            {
                                "value": "982",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T08:40:00.000-05:00"
                            },
                            {
                                "value": "1050",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T08:45:00.000-05:00"
                            },
                            {
                                "value": "899",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T08:50:00.000-05:00"
                            },
                            {
                                "value": "1010",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T08:55:00.000-05:00"
                            },
                            {
                                "value": "1020",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T09:00:00.000-05:00"
                            },
                            {
                                "value": "1020",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T09:05:00.000-05:00"
                            },
                            {
                                "value": "871",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T09:10:00.000-05:00"
                            },
                            {
                                "value": "989",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T09:15:00.000-05:00"
                            },
                            {
                                "value": "945",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T09:20:00.000-05:00"
                            },
                            {
                                "value": "965",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T09:25:00.000-05:00"
                            },
                            {
                                "value": "937",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T09:30:00.000-05:00"
                            },
                            {
                                "value": "1000",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T09:35:00.000-05:00"
                            },
                            {
                                "value": "957",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T09:40:00.000-05:00"
                            },
                            {
                                "value": "986",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T09:45:00.000-05:00"
                            },
                            {
                                "value": "988",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T09:50:00.000-05:00"
                            },
                            {
                                "value": "970",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T09:55:00.000-05:00"
                            },
                            {
                                "value": "1070",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T10:00:00.000-05:00"
                            },
                            {
                                "value": "1050",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T10:05:00.000-05:00"
                            },
                            {
                                "value": "856",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T10:10:00.000-05:00"
                            },
                            {
                                "value": "890",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T10:15:00.000-05:00"
                            },
                            {
                                "value": "874",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T10:20:00.000-05:00"
                            },
                            {
                                "value": "933",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T10:25:00.000-05:00"
                            },
                            {
                                "value": "993",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T10:30:00.000-05:00"
                            },
                            {
                                "value": "1060",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T10:35:00.000-05:00"
                            },
                            {
                                "value": "925",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T10:40:00.000-05:00"
                            },
                            {
                                "value": "919",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T10:45:00.000-05:00"
                            },
                            {
                                "value": "945",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T10:50:00.000-05:00"
                            },
                            {
                                "value": "942",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T10:55:00.000-05:00"
                            },
                            {
                                "value": "964",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T11:00:00.000-05:00"
                            },
                            {
                                "value": "916",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T11:05:00.000-05:00"
                            },
                            {
                                "value": "989",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T11:10:00.000-05:00"
                            },
                            {
                                "value": "898",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T11:15:00.000-05:00"
                            },
                            {
                                "value": "1060",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T11:20:00.000-05:00"
                            },
                            {
                                "value": "1060",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T11:25:00.000-05:00"
                            },
                            {
                                "value": "896",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T11:30:00.000-05:00"
                            },
                            {
                                "value": "934",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T11:35:00.000-05:00"
                            },
                            {
                                "value": "1020",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T11:40:00.000-05:00"
                            },
                            {
                                "value": "1090",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T11:45:00.000-05:00"
                            },
                            {
                                "value": "1120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T11:50:00.000-05:00"
                            },
                            {
                                "value": "919",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T11:55:00.000-05:00"
                            },
                            {
                                "value": "864",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T12:00:00.000-05:00"
                            },
                            {
                                "value": "1000",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T12:05:00.000-05:00"
                            },
                            {
                                "value": "989",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T12:10:00.000-05:00"
                            },
                            {
                                "value": "974",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T12:15:00.000-05:00"
                            },
                            {
                                "value": "1000",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T12:20:00.000-05:00"
                            },
                            {
                                "value": "1010",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T12:25:00.000-05:00"
                            },
                            {
                                "value": "1010",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T12:30:00.000-05:00"
                            },
                            {
                                "value": "1030",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T12:35:00.000-05:00"
                            },
                            {
                                "value": "1080",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T12:40:00.000-05:00"
                            },
                            {
                                "value": "939",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T12:45:00.000-05:00"
                            },
                            {
                                "value": "1060",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T12:50:00.000-05:00"
                            },
                            {
                                "value": "1080",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T12:55:00.000-05:00"
                            },
                            {
                                "value": "982",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T13:00:00.000-05:00"
                            },
                            {
                                "value": "1030",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T13:05:00.000-05:00"
                            },
                            {
                                "value": "957",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T13:10:00.000-05:00"
                            },
                            {
                                "value": "954",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T13:15:00.000-05:00"
                            },
                            {
                                "value": "993",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T13:20:00.000-05:00"
                            },
                            {
                                "value": "909",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T13:25:00.000-05:00"
                            },
                            {
                                "value": "972",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T13:30:00.000-05:00"
                            },
                            {
                                "value": "965",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T13:35:00.000-05:00"
                            },
                            {
                                "value": "934",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T13:40:00.000-05:00"
                            },
                            {
                                "value": "977",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T13:45:00.000-05:00"
                            },
                            {
                                "value": "945",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T13:50:00.000-05:00"
                            },
                            {
                                "value": "967",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T13:55:00.000-05:00"
                            },
                            {
                                "value": "1030",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T14:00:00.000-05:00"
                            },
                            {
                                "value": "870",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T14:05:00.000-05:00"
                            },
                            {
                                "value": "763",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T14:10:00.000-05:00"
                            },
                            {
                                "value": "970",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T14:15:00.000-05:00"
                            },
                            {
                                "value": "954",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T14:20:00.000-05:00"
                            },
                            {
                                "value": "1030",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T14:25:00.000-05:00"
                            },
                            {
                                "value": "1040",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T14:30:00.000-05:00"
                            },
                            {
                                "value": "1010",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T14:35:00.000-05:00"
                            },
                            {
                                "value": "967",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T14:40:00.000-05:00"
                            },
                            {
                                "value": "930",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T14:45:00.000-05:00"
                            },
                            {
                                "value": "1010",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T14:50:00.000-05:00"
                            },
                            {
                                "value": "1100",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T14:55:00.000-05:00"
                            },
                            {
                                "value": "909",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T15:00:00.000-05:00"
                            },
                            {
                                "value": "1060",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T15:05:00.000-05:00"
                            },
                            {
                                "value": "874",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T15:10:00.000-05:00"
                            },
                            {
                                "value": "1000",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T15:15:00.000-05:00"
                            },
                            {
                                "value": "1050",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T15:20:00.000-05:00"
                            },
                            {
                                "value": "916",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T15:25:00.000-05:00"
                            },
                            {
                                "value": "1020",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T15:30:00.000-05:00"
                            },
                            {
                                "value": "1000",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T15:35:00.000-05:00"
                            },
                            {
                                "value": "904",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T15:40:00.000-05:00"
                            },
                            {
                                "value": "974",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T15:45:00.000-05:00"
                            },
                            {
                                "value": "959",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T15:50:00.000-05:00"
                            },
                            {
                                "value": "904",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T15:55:00.000-05:00"
                            },
                            {
                                "value": "939",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T16:00:00.000-05:00"
                            },
                            {
                                "value": "1040",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T16:05:00.000-05:00"
                            },
                            {
                                "value": "1030",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T16:10:00.000-05:00"
                            },
                            {
                                "value": "957",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T16:15:00.000-05:00"
                            },
                            {
                                "value": "1020",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T16:20:00.000-05:00"
                            },
                            {
                                "value": "916",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T16:25:00.000-05:00"
                            },
                            {
                                "value": "979",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T16:30:00.000-05:00"
                            },
                            {
                                "value": "1000",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T16:35:00.000-05:00"
                            },
                            {
                                "value": "1010",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T16:40:00.000-05:00"
                            },
                            {
                                "value": "969",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T16:45:00.000-05:00"
                            },
                            {
                                "value": "1070",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T16:50:00.000-05:00"
                            },
                            {
                                "value": "914",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T16:55:00.000-05:00"
                            },
                            {
                                "value": "847",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T17:00:00.000-05:00"
                            },
                            {
                                "value": "929",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T17:05:00.000-05:00"
                            },
                            {
                                "value": "1010",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T17:10:00.000-05:00"
                            },
                            {
                                "value": "974",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T17:15:00.000-05:00"
                            },
                            {
                                "value": "957",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T17:20:00.000-05:00"
                            },
                            {
                                "value": "930",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T17:25:00.000-05:00"
                            },
                            {
                                "value": "930",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T17:30:00.000-05:00"
                            },
                            {
                                "value": "959",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T17:35:00.000-05:00"
                            },
                            {
                                "value": "929",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T17:40:00.000-05:00"
                            },
                            {
                                "value": "919",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T17:45:00.000-05:00"
                            },
                            {
                                "value": "1110",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T17:50:00.000-05:00"
                            },
                            {
                                "value": "991",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T17:55:00.000-05:00"
                            },
                            {
                                "value": "954",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T18:00:00.000-05:00"
                            },
                            {
                                "value": "1010",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T18:05:00.000-05:00"
                            },
                            {
                                "value": "1030",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T18:10:00.000-05:00"
                            },
                            {
                                "value": "967",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T18:15:00.000-05:00"
                            },
                            {
                                "value": "870",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T18:20:00.000-05:00"
                            },
                            {
                                "value": "947",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T18:25:00.000-05:00"
                            },
                            {
                                "value": "876",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T18:30:00.000-05:00"
                            },
                            {
                                "value": "926",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T18:35:00.000-05:00"
                            },
                            {
                                "value": "885",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T18:40:00.000-05:00"
                            },
                            {
                                "value": "916",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T18:45:00.000-05:00"
                            },
                            {
                                "value": "971",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T18:50:00.000-05:00"
                            },
                            {
                                "value": "908",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T18:55:00.000-05:00"
                            },
                            {
                                "value": "1020",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T19:00:00.000-05:00"
                            },
                            {
                                "value": "1030",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T19:05:00.000-05:00"
                            },
                            {
                                "value": "962",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T19:10:00.000-05:00"
                            },
                            {
                                "value": "962",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T19:15:00.000-05:00"
                            },
                            {
                                "value": "774",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T19:20:00.000-05:00"
                            },
                            {
                                "value": "1040",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T19:25:00.000-05:00"
                            },
                            {
                                "value": "954",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T19:30:00.000-05:00"
                            },
                            {
                                "value": "1010",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T19:35:00.000-05:00"
                            },
                            {
                                "value": "859",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T19:40:00.000-05:00"
                            },
                            {
                                "value": "1010",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T19:45:00.000-05:00"
                            },
                            {
                                "value": "962",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T19:50:00.000-05:00"
                            },
                            {
                                "value": "913",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T19:55:00.000-05:00"
                            },
                            {
                                "value": "1020",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T20:00:00.000-05:00"
                            },
                            {
                                "value": "1030",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T20:05:00.000-05:00"
                            },
                            {
                                "value": "913",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T20:10:00.000-05:00"
                            },
                            {
                                "value": "819",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T20:15:00.000-05:00"
                            },
                            {
                                "value": "930",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T20:20:00.000-05:00"
                            },
                            {
                                "value": "868",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T20:25:00.000-05:00"
                            },
                            {
                                "value": "939",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T20:30:00.000-05:00"
                            },
                            {
                                "value": "895",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T20:35:00.000-05:00"
                            },
                            {
                                "value": "939",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T20:40:00.000-05:00"
                            },
                            {
                                "value": "867",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T20:45:00.000-05:00"
                            },
                            {
                                "value": "870",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T20:50:00.000-05:00"
                            },
                            {
                                "value": "924",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T20:55:00.000-05:00"
                            },
                            {
                                "value": "984",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T21:00:00.000-05:00"
                            },
                            {
                                "value": "945",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T21:05:00.000-05:00"
                            },
                            {
                                "value": "916",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T21:10:00.000-05:00"
                            },
                            {
                                "value": "844",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T21:15:00.000-05:00"
                            },
                            {
                                "value": "952",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T21:20:00.000-05:00"
                            },
                            {
                                "value": "879",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T21:25:00.000-05:00"
                            },
                            {
                                "value": "897",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T21:30:00.000-05:00"
                            },
                            {
                                "value": "870",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T21:35:00.000-05:00"
                            },
                            {
                                "value": "853",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T21:40:00.000-05:00"
                            },
                            {
                                "value": "835",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T21:45:00.000-05:00"
                            },
                            {
                                "value": "897",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T21:50:00.000-05:00"
                            },
                            {
                                "value": "876",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T21:55:00.000-05:00"
                            },
                            {
                                "value": "967",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T22:00:00.000-05:00"
                            },
                            {
                                "value": "895",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T22:05:00.000-05:00"
                            },
                            {
                                "value": "908",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T22:10:00.000-05:00"
                            },
                            {
                                "value": "967",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T22:15:00.000-05:00"
                            },
                            {
                                "value": "898",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T22:20:00.000-05:00"
                            },
                            {
                                "value": "895",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T22:25:00.000-05:00"
                            },
                            {
                                "value": "929",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T22:30:00.000-05:00"
                            },
                            {
                                "value": "911",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T22:35:00.000-05:00"
                            },
                            {
                                "value": "914",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T22:40:00.000-05:00"
                            },
                            {
                                "value": "865",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T22:45:00.000-05:00"
                            },
                            {
                                "value": "822",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T22:50:00.000-05:00"
                            },
                            {
                                "value": "934",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T22:55:00.000-05:00"
                            },
                            {
                                "value": "855",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T23:00:00.000-05:00"
                            },
                            {
                                "value": "909",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T23:05:00.000-05:00"
                            },
                            {
                                "value": "922",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T23:10:00.000-05:00"
                            },
                            {
                                "value": "945",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T23:15:00.000-05:00"
                            },
                            {
                                "value": "926",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T23:20:00.000-05:00"
                            },
                            {
                                "value": "911",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T23:25:00.000-05:00"
                            },
                            {
                                "value": "859",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T23:30:00.000-05:00"
                            },
                            {
                                "value": "921",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T23:35:00.000-05:00"
                            },
                            {
                                "value": "976",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T23:40:00.000-05:00"
                            },
                            {
                                "value": "1010",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T23:45:00.000-05:00"
                            },
                            {
                                "value": "873",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T23:50:00.000-05:00"
                            },
                            {
                                "value": "964",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-15T23:55:00.000-05:00"
                            },
                            {
                                "value": "932",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T00:00:00.000-05:00"
                            },
                            {
                                "value": "864",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T00:05:00.000-05:00"
                            },
                            {
                                "value": "911",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T00:10:00.000-05:00"
                            },
                            {
                                "value": "939",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T00:15:00.000-05:00"
                            },
                            {
                                "value": "864",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T00:20:00.000-05:00"
                            },
                            {
                                "value": "834",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T00:25:00.000-05:00"
                            },
                            {
                                "value": "924",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T00:30:00.000-05:00"
                            },
                            {
                                "value": "868",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T00:35:00.000-05:00"
                            },
                            {
                                "value": "876",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T00:40:00.000-05:00"
                            },
                            {
                                "value": "819",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T00:45:00.000-05:00"
                            },
                            {
                                "value": "966",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T00:50:00.000-05:00"
                            },
                            {
                                "value": "897",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T00:55:00.000-05:00"
                            },
                            {
                                "value": "929",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T01:00:00.000-05:00"
                            },
                            {
                                "value": "906",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T01:05:00.000-05:00"
                            },
                            {
                                "value": "858",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T01:10:00.000-05:00"
                            },
                            {
                                "value": "868",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T01:15:00.000-05:00"
                            },
                            {
                                "value": "886",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T01:20:00.000-05:00"
                            },
                            {
                                "value": "942",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T01:25:00.000-05:00"
                            },
                            {
                                "value": "895",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T01:30:00.000-05:00"
                            },
                            {
                                "value": "852",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T01:35:00.000-05:00"
                            },
                            {
                                "value": "853",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T01:40:00.000-05:00"
                            },
                            {
                                "value": "819",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T01:45:00.000-05:00"
                            },
                            {
                                "value": "855",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T01:50:00.000-05:00"
                            },
                            {
                                "value": "865",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T01:55:00.000-05:00"
                            },
                            {
                                "value": "861",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T02:00:00.000-05:00"
                            },
                            {
                                "value": "852",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T02:05:00.000-05:00"
                            },
                            {
                                "value": "850",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T02:10:00.000-05:00"
                            },
                            {
                                "value": "834",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T02:15:00.000-05:00"
                            },
                            {
                                "value": "859",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T02:20:00.000-05:00"
                            },
                            {
                                "value": "815",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T02:25:00.000-05:00"
                            },
                            {
                                "value": "816",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T02:30:00.000-05:00"
                            },
                            {
                                "value": "820",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T02:35:00.000-05:00"
                            },
                            {
                                "value": "887",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T02:40:00.000-05:00"
                            },
                            {
                                "value": "853",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T02:45:00.000-05:00"
                            },
                            {
                                "value": "856",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T02:50:00.000-05:00"
                            },
                            {
                                "value": "864",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T02:55:00.000-05:00"
                            },
                            {
                                "value": "876",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T03:00:00.000-05:00"
                            },
                            {
                                "value": "797",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T03:05:00.000-05:00"
                            },
                            {
                                "value": "837",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T03:10:00.000-05:00"
                            },
                            {
                                "value": "855",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T03:15:00.000-05:00"
                            },
                            {
                                "value": "835",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T03:20:00.000-05:00"
                            },
                            {
                                "value": "865",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T03:25:00.000-05:00"
                            },
                            {
                                "value": "823",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T03:30:00.000-05:00"
                            },
                            {
                                "value": "834",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T03:35:00.000-05:00"
                            },
                            {
                                "value": "879",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T03:40:00.000-05:00"
                            },
                            {
                                "value": "825",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T03:45:00.000-05:00"
                            },
                            {
                                "value": "799",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T03:50:00.000-05:00"
                            },
                            {
                                "value": "841",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T03:55:00.000-05:00"
                            },
                            {
                                "value": "834",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T04:00:00.000-05:00"
                            },
                            {
                                "value": "886",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T04:05:00.000-05:00"
                            },
                            {
                                "value": "856",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T04:10:00.000-05:00"
                            },
                            {
                                "value": "823",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T04:15:00.000-05:00"
                            },
                            {
                                "value": "806",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T04:20:00.000-05:00"
                            },
                            {
                                "value": "820",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T04:25:00.000-05:00"
                            },
                            {
                                "value": "829",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T04:30:00.000-05:00"
                            },
                            {
                                "value": "832",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T04:35:00.000-05:00"
                            },
                            {
                                "value": "806",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T04:40:00.000-05:00"
                            },
                            {
                                "value": "807",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T04:45:00.000-05:00"
                            },
                            {
                                "value": "809",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T04:50:00.000-05:00"
                            },
                            {
                                "value": "802",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T04:55:00.000-05:00"
                            },
                            {
                                "value": "787",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T05:00:00.000-05:00"
                            },
                            {
                                "value": "769",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T05:05:00.000-05:00"
                            },
                            {
                                "value": "780",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T05:10:00.000-05:00"
                            },
                            {
                                "value": "809",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T05:15:00.000-05:00"
                            },
                            {
                                "value": "799",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T05:20:00.000-05:00"
                            },
                            {
                                "value": "826",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T05:25:00.000-05:00"
                            },
                            {
                                "value": "749",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T05:30:00.000-05:00"
                            },
                            {
                                "value": "813",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T05:35:00.000-05:00"
                            },
                            {
                                "value": "799",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T05:40:00.000-05:00"
                            },
                            {
                                "value": "803",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T05:45:00.000-05:00"
                            },
                            {
                                "value": "792",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T05:50:00.000-05:00"
                            },
                            {
                                "value": "800",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T05:55:00.000-05:00"
                            },
                            {
                                "value": "760",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T06:00:00.000-05:00"
                            },
                            {
                                "value": "782",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T06:05:00.000-05:00"
                            },
                            {
                                "value": "816",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T06:10:00.000-05:00"
                            },
                            {
                                "value": "793",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T06:15:00.000-05:00"
                            },
                            {
                                "value": "787",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T06:20:00.000-05:00"
                            },
                            {
                                "value": "822",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T06:25:00.000-05:00"
                            },
                            {
                                "value": "809",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T06:30:00.000-05:00"
                            },
                            {
                                "value": "785",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T06:35:00.000-05:00"
                            },
                            {
                                "value": "810",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T06:40:00.000-05:00"
                            },
                            {
                                "value": "796",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T06:45:00.000-05:00"
                            },
                            {
                                "value": "812",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T06:50:00.000-05:00"
                            },
                            {
                                "value": "793",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T06:55:00.000-05:00"
                            },
                            {
                                "value": "829",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T07:00:00.000-05:00"
                            },
                            {
                                "value": "768",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T07:05:00.000-05:00"
                            },
                            {
                                "value": "812",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T07:10:00.000-05:00"
                            },
                            {
                                "value": "799",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T07:15:00.000-05:00"
                            },
                            {
                                "value": "758",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T07:20:00.000-05:00"
                            },
                            {
                                "value": "843",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T07:25:00.000-05:00"
                            },
                            {
                                "value": "853",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T07:30:00.000-05:00"
                            },
                            {
                                "value": "862",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T07:35:00.000-05:00"
                            },
                            {
                                "value": "883",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T07:40:00.000-05:00"
                            },
                            {
                                "value": "946",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T07:45:00.000-05:00"
                            },
                            {
                                "value": "926",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T07:50:00.000-05:00"
                            },
                            {
                                "value": "889",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T07:55:00.000-05:00"
                            },
                            {
                                "value": "875",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T08:00:00.000-05:00"
                            },
                            {
                                "value": "918",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T08:05:00.000-05:00"
                            },
                            {
                                "value": "880",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T08:10:00.000-05:00"
                            },
                            {
                                "value": "897",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T08:15:00.000-05:00"
                            },
                            {
                                "value": "884",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T08:20:00.000-05:00"
                            },
                            {
                                "value": "873",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T08:25:00.000-05:00"
                            },
                            {
                                "value": "939",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T08:30:00.000-05:00"
                            },
                            {
                                "value": "807",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T08:35:00.000-05:00"
                            },
                            {
                                "value": "741",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T08:40:00.000-05:00"
                            },
                            {
                                "value": "779",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T08:45:00.000-05:00"
                            },
                            {
                                "value": "793",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T08:50:00.000-05:00"
                            },
                            {
                                "value": "769",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T08:55:00.000-05:00"
                            },
                            {
                                "value": "741",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T09:00:00.000-05:00"
                            },
                            {
                                "value": "726",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T09:05:00.000-05:00"
                            },
                            {
                                "value": "760",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T09:10:00.000-05:00"
                            },
                            {
                                "value": "720",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T09:15:00.000-05:00"
                            },
                            {
                                "value": "731",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T09:20:00.000-05:00"
                            },
                            {
                                "value": "733",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T09:25:00.000-05:00"
                            },
                            {
                                "value": "733",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T09:30:00.000-05:00"
                            },
                            {
                                "value": "720",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T09:35:00.000-05:00"
                            },
                            {
                                "value": "717",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T09:40:00.000-05:00"
                            },
                            {
                                "value": "708",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T09:45:00.000-05:00"
                            },
                            {
                                "value": "713",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T09:50:00.000-05:00"
                            },
                            {
                                "value": "686",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T09:55:00.000-05:00"
                            },
                            {
                                "value": "655",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T10:00:00.000-05:00"
                            },
                            {
                                "value": "622",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T10:05:00.000-05:00"
                            },
                            {
                                "value": "658",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T10:10:00.000-05:00"
                            },
                            {
                                "value": "639",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T10:15:00.000-05:00"
                            },
                            {
                                "value": "639",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T10:20:00.000-05:00"
                            },
                            {
                                "value": "659",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T10:25:00.000-05:00"
                            },
                            {
                                "value": "652",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T10:30:00.000-05:00"
                            },
                            {
                                "value": "622",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T10:35:00.000-05:00"
                            },
                            {
                                "value": "611",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T10:40:00.000-05:00"
                            },
                            {
                                "value": "608",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T10:45:00.000-05:00"
                            },
                            {
                                "value": "605",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T10:50:00.000-05:00"
                            },
                            {
                                "value": "636",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T10:55:00.000-05:00"
                            },
                            {
                                "value": "600",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T11:00:00.000-05:00"
                            },
                            {
                                "value": "616",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T11:05:00.000-05:00"
                            },
                            {
                                "value": "587",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T11:10:00.000-05:00"
                            },
                            {
                                "value": "605",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T11:15:00.000-05:00"
                            },
                            {
                                "value": "633",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T11:20:00.000-05:00"
                            },
                            {
                                "value": "597",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T11:25:00.000-05:00"
                            },
                            {
                                "value": "579",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T11:30:00.000-05:00"
                            },
                            {
                                "value": "588",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T11:35:00.000-05:00"
                            },
                            {
                                "value": "591",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T11:40:00.000-05:00"
                            },
                            {
                                "value": "606",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T11:45:00.000-05:00"
                            },
                            {
                                "value": "577",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T11:50:00.000-05:00"
                            },
                            {
                                "value": "591",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T11:55:00.000-05:00"
                            },
                            {
                                "value": "594",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T12:00:00.000-05:00"
                            },
                            {
                                "value": "578",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T12:05:00.000-05:00"
                            },
                            {
                                "value": "592",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T12:10:00.000-05:00"
                            },
                            {
                                "value": "574",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T12:15:00.000-05:00"
                            },
                            {
                                "value": "568",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T12:20:00.000-05:00"
                            },
                            {
                                "value": "473",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T12:25:00.000-05:00"
                            },
                            {
                                "value": "488",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T12:30:00.000-05:00"
                            },
                            {
                                "value": "500",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T12:35:00.000-05:00"
                            },
                            {
                                "value": "489",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T12:40:00.000-05:00"
                            },
                            {
                                "value": "475",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T12:45:00.000-05:00"
                            },
                            {
                                "value": "450",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T12:50:00.000-05:00"
                            },
                            {
                                "value": "468",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T12:55:00.000-05:00"
                            },
                            {
                                "value": "464",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T13:00:00.000-05:00"
                            },
                            {
                                "value": "500",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T13:05:00.000-05:00"
                            },
                            {
                                "value": "445",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T13:10:00.000-05:00"
                            },
                            {
                                "value": "456",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T13:15:00.000-05:00"
                            },
                            {
                                "value": "427",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T13:20:00.000-05:00"
                            },
                            {
                                "value": "475",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T13:25:00.000-05:00"
                            },
                            {
                                "value": "458",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T13:30:00.000-05:00"
                            },
                            {
                                "value": "476",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T13:35:00.000-05:00"
                            },
                            {
                                "value": "447",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T13:40:00.000-05:00"
                            },
                            {
                                "value": "447",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T13:45:00.000-05:00"
                            },
                            {
                                "value": "421",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T13:50:00.000-05:00"
                            },
                            {
                                "value": "420",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T13:55:00.000-05:00"
                            },
                            {
                                "value": "434",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T14:00:00.000-05:00"
                            },
                            {
                                "value": "445",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T14:05:00.000-05:00"
                            },
                            {
                                "value": "452",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T14:10:00.000-05:00"
                            },
                            {
                                "value": "436",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T14:15:00.000-05:00"
                            },
                            {
                                "value": "398",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T14:20:00.000-05:00"
                            },
                            {
                                "value": "410",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T14:25:00.000-05:00"
                            },
                            {
                                "value": "440",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T14:30:00.000-05:00"
                            },
                            {
                                "value": "424",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T14:35:00.000-05:00"
                            },
                            {
                                "value": "383",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T14:40:00.000-05:00"
                            },
                            {
                                "value": "407",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T14:45:00.000-05:00"
                            },
                            {
                                "value": "403",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T14:50:00.000-05:00"
                            },
                            {
                                "value": "386",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T14:55:00.000-05:00"
                            },
                            {
                                "value": "380",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T15:00:00.000-05:00"
                            },
                            {
                                "value": "393",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T15:05:00.000-05:00"
                            },
                            {
                                "value": "382",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T15:10:00.000-05:00"
                            },
                            {
                                "value": "377",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T15:15:00.000-05:00"
                            },
                            {
                                "value": "381",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T15:20:00.000-05:00"
                            },
                            {
                                "value": "383",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T15:25:00.000-05:00"
                            },
                            {
                                "value": "370",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T15:30:00.000-05:00"
                            },
                            {
                                "value": "380",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T15:35:00.000-05:00"
                            },
                            {
                                "value": "370",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T15:40:00.000-05:00"
                            },
                            {
                                "value": "372",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T15:45:00.000-05:00"
                            },
                            {
                                "value": "374",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T15:50:00.000-05:00"
                            },
                            {
                                "value": "360",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T15:55:00.000-05:00"
                            },
                            {
                                "value": "362",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T16:00:00.000-05:00"
                            },
                            {
                                "value": "363",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T16:05:00.000-05:00"
                            },
                            {
                                "value": "363",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T16:10:00.000-05:00"
                            },
                            {
                                "value": "362",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T16:15:00.000-05:00"
                            },
                            {
                                "value": "363",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T16:20:00.000-05:00"
                            },
                            {
                                "value": "358",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T16:25:00.000-05:00"
                            },
                            {
                                "value": "362",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T16:30:00.000-05:00"
                            },
                            {
                                "value": "355",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T16:35:00.000-05:00"
                            },
                            {
                                "value": "364",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T16:40:00.000-05:00"
                            },
                            {
                                "value": "352",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T16:45:00.000-05:00"
                            },
                            {
                                "value": "353",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T16:50:00.000-05:00"
                            },
                            {
                                "value": "341",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T16:55:00.000-05:00"
                            },
                            {
                                "value": "350",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T17:00:00.000-05:00"
                            },
                            {
                                "value": "347",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T17:05:00.000-05:00"
                            },
                            {
                                "value": "341",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T17:10:00.000-05:00"
                            },
                            {
                                "value": "337",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T17:15:00.000-05:00"
                            },
                            {
                                "value": "333",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T17:20:00.000-05:00"
                            },
                            {
                                "value": "331",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T17:25:00.000-05:00"
                            },
                            {
                                "value": "334",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T17:30:00.000-05:00"
                            },
                            {
                                "value": "333",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T17:35:00.000-05:00"
                            },
                            {
                                "value": "326",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T17:40:00.000-05:00"
                            },
                            {
                                "value": "328",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T17:45:00.000-05:00"
                            },
                            {
                                "value": "334",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T17:50:00.000-05:00"
                            },
                            {
                                "value": "325",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T17:55:00.000-05:00"
                            },
                            {
                                "value": "325",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T18:00:00.000-05:00"
                            },
                            {
                                "value": "322",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T18:05:00.000-05:00"
                            },
                            {
                                "value": "317",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T18:10:00.000-05:00"
                            },
                            {
                                "value": "323",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T18:15:00.000-05:00"
                            },
                            {
                                "value": "321",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T18:20:00.000-05:00"
                            },
                            {
                                "value": "314",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T18:25:00.000-05:00"
                            },
                            {
                                "value": "316",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T18:30:00.000-05:00"
                            },
                            {
                                "value": "320",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T18:35:00.000-05:00"
                            },
                            {
                                "value": "317",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T18:40:00.000-05:00"
                            },
                            {
                                "value": "314",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T18:45:00.000-05:00"
                            },
                            {
                                "value": "311",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T18:50:00.000-05:00"
                            },
                            {
                                "value": "309",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T18:55:00.000-05:00"
                            },
                            {
                                "value": "313",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T19:00:00.000-05:00"
                            },
                            {
                                "value": "311",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T19:05:00.000-05:00"
                            },
                            {
                                "value": "312",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T19:10:00.000-05:00"
                            },
                            {
                                "value": "312",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T19:15:00.000-05:00"
                            },
                            {
                                "value": "314",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T19:20:00.000-05:00"
                            },
                            {
                                "value": "306",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T19:25:00.000-05:00"
                            },
                            {
                                "value": "311",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T19:30:00.000-05:00"
                            },
                            {
                                "value": "306",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T19:35:00.000-05:00"
                            },
                            {
                                "value": "303",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T19:40:00.000-05:00"
                            },
                            {
                                "value": "306",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T19:45:00.000-05:00"
                            },
                            {
                                "value": "304",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T19:50:00.000-05:00"
                            },
                            {
                                "value": "305",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T19:55:00.000-05:00"
                            },
                            {
                                "value": "305",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T20:00:00.000-05:00"
                            },
                            {
                                "value": "303",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T20:05:00.000-05:00"
                            },
                            {
                                "value": "300",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T20:10:00.000-05:00"
                            },
                            {
                                "value": "302",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T20:15:00.000-05:00"
                            },
                            {
                                "value": "305",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T20:20:00.000-05:00"
                            },
                            {
                                "value": "299",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T20:25:00.000-05:00"
                            },
                            {
                                "value": "301",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T20:30:00.000-05:00"
                            },
                            {
                                "value": "304",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T20:35:00.000-05:00"
                            },
                            {
                                "value": "304",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T20:40:00.000-05:00"
                            },
                            {
                                "value": "302",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T20:45:00.000-05:00"
                            },
                            {
                                "value": "301",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T20:50:00.000-05:00"
                            },
                            {
                                "value": "299",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T20:55:00.000-05:00"
                            },
                            {
                                "value": "298",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T21:00:00.000-05:00"
                            },
                            {
                                "value": "301",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T21:05:00.000-05:00"
                            },
                            {
                                "value": "297",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T21:10:00.000-05:00"
                            },
                            {
                                "value": "301",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T21:15:00.000-05:00"
                            },
                            {
                                "value": "294",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T21:20:00.000-05:00"
                            },
                            {
                                "value": "298",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T21:25:00.000-05:00"
                            },
                            {
                                "value": "296",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T21:30:00.000-05:00"
                            },
                            {
                                "value": "298",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T21:35:00.000-05:00"
                            },
                            {
                                "value": "297",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T21:40:00.000-05:00"
                            },
                            {
                                "value": "297",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T21:45:00.000-05:00"
                            },
                            {
                                "value": "296",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T21:50:00.000-05:00"
                            },
                            {
                                "value": "295",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T21:55:00.000-05:00"
                            },
                            {
                                "value": "292",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T22:00:00.000-05:00"
                            },
                            {
                                "value": "294",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T22:05:00.000-05:00"
                            },
                            {
                                "value": "292",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T22:10:00.000-05:00"
                            },
                            {
                                "value": "296",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T22:15:00.000-05:00"
                            },
                            {
                                "value": "288",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T22:20:00.000-05:00"
                            },
                            {
                                "value": "296",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T22:25:00.000-05:00"
                            },
                            {
                                "value": "293",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T22:30:00.000-05:00"
                            },
                            {
                                "value": "294",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T22:35:00.000-05:00"
                            },
                            {
                                "value": "292",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T22:40:00.000-05:00"
                            },
                            {
                                "value": "291",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T22:45:00.000-05:00"
                            },
                            {
                                "value": "286",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T22:50:00.000-05:00"
                            },
                            {
                                "value": "293",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T22:55:00.000-05:00"
                            },
                            {
                                "value": "291",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T23:00:00.000-05:00"
                            },
                            {
                                "value": "290",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T23:05:00.000-05:00"
                            },
                            {
                                "value": "281",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T23:10:00.000-05:00"
                            },
                            {
                                "value": "287",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T23:15:00.000-05:00"
                            },
                            {
                                "value": "290",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T23:20:00.000-05:00"
                            },
                            {
                                "value": "286",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T23:25:00.000-05:00"
                            },
                            {
                                "value": "281",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T23:30:00.000-05:00"
                            },
                            {
                                "value": "282",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T23:35:00.000-05:00"
                            },
                            {
                                "value": "286",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T23:40:00.000-05:00"
                            },
                            {
                                "value": "283",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T23:45:00.000-05:00"
                            },
                            {
                                "value": "281",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T23:50:00.000-05:00"
                            },
                            {
                                "value": "283",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-16T23:55:00.000-05:00"
                            },
                            {
                                "value": "281",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T00:00:00.000-05:00"
                            },
                            {
                                "value": "281",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T00:05:00.000-05:00"
                            },
                            {
                                "value": "278",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T00:10:00.000-05:00"
                            },
                            {
                                "value": "279",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T00:15:00.000-05:00"
                            },
                            {
                                "value": "278",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T00:20:00.000-05:00"
                            },
                            {
                                "value": "280",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T00:25:00.000-05:00"
                            },
                            {
                                "value": "279",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T00:30:00.000-05:00"
                            },
                            {
                                "value": "280",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T00:35:00.000-05:00"
                            },
                            {
                                "value": "282",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T00:40:00.000-05:00"
                            },
                            {
                                "value": "278",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T00:45:00.000-05:00"
                            },
                            {
                                "value": "278",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T00:50:00.000-05:00"
                            },
                            {
                                "value": "276",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T00:55:00.000-05:00"
                            },
                            {
                                "value": "277",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T01:00:00.000-05:00"
                            },
                            {
                                "value": "274",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T01:05:00.000-05:00"
                            },
                            {
                                "value": "274",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T01:10:00.000-05:00"
                            },
                            {
                                "value": "276",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T01:15:00.000-05:00"
                            },
                            {
                                "value": "277",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T01:20:00.000-05:00"
                            },
                            {
                                "value": "275",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T01:25:00.000-05:00"
                            },
                            {
                                "value": "275",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T01:30:00.000-05:00"
                            },
                            {
                                "value": "276",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T01:35:00.000-05:00"
                            },
                            {
                                "value": "274",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T01:40:00.000-05:00"
                            },
                            {
                                "value": "275",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T01:45:00.000-05:00"
                            },
                            {
                                "value": "275",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T01:50:00.000-05:00"
                            },
                            {
                                "value": "275",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T01:55:00.000-05:00"
                            },
                            {
                                "value": "273",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T02:00:00.000-05:00"
                            },
                            {
                                "value": "272",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T02:05:00.000-05:00"
                            },
                            {
                                "value": "273",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T02:10:00.000-05:00"
                            },
                            {
                                "value": "273",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T02:15:00.000-05:00"
                            },
                            {
                                "value": "272",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T02:20:00.000-05:00"
                            },
                            {
                                "value": "272",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T02:25:00.000-05:00"
                            },
                            {
                                "value": "271",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T02:30:00.000-05:00"
                            },
                            {
                                "value": "270",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T02:35:00.000-05:00"
                            },
                            {
                                "value": "269",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T02:40:00.000-05:00"
                            },
                            {
                                "value": "271",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T02:45:00.000-05:00"
                            },
                            {
                                "value": "270",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T02:50:00.000-05:00"
                            },
                            {
                                "value": "268",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T02:55:00.000-05:00"
                            },
                            {
                                "value": "269",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T03:00:00.000-05:00"
                            },
                            {
                                "value": "268",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T03:05:00.000-05:00"
                            },
                            {
                                "value": "266",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T03:10:00.000-05:00"
                            },
                            {
                                "value": "266",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T03:15:00.000-05:00"
                            },
                            {
                                "value": "266",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T03:20:00.000-05:00"
                            },
                            {
                                "value": "266",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T03:25:00.000-05:00"
                            },
                            {
                                "value": "266",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T03:30:00.000-05:00"
                            },
                            {
                                "value": "267",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T03:35:00.000-05:00"
                            },
                            {
                                "value": "264",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T03:40:00.000-05:00"
                            },
                            {
                                "value": "265",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T03:45:00.000-05:00"
                            },
                            {
                                "value": "263",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T03:50:00.000-05:00"
                            },
                            {
                                "value": "263",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T03:55:00.000-05:00"
                            },
                            {
                                "value": "263",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T04:00:00.000-05:00"
                            },
                            {
                                "value": "262",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T04:05:00.000-05:00"
                            },
                            {
                                "value": "262",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T04:10:00.000-05:00"
                            },
                            {
                                "value": "261",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T04:15:00.000-05:00"
                            },
                            {
                                "value": "261",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T04:20:00.000-05:00"
                            },
                            {
                                "value": "260",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T04:25:00.000-05:00"
                            },
                            {
                                "value": "261",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T04:30:00.000-05:00"
                            },
                            {
                                "value": "258",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T04:35:00.000-05:00"
                            },
                            {
                                "value": "259",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T04:40:00.000-05:00"
                            },
                            {
                                "value": "260",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T04:45:00.000-05:00"
                            },
                            {
                                "value": "259",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T04:50:00.000-05:00"
                            },
                            {
                                "value": "260",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T04:55:00.000-05:00"
                            },
                            {
                                "value": "259",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T05:00:00.000-05:00"
                            },
                            {
                                "value": "257",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T05:05:00.000-05:00"
                            },
                            {
                                "value": "256",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T05:10:00.000-05:00"
                            },
                            {
                                "value": "255",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T05:15:00.000-05:00"
                            },
                            {
                                "value": "256",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T05:20:00.000-05:00"
                            },
                            {
                                "value": "257",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T05:25:00.000-05:00"
                            },
                            {
                                "value": "256",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T05:30:00.000-05:00"
                            },
                            {
                                "value": "255",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T05:35:00.000-05:00"
                            },
                            {
                                "value": "255",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T05:40:00.000-05:00"
                            },
                            {
                                "value": "252",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T05:45:00.000-05:00"
                            },
                            {
                                "value": "253",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T05:50:00.000-05:00"
                            },
                            {
                                "value": "253",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T05:55:00.000-05:00"
                            },
                            {
                                "value": "252",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T06:00:00.000-05:00"
                            },
                            {
                                "value": "251",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T06:05:00.000-05:00"
                            },
                            {
                                "value": "251",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T06:10:00.000-05:00"
                            },
                            {
                                "value": "252",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T06:15:00.000-05:00"
                            },
                            {
                                "value": "248",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T06:20:00.000-05:00"
                            },
                            {
                                "value": "251",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T06:25:00.000-05:00"
                            },
                            {
                                "value": "249",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T06:30:00.000-05:00"
                            },
                            {
                                "value": "248",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T06:35:00.000-05:00"
                            },
                            {
                                "value": "247",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T06:40:00.000-05:00"
                            },
                            {
                                "value": "248",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T06:45:00.000-05:00"
                            },
                            {
                                "value": "246",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T06:50:00.000-05:00"
                            },
                            {
                                "value": "245",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T06:55:00.000-05:00"
                            },
                            {
                                "value": "245",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T07:00:00.000-05:00"
                            },
                            {
                                "value": "246",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T07:05:00.000-05:00"
                            },
                            {
                                "value": "244",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T07:10:00.000-05:00"
                            },
                            {
                                "value": "244",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T07:15:00.000-05:00"
                            },
                            {
                                "value": "243",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T07:20:00.000-05:00"
                            },
                            {
                                "value": "243",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T07:25:00.000-05:00"
                            },
                            {
                                "value": "243",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T07:30:00.000-05:00"
                            },
                            {
                                "value": "241",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T07:35:00.000-05:00"
                            },
                            {
                                "value": "242",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T07:40:00.000-05:00"
                            },
                            {
                                "value": "240",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T07:45:00.000-05:00"
                            },
                            {
                                "value": "239",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T07:50:00.000-05:00"
                            },
                            {
                                "value": "240",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T07:55:00.000-05:00"
                            },
                            {
                                "value": "238",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T08:00:00.000-05:00"
                            },
                            {
                                "value": "237",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T08:05:00.000-05:00"
                            },
                            {
                                "value": "238",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T08:10:00.000-05:00"
                            },
                            {
                                "value": "237",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T08:15:00.000-05:00"
                            },
                            {
                                "value": "237",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T08:20:00.000-05:00"
                            },
                            {
                                "value": "236",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T08:25:00.000-05:00"
                            },
                            {
                                "value": "236",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T08:30:00.000-05:00"
                            },
                            {
                                "value": "236",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T08:35:00.000-05:00"
                            },
                            {
                                "value": "235",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T08:40:00.000-05:00"
                            },
                            {
                                "value": "234",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T08:45:00.000-05:00"
                            },
                            {
                                "value": "232",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T08:50:00.000-05:00"
                            },
                            {
                                "value": "233",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T08:55:00.000-05:00"
                            },
                            {
                                "value": "233",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T09:00:00.000-05:00"
                            },
                            {
                                "value": "232",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T09:05:00.000-05:00"
                            },
                            {
                                "value": "232",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T09:10:00.000-05:00"
                            },
                            {
                                "value": "233",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T09:15:00.000-05:00"
                            },
                            {
                                "value": "232",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T09:20:00.000-05:00"
                            },
                            {
                                "value": "233",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T09:25:00.000-05:00"
                            },
                            {
                                "value": "230",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T09:30:00.000-05:00"
                            },
                            {
                                "value": "230",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T09:35:00.000-05:00"
                            },
                            {
                                "value": "229",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T09:40:00.000-05:00"
                            },
                            {
                                "value": "228",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T09:45:00.000-05:00"
                            },
                            {
                                "value": "229",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T09:50:00.000-05:00"
                            },
                            {
                                "value": "227",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T09:55:00.000-05:00"
                            },
                            {
                                "value": "227",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T10:00:00.000-05:00"
                            },
                            {
                                "value": "227",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T10:05:00.000-05:00"
                            },
                            {
                                "value": "226",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T10:10:00.000-05:00"
                            },
                            {
                                "value": "226",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T10:15:00.000-05:00"
                            },
                            {
                                "value": "225",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T10:20:00.000-05:00"
                            },
                            {
                                "value": "225",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T10:25:00.000-05:00"
                            },
                            {
                                "value": "223",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T10:30:00.000-05:00"
                            },
                            {
                                "value": "224",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T10:35:00.000-05:00"
                            },
                            {
                                "value": "224",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T10:40:00.000-05:00"
                            },
                            {
                                "value": "223",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T10:45:00.000-05:00"
                            },
                            {
                                "value": "222",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T10:50:00.000-05:00"
                            },
                            {
                                "value": "222",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T10:55:00.000-05:00"
                            },
                            {
                                "value": "221",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T11:00:00.000-05:00"
                            },
                            {
                                "value": "221",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T11:05:00.000-05:00"
                            },
                            {
                                "value": "220",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T11:10:00.000-05:00"
                            },
                            {
                                "value": "219",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T11:15:00.000-05:00"
                            },
                            {
                                "value": "219",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T11:20:00.000-05:00"
                            },
                            {
                                "value": "219",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T11:25:00.000-05:00"
                            },
                            {
                                "value": "218",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T11:30:00.000-05:00"
                            },
                            {
                                "value": "218",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T11:35:00.000-05:00"
                            },
                            {
                                "value": "216",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T11:40:00.000-05:00"
                            },
                            {
                                "value": "218",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T11:45:00.000-05:00"
                            },
                            {
                                "value": "216",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T11:50:00.000-05:00"
                            },
                            {
                                "value": "214",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T11:55:00.000-05:00"
                            },
                            {
                                "value": "216",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T12:00:00.000-05:00"
                            },
                            {
                                "value": "215",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T12:05:00.000-05:00"
                            },
                            {
                                "value": "215",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T12:10:00.000-05:00"
                            },
                            {
                                "value": "214",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T12:15:00.000-05:00"
                            },
                            {
                                "value": "213",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T12:20:00.000-05:00"
                            },
                            {
                                "value": "213",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T12:25:00.000-05:00"
                            },
                            {
                                "value": "212",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T12:30:00.000-05:00"
                            },
                            {
                                "value": "211",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T12:35:00.000-05:00"
                            },
                            {
                                "value": "212",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T12:40:00.000-05:00"
                            },
                            {
                                "value": "211",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T12:45:00.000-05:00"
                            },
                            {
                                "value": "210",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T12:50:00.000-05:00"
                            },
                            {
                                "value": "209",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T12:55:00.000-05:00"
                            },
                            {
                                "value": "208",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T13:00:00.000-05:00"
                            },
                            {
                                "value": "208",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T13:05:00.000-05:00"
                            },
                            {
                                "value": "209",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T13:10:00.000-05:00"
                            },
                            {
                                "value": "207",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T13:15:00.000-05:00"
                            },
                            {
                                "value": "206",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T13:20:00.000-05:00"
                            },
                            {
                                "value": "207",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T13:25:00.000-05:00"
                            },
                            {
                                "value": "207",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T13:30:00.000-05:00"
                            },
                            {
                                "value": "207",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T13:35:00.000-05:00"
                            },
                            {
                                "value": "205",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T13:40:00.000-05:00"
                            },
                            {
                                "value": "205",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T13:45:00.000-05:00"
                            },
                            {
                                "value": "205",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T13:50:00.000-05:00"
                            },
                            {
                                "value": "203",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T13:55:00.000-05:00"
                            },
                            {
                                "value": "204",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T14:00:00.000-05:00"
                            },
                            {
                                "value": "204",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T14:05:00.000-05:00"
                            },
                            {
                                "value": "204",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T14:10:00.000-05:00"
                            },
                            {
                                "value": "202",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T14:15:00.000-05:00"
                            },
                            {
                                "value": "202",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T14:20:00.000-05:00"
                            },
                            {
                                "value": "200",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T14:25:00.000-05:00"
                            },
                            {
                                "value": "201",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T14:30:00.000-05:00"
                            },
                            {
                                "value": "201",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T14:35:00.000-05:00"
                            },
                            {
                                "value": "200",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T14:40:00.000-05:00"
                            },
                            {
                                "value": "200",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T14:45:00.000-05:00"
                            },
                            {
                                "value": "199",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T14:50:00.000-05:00"
                            },
                            {
                                "value": "199",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T14:55:00.000-05:00"
                            },
                            {
                                "value": "198",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T15:00:00.000-05:00"
                            },
                            {
                                "value": "197",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T15:05:00.000-05:00"
                            },
                            {
                                "value": "197",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T15:10:00.000-05:00"
                            },
                            {
                                "value": "197",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T15:15:00.000-05:00"
                            },
                            {
                                "value": "198",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T15:20:00.000-05:00"
                            },
                            {
                                "value": "198",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T15:25:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T15:30:00.000-05:00"
                            },
                            {
                                "value": "196",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T15:35:00.000-05:00"
                            },
                            {
                                "value": "196",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T15:40:00.000-05:00"
                            },
                            {
                                "value": "196",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T15:45:00.000-05:00"
                            },
                            {
                                "value": "196",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T15:50:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T15:55:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T16:00:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T16:05:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T16:10:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T16:15:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T16:20:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T16:25:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T16:30:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T16:35:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T16:40:00.000-05:00"
                            },
                            {
                                "value": "193",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T16:45:00.000-05:00"
                            },
                            {
                                "value": "193",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T16:50:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T16:55:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T17:00:00.000-05:00"
                            },
                            {
                                "value": "193",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T17:05:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T17:10:00.000-05:00"
                            },
                            {
                                "value": "193",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T17:15:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T17:20:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T17:25:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T17:30:00.000-05:00"
                            },
                            {
                                "value": "193",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T17:35:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T17:40:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T17:45:00.000-05:00"
                            },
                            {
                                "value": "193",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T17:50:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T17:55:00.000-05:00"
                            },
                            {
                                "value": "193",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T18:00:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T18:05:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T18:10:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T18:15:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T18:20:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T18:25:00.000-05:00"
                            },
                            {
                                "value": "197",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T18:30:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T18:35:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T18:40:00.000-05:00"
                            },
                            {
                                "value": "196",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T18:45:00.000-05:00"
                            },
                            {
                                "value": "196",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T18:50:00.000-05:00"
                            },
                            {
                                "value": "197",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T18:55:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T19:00:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T19:05:00.000-05:00"
                            },
                            {
                                "value": "197",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T19:10:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T19:15:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T19:20:00.000-05:00"
                            },
                            {
                                "value": "196",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T19:25:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T19:30:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T19:35:00.000-05:00"
                            },
                            {
                                "value": "196",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T19:40:00.000-05:00"
                            },
                            {
                                "value": "196",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T19:45:00.000-05:00"
                            },
                            {
                                "value": "196",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T19:50:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T19:55:00.000-05:00"
                            },
                            {
                                "value": "197",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T20:00:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T20:05:00.000-05:00"
                            },
                            {
                                "value": "196",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T20:10:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T20:15:00.000-05:00"
                            },
                            {
                                "value": "196",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T20:20:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T20:25:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T20:30:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T20:35:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T20:40:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T20:45:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T20:50:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T20:55:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T21:00:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T21:05:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T21:10:00.000-05:00"
                            },
                            {
                                "value": "196",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T21:15:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T21:20:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T21:25:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T21:30:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T21:35:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T21:40:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T21:45:00.000-05:00"
                            },
                            {
                                "value": "193",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T21:50:00.000-05:00"
                            },
                            {
                                "value": "193",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T21:55:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T22:00:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T22:05:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T22:10:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T22:15:00.000-05:00"
                            },
                            {
                                "value": "192",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T22:20:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T22:25:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T22:30:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T22:35:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T22:40:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T22:45:00.000-05:00"
                            },
                            {
                                "value": "195",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T22:50:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T22:55:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T23:00:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T23:05:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T23:10:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T23:15:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T23:20:00.000-05:00"
                            },
                            {
                                "value": "193",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T23:25:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T23:30:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T23:35:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T23:40:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T23:45:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T23:50:00.000-05:00"
                            },
                            {
                                "value": "192",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-17T23:55:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T00:00:00.000-05:00"
                            },
                            {
                                "value": "192",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T00:05:00.000-05:00"
                            },
                            {
                                "value": "193",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T00:10:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T00:15:00.000-05:00"
                            },
                            {
                                "value": "194",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T00:20:00.000-05:00"
                            },
                            {
                                "value": "193",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T00:25:00.000-05:00"
                            },
                            {
                                "value": "193",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T00:30:00.000-05:00"
                            },
                            {
                                "value": "193",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T00:35:00.000-05:00"
                            },
                            {
                                "value": "192",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T00:40:00.000-05:00"
                            },
                            {
                                "value": "192",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T00:45:00.000-05:00"
                            },
                            {
                                "value": "193",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T00:50:00.000-05:00"
                            },
                            {
                                "value": "193",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T00:55:00.000-05:00"
                            },
                            {
                                "value": "190",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T01:00:00.000-05:00"
                            },
                            {
                                "value": "191",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T01:05:00.000-05:00"
                            },
                            {
                                "value": "191",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T01:10:00.000-05:00"
                            },
                            {
                                "value": "191",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T01:15:00.000-05:00"
                            },
                            {
                                "value": "191",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T01:20:00.000-05:00"
                            },
                            {
                                "value": "191",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T01:25:00.000-05:00"
                            },
                            {
                                "value": "192",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T01:30:00.000-05:00"
                            },
                            {
                                "value": "188",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T01:35:00.000-05:00"
                            },
                            {
                                "value": "190",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T01:40:00.000-05:00"
                            },
                            {
                                "value": "190",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T01:45:00.000-05:00"
                            },
                            {
                                "value": "191",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T01:50:00.000-05:00"
                            },
                            {
                                "value": "189",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T01:55:00.000-05:00"
                            },
                            {
                                "value": "190",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T02:00:00.000-05:00"
                            },
                            {
                                "value": "190",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T02:05:00.000-05:00"
                            },
                            {
                                "value": "189",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T02:10:00.000-05:00"
                            },
                            {
                                "value": "188",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T02:15:00.000-05:00"
                            },
                            {
                                "value": "189",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T02:20:00.000-05:00"
                            },
                            {
                                "value": "189",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T02:25:00.000-05:00"
                            },
                            {
                                "value": "189",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T02:30:00.000-05:00"
                            },
                            {
                                "value": "189",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T02:35:00.000-05:00"
                            },
                            {
                                "value": "188",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T02:40:00.000-05:00"
                            },
                            {
                                "value": "187",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T02:45:00.000-05:00"
                            },
                            {
                                "value": "187",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T02:50:00.000-05:00"
                            },
                            {
                                "value": "188",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T02:55:00.000-05:00"
                            },
                            {
                                "value": "188",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T03:00:00.000-05:00"
                            },
                            {
                                "value": "186",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T03:05:00.000-05:00"
                            },
                            {
                                "value": "186",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T03:10:00.000-05:00"
                            },
                            {
                                "value": "187",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T03:15:00.000-05:00"
                            },
                            {
                                "value": "186",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T03:20:00.000-05:00"
                            },
                            {
                                "value": "186",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T03:25:00.000-05:00"
                            },
                            {
                                "value": "186",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T03:30:00.000-05:00"
                            },
                            {
                                "value": "184",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T03:35:00.000-05:00"
                            },
                            {
                                "value": "185",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T03:40:00.000-05:00"
                            },
                            {
                                "value": "182",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T03:45:00.000-05:00"
                            },
                            {
                                "value": "184",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T03:50:00.000-05:00"
                            },
                            {
                                "value": "184",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T03:55:00.000-05:00"
                            },
                            {
                                "value": "184",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T04:00:00.000-05:00"
                            },
                            {
                                "value": "183",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T04:05:00.000-05:00"
                            },
                            {
                                "value": "183",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T04:10:00.000-05:00"
                            },
                            {
                                "value": "183",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T04:15:00.000-05:00"
                            },
                            {
                                "value": "182",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T04:20:00.000-05:00"
                            },
                            {
                                "value": "182",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T04:25:00.000-05:00"
                            },
                            {
                                "value": "182",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T04:30:00.000-05:00"
                            },
                            {
                                "value": "181",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T04:35:00.000-05:00"
                            },
                            {
                                "value": "182",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T04:40:00.000-05:00"
                            },
                            {
                                "value": "181",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T04:45:00.000-05:00"
                            },
                            {
                                "value": "180",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T04:50:00.000-05:00"
                            },
                            {
                                "value": "180",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T04:55:00.000-05:00"
                            },
                            {
                                "value": "180",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T05:00:00.000-05:00"
                            },
                            {
                                "value": "178",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T05:05:00.000-05:00"
                            },
                            {
                                "value": "179",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T05:10:00.000-05:00"
                            },
                            {
                                "value": "178",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T05:15:00.000-05:00"
                            },
                            {
                                "value": "178",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T05:20:00.000-05:00"
                            },
                            {
                                "value": "178",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T05:25:00.000-05:00"
                            },
                            {
                                "value": "177",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T05:30:00.000-05:00"
                            },
                            {
                                "value": "176",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T05:35:00.000-05:00"
                            },
                            {
                                "value": "176",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T05:40:00.000-05:00"
                            },
                            {
                                "value": "176",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T05:45:00.000-05:00"
                            },
                            {
                                "value": "175",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T05:50:00.000-05:00"
                            },
                            {
                                "value": "175",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T05:55:00.000-05:00"
                            },
                            {
                                "value": "174",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T06:00:00.000-05:00"
                            },
                            {
                                "value": "173",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T06:05:00.000-05:00"
                            },
                            {
                                "value": "173",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T06:10:00.000-05:00"
                            },
                            {
                                "value": "174",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T06:15:00.000-05:00"
                            },
                            {
                                "value": "173",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T06:20:00.000-05:00"
                            },
                            {
                                "value": "172",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T06:25:00.000-05:00"
                            },
                            {
                                "value": "172",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T06:30:00.000-05:00"
                            },
                            {
                                "value": "171",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T06:35:00.000-05:00"
                            },
                            {
                                "value": "171",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T06:40:00.000-05:00"
                            },
                            {
                                "value": "171",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T06:45:00.000-05:00"
                            },
                            {
                                "value": "170",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T06:50:00.000-05:00"
                            },
                            {
                                "value": "169",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T06:55:00.000-05:00"
                            },
                            {
                                "value": "169",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T07:00:00.000-05:00"
                            },
                            {
                                "value": "169",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T07:05:00.000-05:00"
                            },
                            {
                                "value": "168",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T07:10:00.000-05:00"
                            },
                            {
                                "value": "168",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T07:15:00.000-05:00"
                            },
                            {
                                "value": "167",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T07:20:00.000-05:00"
                            },
                            {
                                "value": "166",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T07:25:00.000-05:00"
                            },
                            {
                                "value": "167",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T07:30:00.000-05:00"
                            },
                            {
                                "value": "167",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T07:35:00.000-05:00"
                            },
                            {
                                "value": "165",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T07:40:00.000-05:00"
                            },
                            {
                                "value": "165",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T07:45:00.000-05:00"
                            },
                            {
                                "value": "165",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T07:50:00.000-05:00"
                            },
                            {
                                "value": "164",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T07:55:00.000-05:00"
                            },
                            {
                                "value": "164",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T08:00:00.000-05:00"
                            },
                            {
                                "value": "162",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T08:05:00.000-05:00"
                            },
                            {
                                "value": "163",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T08:10:00.000-05:00"
                            },
                            {
                                "value": "161",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T08:15:00.000-05:00"
                            },
                            {
                                "value": "162",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T08:20:00.000-05:00"
                            },
                            {
                                "value": "161",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T08:25:00.000-05:00"
                            },
                            {
                                "value": "161",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T08:30:00.000-05:00"
                            },
                            {
                                "value": "161",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T08:35:00.000-05:00"
                            },
                            {
                                "value": "160",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T08:40:00.000-05:00"
                            },
                            {
                                "value": "160",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T08:45:00.000-05:00"
                            },
                            {
                                "value": "160",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T08:50:00.000-05:00"
                            },
                            {
                                "value": "158",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T08:55:00.000-05:00"
                            },
                            {
                                "value": "158",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T09:00:00.000-05:00"
                            },
                            {
                                "value": "158",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T09:05:00.000-05:00"
                            },
                            {
                                "value": "158",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T09:10:00.000-05:00"
                            },
                            {
                                "value": "158",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T09:15:00.000-05:00"
                            },
                            {
                                "value": "157",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T09:20:00.000-05:00"
                            },
                            {
                                "value": "156",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T09:25:00.000-05:00"
                            },
                            {
                                "value": "156",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T09:30:00.000-05:00"
                            },
                            {
                                "value": "155",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T09:35:00.000-05:00"
                            },
                            {
                                "value": "154",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T09:40:00.000-05:00"
                            },
                            {
                                "value": "155",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T09:45:00.000-05:00"
                            },
                            {
                                "value": "153",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T09:50:00.000-05:00"
                            },
                            {
                                "value": "153",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T09:55:00.000-05:00"
                            },
                            {
                                "value": "152",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T10:00:00.000-05:00"
                            },
                            {
                                "value": "152",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T10:05:00.000-05:00"
                            },
                            {
                                "value": "152",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T10:10:00.000-05:00"
                            },
                            {
                                "value": "151",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T10:15:00.000-05:00"
                            },
                            {
                                "value": "151",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T10:20:00.000-05:00"
                            },
                            {
                                "value": "150",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T10:25:00.000-05:00"
                            },
                            {
                                "value": "150",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T10:30:00.000-05:00"
                            },
                            {
                                "value": "149",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T10:35:00.000-05:00"
                            },
                            {
                                "value": "149",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T10:40:00.000-05:00"
                            },
                            {
                                "value": "148",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T10:45:00.000-05:00"
                            },
                            {
                                "value": "148",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T10:50:00.000-05:00"
                            },
                            {
                                "value": "147",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T10:55:00.000-05:00"
                            },
                            {
                                "value": "146",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T11:00:00.000-05:00"
                            },
                            {
                                "value": "146",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T11:05:00.000-05:00"
                            },
                            {
                                "value": "145",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T11:10:00.000-05:00"
                            },
                            {
                                "value": "145",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T11:15:00.000-05:00"
                            },
                            {
                                "value": "145",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T11:20:00.000-05:00"
                            },
                            {
                                "value": "144",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T11:25:00.000-05:00"
                            },
                            {
                                "value": "144",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T11:30:00.000-05:00"
                            },
                            {
                                "value": "143",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T11:35:00.000-05:00"
                            },
                            {
                                "value": "143",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T11:40:00.000-05:00"
                            },
                            {
                                "value": "142",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T11:45:00.000-05:00"
                            },
                            {
                                "value": "142",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T11:50:00.000-05:00"
                            },
                            {
                                "value": "142",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T11:55:00.000-05:00"
                            },
                            {
                                "value": "141",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T12:00:00.000-05:00"
                            },
                            {
                                "value": "141",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T12:05:00.000-05:00"
                            },
                            {
                                "value": "140",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T12:10:00.000-05:00"
                            },
                            {
                                "value": "140",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T12:15:00.000-05:00"
                            },
                            {
                                "value": "139",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T12:20:00.000-05:00"
                            },
                            {
                                "value": "139",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T12:25:00.000-05:00"
                            },
                            {
                                "value": "138",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T12:30:00.000-05:00"
                            },
                            {
                                "value": "137",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T12:35:00.000-05:00"
                            },
                            {
                                "value": "137",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T12:40:00.000-05:00"
                            },
                            {
                                "value": "137",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T12:45:00.000-05:00"
                            },
                            {
                                "value": "136",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T12:50:00.000-05:00"
                            },
                            {
                                "value": "135",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T12:55:00.000-05:00"
                            },
                            {
                                "value": "135",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T13:00:00.000-05:00"
                            },
                            {
                                "value": "135",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T13:05:00.000-05:00"
                            },
                            {
                                "value": "135",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T13:10:00.000-05:00"
                            },
                            {
                                "value": "134",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T13:15:00.000-05:00"
                            },
                            {
                                "value": "134",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T13:20:00.000-05:00"
                            },
                            {
                                "value": "133",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T13:25:00.000-05:00"
                            },
                            {
                                "value": "133",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T13:30:00.000-05:00"
                            },
                            {
                                "value": "132",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T13:35:00.000-05:00"
                            },
                            {
                                "value": "131",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T13:40:00.000-05:00"
                            },
                            {
                                "value": "131",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T13:45:00.000-05:00"
                            },
                            {
                                "value": "131",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T13:50:00.000-05:00"
                            },
                            {
                                "value": "131",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T13:55:00.000-05:00"
                            },
                            {
                                "value": "130",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T14:00:00.000-05:00"
                            },
                            {
                                "value": "129",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T14:05:00.000-05:00"
                            },
                            {
                                "value": "130",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T14:10:00.000-05:00"
                            },
                            {
                                "value": "129",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T14:15:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T14:20:00.000-05:00"
                            },
                            {
                                "value": "128",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T14:25:00.000-05:00"
                            },
                            {
                                "value": "128",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T14:30:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T14:35:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T14:40:00.000-05:00"
                            },
                            {
                                "value": "126",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T14:45:00.000-05:00"
                            },
                            {
                                "value": "126",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T14:50:00.000-05:00"
                            },
                            {
                                "value": "126",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T14:55:00.000-05:00"
                            },
                            {
                                "value": "126",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T15:00:00.000-05:00"
                            },
                            {
                                "value": "125",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T15:05:00.000-05:00"
                            },
                            {
                                "value": "125",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T15:10:00.000-05:00"
                            },
                            {
                                "value": "125",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T15:15:00.000-05:00"
                            },
                            {
                                "value": "125",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T15:20:00.000-05:00"
                            },
                            {
                                "value": "124",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T15:25:00.000-05:00"
                            },
                            {
                                "value": "125",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T15:30:00.000-05:00"
                            },
                            {
                                "value": "124",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T15:35:00.000-05:00"
                            },
                            {
                                "value": "123",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T15:40:00.000-05:00"
                            },
                            {
                                "value": "124",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T15:45:00.000-05:00"
                            },
                            {
                                "value": "123",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T15:50:00.000-05:00"
                            },
                            {
                                "value": "124",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T15:55:00.000-05:00"
                            },
                            {
                                "value": "123",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T16:00:00.000-05:00"
                            },
                            {
                                "value": "123",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T16:05:00.000-05:00"
                            },
                            {
                                "value": "123",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T16:10:00.000-05:00"
                            },
                            {
                                "value": "124",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T16:15:00.000-05:00"
                            },
                            {
                                "value": "123",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T16:20:00.000-05:00"
                            },
                            {
                                "value": "123",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T16:25:00.000-05:00"
                            },
                            {
                                "value": "123",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T16:30:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T16:35:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T16:40:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T16:45:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T16:50:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T16:55:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T17:00:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T17:05:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T17:10:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T17:15:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T17:20:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T17:25:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T17:30:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T17:35:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T17:40:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T17:45:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T17:50:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T17:55:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T18:00:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T18:05:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T18:10:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T18:15:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T18:20:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T18:25:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T18:30:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T18:35:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T18:40:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T18:45:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T18:50:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T18:55:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T19:00:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T19:05:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T19:10:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T19:15:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T19:20:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T19:25:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T19:30:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T19:35:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T19:40:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T19:45:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T19:50:00.000-05:00"
                            },
                            {
                                "value": "119",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T19:55:00.000-05:00"
                            },
                            {
                                "value": "119",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T20:00:00.000-05:00"
                            },
                            {
                                "value": "119",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T20:05:00.000-05:00"
                            },
                            {
                                "value": "118",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T20:10:00.000-05:00"
                            },
                            {
                                "value": "118",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T20:15:00.000-05:00"
                            },
                            {
                                "value": "119",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T20:20:00.000-05:00"
                            },
                            {
                                "value": "118",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T20:25:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T20:30:00.000-05:00"
                            },
                            {
                                "value": "119",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T20:35:00.000-05:00"
                            },
                            {
                                "value": "119",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T20:40:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T20:45:00.000-05:00"
                            },
                            {
                                "value": "118",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T20:50:00.000-05:00"
                            },
                            {
                                "value": "119",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T20:55:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T21:00:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T21:05:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T21:10:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T21:15:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T21:20:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T21:25:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T21:30:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T21:35:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T21:40:00.000-05:00"
                            },
                            {
                                "value": "125",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T21:45:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T21:50:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T21:55:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T22:00:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T22:05:00.000-05:00"
                            },
                            {
                                "value": "123",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T22:10:00.000-05:00"
                            },
                            {
                                "value": "123",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T22:15:00.000-05:00"
                            },
                            {
                                "value": "123",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T22:20:00.000-05:00"
                            },
                            {
                                "value": "124",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T22:25:00.000-05:00"
                            },
                            {
                                "value": "124",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T22:30:00.000-05:00"
                            },
                            {
                                "value": "124",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T22:35:00.000-05:00"
                            },
                            {
                                "value": "124",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T22:40:00.000-05:00"
                            },
                            {
                                "value": "124",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T22:45:00.000-05:00"
                            },
                            {
                                "value": "124",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T22:50:00.000-05:00"
                            },
                            {
                                "value": "124",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T22:55:00.000-05:00"
                            },
                            {
                                "value": "125",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T23:00:00.000-05:00"
                            },
                            {
                                "value": "125",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T23:05:00.000-05:00"
                            },
                            {
                                "value": "126",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T23:10:00.000-05:00"
                            },
                            {
                                "value": "126",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T23:15:00.000-05:00"
                            },
                            {
                                "value": "126",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T23:20:00.000-05:00"
                            },
                            {
                                "value": "125",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T23:25:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T23:30:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T23:35:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T23:40:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T23:45:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T23:50:00.000-05:00"
                            },
                            {
                                "value": "126",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-18T23:55:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T00:00:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T00:05:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T00:10:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T00:15:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T00:20:00.000-05:00"
                            },
                            {
                                "value": "128",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T00:25:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T00:30:00.000-05:00"
                            },
                            {
                                "value": "128",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T00:35:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T00:40:00.000-05:00"
                            },
                            {
                                "value": "128",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T00:45:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T00:50:00.000-05:00"
                            },
                            {
                                "value": "128",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T00:55:00.000-05:00"
                            },
                            {
                                "value": "128",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T01:00:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T01:05:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T01:10:00.000-05:00"
                            },
                            {
                                "value": "128",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T01:15:00.000-05:00"
                            },
                            {
                                "value": "128",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T01:20:00.000-05:00"
                            },
                            {
                                "value": "128",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T01:25:00.000-05:00"
                            },
                            {
                                "value": "128",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T01:30:00.000-05:00"
                            },
                            {
                                "value": "128",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T01:35:00.000-05:00"
                            },
                            {
                                "value": "128",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T01:40:00.000-05:00"
                            },
                            {
                                "value": "129",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T01:45:00.000-05:00"
                            },
                            {
                                "value": "128",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T01:50:00.000-05:00"
                            },
                            {
                                "value": "128",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T01:55:00.000-05:00"
                            },
                            {
                                "value": "128",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T02:00:00.000-05:00"
                            },
                            {
                                "value": "128",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T02:05:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T02:10:00.000-05:00"
                            },
                            {
                                "value": "128",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T02:15:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T02:20:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T02:25:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T02:30:00.000-05:00"
                            },
                            {
                                "value": "128",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T02:35:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T02:40:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T02:45:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T02:50:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T02:55:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T03:00:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T03:05:00.000-05:00"
                            },
                            {
                                "value": "126",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T03:10:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T03:15:00.000-05:00"
                            },
                            {
                                "value": "126",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T03:20:00.000-05:00"
                            },
                            {
                                "value": "127",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T03:25:00.000-05:00"
                            },
                            {
                                "value": "126",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T03:30:00.000-05:00"
                            },
                            {
                                "value": "126",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T03:35:00.000-05:00"
                            },
                            {
                                "value": "125",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T03:40:00.000-05:00"
                            },
                            {
                                "value": "126",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T03:45:00.000-05:00"
                            },
                            {
                                "value": "125",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T03:50:00.000-05:00"
                            },
                            {
                                "value": "125",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T03:55:00.000-05:00"
                            },
                            {
                                "value": "125",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T04:00:00.000-05:00"
                            },
                            {
                                "value": "125",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T04:05:00.000-05:00"
                            },
                            {
                                "value": "125",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T04:10:00.000-05:00"
                            },
                            {
                                "value": "124",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T04:15:00.000-05:00"
                            },
                            {
                                "value": "125",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T04:20:00.000-05:00"
                            },
                            {
                                "value": "125",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T04:25:00.000-05:00"
                            },
                            {
                                "value": "124",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T04:30:00.000-05:00"
                            },
                            {
                                "value": "124",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T04:35:00.000-05:00"
                            },
                            {
                                "value": "124",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T04:40:00.000-05:00"
                            },
                            {
                                "value": "124",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T04:45:00.000-05:00"
                            },
                            {
                                "value": "123",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T04:50:00.000-05:00"
                            },
                            {
                                "value": "124",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T04:55:00.000-05:00"
                            },
                            {
                                "value": "123",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T05:00:00.000-05:00"
                            },
                            {
                                "value": "123",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T05:05:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T05:10:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T05:15:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T05:20:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T05:25:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T05:30:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T05:35:00.000-05:00"
                            },
                            {
                                "value": "122",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T05:40:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T05:45:00.000-05:00"
                            },
                            {
                                "value": "121",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T05:50:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T05:55:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T06:00:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T06:05:00.000-05:00"
                            },
                            {
                                "value": "120",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T06:10:00.000-05:00"
                            },
                            {
                                "value": "118",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T06:15:00.000-05:00"
                            },
                            {
                                "value": "119",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T06:20:00.000-05:00"
                            },
                            {
                                "value": "119",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T06:25:00.000-05:00"
                            },
                            {
                                "value": "118",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T06:30:00.000-05:00"
                            },
                            {
                                "value": "118",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T06:35:00.000-05:00"
                            },
                            {
                                "value": "118",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T06:40:00.000-05:00"
                            },
                            {
                                "value": "117",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T06:45:00.000-05:00"
                            },
                            {
                                "value": "116",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T06:50:00.000-05:00"
                            },
                            {
                                "value": "116",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T06:55:00.000-05:00"
                            },
                            {
                                "value": "117",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T07:00:00.000-05:00"
                            },
                            {
                                "value": "117",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T07:05:00.000-05:00"
                            },
                            {
                                "value": "116",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T07:10:00.000-05:00"
                            },
                            {
                                "value": "115",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T07:15:00.000-05:00"
                            },
                            {
                                "value": "116",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T07:20:00.000-05:00"
                            },
                            {
                                "value": "116",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T07:25:00.000-05:00"
                            },
                            {
                                "value": "115",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T07:30:00.000-05:00"
                            },
                            {
                                "value": "115",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T07:35:00.000-05:00"
                            },
                            {
                                "value": "114",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T07:40:00.000-05:00"
                            },
                            {
                                "value": "114",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T07:45:00.000-05:00"
                            },
                            {
                                "value": "113",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T07:50:00.000-05:00"
                            },
                            {
                                "value": "113",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T07:55:00.000-05:00"
                            },
                            {
                                "value": "113",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T08:00:00.000-05:00"
                            },
                            {
                                "value": "112",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T08:05:00.000-05:00"
                            },
                            {
                                "value": "112",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T08:10:00.000-05:00"
                            },
                            {
                                "value": "112",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T08:15:00.000-05:00"
                            },
                            {
                                "value": "111",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T08:20:00.000-05:00"
                            },
                            {
                                "value": "111",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T08:25:00.000-05:00"
                            },
                            {
                                "value": "111",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T08:30:00.000-05:00"
                            },
                            {
                                "value": "111",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T08:35:00.000-05:00"
                            },
                            {
                                "value": "111",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T08:40:00.000-05:00"
                            },
                            {
                                "value": "110",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T08:45:00.000-05:00"
                            },
                            {
                                "value": "110",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T08:50:00.000-05:00"
                            },
                            {
                                "value": "109",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T08:55:00.000-05:00"
                            },
                            {
                                "value": "109",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T09:00:00.000-05:00"
                            },
                            {
                                "value": "109",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T09:05:00.000-05:00"
                            },
                            {
                                "value": "109",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T09:10:00.000-05:00"
                            },
                            {
                                "value": "108",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T09:15:00.000-05:00"
                            },
                            {
                                "value": "108",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T09:20:00.000-05:00"
                            },
                            {
                                "value": "108",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T09:25:00.000-05:00"
                            },
                            {
                                "value": "108",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T09:30:00.000-05:00"
                            },
                            {
                                "value": "108",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T09:35:00.000-05:00"
                            },
                            {
                                "value": "107",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T09:40:00.000-05:00"
                            },
                            {
                                "value": "107",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T09:45:00.000-05:00"
                            },
                            {
                                "value": "106",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T09:50:00.000-05:00"
                            },
                            {
                                "value": "106",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T09:55:00.000-05:00"
                            },
                            {
                                "value": "106",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T10:00:00.000-05:00"
                            },
                            {
                                "value": "106",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T10:05:00.000-05:00"
                            },
                            {
                                "value": "105",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T10:10:00.000-05:00"
                            },
                            {
                                "value": "104",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T10:15:00.000-05:00"
                            },
                            {
                                "value": "105",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T10:20:00.000-05:00"
                            },
                            {
                                "value": "104",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T10:25:00.000-05:00"
                            },
                            {
                                "value": "103",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T10:30:00.000-05:00"
                            },
                            {
                                "value": "104",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T10:35:00.000-05:00"
                            },
                            {
                                "value": "103",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T10:40:00.000-05:00"
                            },
                            {
                                "value": "103",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T10:45:00.000-05:00"
                            },
                            {
                                "value": "102",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T10:50:00.000-05:00"
                            },
                            {
                                "value": "103",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T10:55:00.000-05:00"
                            },
                            {
                                "value": "102",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T11:00:00.000-05:00"
                            },
                            {
                                "value": "102",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T11:05:00.000-05:00"
                            },
                            {
                                "value": "102",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T11:10:00.000-05:00"
                            },
                            {
                                "value": "101",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T11:15:00.000-05:00"
                            },
                            {
                                "value": "101",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T11:20:00.000-05:00"
                            },
                            {
                                "value": "101",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T11:25:00.000-05:00"
                            },
                            {
                                "value": "100",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T11:30:00.000-05:00"
                            },
                            {
                                "value": "100",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T11:35:00.000-05:00"
                            },
                            {
                                "value": "99.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T11:40:00.000-05:00"
                            },
                            {
                                "value": "99.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T11:45:00.000-05:00"
                            },
                            {
                                "value": "99.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T11:50:00.000-05:00"
                            },
                            {
                                "value": "99.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T11:55:00.000-05:00"
                            },
                            {
                                "value": "99.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T12:00:00.000-05:00"
                            },
                            {
                                "value": "98.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T12:05:00.000-05:00"
                            },
                            {
                                "value": "98.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T12:10:00.000-05:00"
                            },
                            {
                                "value": "98.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T12:15:00.000-05:00"
                            },
                            {
                                "value": "97.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T12:20:00.000-05:00"
                            },
                            {
                                "value": "97.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T12:25:00.000-05:00"
                            },
                            {
                                "value": "97.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T12:30:00.000-05:00"
                            },
                            {
                                "value": "97.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T12:35:00.000-05:00"
                            },
                            {
                                "value": "97.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T12:40:00.000-05:00"
                            },
                            {
                                "value": "96.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T12:45:00.000-05:00"
                            },
                            {
                                "value": "96.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T12:50:00.000-05:00"
                            },
                            {
                                "value": "96.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T12:55:00.000-05:00"
                            },
                            {
                                "value": "95.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T13:00:00.000-05:00"
                            },
                            {
                                "value": "95.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T13:05:00.000-05:00"
                            },
                            {
                                "value": "95.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T13:10:00.000-05:00"
                            },
                            {
                                "value": "95.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T13:15:00.000-05:00"
                            },
                            {
                                "value": "94.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T13:20:00.000-05:00"
                            },
                            {
                                "value": "95.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T13:25:00.000-05:00"
                            },
                            {
                                "value": "94.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T13:30:00.000-05:00"
                            },
                            {
                                "value": "94.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T13:35:00.000-05:00"
                            },
                            {
                                "value": "94.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T13:40:00.000-05:00"
                            },
                            {
                                "value": "93.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T13:45:00.000-05:00"
                            },
                            {
                                "value": "93.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T13:50:00.000-05:00"
                            },
                            {
                                "value": "93.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T13:55:00.000-05:00"
                            },
                            {
                                "value": "93.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T14:00:00.000-05:00"
                            },
                            {
                                "value": "93.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T14:05:00.000-05:00"
                            },
                            {
                                "value": "93.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T14:10:00.000-05:00"
                            },
                            {
                                "value": "93.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T14:15:00.000-05:00"
                            },
                            {
                                "value": "93.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T14:20:00.000-05:00"
                            },
                            {
                                "value": "92.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T14:25:00.000-05:00"
                            },
                            {
                                "value": "92.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T14:30:00.000-05:00"
                            },
                            {
                                "value": "92.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T14:35:00.000-05:00"
                            },
                            {
                                "value": "92.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T14:40:00.000-05:00"
                            },
                            {
                                "value": "92.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T14:45:00.000-05:00"
                            },
                            {
                                "value": "91.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T14:50:00.000-05:00"
                            },
                            {
                                "value": "92.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T14:55:00.000-05:00"
                            },
                            {
                                "value": "92.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T15:00:00.000-05:00"
                            },
                            {
                                "value": "92.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T15:05:00.000-05:00"
                            },
                            {
                                "value": "92.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T15:10:00.000-05:00"
                            },
                            {
                                "value": "91.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T15:15:00.000-05:00"
                            },
                            {
                                "value": "92.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T15:20:00.000-05:00"
                            },
                            {
                                "value": "91.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T15:25:00.000-05:00"
                            },
                            {
                                "value": "91.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T15:30:00.000-05:00"
                            },
                            {
                                "value": "91.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T15:35:00.000-05:00"
                            },
                            {
                                "value": "91.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T15:40:00.000-05:00"
                            },
                            {
                                "value": "91.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T15:45:00.000-05:00"
                            },
                            {
                                "value": "91.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T15:50:00.000-05:00"
                            },
                            {
                                "value": "91.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T15:55:00.000-05:00"
                            },
                            {
                                "value": "91.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T16:00:00.000-05:00"
                            },
                            {
                                "value": "91.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T16:05:00.000-05:00"
                            },
                            {
                                "value": "91.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T16:10:00.000-05:00"
                            },
                            {
                                "value": "91.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T16:15:00.000-05:00"
                            },
                            {
                                "value": "91.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T16:20:00.000-05:00"
                            },
                            {
                                "value": "91.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T16:25:00.000-05:00"
                            },
                            {
                                "value": "91.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T16:30:00.000-05:00"
                            },
                            {
                                "value": "91.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T16:35:00.000-05:00"
                            },
                            {
                                "value": "91.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T16:40:00.000-05:00"
                            },
                            {
                                "value": "91.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T16:45:00.000-05:00"
                            },
                            {
                                "value": "91.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T16:50:00.000-05:00"
                            },
                            {
                                "value": "91.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T16:55:00.000-05:00"
                            },
                            {
                                "value": "90.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T17:00:00.000-05:00"
                            },
                            {
                                "value": "91.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T17:05:00.000-05:00"
                            },
                            {
                                "value": "91.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T17:10:00.000-05:00"
                            },
                            {
                                "value": "91.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T17:15:00.000-05:00"
                            },
                            {
                                "value": "91.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T17:20:00.000-05:00"
                            },
                            {
                                "value": "91.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T17:25:00.000-05:00"
                            },
                            {
                                "value": "91.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T17:30:00.000-05:00"
                            },
                            {
                                "value": "91.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T17:35:00.000-05:00"
                            },
                            {
                                "value": "91.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T17:40:00.000-05:00"
                            },
                            {
                                "value": "91.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T17:45:00.000-05:00"
                            },
                            {
                                "value": "91.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T17:50:00.000-05:00"
                            },
                            {
                                "value": "91.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T17:55:00.000-05:00"
                            },
                            {
                                "value": "91.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T18:00:00.000-05:00"
                            },
                            {
                                "value": "91.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T18:05:00.000-05:00"
                            },
                            {
                                "value": "91.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T18:10:00.000-05:00"
                            },
                            {
                                "value": "91.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T18:15:00.000-05:00"
                            },
                            {
                                "value": "91.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T18:20:00.000-05:00"
                            },
                            {
                                "value": "91.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T18:25:00.000-05:00"
                            },
                            {
                                "value": "91.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T18:30:00.000-05:00"
                            },
                            {
                                "value": "91.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T18:35:00.000-05:00"
                            },
                            {
                                "value": "91.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T18:40:00.000-05:00"
                            },
                            {
                                "value": "91.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T18:45:00.000-05:00"
                            },
                            {
                                "value": "91.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T18:50:00.000-05:00"
                            },
                            {
                                "value": "91.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T18:55:00.000-05:00"
                            },
                            {
                                "value": "91.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T19:00:00.000-05:00"
                            },
                            {
                                "value": "92.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T19:05:00.000-05:00"
                            },
                            {
                                "value": "91.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T19:10:00.000-05:00"
                            },
                            {
                                "value": "92.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T19:15:00.000-05:00"
                            },
                            {
                                "value": "91.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T19:20:00.000-05:00"
                            },
                            {
                                "value": "91.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T19:25:00.000-05:00"
                            },
                            {
                                "value": "91.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T19:30:00.000-05:00"
                            },
                            {
                                "value": "91.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T19:35:00.000-05:00"
                            },
                            {
                                "value": "91.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T19:40:00.000-05:00"
                            },
                            {
                                "value": "91.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T19:45:00.000-05:00"
                            },
                            {
                                "value": "91.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T19:50:00.000-05:00"
                            },
                            {
                                "value": "91.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T19:55:00.000-05:00"
                            },
                            {
                                "value": "91.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T20:00:00.000-05:00"
                            },
                            {
                                "value": "91.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T20:05:00.000-05:00"
                            },
                            {
                                "value": "91.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T20:10:00.000-05:00"
                            },
                            {
                                "value": "91.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T20:15:00.000-05:00"
                            },
                            {
                                "value": "91.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T20:20:00.000-05:00"
                            },
                            {
                                "value": "91.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T20:25:00.000-05:00"
                            },
                            {
                                "value": "91.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T20:30:00.000-05:00"
                            },
                            {
                                "value": "91.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T20:35:00.000-05:00"
                            },
                            {
                                "value": "91.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T20:40:00.000-05:00"
                            },
                            {
                                "value": "91.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T20:45:00.000-05:00"
                            },
                            {
                                "value": "91.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T20:50:00.000-05:00"
                            },
                            {
                                "value": "91.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T20:55:00.000-05:00"
                            },
                            {
                                "value": "91.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T21:00:00.000-05:00"
                            },
                            {
                                "value": "91.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T21:05:00.000-05:00"
                            },
                            {
                                "value": "91.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T21:10:00.000-05:00"
                            },
                            {
                                "value": "91.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T21:15:00.000-05:00"
                            },
                            {
                                "value": "91.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T21:20:00.000-05:00"
                            },
                            {
                                "value": "91.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T21:25:00.000-05:00"
                            },
                            {
                                "value": "91.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T21:30:00.000-05:00"
                            },
                            {
                                "value": "91.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T21:35:00.000-05:00"
                            },
                            {
                                "value": "91.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T21:40:00.000-05:00"
                            },
                            {
                                "value": "91.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T21:45:00.000-05:00"
                            },
                            {
                                "value": "91.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T21:50:00.000-05:00"
                            },
                            {
                                "value": "91.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T21:55:00.000-05:00"
                            },
                            {
                                "value": "91.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T22:00:00.000-05:00"
                            },
                            {
                                "value": "92.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T22:05:00.000-05:00"
                            },
                            {
                                "value": "91.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T22:10:00.000-05:00"
                            },
                            {
                                "value": "91.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T22:15:00.000-05:00"
                            },
                            {
                                "value": "91.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T22:20:00.000-05:00"
                            },
                            {
                                "value": "91.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T22:25:00.000-05:00"
                            },
                            {
                                "value": "92.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T22:30:00.000-05:00"
                            },
                            {
                                "value": "92.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T22:35:00.000-05:00"
                            },
                            {
                                "value": "92.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T22:40:00.000-05:00"
                            },
                            {
                                "value": "93.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T22:45:00.000-05:00"
                            },
                            {
                                "value": "92.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T22:50:00.000-05:00"
                            },
                            {
                                "value": "92.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T22:55:00.000-05:00"
                            },
                            {
                                "value": "93.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T23:00:00.000-05:00"
                            },
                            {
                                "value": "93.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T23:05:00.000-05:00"
                            },
                            {
                                "value": "93.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T23:10:00.000-05:00"
                            },
                            {
                                "value": "93.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T23:15:00.000-05:00"
                            },
                            {
                                "value": "93.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T23:20:00.000-05:00"
                            },
                            {
                                "value": "94.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T23:25:00.000-05:00"
                            },
                            {
                                "value": "93.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T23:30:00.000-05:00"
                            },
                            {
                                "value": "93.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T23:35:00.000-05:00"
                            },
                            {
                                "value": "94.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T23:40:00.000-05:00"
                            },
                            {
                                "value": "94.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T23:45:00.000-05:00"
                            },
                            {
                                "value": "94.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T23:50:00.000-05:00"
                            },
                            {
                                "value": "94.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-19T23:55:00.000-05:00"
                            },
                            {
                                "value": "94.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T00:00:00.000-05:00"
                            },
                            {
                                "value": "94.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T00:05:00.000-05:00"
                            },
                            {
                                "value": "94.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T00:10:00.000-05:00"
                            },
                            {
                                "value": "95.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T00:15:00.000-05:00"
                            },
                            {
                                "value": "94.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T00:20:00.000-05:00"
                            },
                            {
                                "value": "94.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T00:25:00.000-05:00"
                            },
                            {
                                "value": "95.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T00:30:00.000-05:00"
                            },
                            {
                                "value": "95.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T00:35:00.000-05:00"
                            },
                            {
                                "value": "95.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T00:40:00.000-05:00"
                            },
                            {
                                "value": "94.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T00:45:00.000-05:00"
                            },
                            {
                                "value": "95.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T00:50:00.000-05:00"
                            },
                            {
                                "value": "95.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T00:55:00.000-05:00"
                            },
                            {
                                "value": "95.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T01:00:00.000-05:00"
                            },
                            {
                                "value": "95.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T01:05:00.000-05:00"
                            },
                            {
                                "value": "95.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T01:10:00.000-05:00"
                            },
                            {
                                "value": "95.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T01:15:00.000-05:00"
                            },
                            {
                                "value": "95.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T01:20:00.000-05:00"
                            },
                            {
                                "value": "95.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T01:25:00.000-05:00"
                            },
                            {
                                "value": "95.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T01:30:00.000-05:00"
                            },
                            {
                                "value": "95.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T01:35:00.000-05:00"
                            },
                            {
                                "value": "95.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T01:40:00.000-05:00"
                            },
                            {
                                "value": "95.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T01:45:00.000-05:00"
                            },
                            {
                                "value": "95.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T01:50:00.000-05:00"
                            },
                            {
                                "value": "95.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T01:55:00.000-05:00"
                            },
                            {
                                "value": "95.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T02:00:00.000-05:00"
                            },
                            {
                                "value": "95.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T02:05:00.000-05:00"
                            },
                            {
                                "value": "95.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T02:10:00.000-05:00"
                            },
                            {
                                "value": "95.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T02:15:00.000-05:00"
                            },
                            {
                                "value": "95.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T02:20:00.000-05:00"
                            },
                            {
                                "value": "95.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T02:25:00.000-05:00"
                            },
                            {
                                "value": "95.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T02:30:00.000-05:00"
                            },
                            {
                                "value": "95.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T02:35:00.000-05:00"
                            },
                            {
                                "value": "95.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T02:40:00.000-05:00"
                            },
                            {
                                "value": "95.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T02:45:00.000-05:00"
                            },
                            {
                                "value": "95.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T02:50:00.000-05:00"
                            },
                            {
                                "value": "95.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T02:55:00.000-05:00"
                            },
                            {
                                "value": "95.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T03:00:00.000-05:00"
                            },
                            {
                                "value": "95.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T03:05:00.000-05:00"
                            },
                            {
                                "value": "95.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T03:10:00.000-05:00"
                            },
                            {
                                "value": "95.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T03:15:00.000-05:00"
                            },
                            {
                                "value": "95.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T03:20:00.000-05:00"
                            },
                            {
                                "value": "94.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T03:25:00.000-05:00"
                            },
                            {
                                "value": "94.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T03:30:00.000-05:00"
                            },
                            {
                                "value": "94.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T03:35:00.000-05:00"
                            },
                            {
                                "value": "95.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T03:40:00.000-05:00"
                            },
                            {
                                "value": "94.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T03:45:00.000-05:00"
                            },
                            {
                                "value": "94.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T03:50:00.000-05:00"
                            },
                            {
                                "value": "94.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T03:55:00.000-05:00"
                            },
                            {
                                "value": "94.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T04:00:00.000-05:00"
                            },
                            {
                                "value": "94.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T04:05:00.000-05:00"
                            },
                            {
                                "value": "94.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T04:10:00.000-05:00"
                            },
                            {
                                "value": "93.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T04:15:00.000-05:00"
                            },
                            {
                                "value": "93.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T04:20:00.000-05:00"
                            },
                            {
                                "value": "93.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T04:25:00.000-05:00"
                            },
                            {
                                "value": "93.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T04:30:00.000-05:00"
                            },
                            {
                                "value": "93.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T04:35:00.000-05:00"
                            },
                            {
                                "value": "93.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T04:40:00.000-05:00"
                            },
                            {
                                "value": "93.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T04:45:00.000-05:00"
                            },
                            {
                                "value": "92.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T04:50:00.000-05:00"
                            },
                            {
                                "value": "92.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T04:55:00.000-05:00"
                            },
                            {
                                "value": "92.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T05:00:00.000-05:00"
                            },
                            {
                                "value": "92.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T05:05:00.000-05:00"
                            },
                            {
                                "value": "92.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T05:10:00.000-05:00"
                            },
                            {
                                "value": "92.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T05:15:00.000-05:00"
                            },
                            {
                                "value": "92.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T05:20:00.000-05:00"
                            },
                            {
                                "value": "91.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T05:25:00.000-05:00"
                            },
                            {
                                "value": "92.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T05:30:00.000-05:00"
                            },
                            {
                                "value": "91.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T05:35:00.000-05:00"
                            },
                            {
                                "value": "91.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T05:40:00.000-05:00"
                            },
                            {
                                "value": "91.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T05:45:00.000-05:00"
                            },
                            {
                                "value": "90.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T05:50:00.000-05:00"
                            },
                            {
                                "value": "90.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T05:55:00.000-05:00"
                            },
                            {
                                "value": "90.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T06:00:00.000-05:00"
                            },
                            {
                                "value": "90.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T06:05:00.000-05:00"
                            },
                            {
                                "value": "89.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T06:10:00.000-05:00"
                            },
                            {
                                "value": "90.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T06:15:00.000-05:00"
                            },
                            {
                                "value": "90.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T06:20:00.000-05:00"
                            },
                            {
                                "value": "89.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T06:25:00.000-05:00"
                            },
                            {
                                "value": "89.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T06:30:00.000-05:00"
                            },
                            {
                                "value": "89.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T06:35:00.000-05:00"
                            },
                            {
                                "value": "89.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T06:40:00.000-05:00"
                            },
                            {
                                "value": "88.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T06:45:00.000-05:00"
                            },
                            {
                                "value": "88.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T06:50:00.000-05:00"
                            },
                            {
                                "value": "88.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T06:55:00.000-05:00"
                            },
                            {
                                "value": "88.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T07:00:00.000-05:00"
                            },
                            {
                                "value": "88.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T07:05:00.000-05:00"
                            },
                            {
                                "value": "88.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T07:10:00.000-05:00"
                            },
                            {
                                "value": "88.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T07:15:00.000-05:00"
                            },
                            {
                                "value": "88.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T07:20:00.000-05:00"
                            },
                            {
                                "value": "88.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T07:25:00.000-05:00"
                            },
                            {
                                "value": "87.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T07:30:00.000-05:00"
                            },
                            {
                                "value": "87.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T07:35:00.000-05:00"
                            },
                            {
                                "value": "87.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T07:40:00.000-05:00"
                            },
                            {
                                "value": "87.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T07:45:00.000-05:00"
                            },
                            {
                                "value": "87.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T07:50:00.000-05:00"
                            },
                            {
                                "value": "87.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T07:55:00.000-05:00"
                            },
                            {
                                "value": "86.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T08:00:00.000-05:00"
                            },
                            {
                                "value": "86.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T08:05:00.000-05:00"
                            },
                            {
                                "value": "86.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T08:10:00.000-05:00"
                            },
                            {
                                "value": "86.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T08:15:00.000-05:00"
                            },
                            {
                                "value": "86.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T08:20:00.000-05:00"
                            },
                            {
                                "value": "86.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T08:25:00.000-05:00"
                            },
                            {
                                "value": "85.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T08:30:00.000-05:00"
                            },
                            {
                                "value": "86.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T08:35:00.000-05:00"
                            },
                            {
                                "value": "85.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T08:40:00.000-05:00"
                            },
                            {
                                "value": "85.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T08:45:00.000-05:00"
                            },
                            {
                                "value": "85.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T08:50:00.000-05:00"
                            },
                            {
                                "value": "85.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T08:55:00.000-05:00"
                            },
                            {
                                "value": "84.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T09:00:00.000-05:00"
                            },
                            {
                                "value": "84.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T09:05:00.000-05:00"
                            },
                            {
                                "value": "84.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T09:10:00.000-05:00"
                            },
                            {
                                "value": "84.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T09:15:00.000-05:00"
                            },
                            {
                                "value": "84.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T09:20:00.000-05:00"
                            },
                            {
                                "value": "84.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T09:25:00.000-05:00"
                            },
                            {
                                "value": "84.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T09:30:00.000-05:00"
                            },
                            {
                                "value": "83.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T09:35:00.000-05:00"
                            },
                            {
                                "value": "83.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T09:40:00.000-05:00"
                            },
                            {
                                "value": "83.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T09:45:00.000-05:00"
                            },
                            {
                                "value": "83.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T09:50:00.000-05:00"
                            },
                            {
                                "value": "83.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T09:55:00.000-05:00"
                            },
                            {
                                "value": "83.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T10:00:00.000-05:00"
                            },
                            {
                                "value": "83.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T10:05:00.000-05:00"
                            },
                            {
                                "value": "83.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T10:10:00.000-05:00"
                            },
                            {
                                "value": "83.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T10:15:00.000-05:00"
                            },
                            {
                                "value": "82.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T10:20:00.000-05:00"
                            },
                            {
                                "value": "82.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T10:25:00.000-05:00"
                            },
                            {
                                "value": "82.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T10:30:00.000-05:00"
                            },
                            {
                                "value": "82.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T10:35:00.000-05:00"
                            },
                            {
                                "value": "82.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T10:40:00.000-05:00"
                            },
                            {
                                "value": "82.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T10:45:00.000-05:00"
                            },
                            {
                                "value": "82.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T10:50:00.000-05:00"
                            },
                            {
                                "value": "81.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T10:55:00.000-05:00"
                            },
                            {
                                "value": "81.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T11:00:00.000-05:00"
                            },
                            {
                                "value": "81.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T11:05:00.000-05:00"
                            },
                            {
                                "value": "81.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T11:10:00.000-05:00"
                            },
                            {
                                "value": "81.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T11:15:00.000-05:00"
                            },
                            {
                                "value": "81.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T11:20:00.000-05:00"
                            },
                            {
                                "value": "81.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T11:25:00.000-05:00"
                            },
                            {
                                "value": "81.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T11:30:00.000-05:00"
                            },
                            {
                                "value": "81.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T11:35:00.000-05:00"
                            },
                            {
                                "value": "80.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T11:40:00.000-05:00"
                            },
                            {
                                "value": "80.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T11:45:00.000-05:00"
                            },
                            {
                                "value": "80.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T11:50:00.000-05:00"
                            },
                            {
                                "value": "80.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T11:55:00.000-05:00"
                            },
                            {
                                "value": "80.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T12:00:00.000-05:00"
                            },
                            {
                                "value": "80.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T12:05:00.000-05:00"
                            },
                            {
                                "value": "80.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T12:10:00.000-05:00"
                            },
                            {
                                "value": "80.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T12:15:00.000-05:00"
                            },
                            {
                                "value": "80.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T12:20:00.000-05:00"
                            },
                            {
                                "value": "79.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T12:25:00.000-05:00"
                            },
                            {
                                "value": "79.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T12:30:00.000-05:00"
                            },
                            {
                                "value": "79.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T12:35:00.000-05:00"
                            },
                            {
                                "value": "79.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T12:40:00.000-05:00"
                            },
                            {
                                "value": "79.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T12:45:00.000-05:00"
                            },
                            {
                                "value": "79.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T12:50:00.000-05:00"
                            },
                            {
                                "value": "79.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T12:55:00.000-05:00"
                            },
                            {
                                "value": "79.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T13:00:00.000-05:00"
                            },
                            {
                                "value": "79.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T13:05:00.000-05:00"
                            },
                            {
                                "value": "79.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T13:10:00.000-05:00"
                            },
                            {
                                "value": "79.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T13:15:00.000-05:00"
                            },
                            {
                                "value": "79.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T13:20:00.000-05:00"
                            },
                            {
                                "value": "79.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T13:25:00.000-05:00"
                            },
                            {
                                "value": "78.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T13:30:00.000-05:00"
                            },
                            {
                                "value": "79.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T13:35:00.000-05:00"
                            },
                            {
                                "value": "78.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T13:40:00.000-05:00"
                            },
                            {
                                "value": "78.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T13:45:00.000-05:00"
                            },
                            {
                                "value": "78.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T13:50:00.000-05:00"
                            },
                            {
                                "value": "78.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T13:55:00.000-05:00"
                            },
                            {
                                "value": "78.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T14:00:00.000-05:00"
                            },
                            {
                                "value": "78.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T14:05:00.000-05:00"
                            },
                            {
                                "value": "78.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T14:10:00.000-05:00"
                            },
                            {
                                "value": "78.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T14:15:00.000-05:00"
                            },
                            {
                                "value": "78.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T14:20:00.000-05:00"
                            },
                            {
                                "value": "78.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T14:25:00.000-05:00"
                            },
                            {
                                "value": "78.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T14:30:00.000-05:00"
                            },
                            {
                                "value": "78.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T14:35:00.000-05:00"
                            },
                            {
                                "value": "78.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T14:40:00.000-05:00"
                            },
                            {
                                "value": "78.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T14:45:00.000-05:00"
                            },
                            {
                                "value": "78.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T14:50:00.000-05:00"
                            },
                            {
                                "value": "78.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T14:55:00.000-05:00"
                            },
                            {
                                "value": "78.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T15:00:00.000-05:00"
                            },
                            {
                                "value": "78.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T15:05:00.000-05:00"
                            },
                            {
                                "value": "78.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T15:10:00.000-05:00"
                            },
                            {
                                "value": "78.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T15:15:00.000-05:00"
                            },
                            {
                                "value": "78.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T15:20:00.000-05:00"
                            },
                            {
                                "value": "78.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T15:25:00.000-05:00"
                            },
                            {
                                "value": "78.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T15:30:00.000-05:00"
                            },
                            {
                                "value": "78.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T15:35:00.000-05:00"
                            },
                            {
                                "value": "78.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T15:40:00.000-05:00"
                            },
                            {
                                "value": "78.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T15:45:00.000-05:00"
                            },
                            {
                                "value": "78.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T15:50:00.000-05:00"
                            },
                            {
                                "value": "78.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T15:55:00.000-05:00"
                            },
                            {
                                "value": "77.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T16:00:00.000-05:00"
                            },
                            {
                                "value": "78.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T16:05:00.000-05:00"
                            },
                            {
                                "value": "78.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T16:10:00.000-05:00"
                            },
                            {
                                "value": "78.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T16:15:00.000-05:00"
                            },
                            {
                                "value": "78.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T16:20:00.000-05:00"
                            },
                            {
                                "value": "78.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T16:25:00.000-05:00"
                            },
                            {
                                "value": "78.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T16:30:00.000-05:00"
                            },
                            {
                                "value": "78.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T16:35:00.000-05:00"
                            },
                            {
                                "value": "78.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T16:40:00.000-05:00"
                            },
                            {
                                "value": "78.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T16:45:00.000-05:00"
                            },
                            {
                                "value": "78.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T16:50:00.000-05:00"
                            },
                            {
                                "value": "78.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T16:55:00.000-05:00"
                            },
                            {
                                "value": "78.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T17:00:00.000-05:00"
                            },
                            {
                                "value": "78.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T17:05:00.000-05:00"
                            },
                            {
                                "value": "78.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T17:10:00.000-05:00"
                            },
                            {
                                "value": "78.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T17:15:00.000-05:00"
                            },
                            {
                                "value": "78.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T17:20:00.000-05:00"
                            },
                            {
                                "value": "78.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T17:25:00.000-05:00"
                            },
                            {
                                "value": "78.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T17:30:00.000-05:00"
                            },
                            {
                                "value": "78.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T17:35:00.000-05:00"
                            },
                            {
                                "value": "78.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T17:40:00.000-05:00"
                            },
                            {
                                "value": "78.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T17:45:00.000-05:00"
                            },
                            {
                                "value": "78.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T17:50:00.000-05:00"
                            },
                            {
                                "value": "78.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T17:55:00.000-05:00"
                            },
                            {
                                "value": "77.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T18:00:00.000-05:00"
                            },
                            {
                                "value": "78.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T18:05:00.000-05:00"
                            },
                            {
                                "value": "78.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T18:10:00.000-05:00"
                            },
                            {
                                "value": "78.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T18:15:00.000-05:00"
                            },
                            {
                                "value": "78.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T18:20:00.000-05:00"
                            },
                            {
                                "value": "77.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T18:25:00.000-05:00"
                            },
                            {
                                "value": "77.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T18:30:00.000-05:00"
                            },
                            {
                                "value": "77.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T18:35:00.000-05:00"
                            },
                            {
                                "value": "77.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T18:40:00.000-05:00"
                            },
                            {
                                "value": "78.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T18:45:00.000-05:00"
                            },
                            {
                                "value": "77.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T18:50:00.000-05:00"
                            },
                            {
                                "value": "77.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T18:55:00.000-05:00"
                            },
                            {
                                "value": "77.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T19:00:00.000-05:00"
                            },
                            {
                                "value": "77.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T19:05:00.000-05:00"
                            },
                            {
                                "value": "77.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T19:10:00.000-05:00"
                            },
                            {
                                "value": "77.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T19:15:00.000-05:00"
                            },
                            {
                                "value": "77.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T19:20:00.000-05:00"
                            },
                            {
                                "value": "77.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T19:25:00.000-05:00"
                            },
                            {
                                "value": "77.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T19:30:00.000-05:00"
                            },
                            {
                                "value": "77.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T19:35:00.000-05:00"
                            },
                            {
                                "value": "77.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T19:40:00.000-05:00"
                            },
                            {
                                "value": "77.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T19:45:00.000-05:00"
                            },
                            {
                                "value": "77.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T19:50:00.000-05:00"
                            },
                            {
                                "value": "77.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T19:55:00.000-05:00"
                            },
                            {
                                "value": "77.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T20:00:00.000-05:00"
                            },
                            {
                                "value": "77.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T20:05:00.000-05:00"
                            },
                            {
                                "value": "77.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T20:10:00.000-05:00"
                            },
                            {
                                "value": "77.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T20:15:00.000-05:00"
                            },
                            {
                                "value": "77.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T20:20:00.000-05:00"
                            },
                            {
                                "value": "76.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T20:25:00.000-05:00"
                            },
                            {
                                "value": "77.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T20:30:00.000-05:00"
                            },
                            {
                                "value": "77.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T20:35:00.000-05:00"
                            },
                            {
                                "value": "76.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T20:40:00.000-05:00"
                            },
                            {
                                "value": "77.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T20:45:00.000-05:00"
                            },
                            {
                                "value": "77.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T20:50:00.000-05:00"
                            },
                            {
                                "value": "76.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T20:55:00.000-05:00"
                            },
                            {
                                "value": "77.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T21:00:00.000-05:00"
                            },
                            {
                                "value": "76.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T21:05:00.000-05:00"
                            },
                            {
                                "value": "76.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T21:10:00.000-05:00"
                            },
                            {
                                "value": "76.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T21:15:00.000-05:00"
                            },
                            {
                                "value": "77.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T21:20:00.000-05:00"
                            },
                            {
                                "value": "76.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T21:25:00.000-05:00"
                            },
                            {
                                "value": "77.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T21:30:00.000-05:00"
                            },
                            {
                                "value": "76.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T21:35:00.000-05:00"
                            },
                            {
                                "value": "76.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T21:40:00.000-05:00"
                            },
                            {
                                "value": "76.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T21:45:00.000-05:00"
                            },
                            {
                                "value": "76.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T21:50:00.000-05:00"
                            },
                            {
                                "value": "76.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T21:55:00.000-05:00"
                            },
                            {
                                "value": "76.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T22:00:00.000-05:00"
                            },
                            {
                                "value": "76.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T22:05:00.000-05:00"
                            },
                            {
                                "value": "76.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T22:10:00.000-05:00"
                            },
                            {
                                "value": "76.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T22:15:00.000-05:00"
                            },
                            {
                                "value": "76.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T22:20:00.000-05:00"
                            },
                            {
                                "value": "76.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T22:25:00.000-05:00"
                            },
                            {
                                "value": "76.4",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T22:30:00.000-05:00"
                            },
                            {
                                "value": "76.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T22:35:00.000-05:00"
                            },
                            {
                                "value": "76.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T22:40:00.000-05:00"
                            },
                            {
                                "value": "76.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T22:45:00.000-05:00"
                            },
                            {
                                "value": "76.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T22:50:00.000-05:00"
                            },
                            {
                                "value": "76.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T22:55:00.000-05:00"
                            },
                            {
                                "value": "76.2",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T23:00:00.000-05:00"
                            },
                            {
                                "value": "76.0",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T23:05:00.000-05:00"
                            },
                            {
                                "value": "75.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T23:10:00.000-05:00"
                            },
                            {
                                "value": "76.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T23:15:00.000-05:00"
                            },
                            {
                                "value": "75.9",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T23:20:00.000-05:00"
                            },
                            {
                                "value": "75.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T23:25:00.000-05:00"
                            },
                            {
                                "value": "75.5",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T23:30:00.000-05:00"
                            },
                            {
                                "value": "76.1",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T23:35:00.000-05:00"
                            },
                            {
                                "value": "75.8",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T23:40:00.000-05:00"
                            },
                            {
                                "value": "75.6",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T23:45:00.000-05:00"
                            },
                            {
                                "value": "75.7",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T23:50:00.000-05:00"
                            },
                            {
                                "value": "75.3",
                                "qualifiers": [
                                    "A"
                                ],
                                "dateTime": "2019-03-20T23:55:00.000-05:00"
                            }
                        ],
                        "qualifier": [
                            {
                                "qualifierCode": "A",
                                "qualifierDescription": "Approved for publication -- Processing and review completed.",
                                "qualifierID": 0,
                                "network": "NWIS",
                                "vocabulary": "uv_rmk_cd"
                            }
                        ],
                        "qualityControlLevel": [],
                        "method": [
                            {
                                "methodDescription": "",
                                "methodID": 158124
                            }
                        ],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }
                ],
                "name": "USGS:05427718:00060:00000"
            }
        ]
    },
    "nil": false,
    "globalScope": true,
    "typeSubstituted": false
}