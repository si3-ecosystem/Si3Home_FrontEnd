import { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, useState } from "react"


interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: ReactNode,
}

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: ReactNode,
    options:{
        label:string,
        value:string
    }[]
}

interface CheckBoxFieldProps{
    checked?: boolean,
    handleCheck?:()=>void,
    label:ReactNode
}

function InputField(props: InputFieldProps) {
    return (
        <div className="my-2 w-full">
            <label htmlFor="" className="block text-sm sm:text-lg uppercase font-mono">{props.label}{props.required && <span className="text-[#FF2727]">*</span>}</label>
            <input {...props} type="text" className="w-full text-xs sm:text-base h-12 px-6 font-dm-sans mt-1 rounded-lg p-2 border border-[#FAB7D0]"/>
        </div>
    )
}
function SelectField(props: SelectFieldProps) {
    return (
        <div className="my-2">
            <label htmlFor="" className="block text-sm sm:text-lg uppercase font-mono">{props.label}{props.required && <span className="text-[#FF2727]">*</span>}</label>
            <select {...props}  className="w-full h-12 px-6 font-dm-sans mt-1 rounded-lg p-2 border border-[#FAB7D0]">
                {props.options.map((item)=>(
                    <option key={item.label} value={item.value}>{item.label}</option>
                ))}
            </select>
        </div>
    )
}



function TextAreaField(props: InputFieldProps) {
    return (
        <div className="my-2">
            <label htmlFor="" className="block text-sm sm:text-lg uppercase font-mono">{props.label}{props.required && <span className="text-[#FF2727]">*</span>}</label>
            <textarea {...props} className="w-full h-[155px] text-xs sm:text-base px-6 font-dm-sans mt-1 rounded-lg p-2 border border-[#FAB7D0]"/>
        </div>
    )
}

function RadioInputField(props:CheckBoxFieldProps){
    return (
        <div className="flex items-center gap-x-6 text-sm">
            <button type="button" onClick={props.handleCheck} className="border border-[rgba(18,15,34,0.6)] inline-flex items-center justify-center h-5 w-5 rounded-full">
                {props.checked && (
                    <span className="h-[12px] inline-block w-[12px] bg-[#FAB7D0] rounded-md"></span>
                )}
            </button>
            <p className="text-[#1E1E1E] text-base font-dm-sans">{props.label}</p>
        </div>
    )
}
function CheckBoxField(props:CheckBoxFieldProps){

    function getActiveClass (){
        if(props.checked){
            return "bg-[#FAB7D0]"
        }
        return "border border-[rgba(18,15,34,0.6)]"
    }

    const activeClassName = getActiveClass()

    return (
        <div className="flex items-center gap-x-6 text-sm">
            <button type="button" onClick={props.handleCheck}
                className={` ${activeClassName} rounded inline-flex items-center justify-center h-5 w-5`}>
                {props.checked && (
                    <span><i className="bi bi-check text-xl text-white"></i></span>
                )}
            </button>
            <p className="text-black text-xs md:text-sm uppercase font-mono">{props.label}</p>
        </div>
    )
}

const values = [
    "compassion","honesty","respect","responsibility",
    "courage","justice","love","gratitude",
    "generosity","perserverance","freedom","humility",
    "integrity","loyalty"
]

const professionOptions = [
    {label:"Web3 Explorer",value:"Web3 Explorer"},
    {label:"Web3 Service Provider",value:"Web3 Service Provider"},
    {label:"Web3 Community Leader",value:"Web3 Community Leader"},
    {label:"Web3 Experience Leader",value:"Web3 Experience Leader"},
    {label:"Metaverse Developer",value:"Metaverse Developer"},
]
const socials = [
    {label:"Facebook",value:"Facebook"},
    {label:"Titok",value:"Titok"},
    {label:"Instagram",value:"Instagram"},
    {label:"Linkedin",value:"Linkedin"},
    {label:"Podcasts",value:"Metaverse Developer"},
]

export default function OnboardForm(){

    const [selectedValues,setSelectedValues] = useState(["compassion","justice","love"])

    const handleAddValues = (value:string)=>{
        return ()=>{
            if(selectedValues.includes(value)){
                return setSelectedValues(prev=>prev.filter(item=>item.toLowerCase() !== value.toLowerCase()))
            }
            setSelectedValues(prev=>[...prev,value])
        }
    }

    return (
        <div className="max-w-[1096px] mt-16 mx-auto p-4">
            <form action="">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <InputField
                            label="FIRST NAME"
                            required
                            placeholder="YOUR FIRST NAME"
                        />
                    </div>
                    <div  className="col-span-2 md:col-span-1">
                        <InputField
                            label="LAST NAME"
                            required
                            placeholder="YOUR LAST NAME"
                        />
                    </div>
                   <div  className="col-span-2 md:col-span-1">
                    <InputField
                            label="PRONOUNS"
                            required
                            placeholder="SHE/HER THEY/THEM ETC"
                        />
                   </div>
                   <div  className="col-span-2 md:col-span-1">
                    <InputField
                            label="EMAIL"
                            type="email"
                            required
                            placeholder="YOUR EMAIL ADDRESS"
                        />
                   </div>
                    <div className="col-span-2">
                        <InputField
                            label={"Your social proof to identifies your pronoun".toLowerCase()}
                            required
                            placeholder="Facebook, Instagram, Linkedin, X profile address"
                        />
                    </div>
                    <div className="col-span-2">
                        <InputField
                            label={"Your social proof to identifies your pronoun".toLowerCase()}
                            required
                            placeholder="Facebook, Instagram, Linkedin, X profile address"
                        />
                    </div>
                    <div className="col-span-2">
                        <p className="uppercase text-sm md:text-lg font-mono">Are you interested in exploring creating a livestreaming channel for your personal brand with our decentralized media tools? (<b className="text-sm">for Si Her Co-Active members only</b>)</p>
                        <div className="flex flex-wrap md:flex-nowrap gap-4 justify-between my-7">
                            <RadioInputField
                                checked
                                label="Yes, definitely interested in exploring!"
                            />
                            <RadioInputField
                                label="Maybe interested in exploring. "
                            />
                            <RadioInputField
                                label="Not interested in exploring."
                            />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <p className="uppercase text-sm md:text-lg font-mono">Which values do you most strongly resonate with?</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-7">
                           {values.map((value) => (
                            <CheckBoxField
                                key={value}
                                handleCheck={handleAddValues(value)}
                                checked = {selectedValues.includes(value)}
                                label={value}
                             />
                           ))}
                        </div>
                    </div>
                    <div className="col-span-2">
                        <SelectField
                            label={"How would you describe yourself professionally".toLowerCase()}
                            required
                            options={professionOptions}
                        />
                    </div>
                    <div className="col-span-2">
                        <TextAreaField
                            label={"Please share in a few sentences your intentions for joining Si Her and exploring a collaborative ecosystem of women and non-binary web3 creators.".toLowerCase()}
                            required
                            placeholder="Write your intention of joining here..."
                        />
                    </div>
                    <div className="col-span-2">
                        <InputField
                            label={"To confirm you agree with these terms please write 'I Agree' in the box".toLowerCase()}
                            required
                            placeholder="Write “I AGREE” here"
                        />
                    </div>
                    <div className="col-span-2">
                        <SelectField
                            label={"Please share how you heard about Si Her".toLowerCase()}
                            required
                            options={socials}
                        />
                    </div>
                </div>
                <button type="submit" className="w-full h-12 border rounded-lg font-mono mt-12 md:text-xl border-[#3C1FEF]">Submit Application</button>
            </form>
        </div>
    )
}