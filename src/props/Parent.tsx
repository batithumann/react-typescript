import { Child } from './Child'

const Parent = () => {
    return <div>
        <Child color='red' onClick={()=>console.log('Clicked')}>
            sadasdfa
        </Child>
    </div>
}

export default Parent