import {
    animate,
    animateChild,
    group,
    query,
    style,
    transition,
    trigger
} from "@angular/animations";


export const routeTransitionAnimations = trigger('triggerName', [
    transition('One => Two, Two => Three, One => Three, One => Four, Two => Four,' +
        ' Three => Four', [
        style({position: 'relative'}),
        query(':enter, :leave', [
            style({
                position: 'fixed',
                top: 70,
                right: 0,
                width: '100%'
            })
        ]),
        query(':enter', [style({right: '-100%', opacity: 0})]),
        query(':leave', animateChild()),
        group([
            query(':leave', [animate('.3s ease-out', style({
                right: '100%',
                opacity: 0
            }))]),
            query(':enter', [animate('.3s ease-out', style({right: '0%', opacity: 1}))])
        ]),
        query(':enter', animateChild())
    ]),
    transition('Three => Two, Two => One, Three => One, Four => Three, Four => Two,' +
        ' Four => One', [
        style({position: 'relative'}),
        query(':enter, :leave', [
            style({
                position: 'fixed',
                top: 70,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [style({left: '-100%', opacity: 0})]),
        query(':leave', animateChild()),
        group([
            query(':leave', [animate('.3s ease-out', style({left: '100%', opacity: 0}))]),
            query(':enter', [animate('.3s ease-out', style({left: '0%', opacity: 1}))])
        ]),
        query(':enter', animateChild())
    ])
]);
