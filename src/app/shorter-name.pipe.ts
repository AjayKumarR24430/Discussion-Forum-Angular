import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'shorterName'
})
export class ShorterNamePipe implements PipeTransform {
    transform(value: any) {
        return value.substr(0,2);

    }
}