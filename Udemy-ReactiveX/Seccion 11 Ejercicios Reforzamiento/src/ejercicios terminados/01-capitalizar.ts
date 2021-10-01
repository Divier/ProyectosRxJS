import { from, of } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
 (() =>{

    const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];
    const nombres$ = from(nombres);
    const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

    nombres$.pipe(
        map( capitalizar )
    ).subscribe( console.log );
  
  })();