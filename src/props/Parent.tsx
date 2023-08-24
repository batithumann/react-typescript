import { Child, ChildAsFC } from './Child'

const Parent = () => {
    return <div><Child color='red'/>
    <ChildAsFC color='blue' /></div>
}

export default Parent