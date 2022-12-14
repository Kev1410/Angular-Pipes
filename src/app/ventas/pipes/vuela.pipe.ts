import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'vuela',
})

export class VuelaPipe implements PipeTransform{
    transform(vuela: boolean = true) {
        
        return (vuela) ? 'vuela' : 'no vuela';
    }
}