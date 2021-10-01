import { Observable, Observer } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado'),
};

const intervalo$ = new Observable(subscriber => {
    let counter = 0;
    const interv = setInterval(() => {
        ++counter;
        subscriber.next(counter);
    }, 1000);
    return () => {
        clearInterval(interv);
        console.log('Intervalo Destruido');
    }
});

const subscription = intervalo$.subscribe(valor => console.log('Valor: ',valor));

setTimeout(() => {
    subscription.unsubscribe();
    console.log('Unsubscribe');
}, 5000)
