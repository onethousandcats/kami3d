"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Website = exports.PremiumWebsiteBuilder = void 0;
var Website = /** @class */ (function () {
    function Website(name, host, port, isPremium) {
        this.name = name;
        this.host = host;
        this.port = port;
        this.isPremium = isPremium;
    }
    return Website;
}());
exports.Website = Website;
var PremiumWebsiteBuilder = /** @class */ (function () {
    function PremiumWebsiteBuilder() {
        this.website = new Website();
        this.clear();
    }
    PremiumWebsiteBuilder.prototype.setName = function (name) {
        this.website.name = name;
        return this;
    };
    PremiumWebsiteBuilder.prototype.setHost = function (host) {
        this.website.host = host;
        return this;
    };
    PremiumWebsiteBuilder.prototype.setPort = function (port) {
        this.website.port = port;
        return this;
    };
    PremiumWebsiteBuilder.prototype.setIsPremium = function (isPremium) {
        this.website.isPremium = isPremium;
        return this;
    };
    PremiumWebsiteBuilder.prototype.build = function () {
        var website = this.website;
        this.clear();
        return website;
    };
    PremiumWebsiteBuilder.prototype.clear = function () {
        this.website = new Website();
        this.website.isPremium = true;
    };
    return PremiumWebsiteBuilder;
}());
exports.PremiumWebsiteBuilder = PremiumWebsiteBuilder;
//# sourceMappingURL=builder.old.js.map