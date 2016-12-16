visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {

    var reportOptions = collectReportProperties({
        resource: "/public/viz/Hyperlinks/Drill_Reports_with_Controls/main_report",
        linkOptions: {
            beforeRender: function (linkToElemPairs) {
                linkToElemPairs.forEach(showCursor);
            },
            events: {
                "click": function (ev, link) {
                    if (link.type == "ReportExecution") {
                        openInNewTab({
                            resource: link.parameters._report,
                            params: convertToReportParams(link.parameters)
                        });
                    }
                    console.log(link);
                }
            }
        },
        error: function (err) {
            alert(err.message);
        }
    });

    v("#main").report(reportOptions);


    function collectReportProperties(reportProperties) {
        var newProperties = findReportProperties(location.href);
        reportProperties =  _.extend(reportProperties, newProperties);
        console.log('Report Properties:', reportProperties);
        return reportProperties;
    }
    
    function convertToReportParams(linkParams){
        return _.chain(linkParams)
                .pairs()
                .map(function (pair){
                    var key = pair[0],
                        val = pair[1];
                    if (!_.isArray(val)){
                        return [key, [val]];
                    }
                    return pair;
                })
                .object()
                .value();
    }

    function findReportProperties(url) {
        var parser = document.createElement('a');
        parser.href = url;

        var urlParams = parser.search,
            result = {};

        if (urlParams) {
            result = paramsFromUrlQueryParams(urlParams);
        }

        return result;
    }

    function openInNewTab(reportProperties) {      
        var first = false,
            urlToOpen = _.reduce(reportProperties, function (memo, value, key){
                if (!first){
                    memo += '?';
                    first = true;
                }
                if (_.isObject(value) && key == 'params'){
                    memo = memo + paramsToUrlQueryParams(value);
                }else{
                    memo = memo + key + '=' + value + '&';
                }
                
                return memo;
            }, location.href);
        console.log('Url to Open:', urlToOpen);
        window.open(urlToOpen, '_blank');
    }
    
    function paramsToUrlQueryParams(params){
        return  _.pairs(params)
                .reduce(function(memo, pair){ 
                    var subkey = pair[0],
                        val = pair[1];
                    
                    if (_.isArray(val)){
                        memo =  val.reduce(function(memo, v){
                            return memo + 'params:' + subkey + '=' + v + "&";
                        },memo)
                        
                    }else{
                        memo = memo + 'params:' + subkey + '=' + val + "&";
                    }              
                    return memo;
                }, ""); 
    }
    
    function paramsFromUrlQueryParams(str){
        var result = {};
        if (str && !_.isEmpty(str)){
            result =  str.substr('1', str.length)
                .split('&')
                .reduce(function (memo, str) {
                var chks = str.split('='),
                    key = chks[0],
                    value = chks[1];
                if (memo[key]) {
                    memo[key].push(value);
                } else {
                    if (key.indexOf('params:') == 0) {
                        
                        if (!memo['params']){
                            memo['params'] = {};
                        }
                        
                        var subkey = key.replace('params:','');
                        
                        if (!memo.params[subkey]){
                            memo.params[subkey] = [];
                        }
                        
                        memo.params[subkey].push(value);
                         
                    } else if (!_.isEmpty(key)) {
                        memo[key] = value;
                    }
                }
                return memo;
            }, {});
        }
       return result;        
    }

    function showCursor(pair) {
        var el = pair.element;
        el.style.cursor = "pointer";
    }


});