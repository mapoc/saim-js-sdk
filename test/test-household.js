/* jshint node: true, esversion: 6, mocha: true */

var request = require('request');
var expect = require('chai').expect;

var base_url = 'https://apisb.shop.com/saim/v1';
var api_key = '';

describe('Household Tests', () => {
	it('should should return 201 for new household', (done) => {
		request({
				method: 'POST',
				uri: base_url + '/households',
				headers: {
					'Accept': 'application/json',
					'api_key': api_key
				},
				data: JSON.stringify({
					first_name: 'John',
					last_name: 'Doe',
					address: 'Cardboard Box #3',
					email: 'homeless@nowhere.com',
					primary_phone: '(123) 456-7890'
				})
			},
			(error, response, body) => {
				expect(response.statusCode).to.equal(201);
				
				done();
			});
	});
});