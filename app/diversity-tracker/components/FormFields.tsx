import { CheckBoxField, RadioInputField, SelectField, TextAreaField } from "@/app/onboard/components/Input"
import { ConfigProvider, Slider } from "antd"
import { ChangeEventHandler, useState } from "react"


interface FormFieldProps{
    value?: string | number, 
    setValue?: (value: string | number) => void,
    handleInput?:ChangeEventHandler<HTMLElement>,
}

interface GrantFormFieldsProps{
    grant_round: string
    grant_provider:string,
    handleInput?:ChangeEventHandler<HTMLElement>,
}

interface PreferToDescribeFormProps extends FormFieldProps{
    title?: string
}
export function PreferToDescribeForm(props: PreferToDescribeFormProps) {
    return (
        <div className="flex gap-2">
            <p className="text-xs sm:text-base">{props.title ?? "Prefer to describe"}: </p>
            <div className="flex-1">
                <input type="text" onChange={(e)=>props.setValue!(e.target.value)} className="sm:w-10/12 outline-0  border-b-2 border-black bg-transparent" />
            </div>
        </div>
    )
}



export function SelfIdentityField(props:FormFieldProps){
    const [preferToDescribeShown,setPreferToDescribeShown] = useState(false)
    const identities = ["Woman","Man","Non-binary","Prefer to describe"]



    const handleSelect = (option:string)=>{
        return ()=>{
            if(option==="Prefer to describe"){
                return setPreferToDescribeShown(true)
            }
            props.setValue!(option)
        }
    }

    return(
        <div className="my-4">
            <p className="max-w-[444px] text-sm sm:text-lg">Which of the following gender categories best describes how you self-identify ?</p>
            <div className="flex flex-wrap my-3 gap-y-4 gap-x-4 sm:gap-x-12">
                {identities.map(identity=>{
                    if(identity == props.value){
                        return (<button type="button" key={identity} className="rounded-[21px] px-3 py-[10px] bg-black text-white font-medium text-sm">{identity}</button>)
                    }
                    return (<button type="button" onClick={handleSelect(identity)} key={identity} className="rounded-[21px] px-3 py-[10px] bg-[#e9e9e9] font-medium text-sm">{identity}</button>)
                })}
            </div>
            {preferToDescribeShown && (<PreferToDescribeForm setValue={props.setValue}/>)}
        </div>
    )
}

export function EthnicityField(props:FormFieldProps){

    const options = ["African-American or Black","Middle-Eastern/North African","White",
        "Asian","Native American/Alaska Native/First Nations","Prefer not to answer",
        "Hispanic/Latina","Pacific Islander/Native Hawaiian","Prefer to Describe"
    ]

    const [selected,setSelected] = useState(()=>{
        return props.value?(props.value as string).split(","):[]
    })

    const selectOption = (option:string)=>{
        if(selected.includes(option)){
            const updatedSelectedItems = selected.filter(item=>item !== option)
            setSelected(updatedSelectedItems)
            props.setValue!(updatedSelectedItems.join(","))
            return;
        }
        const updatedSelectedItems = [...selected,option]
        setSelected(updatedSelectedItems)
        props.setValue!(updatedSelectedItems.join(","))
    }

    return (
        <div className="my-8">
            <p className="text-sm sm:text-lg mb-4">Which of the following ethnic or racial categories best describes how you self-identify? ? Select all that apply .</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-8">
                {options.map(option => (
                    <CheckBoxField checked={selected.includes(option)} handleCheck={()=>selectOption(option)} key={option} label={<p className="capitalize">{option.toLowerCase()}</p>}/>
                ))}
            </div>
        </div>
    )
}

export function DisabalityField(props:FormFieldProps){

    const options = ["Attention deficit","Deaf or hard of hearing","Mental health condition",
        "Autism","Health-related disability","Mobility-related disability",
        "Learning disability","Speech-related disability",
        "Other (please specify, optional)"
    ]

    const [selected,setSelected] = useState(()=>{
        return props.value?(props.value as string).split(","):[]
    })

    const selectOption = (option:string)=>{
        if(selected.includes(option)){
            const updatedSelectedItems = selected.filter(item=>item !== option)
            setSelected(updatedSelectedItems)
            props.setValue!(updatedSelectedItems.join(","))
            return;
        }
        const updatedSelectedItems = [...selected,option]
        setSelected(updatedSelectedItems)
        props.setValue!(updatedSelectedItems.join(","))
    }

    return (
        <div className="my-8">
            <p className="text-sm sm:text-lg mb-4">Do you have any of the following disabilities or chronic conditions? Select all that apply.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-8">
                {options.map(option => (
                    <CheckBoxField
                        checked={selected.includes(option)}
                        key={option}
                        handleCheck={()=>selectOption(option)}
                        label={<p className="capitalize">
                            {option.toLowerCase()}</p>}
                        />
                ))}
            </div>
        </div>
    )
}



export function AgeRangeField(props:FormFieldProps){
    const ranges = [
        "Under 18",
        "24-35",
        "45-54",
        "55-64",
        "64 and older"
    ]
    return (
        <div className="my-8">
            <p className="text-sm sm:text-lg">What is your age range ?</p>
            <div className="my-3 flex flex-wrap gap-4 justify-between max-w-4xl">
                {ranges.map(range => (
                    <RadioInputField key={range}
                        checked={range == props.value}
                        handleCheck={()=>props.setValue!(range)}
                        label={range}
                    />
                ))}
            </div>
        </div>
    )
}
export function SexualOrientationField(props:FormFieldProps){
    const options =[
        {label:"Heterosexual or Straight",value:"straight"},
        {label:"Gay or Lesbian",value:"gay"},
        {label:"Bisexual",value:"bisexual"},
        {label:"Pansexual",value:"pansexual"},
        {label:"Queer",value:"queer"},
        {label:"Other",value:"other"},
    ]

    return (
        <div className="my-8">
            <SelectField
                placeholder="Select"
                options={options}
                label={ <p className="text-sm sm:text-lg capitalize">Which of the following best describes your sexual orientation??</p>}
                value={props.value}
                onChange={(e)=>props.setValue!(e.target.value)}
                />
        </div>
    )
}

export function GrantField(props:GrantFormFieldsProps){
    return (
        <div>
            <div className="my-8">
            <p className="text-sm sm:text-lg">Are you currently participating in any of these active grant rounds?</p>
            <div className="my-3 flex gap-x-12 max-w-4xl">
                <RadioInputField checked  label={"Yes"}/>
                <RadioInputField  label={"No"}/>
            </div>
        </div>
            <div className="my-8">
                <SelectField
                    placeholder="Select grant Provider"
                    value={props.grant_provider}
                    name="grant_provider"
                    onChange={props.handleInput}
                    options={[]}
                    label={ <p className="text-sm sm:text-lg capitalize">Grant provider</p>}
                />
            </div>
            <div className="my-8">
                <SelectField
                    placeholder="Select grant round"
                    name="grant_round"
                    value={props.grant_round}
                    onChange={props.handleInput}
                    options={[]}
                    label={ <p className="text-sm sm:text-lg capitalize">Grant round</p>}
                />
            </div>
        </div>
    )
}

export function EqualityScaleField(props:FormFieldProps){
    return (
        <div className="my-8">
            <p className="text-sm sm::text-lg">On a scale from 1-10, how inclusive and equitable do you feel the Web3 industry is?</p>
            <div className="max-w-2xl flex items-center gap-4">
            <p>1</p>
            <div className="flex-1">
            <ConfigProvider theme={{
                token:{
                    borderRadiusXS:10
                },
                components:{
                    Slider:{
                        trackBg:"#000",
                        trackHoverBg:"#000000",
                        railBg:"#D4D4D4",
                        railHoverBg:"#D4D4D4",
                        railSize:14,
                        borderRadius:16,
                        handleSize:24,
                        handleSizeHover:24,
                        handleColor:"#DDDDDD",
                        handleActiveColor:"#DDDDDD",
                        controlHeight:60,
                    }
                }
            }}>
                <Slider
                    value={props.value as number}
                    onChange={(value)=>props.setValue!(value)}
                />
            </ConfigProvider>
            </div>
            <p>10</p>
            </div>
        </div>
    )
}

export function ImprovementField(props:FormFieldProps){
    return (
        <div className="my-8">
            <p className="text-sm sm:text-lg">Please share your thoughts on how the Web3 industry can improve on the topics of Diversity, Equity, Accessibility and Inclusion.</p>
            <TextAreaField value={props.value} name="improvement_suggesstions" onChange={props.handleInput} placeholder="Please share your suggestions here;" label=""/>
        </div>
    )
}
