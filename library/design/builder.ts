class Website {
    constructor(
        public name?: string,
        public host?: string,
        public port?: number,
        public isPremium?: boolean
    ) {}
}

interface IWebsiteBuilder {
    setName(name: string): IWebsiteBuilder;
    setHost(host: string): IWebsiteBuilder;
    setPort(port: number): IWebsiteBuilder;
    setIsPremium(isPremium: boolean);

    build(): Website;
}

class PremiumWebsiteBuilder implements IWebsiteBuilder {
    private website: Website;

    constructor() {
        this.website = new Website();
        this.clear();
    }
    setName(name: string): IWebsiteBuilder {
        this.website.name = name;
        return this;
    }
    setHost(host: string): IWebsiteBuilder {
        this.website.host = host;
        return this;
    }
    setPort(port: number): IWebsiteBuilder {
        this.website.port = port;
        return this;
    }
    setIsPremium(isPremium: boolean) {
        this.website.isPremium = isPremium;
        return this;
    }
    build(): Website {
        const website = this.website;
        this.clear();

        return website;
    }

    clear(): void {
        this.website = new Website();
        this.website.isPremium = true;
    }
}

export { PremiumWebsiteBuilder, IWebsiteBuilder, Website };