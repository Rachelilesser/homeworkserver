import { promises } from "fs";
import { DefaultDeserializer } from "v8";
async function readFileAsync(filePath: string): Promise<string> {
    const content = await promises.readFile(filePath, 'utf8');
    console.log("File content:", content);
    return content;
} 


async function readAllFile()
{
    await readFileAsync("file1.txt")
    await readFileAsync("file2.txt")
    await readFileAsync("file3.txt")
}

readAllFile().then(() => console.log("finish"));