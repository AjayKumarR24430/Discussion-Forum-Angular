import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
    name: 'categoriesFormat'
})
export class CategoriesFormatPipe implements PipeTransform {
    transform(categories: any) {
        let list: string = '';
        for (let category of categories) {
            list += '#';
            switch (category) {
                case 'CELEBRITY': {
                    list += 'Celebrity  ';
                    break;
                }
                case 'ANIMAL': {
                    list += 'Animal  ';
                    break;
                }
                case 'PEOPLE': {
                    list += 'People  ';
                    break;
                }
                case 'CURIOSITY': {
                    list += 'Curiosity  ';
                    break;
                }
                case 'SCIENCE': {
                    list += 'Science  ';
                    break;
                }
                case 'FUNNY': {
                    list += 'Funny  ';
                    break
                }
                case 'NATURE': {
                    list += 'Nature  ';
                    break;
                }
                case 'INTERESTING_PLACE': {
                    list += 'Interesting Place  ';
                    break;
                }
                case 'ART': {
                    list += 'Art  ';
                    break;
                }
                case 'MOVIE': {
                    list += 'Movie  ';
                    break;
                }
                case 'FASHION': {
                    list += 'Fashion  ';
                    break;
                }
                case 'SALE': {
                    list += 'Sale  ';
                    break;
                }
                case 'MUSIC': {
                    list += 'Music  ';
                    break;
                }
                case 'CULTURE': {
                    list += 'Culture  ';
                    break;
                }
                case 'SPORT': {
                    list += 'Sport  ';
                    break;
                }
                default: {
                    list += ' ';
                    break;
                }
            }
        }
        return list;
    }
}