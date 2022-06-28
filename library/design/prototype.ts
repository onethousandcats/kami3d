interface IClassPrototype {
    clone(): IClassPrototype;
}

class Druid implements IClassPrototype {
    private spells: string[];
    private health: number;
    
    constructor(private name: string) {
        this.spells = [];
        this.health = 100;
    }

    clone(): Druid {
        const cloned = Object.create(Druid.prototype || null);
        Object.getOwnPropertyNames(this).map((key: string) => {
            if (key === "name") {
                cloned[key] = "Unknown";
            } else {
                cloned[key] = this[key];
            }
        });

        return cloned;
    }
}

class Ranger implements IClassPrototype {
    private weapon: string;
    private health: number;

    constructor(private name: string) {
        this.weapon = "Dagger";
        this.health = 150;
    }

    clone(): Ranger {
        const cloned = Object.create(Ranger.prototype || null);
        Object.getOwnPropertyNames(this).map((key: string) => {
            if (key === "weapon") {
                cloned[key] = "Bare Hands";
            } else {
                cloned[key] = this[key];
            }
        });

        return cloned;
    }
}

export { Druid, Ranger, IClassPrototype };