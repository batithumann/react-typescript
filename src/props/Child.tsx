interface ChildProps {
    color: string;
}

export const Child = ({color}: ChildProps) => {
    return <div style={{color:color}}>Hi there!</div>;
};

export const ChildAsFC: React.FC<ChildProps> = ({color}) => {
    return <div style={{backgroundColor:color}}>Hi there</div>
}

console.log(ChildAsFC.displayName)