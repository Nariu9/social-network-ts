import {create} from 'react-test-renderer';
import {Paginator} from './Paginator';

describe('Paginator component test', ()=> {
    test('pages count is 11 but only 10 should be displayed', async ()=>{
        const component = create(<Paginator totalItemsCount={11} pageSize={1} currentPage={3} onPageChanged={()=>{}}/>)
        const root = component.root
        const spans = await root.findAllByType('span')

        expect(spans.length).toBe(10)
    })
    test('NEXT button should be displayed if page coint is more then 10', async ()=>{
        const component = create(<Paginator totalItemsCount={11} pageSize={1} currentPage={3} onPageChanged={()=>{}}/>)
        const root = component.root
        const buttons = await root.findAllByType('button')

        expect(buttons.length).toBe(1)
    })
})