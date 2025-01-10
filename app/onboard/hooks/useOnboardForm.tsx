import { NewMemberData, TabValues } from "@/lib/types/interfaces";
import ContentProvider from "@/utils/ContentProvider";
import { ChangeEventHandler, FormEventHandler, useState } from "react";


export default function useOnboardForm(memberType:TabValues){
    const [loading,setLoading] = useState(false);
    const [error_message,setErrorMessage] = useState<string|null>(null)
    const [modalOpen,setModalOpen] = useState(false)
    const [showSuccessModal,setShowSuccessModalOpen] = useState(false)


    const [newMember,setNewMember] = useState<NewMemberData>({
        firstname: "",
        lastname: "",
        memberType,
        joining_intentions: "",
        source_of_information: "Facebook",
        self_description: "",
        core_values: [],
        pronouns_social_proof:"",
        pronouns:"",
        email:"",
        exploring_interests:"Yes",
    });

    const handleInput:ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> = (e)=>{
        setNewMember(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }


    interface UpdateData{
        [key:string]:string | string []
    }

    const handleUpdate = (newData:UpdateData)=>{
        setNewMember(prev=>({
            ...prev,
            ...newData,
        }))
    }

    const handleSubmit:FormEventHandler<HTMLFormElement> = async(e)=>{
        e.preventDefault()
        try {
            setLoading(true)
            const {error,message} = await ContentProvider.createMember(newMember)
            if(error){
                setErrorMessage(message)
                setModalOpen(true)
                return;
            }
            setErrorMessage(null)
            setModalOpen(false)
            setShowSuccessModalOpen(true)
        }finally{
            setLoading(false)
        }
    }

    return {
        loading,
        error_message,
        newMember,
        modalOpen,
        showSuccessModal,
        closeModal:()=>{
            setModalOpen(false)
        },
        handleInput,
        handleUpdate,
        handleSubmit,
    }

}