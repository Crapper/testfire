import {Pipe} from '@angular/core'

@Pipe({
  name: 'limitchars'
})
export class LimitcharsPipe {
  transform(value: string, args: string[]) : string {
    let strip = value.replace(/<[^>]+>/gm, '');
    let limit = args.length > 0 ? parseInt(args[0], 150) : 150;
    let trail = args.length > 1 ? args[1] : '...';

    return strip.length > limit ? strip.substring(0, limit) + trail : strip;
  }
}