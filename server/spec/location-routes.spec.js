const app = require('../index');
const request = require('supertest');

describe("/api/locations/random/:mapType", () => {
    let worldArr;
    let famousArr;

    beforeAll(async () => {
        let responseWorld = await request(app)
            .get('/api/locations/random/world');
        let responseFamous = await request(app)
            .get('/api/locations/random/famousplaces');
        worldArr = responseWorld.body;
        famousArr = responseFamous.body;
    });

    it("returns an array", () => {
        expect(Array.isArray(worldArr)).toBe(true);
        expect(Array.isArray(famousArr)).toBe(true);
    });

    it("returns an array has a length of five", () => {
        expect(worldArr.length).toBe(5);
        expect(famousArr.length).toBe(5);
    });

    it("returns an array with items that have coordinates", () => {
        expect(worldArr[0].coords).toBeDefined();
        expect(worldArr[0].coords.lat).toBeDefined();
        expect(worldArr[0].coords.lng).toBeDefined();
        expect(famousArr[0].coords).toBeDefined();
        expect(famousArr[0].coords.lat).toBeDefined();
        expect(famousArr[0].coords.lng).toBeDefined();
    });

    it("returns locations with the correct map type", () => {
        expect(worldArr[0].mapType).toBe('World');
        expect(famousArr[0].mapType).toBe('Famous Places');
    });
});