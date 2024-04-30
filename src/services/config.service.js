angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'http://quiz-api-qa.us-east-1.elasticbeanstalk.com/';

    return service;
}]);