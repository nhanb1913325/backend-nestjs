import { Controller, Post, Param, Body, Res } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';
import { copySync } from 'fs-extra';
import { execSync } from 'child_process';

@Controller('cryptography-test')
export class CryptographyTestController {
  @Post(':folderName')
  saveCode(
    @Param('folderName') folderName: string,
    @Body() body: { code: string },
    @Res() res: any,
  ) {
    //path thu muc goc chua file test
    const parentDir = path.join(process.cwd(), 'md-file');
    //path toi thu muc con can tim trong cryptography
    const folderPath = path.join(
      parentDir,
      'algorithms',
      'cryptography',
      folderName,
    );
    // Xóa dấu "-" trong folderName
    const cleanFolderName = folderName.replace(/-/g, '');
    //tao thu muc theo id trong thu muc tmp
    const sessionID = uuidv4();
    const folderPathchild = path.join(folderPath, 'tmp', sessionID);
    const filePath = path.join(folderPathchild, `${cleanFolderName}.js`);

    //luu code tu client vao thu muc id
    fs.mkdirSync(folderPathchild, { recursive: true });
    fs.writeFileSync(filePath, body.code);

    //copy thu muc __test__
    const destDir = path.join(folderPathchild, '__test__');
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    const sourceDir = path.join(folderPath, '__test__');
    copySync(sourceDir, destDir);

    //chay test, kiem tra code
    const updatedDestDir = destDir.replace(/\\/g, '/');
    const outputFilePath = path.join(folderPathchild, 'test-results.json');
    const command = `npx jest --testPathPattern=${updatedDestDir} --json --outputFile=${outputFilePath}`;
    execSync(command);

    //doc ket qua
    const testResults = fs.readFileSync(outputFilePath, 'utf-8');
    res.status(200).json(testResults);
  }
}
