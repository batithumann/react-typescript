interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode;
  }

export const Child = ({color, onClick, children}: ChildProps) => {
    return <div><button style={{color:color}} onClick={onClick}>Click me</button>{children}</div>;
};

export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) => {
    return <div><button style={{backgroundColor:color}} onClick={onClick}>Click me</button></div>
}

console.log(ChildAsFC.displayName)