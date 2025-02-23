"use client";
import Link from "next/link";
import useDiversityTrackerForm from "../hooks/useTrackerForm";
import Loader, { ErrorModal, SuccessModal } from "./FormModal";
import {
  SelfIdentityField,
  AgeRangeField,
  EthnicityField,
  DisabalityField,
  SexualOrientationField,
  EqualityScaleField,
  ImprovementField,
  GrantField,
  SuggestionsField,
  ActiveGrantsField,
} from "./FormFields";

export default function DiversityTrackerForm() {
  const {
    formData,
    handleInput,
    handleSubmit,
    handleUpdate,
    modalOpen,
    showSuccessModal,
    closeSuccessModal,
    closeModal,
    loading,
    error_message,
  } = useDiversityTrackerForm();
  return (
    <>
      {loading && <Loader />}
      {error_message && modalOpen && (
        <ErrorModal errorMessage={error_message} closeModal={closeModal} />
      )}
      {showSuccessModal && <SuccessModal closeModal={closeSuccessModal} />}
      <form
        onSubmit={handleSubmit}
        className="mt-10 max-w-7xl mx-auto px-4 pt-4 sm:p-8 pb-64 bg-white "
      >
        <p className="max-w-[726px] sm:text-2xl font-medium mb-8">
          Complete this form to share your demographic data <br /> (completely
          anonymously)
        </p>
        <SelfIdentityField
          value={formData.self_identity}
          setValue={(newValue) =>
            handleUpdate({
              self_identity: newValue,
            })
          }
        />
        <AgeRangeField
          value={formData.age_range}
          setValue={(newValue) =>
            handleUpdate({
              age_range: newValue,
            })
          }
        />
        <EthnicityField
          value={formData.ethnicity}
          setValue={(newValue) =>
            handleUpdate({
              ethnicity: newValue,
            })
          }
        />
        <DisabalityField
          value={formData.disabality}
          setValue={(newValue) =>
            handleUpdate({
              disabality: newValue,
            })
          }
        />
        <SexualOrientationField
          value={formData.sexual_orientation}
          setValue={(newValue) =>
            handleUpdate({
              sexual_orientation: newValue,
            })
          }
        />
        <EqualityScaleField
          value={formData.equity_scale}
          setValue={(newValue) =>
            handleUpdate({
              equity_scale: newValue,
            })
          }
        />

        <SuggestionsField
          value={formData.suggestions}
          onChange={(newValue) =>
            handleUpdate({
              suggestions: newValue,
            })
          }
        />

        <ActiveGrantsField
          value={formData.active_grants_participated}
          onChange={(newValue) =>
            handleUpdate({
              active_grants_participated: newValue,
            })
          }
        />

        {/* <ImprovementField
          value={formData.improvement_suggesstions}
          handleInput={handleInput}
        />
        <GrantField
          handleInput={handleInput}
          grant_provider={formData.grant_provider}
          grant_round={formData.grant_round}
        /> */}
        <button
          type="submit"
          className="bg-black mb-14 text-white py-[14px] mt-6 w-full rounded-3xl font-medium text-base"
        >
          <span className="hidden md:inline-block">Submit</span>
          <span className="md:hidden">Submit Application</span>
        </button>
        <div className="max-w-[782px] w-full mb-16 mx-auto text-center">
          <p>
            By clicking the submit button, I hereby agree to and accept the
            following{" "}
            <Link href={"/terms-and-conditions"}>
              <span className="text-[#CA92EE]">terms and conditions</span>
            </Link>{" "}
            governing my use of the {"Si<3>"} website. I further reaffirm my
            acceptance of the general{" "}
            <Link href={"/terms-and-conditions"}>
              <span className="text-[#CA92EE]">terms and conditions</span>
            </Link>{" "}
            &{" "}
            <Link href={"/privacy-policy"}>
              <span className="text-[#CA92EE]">privacy policy</span>
            </Link>{" "}
            governing my use of any website controlled by {"SI<3>"} and
            understand the use of my data
          </p>
        </div>
      </form>
    </>
  );
}
