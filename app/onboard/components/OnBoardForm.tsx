"use client";

import { InputField, RadioInputField, CheckBoxField, SelectField, TextAreaField } from "./Input"
import { TabValues } from "@/lib/types/interfaces"
import useOnboardForm from "../hooks/useOnboardForm";
import {ConfigProvider, Spin} from "antd"
import Loader from "./Loader";
import { ErrorModal, SuccessModal } from "./FormModal";


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

interface Props{
    memberType:TabValues
}

export default function OnboardForm(props:Props){
    const {memberType} = props

    const {
            handleUpdate,
            newMember,
            handleInput,
            handleSubmit,
            showSuccessModal,
            loading,
            modalOpen,
            error_message,
            closeModal,
        } = useOnboardForm(memberType)

    const selectedValues = newMember.core_values

    const handleAddValues = (value:string)=>{
        return ()=>{
            if(selectedValues.includes(value)){
                const updatedValues = selectedValues.filter(item=>item.toLowerCase() !== value.toLowerCase())
                return handleUpdate({
                    core_values:updatedValues,
                })
            }
            handleUpdate({
                core_values:[...selectedValues,value],
            })
        }
    }

    return (
        <>
        {loading && (<Loader/>)}
        {error_message && modalOpen && (<ErrorModal errorMessage={error_message} closeModal={closeModal}/>)}
        {showSuccessModal && <SuccessModal/>}
        <div className="mt-16 p-4 lg:p-8">
            <form onSubmit={handleSubmit}>
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <InputField
                            label="Your Name"
                            name="firstname"
                            minLength={3}
                            onChange={handleInput}
                            value={newMember.firstname}
                            required
                            placeholder="Your First name"
                        />
                    </div>
                    <div  className="col-span-2 md:col-span-1">
                        <InputField
                            label="Your Social Profile"
                            minLength={3}
                            name="lastname"
                            onChange={handleInput}
                            value={newMember.lastname}
                            required
                            placeholder="Enter your LinkedIn/ X profile URL"
                        />
                    </div>
                   <div  className="col-span-2 md:col-span-1">
                    <InputField
                            label="Pronouns"
                            name="pronouns"
                            minLength={3}
                            onChange={handleInput}
                            value={newMember.pronouns}
                            required
                            placeholder="SHE/HER THEY/THEM ETC"
                        />
                   </div>
                   <div  className="col-span-2 md:col-span-1">
                    <InputField
                            label="Email"
                            type="email"
                            name="email"
                            onChange={handleInput}
                            value={newMember.email}
                            required
                            placeholder="YOUR EMAIL ADDRESS"
                        />
                   </div>
                    <div className="col-span-2">
                        <InputField
                            label={"Your social proof to identifies your pronoun".toLowerCase()}
                            required
                            type="url"
                            name="pronouns_social_proof"
                            value={newMember.pronouns_social_proof}
                            onChange={handleInput}
                            placeholder="Facebook, Instagram, Linkedin, X profile address"
                        />
                    </div>
                    <div className="col-span-2">
                        <p className="text-sm md:text-lg font-mono">Are you interested in exploring creating a livestreaming channel for your personal brand with our decentralized media tools? (<b className="text-sm">for Si Her Co-Active members only</b>)</p>
                        <div className="flex flex-wrap md:flex-nowrap gap-4 justify-between my-7">
                            <RadioInputField
                                checked={newMember.exploring_interests === "Yes"}
                                handleCheck={()=>{handleUpdate({exploring_interests:"Yes"})}}
                                label="Yes, definitely interested in exploring!"
                            />
                            <RadioInputField
                                checked={newMember.exploring_interests === "Maybe"}
                                handleCheck={()=>{handleUpdate({exploring_interests:"Maybe"})}}
                                label="Maybe interested in exploring. "
                            />
                            <RadioInputField
                                checked={newMember.exploring_interests === "No"}
                                handleCheck={()=>{handleUpdate({exploring_interests:"No"})}}
                                label="Not interested in exploring."
                            />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <p className="text-sm md:text-lg font-mono">Which values do you most strongly resonate with?</p>
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
                            name="self_description"
                            onChange={handleInput}
                            value={newMember.self_description}
                            label={"How would you describe yourself professionally".toLowerCase()}
                            required
                            options={professionOptions}
                        />
                    </div>
                    <div className="col-span-2">
                        <TextAreaField
                            name="joining_intentions"
                            minLength={40}
                            onChange={handleInput}
                            value={newMember.joining_intentions}
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
                            name="source_of_information"
                            onChange={handleInput}
                            value={newMember.source_of_information}
                            options={socials}
                        />
                    </div>
                </div>
                <button type="submit" className="w-full h-16 border rounded-full font-mono mt-12 md:text-xl bg-black text-white">Submit Application</button>
            </form>
        </div>
        </>
    )
}