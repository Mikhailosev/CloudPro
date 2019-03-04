var fs = require('fs')
var rewire = require('rewire')
var taxi = rewire('../modules/taxi')

describe('Large Length Route', function () {

	/* the routedata comes from an external API that is not guaranteed to return consistent data. We substitute a different function for testing that returns a fixed object. */
	taxi.__set__('getRouteData', function(start, end) {
		console.log('MOCK 3')
		const data = fs.readFileSync('spec/routedata/cov_hel_spb.json', "utf8")
		return JSON.parse(data)
	})

	it('should set Helsinki as the current location', function(done) {
		taxi.setHome('Helsinki', function(data) {
			expect(data.lat).toEqual(60.169856)
			expect(data.lng).toEqual(24.938379)
			done()
		})
	})

	it('should calculate the fare to Saint-Petersburg', function(done) {
		taxi.getFare('Saint-Petersburg', function(data) {
			expect(data.distance).toEqual(390741)
			expect(data.duration).toEqual(17123)
			expect(data.cost).toEqual(615.34)
			done()
		})
	})

})
