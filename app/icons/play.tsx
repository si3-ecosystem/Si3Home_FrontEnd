
interface IconProps{
    className?: string;
    fillColor?:string
    width?:string | number,
    height?:string | number,
}

export default function PlayIcon(props:IconProps){
    const {className, fillColor, width,height} = props
    return (
        <svg className={className} width={width || "37"} height={height || "43"} viewBox="0 0 37 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.3721 21.747L0.37207 42.5316L0.372072 0.962402L36.3721 21.747Z" fill={fillColor || "black"}/>
        </svg>
    )
}