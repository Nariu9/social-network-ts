import {create} from 'react-test-renderer';
import {ProfileStatus} from './ProfileStatus';

describe('ProfileStatus component', ()=> {
    test('status from props should be in the state', ()=>{
        const component = create(<ProfileStatus status={'Have a nice day'} updateStatus={()=>{}}/>)
        const instance = component.getInstance()

        // @ts-ignore
        expect(instance.state.status).toBe('Have a nice day')
    })
    test('span should be displayed after component creation', async ()=>{
        const component = create(<ProfileStatus status={'Have a nice day'} updateStatus={()=>{}}/>)
        const root = component.root
        const spans = await root.findAllByType('span')

        expect(spans.length).toBe(1)
    })
    test('span should contain correct status', async ()=>{
        const component = create(<ProfileStatus status={'Have a nice day'} updateStatus={()=>{}}/>)
        const root = component.root
        const span = await root.findByType('span')

        expect(span.children[0]).toBe('Have a nice day')
    })
    test('input should not be displayed after component creation', async ()=>{
        const component = create(<ProfileStatus status={'Have a nice day'} updateStatus={()=>{}}/>)
        const root = component.root
        const inputs = await root.findAllByType('input')

        expect(inputs.length).toBe(0)
    })
    test('span should be toggled to input', async ()=>{
        const component = create(<ProfileStatus status={'Have a nice day'} updateStatus={()=>{}}/>)
        const root = component.root
        const span = await root.findByType('span')
        span.props.onDoubleClick()
        const inputs = await root.findAllByType('input')

        expect(inputs.length).toBe(1)
        expect(inputs[0].props.value).toBe('Have a nice day')
    })
    test('callback should be called', async ()=>{
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={'Have a nice day'} updateStatus={mockCallback}/>)
        const instance = component.getInstance()
        // @ts-ignore
        instance.deactivateEditMode()

        expect(mockCallback.mock.calls.length).toBe(1)
    })
})