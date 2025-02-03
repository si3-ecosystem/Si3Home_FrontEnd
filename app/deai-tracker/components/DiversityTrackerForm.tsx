import { CheckBoxField, RadioInputField, SelectField, TextAreaField } from "@/app/onboard/components/Input"
import { ConfigProvider, Slider } from "antd"

function PreferToDescribeForm(){
    return (
        <div className="flex gap-2">
            <p className="text-xs sm:text-base">Prefer to describe: </p>
            <div className="flex-1">
                <input type="text" className="sm:w-10/12  border-b-2 border-black bg-transparent" />
            </div>
        </div>
    )
}

function SelfIdentityField(){
    return(
        <div className="my-4">
            <p className="max-w-[444px] text-sm sm:text-lg">Which of the following gender categories best describes how you self-identify ?</p>
            <div className="flex flex-wrap my-3 gap-y-4 gap-x-4 sm:gap-x-12">
                <button className="rounded-[21px] px-3 py-[10px] bg-[#e9e9e9] font-medium text-sm">Woman</button>
                <button className="rounded-[21px] px-3 py-[10px] bg-[#e9e9e9] font-medium text-sm">Man</button>
                <button className="rounded-[21px] px-3 py-[10px] bg-[#e9e9e9] font-medium text-sm">Non-Binary</button>
                <button className="rounded-[21px] px-3 py-[10px] bg-[#e9e9e9] font-medium text-sm">Prefer to describe</button>
            </div>
            <PreferToDescribeForm/>
        </div>
    )
}

function EthnicityField(){

    const options = ["African-American or Black","Middle-Eastern/North African","White",
        "Asian","Native American/Alaska Native/First Nations","Prefer not to answer",
        "Hispanic/Latina","Pacific Islander/Native Hawaiian","Prefer to Describe"
    ]

    return (
        <div className="my-8">
            <p className="text-sm sm:text-lg mb-4">Which of the following ethnic or racial categories best describes how you self-identify? ? Select all that apply .</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-8">
                {options.map(option => (
                    <CheckBoxField key={option} label={<p className="capitalize">{option.toLowerCase()}</p>}/>
                ))}
            </div>
            <PreferToDescribeForm/>
        </div>
    )
}

function DisabalityField(){

    const options = ["Attention deficit","Deaf or hard of hearing","Mental health condition",
        "Autism","Health-related disability","Mobility-related disability",
        "Mobility-related disability","Learning disability","Speech-related disability",
        "Other (please specify, optional)"
    ]

    return (
        <div className="my-8">
            <p className="text-sm sm:text-lg mb-4">Do you have any of the following disabilities or chronic conditions? Select all that apply.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-8">
                {options.map(option => (
                    <CheckBoxField key={option} label={<p className="capitalize">{option.toLowerCase()}</p>}/>
                ))}
            </div>
            <PreferToDescribeForm/>
        </div>
    )
}



function AgeRangeField(){
    return (
        <div className="my-8">
            <p className="text-sm sm:text-lg">What is your age range ?</p>
            <div className="my-3 flex flex-wrap gap-4 justify-between max-w-4xl">
                <RadioInputField checked label={"Under 18"}/>
                <RadioInputField  label={"24-34"}/>
                <RadioInputField  label={"45-54"}/>
                <RadioInputField  label={"55-64"}/>
                <RadioInputField  label={"64 and older"}/>
            </div>
        </div>
    )
}
function SexualOrientationField(){
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
                
                />
        </div>
    )
}

function GrantField(){
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
                    options={[]}
                    label={ <p className="text-sm sm:text-lg capitalize">Grant provider</p>}
                />
            </div>
            <div className="my-8">
                <SelectField
                    placeholder="Select grant round"
                    options={[]}
                    label={ <p className="text-sm sm:text-lg capitalize">Grant round</p>}
                />
            </div>
        </div>
    )
}

function EqualityScaleField(){
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
                <Slider/>
            </ConfigProvider>
            </div>
            <p>10</p>
            </div>
        </div>
    )
}

function ImprovementField(){
    return (
        <div className="my-8">
            <p className="text-sm sm:text-lg">Please share your thoughts on how the Web3 industry can improve on the topics of Diversity, Equity, Accessibility and Inclusion.</p>
            <TextAreaField placeholder="Please share your suggestions here;" label=""/>
        </div>
    )
}

export default function DiversityTrackerForm(){
    return (
        <form className="mt-10 max-w-7xl mx-auto px-3 py-4 sm:p-8 pb-32 bg-white">
            <p className="max-w-[726px] sm:text-2xl font-medium mb-8">Complete this form to share your demographic data <br /> (completely anonymously)</p>
            <SelfIdentityField/>
            <AgeRangeField/>
            <EthnicityField/>
            <DisabalityField/>
            <SexualOrientationField/>
            <EqualityScaleField/>
            <ImprovementField/>
            <GrantField/>
            <button type="submit" className="bg-black text-white py-[14px] mt-6 w-full rounded-3xl font-medium text-base">
                <span className="hidden md:inline-block">Submit</span>
                <span className="md:hidden">Submit Application</span>
            </button>
        </form>
    )
}