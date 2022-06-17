import { createWriteStream } from 'fs';
import { join } from 'path';

export class File {
    static write(fileName: string, data: string[]) {
        var writer = createWriteStream(fileName);
        data.forEach(line => writer.write(`\n${line}`));
        writer.end();
    }
}