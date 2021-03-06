(function() {
    'use strict';
    angular
        .module('c3js', [])
        .factory('c3Service', [
            '$document', '$q', '$rootScope',
            function ($document, $q, $rootScope) {
                var deferred = $q.defer();
                function onScriptLoad() {
                    // Load client in the browser
                    $rootScope.$apply(function() { deferred.resolve(window.c3); });
                }
                // Create a script tag with d3 as the source
                // and call our onScriptLoad callback when it
                // has been loaded
                var scriptTag = $document[0].createElement('script');
                scriptTag.type = 'text/javascript';
                scriptTag.async = true;
                scriptTag.src = 'app/chart-lib/c3.min.js';
                scriptTag.onreadystatechange = function () {
                    if (this.readyState === 'complete') {
                        onScriptLoad();
                    }
                };
                scriptTag.onload = onScriptLoad;

                var s = $document[0].getElementsByTagName('body')[0];
                s.appendChild(scriptTag);

                return {
                    load: function() { return deferred.promise; }
                };
            }
        ]);
})();