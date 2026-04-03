import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(status: boolean) {
    if (typeof status !== 'boolean') {
      return 'Status inválido'
    }
    
    return status ? 'Ativo' : 'Inativo'
  }
}
