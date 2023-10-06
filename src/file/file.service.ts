import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import * as path from "path";
import * as fs from "fs";
import * as uuid from "uuid"

export enum FileType{
    AUDIO = `audio`,
    IMAGE = `image`
}

@Injectable()
export class FileService{


    createFile(file): string{
        try{
            const fileName = uuid.v4() + `.` + `jpeg`;
            const filePath = path.resolve(__dirname, `..`, `static`, FileType.IMAGE)
            if(!fs.existsSync(filePath)){
                fs.mkdirSync(filePath, {recursive: true})
            }
            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer)
            return `image` + `/` + fileName

        } catch (error){
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
        // try{
        //     // const fileType = 'image';
        //     const ext = '.jpeg';
        //     const fileName = uuid.v4() + ext;
        //     const filePath = path.resolve(`static/`, fileName)
        //     file.mv(filePath)
        //     return fileName;
        // }catch (e){
        //     console.log(e)
        // }
    }

    // deletefile(fileName: string)
}
