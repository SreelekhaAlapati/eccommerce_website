
const app = require("../index");

const chai = require("chai");
const chaiHttp = require("chai-http");

const expect = chai.expect;
const assert = chai.assert;

chai.use(chaiHttp);

describe("Operation Checker for Users", () => {
	it("Should give a list of messages when requested", (done) => {
		chai.request(app)
			.get("/datacheck")
			.end(function (err, res) {
				expect(res).to.have.status(200);
				expect(res.body).to.be.an("array");
				done();
			});
	});
});

describe("Operation Checker for Products", () => {
	it("Should give a array of Products when requested", (done) => {
		chai.request(app)
			.get("/allproducts")
			.end(function (err, res) {
				expect(res).to.have.status(200);
				expect(res.body).to.be.an("array");
				done();
			});
	});
});